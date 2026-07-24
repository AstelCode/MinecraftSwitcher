import { Image } from "./Image";
import { User } from "./User";

export class Mod {
  private _id!: bigint;
  private _name!: string;
  private _description!: string;
  private _minVersion!: number;
  private _maxVersion!: number;
  private _url!: string;
  private _weight!: number;
  private _dependencyIds!: number[];
  private _conflictsIds!: number[];
  private _images!: Image[];
  private _author!: User;

  toPersistence() {
    return {
      name: this._name,
      description: this._description,
      min_version: this._minVersion,
      max_version: this._maxVersion,
      url: this._url,
      weight: this._weight,
    };
  }

  fromJson(data: any) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description ?? "";
    this._minVersion = data.min_version;
    this._maxVersion = data.max_version;
    this._url = data.url;
    this._weight = data.weight;

    // Hidratación de relaciones si vienen incluidas desde Prisma
    if (data.autor) this._author = new User().fromJson(data.autor);
    if (data.images)
      this._images = data.images.map((img: any) => new Image().fromJson(img));
    if (data.modDependencies)
      this._dependencyIds = data.modDependencies.map((dep: any) =>
        Number(dep.dependencyId),
      );
    if (data.conflictsFrom)
      this._conflictsIds = data.conflictsFrom.map((c: any) =>
        Number(c.conflictModId),
      );

    return this;
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
  set id(value: bigint) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get minVersion(): number {
    return this._minVersion;
  }
  set minVersion(value: number) {
    this._minVersion = value;
  }
  get maxVersion(): number {
    return this._maxVersion;
  }
  set maxVersion(value: number) {
    this._maxVersion = value;
  }
  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
  }
  get weight(): number {
    return this._weight;
  }
  set weight(value: number) {
    this._weight = value;
  }
  get dependencyIds(): number[] {
    return this._dependencyIds;
  }
  set dependencyIds(value: number[]) {
    this._dependencyIds = value;
  }
  get conflictsIds(): number[] {
    return this._conflictsIds;
  }
  set conflictsIds(value: number[]) {
    this._conflictsIds = value;
  }
  get images(): Image[] {
    return this._images;
  }
  set images(value: Image[]) {
    this._images = value;
  }
}
