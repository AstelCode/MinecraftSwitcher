import { randomNickname } from "../utils/randomNickname";
import { isValidText } from "../validators/validators";
import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";
import { CommentData, Comment } from "./Comment";
import { Image, ImageData } from "./Image";
import { Pack } from "./Pack";

export interface UserData {
  id: bigint;
  nickname: string;
  email: string;
  password: string;
  is_admin: boolean;
  image?: ImageData | null;
  recoveryKey?: string | null;
  comments?: CommentData[];
}

export class User {
  id!: bigint;
  nickname!: string;
  password!: Password;
  email!: Email;
  isAdmin: boolean = false;
  image?: Image | null;
  recoveryKey?: string | null;
  packs: Pack[] = [];
  comments?: Comment[];

  create(email: string, password: string) {
    this.email = new Email(email);
    this.password = new Password(password);
    this.password.validate();
    this.nickname = randomNickname();
    return this;
  }
  setHashedPassword(password: string) {
    this.password.password = password;
  }

  setImage(image: Image) {
    this.image = image;
    return this;
  }

  setIsAdmin(value: boolean) {
    this.isAdmin = value;
    return this;
  }

  setId(id: bigint) {
    this.id = id;
    return this;
  }

  fromData(data: UserData) {
    this.id = data.id;
    this.password = new Password(data.password);
    this.email = new Email(data.email);
    this.isAdmin = data.is_admin;
    this.nickname = data.nickname;
    this.recoveryKey = data.recoveryKey;
    if (data.image) {
      this.image = new Image().fromData({
        id: data.image.id,
        src: data.image.src,
        basePath: data.image.basePath,
      });
    }
    if (data.comments) {
      this.comments = data.comments.map((d) => new Comment().fromData(d));
    }
    return this;
  }

  toPersistance() {
    if (!isValidText(this.nickname)) throw new Error("user nickname is empty");
    if (!isValidText(this.password?.password))
      throw new Error("user password is empty");
    if (!isValidText(this.email?.email)) throw new Error("user email is empty");

    return {
      nickname: this.nickname,
      password: this.password?.password,
      email: this.email?.email,
      isAdmin: this.isAdmin,
      recoveryKey: this.recoveryKey,
      imageId: this.image?.id,
    };
  }
  getPersistanceId() {
    if (!this.id) throw new Error("user id no assigned");
    return this.id;
  }
}
