import { ModDTO } from "./ModDTO";
import { PackDTO } from "./PackDTO";
import { ShaderDTO } from "./ShaderDTO";
import { UserDTO } from "./UserDTO";

export interface CommentDTO {
  id: string;
  text: string;
  author?: UserDTO;
  pack?: PackDTO;
  shader?: ShaderDTO;
  mod?: ModDTO;
}
