import { passwordRegex } from "@/domain/validators/regexes";

export class Password {
  password: string;
  constructor(password: string) {
    this.password = password;
  }

  validate() {
    if (!passwordRegex.test(this.password)) {
      throw new Error("Password format is incorrect");
    }
  }
}
