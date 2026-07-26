import { Comment } from "../model/Comment";
export interface CommentRepository {
  save(commment: Comment): Promise<void>;
  update(commment: Comment): Promise<void>;
  updateText(commentId: bigint, text: string): Promise<void>;
  findById(id: bigint): Promise<Comment | undefined>;
  delete(id: bigint): Promise<void>;
  deleteByUser(id: bigint, userId: bigint): Promise<void>;
  listAll(): Promise<Comment[]>;
  listByShader(shader_id: bigint): Promise<Comment[]>;
  listByMod(mod_id: bigint): Promise<Comment[]>;
  listByPack(pack_id: bigint): Promise<Comment[]>;
  listByUser(userId: bigint): Promise<Comment[]>;
}
