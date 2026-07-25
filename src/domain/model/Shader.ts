import { Image } from "./Image";
import { User } from "./User";

export class Shader {
  id!: bigint;
  name!: string;
  description!: string;
  url!: string;
  weight!: number;
  images: Image[] = [];
  author!: User;
  score!: number;
}
