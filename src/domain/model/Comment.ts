import { User } from "./User";

export class Comment {
  private _id!: bigint;
  private _text!: string;
  private _user!: User;

  toPersistence() {
    return {
      text: this._text,
    };
  }

  fromJson(data: any) {
    this._id = data.id;
    this._text = data.text;

    if (data.autor) {
      this._user = new User().fromJson(data.autor);
    }

    return this;
  }

  get id() {
    return this._id;
  }
  set id(id: bigint) {
    this._id = id;
  }
  get text() {
    return this._text;
  }
  set text(text: string) {
    this._text = text;
  }
  get user() {
    return this._user;
  }
  set user(user: User) {
    this._user = user;
  }
}
