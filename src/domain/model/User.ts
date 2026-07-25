import { emailRegex } from "@/utils/regexes";
import { Image } from "./Image";
import { Pack } from "./Pack";

export class User {
  private _id!: bigint;
  private _nickname!: string;
  private _password!: string;
  private _email!: string;
  private _isAdmin!: boolean;
  private _image?: Image | null;
  private _recoveryKey?: string | null;

  public packs: Pack[] = [];

  fromCredentials(email: string, password: string) {
    this.password = password;
    this.email = email;
  }

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
    this.id = data.id;
    this.nickname = data.nickname;
    this.password = data.password;
    this.email = data.email;

    this.isAdmin = data.is_admin ?? false;
    this.recoveryKey = data.recovery_key;
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
  set image(image: Image | null | undefined) {
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
    if (!emailRegex.test(email)) {
      throw new Error("Email format is invalid");
    }
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
