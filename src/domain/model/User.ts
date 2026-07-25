import { isValidText } from "../validators/validators";
import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";
import { Image } from "./Image";
import { Pack } from "./Pack";

export class User {
  id!: bigint;
  nickname!: string;
  password!: Password;
  email!: Email;
  isAdmin!: boolean;
  image?: Image | null;
  recoveryKey?: string | null;
  packs: Pack[] = [];

  create(email: string, password: string) {
    this.email = new Email(email);
    this.password = new Password(password);
  }
  setId(id: bigint) {
    this.id = id;
  }

  toPersistance() {
    if (isValidText(this.nickname)) throw new Error("nickname is empty");
    return {
      nickname: this.nickname,
      password: this.password,
    };
  }
}
