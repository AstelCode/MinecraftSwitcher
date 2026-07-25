import { User } from "./User";

export class Comment {
  id!: bigint;
  text!: string;
  user!: User;
}
