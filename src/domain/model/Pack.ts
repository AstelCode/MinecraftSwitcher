import { Comment } from "./Comment";
import { Shader } from "./Shader";
import { Mod } from "./Mod";
import { Image } from "./Image";
import { User } from "./User";

export class Pack {
  id!: bigint;
  maxVersion!: number;
  minVersion!: number;
  name!: string;
  description!: string;
  score!: number;
  comments: Comment[] = [];
  shaders: Shader[] = [];
  mods: Mod[] = [];
  images: Image[] = [];
  author!: User;
}
