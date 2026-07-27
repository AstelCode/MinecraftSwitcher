import { Mod } from "@/domain/model/Mod";
export interface ModRepository {
  save(mod: Mod): Promise<void>;
  update(mod: Mod): Promise<void>;
  findById(id: bigint): Promise<Mod | undefined>;
  delete(id: bigint): Promise<void>;
  updateSrc(modId: bigint, url: string): Promise<void>;
  addImage(modId: bigint, imageId: bigint): Promise<void>;
  setPrincipalImage(modId: bigint, imageId: bigint): Promise<void>;

  listByAuthor(admin_id: bigint): Promise<Mod[]>;
  listByPack(pack_id: bigint): Promise<Mod[]>;
  listByQuery(name: string): Promise<Mod[]>;
  listAll(): Promise<Mod[]>;
  assignAuthor(id: bigint, authorId: bigint): Promise<void>;
}
