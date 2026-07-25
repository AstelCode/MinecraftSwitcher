import { emailRegex } from "@/domain/validators/regexes";

export class Email {
  email: string;
  constructor(email: string) {
    if (!emailRegex.test(email)) {
      throw new Error("Email format is incorrect");
    }
    this.email = email;
  }
}
