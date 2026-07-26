import { isValidText } from "../validators/validators";
import { Conflict, ConflictData } from "./Conflict";
import { Image, ImageData } from "./Image";
import { ShaderDependency, ShaderDependencyData } from "./ShaderDependency";
import { User, UserData } from "./User";
import { VersionType } from "./VersionType";
import { Comment, CommentData } from "./Comment";

export interface ShaderData {
  id: bigint;
  name: string;
  description: string | null;
  weight: number;
  versionType: VersionType;
  src: string;
  images?: ImageData[];
  author?: UserData;
  shaderDependencies?: ShaderDependencyData[];
  conflictsFrom?: ConflictData[];
  comments?: CommentData[];
  principalImage?: ImageData | null;
}

export class Shader {
  id!: bigint;
  name!: string;
  description!: string;
  src!: string;
  weight!: number;
  images: Image[] = [];
  author!: User;
  versionType: VersionType = "JAVA";
  conflicts: Conflict[] = [];
  shaderDependencies: ShaderDependency[] = [];
  comments: Comment[] = [];
  principalImage?: Image;

  toPersistence() {
    if (!isValidText(this.name)) throw new Error("shader name is empty");

    if (
      this.description !== null &&
      this.description !== undefined &&
      !isValidText(this.description)
    ) {
      throw new Error("shader description is invalid");
    }

    if (!isValidText(this.src)) throw new Error("shader url is empty");
    if (!this.weight) throw new Error("shader weight is empty or zero");
    if (!this.author) throw new Error("shader author is empty");

    return {
      id: this.id,
      name: this.name,
      description: this.description ?? "",
      src: this.src,
      weight: this.weight,
      authorId: this.author.id,
      images: this.images ?? [],
      versionType: this.versionType,
      conflicts: this.conflicts ?? [],
      shaderDependencies: this.shaderDependencies ?? [],
      principalImage: this.principalImage?.id,
    };
  }

  fromData(data: ShaderData) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description ?? "";
    this.src = data.src;
    this.weight = data.weight;
    this.versionType = data.versionType;

    if (data.author) {
      this.author = new User();
      this.author.fromData(data.author);
    }

    if (data.images) {
      this.images = data.images.map((item) => new Image().fromData(item));
    }

    if (data.shaderDependencies) {
      this.shaderDependencies = data.shaderDependencies.map((item) =>
        new ShaderDependency().fromData(item),
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
    if (data.principalImage) {
      this.principalImage = new Image().fromData(data.principalImage);
    }
    return this;
  }
  getPersistanceId() {
    if (!this.id) throw new Error("shader id no assigned");
    return this.id;
  }
}
