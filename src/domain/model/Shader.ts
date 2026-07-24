import { Image } from "./Image";
import { User } from "./User";

export class Shader {
  private _id!: bigint;
  private _name!: string;
  private _description!: string;
  private _url!: string;
  private _weight!: number;
  private _images: Image[] = [];
  private _author!: User;
  private _score!: number;

  toPersistence() {
    return {
      name: this._name,
      description: this._description,
      url: this._url,
      weight: this._weight,
      score: this.score,
    };
  }
  fromJson(data: any) {
    this._name = data.name;
    this._description = data.description ?? "";
    this._url = data.url;
    this._weight = data.weight;
    this._score = data.score;
    return this;
  }

  get score() {
    return this._score;
  }
  set score(score: number) {
    this._score = score;
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

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get url(): string {
    return this._url;
  }

  set url(url: string) {
    this._url = url;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(weight: number) {
    this._weight = weight;
  }

  get images(): Image[] {
    return this._images;
  }

  set images(images: Image[]) {
    this._images = images;
  }
}
