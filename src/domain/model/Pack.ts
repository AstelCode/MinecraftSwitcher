import { Comment, CommentData } from "./Comment";
import { Shader } from "./Shader";
import { Mod } from "./Mod";
import { Image, ImageData } from "./Image";
import { User, UserData } from "./User";
import { VersionType } from "./VersionType";
import { isValidText } from "../validators/validators";

export interface PackData {
  id: bigint;
  max_version: number;
  min_version: number;
  name: string;
  description: string | null;
  versionType: VersionType;
  author?: UserData;
  comments?: CommentData[];
  principalImage?: ImageData | null;
}

export class Pack {
  id!: bigint;
  maxVersion!: number;
  minVersion!: number;
  name!: string;
  description!: string | null;
  comments: Comment[] = [];
  shaders: Shader[] = [];
  mods: Mod[] = [];
  images: Image[] = [];
  author!: User;
  versionType: VersionType = "JAVA";
  principalImage?: Image;

  fromData(data: PackData) {
    this.id = data.id;
    this.maxVersion = data.max_version;
    this.minVersion = data.min_version;
    this.name = data.name;
    this.description = data.description;
    this.versionType = data.versionType;

    if (data.author) {
      this.author = new User().fromData(data.author);
    }
    if (data.comments) {
      this.comments = data.comments.map((d) => new Comment().fromData(d));
    }
    if (data.principalImage) {
      this.principalImage = new Image().fromData(data.principalImage);
    }
    return this;
  }

  toPersistance() {
    if (!isValidText(this.name)) throw new Error("pack name is empty");
    if (!this.author) throw new Error("pack author not assigned");
    if (!this.minVersion) throw new Error("pack minVersion is empty");
    if (!this.maxVersion) throw new Error("pack maxVersion is empty");

    return {
      max_version: this.maxVersion,
      min_version: this.minVersion,
      versionType: this.versionType,
      name: this.name,
      description: this.description ?? "",
      authorId: this.author.id,
      images: this.images,
      shaders: this.shaders,
      mods: this.mods,
      principalImage: this.principalImage?.id,
    };
  }
  getPersistanceId() {
    if (!this.id) throw new Error("pack id no assigned");
    return this.id;
  }
}
