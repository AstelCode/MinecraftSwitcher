import { isValidText } from "../validators/validators";
import { Conflict, ConflictData } from "./Conflict";
import { Image, ImageData } from "./Image";
import { ModDependency, ModDependencyData } from "./ModDependency";
import { User, UserData } from "./User";
import { VersionType } from "./VersionType";
import { Comment, CommentData } from "./Comment";

export interface ModData {
  id: bigint;
  name: string;
  description: string | null;
  min_version: number;
  max_version: number;
  url: string;
  weight: number;
  images?: ImageData[];
  author?: UserData;
  modDependencies?: ModDependencyData[];
  conflictsFrom?: ConflictData[];
  versionType: VersionType;
  comments?: CommentData[];
}

export class Mod {
  id!: bigint;
  name!: string;
  description!: string;
  minVersion!: number;
  maxVersion!: number;
  url!: string;
  weight!: number;
  dependencies!: ModDependency[];
  conflicts!: Conflict[];
  images!: Image[];
  author!: User;
  versionType: VersionType = "JAVA";
  comments: Comment[] = [];

  toPersistence() {
    if (!isValidText(this.name)) throw new Error("mod name is empty");
    if (!isValidText(this.url)) throw new Error("mod url is empty");
    if (!this.weight) throw new Error("mod weight is empty or zero");
    if (!this.minVersion) throw new Error("mod minVersion is empty");
    if (!this.maxVersion) throw new Error("mod maxVersion is empty");
    if (!this.author) throw new Error("mod autor is empty");
    return {
      id: this.id,
      name: this.name,
      description: this.description ?? "",
      min_version: this.minVersion,
      max_version: this.maxVersion,
      url: this.url,
      weight: this.weight,
      autorId: this.author.id,
      images: this.images ?? [],
      versionType: this.versionType,
      conflicts: this.conflicts ?? [],
      dependencies: this.dependencies ?? [],
    };
  }
  fromData(data: ModData) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description ?? "";
    this.maxVersion = data.min_version;
    this.minVersion = data.min_version;
    this.url = data.url;
    this.weight = data.weight;
    this.versionType = data.versionType;

    if (data.author) this.author = new User().fromData(data.author);
    if (data.images)
      this.images = data.images.map((item) => new Image().fromData(item));

    if (data.modDependencies) {
      this.dependencies = data.modDependencies.map((item) =>
        new ModDependency().fromData(item),
      );
    }
    if (data.conflictsFrom) {
      this.conflicts = data.conflictsFrom.map((item) =>
        new Conflict().fromData(item),
      );
    }
    if (data.comments) {
      this.comments = data.comments.map((d) => new Comment().fromData(d));
    }
    return this;
  }
  getPersistanceId() {
    if (!this.id) throw new Error("mod id no assigned");
    return this.id;
  }
}
