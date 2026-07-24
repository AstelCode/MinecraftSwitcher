import { Image } from "./Image";
import { Pack } from "./Pack";

export class User {
  private _id!: bigint;
  private _nickname!: string;
  private _password!: string;
  private _email!: string;
  private _isAdmin!: boolean;
  private _image!: Image;
  private _recoveryKey?: string | null;

  public packs: Pack[] = [];

  toPersistence() {
    return {
      nickname: this._nickname,
      password: this._password,
      email: this._email,
      is_admin: this._isAdmin,
      recovery_key: this._recoveryKey,
    };
  }

  fromJson(data: any) {
    this._id = data.id;
    this._nickname = data.nickname;
    this._password = data.password;
    this._email = data.email;

    this._isAdmin = data.is_admin ?? false;
    this._recoveryKey = data.recovery_key;
    if (data.image) {
      this._image = new Image().fromJson(data.image);
    }
    if (data.packs) {
      this.packs = data.packs.map((packData: any) =>
        new Pack().fromJson(packData),
      );
    }

    return this;
  }

  get image() {
    return this._image;
  }
  set image(image: Image) {
    this._image = image;
  }
  get id(): bigint {
    return this._id;
  }
  set id(id: bigint) {
    this._id = id;
  }

  get nickname(): string {
    return this._nickname;
  }
  set nickname(nickname: string) {
    this._nickname = nickname;
  }

  get password(): string {
    return this._password;
  }
  set password(password: string) {
    this._password = password;
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get isAdmin() {
    return this._isAdmin;
  }
  set isAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }

  get recoveryKey() {
    return this._recoveryKey;
  }
  set recoveryKey(recoveryKey: string | null | undefined) {
    this._recoveryKey = recoveryKey;
  }
}
