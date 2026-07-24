import { Comment } from "./Comment";
import { Shader } from "./Shader";
import { Mod } from "./Mod";
import { Image } from "./Image";
import { User } from "./User";

export class Pack {
  private _id!: bigint;
  private _maxVersion!: number;
  private _minVersion!: number;
  private _name!: string;
  private _description!: string;
  private _score!: number;
  private _comments: Comment[] = [];
  private _shaders: Shader[] = [];
  private _mods: Mod[] = [];
  private _images: Image[] = [];
  private _author!: User;

  toPersistence() {
    return {
      name: this._name,
      description: this._description,
      min_version: this._minVersion,
      max_version: this._maxVersion,
      score: this._score,
    };
  }

  fromJson(data: any) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description ?? "";
    this._minVersion = data.min_version;
    this._maxVersion = data.max_version;
    this._score = data.score;

    if (data.autor) this._author = new User().fromJson(data.autor);
    if (data.images)
      this._images = data.images.map((img: any) => new Image().fromJson(img));
    if (data.mods)
      this._mods = data.mods.map((mod: any) => new Mod().fromJson(mod));
    if (data.shaders)
      this._shaders = data.shaders.map((s: any) => new Shader().fromJson(s));
    if (data.comments)
      this._comments = data.comments.map((c: any) => new Comment().fromJson(c));

    return this;
  }

  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get author() {
    return this._author;
  }
  set author(author: User) {
    this._author = author;
  }
  get id(): bigint {
    return this._id;
  }
  set id(id: bigint) {
    this._id = id;
  }
  get maxVersion(): number {
    return this._maxVersion;
  }
  set maxVersion(maxVersion: number) {
    this._maxVersion = maxVersion;
  }
  get minVersion(): number {
    return this._minVersion;
  }
  set minVersion(minVersion: number) {
    this._minVersion = minVersion;
  }
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get score(): number {
    return this._score;
  }
  set score(score: number) {
    this._score = score;
  }
  get comments(): Comment[] {
    return this._comments;
  }
  set comments(comments: Comment[]) {
    this._comments = comments;
  }
  get shaders(): Shader[] {
    return this._shaders;
  }
  set shaders(shaders: Shader[]) {
    this._shaders = shaders;
  }
  get mods(): Mod[] {
    return this._mods;
  }
  set mods(mods: Mod[]) {
    this._mods = mods;
  }
  get images(): Image[] {
    return this._images;
  }
  set images(images: Image[]) {
    this._images = images;
  }
}
