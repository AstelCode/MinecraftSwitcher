import { Image } from "./Image";
import { User } from "./User";

export class Mod {
  id!: bigint;
  name!: string;
  description!: string;
  minVersion!: number;
  maxVersion!: number;
  url!: string;
  weight!: number;
  dependencyIds!: number[];
  conflictsIds!: number[];
  images!: Image[];
  author!: User;
}
