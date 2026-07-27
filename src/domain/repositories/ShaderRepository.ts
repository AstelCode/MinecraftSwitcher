import { Shader } from "@/domain/model/Shader";

export interface ShaderRepository {
  save(shader: Shader): Promise<void>;
  update(shader: Shader): Promise<void>;
  updateSrc(shaderId: bigint, url: string): Promise<void>;
  addImage(shaderId: bigint, imageId: bigint): Promise<void>;
  setPrincipalImage(shaderId: bigint, imageId: bigint): Promise<void>;

  findById(id: bigint): Promise<Shader | undefined>;
  delete(id: bigint): Promise<void>;
  deleteByAuthor(id: bigint, authorId: bigint): Promise<void>;
  listAll(): Promise<Shader[]>;
  listByAuthor(admin_id: bigint): Promise<Shader[]>;
  listByPack(pack_id: bigint): Promise<Shader[]>;
  listByQuery(name: string): Promise<Shader[]>;
  assignAuthor(id: bigint, authorId: bigint): Promise<void>;
}
