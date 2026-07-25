import { passwordRegex } from "@/domain/validators/regexes";

export class Password {
  password: string;
  constructor(password: string, hashed?: boolean) {
    if (!hashed && passwordRegex.test(password)) {
      throw new Error("Password format is incorrect");
    }
    this.password = password;
  }
}
