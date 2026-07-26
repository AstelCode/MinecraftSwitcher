import { Shader } from "@/domain/model/Shader";

export interface ShaderRepository {
  save(shader: Shader): Promise<void>;
  update(shader: Shader): Promise<void>;
  findById(id: bigint): Promise<Shader | undefined>;
  delete(id: bigint): Promise<void>;

  listAll(): Promise<Shader[]>;
  listByAuthor(admin_id: bigint): Promise<Shader[]>;
  listByPack(pack_id: bigint): Promise<Shader[]>;
  listByQuery(name: string): Promise<Shader[]>;
}
