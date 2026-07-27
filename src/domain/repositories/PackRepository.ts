import { Pack } from "@/domain/model/Pack";

export interface PackRepository {
  findById(id: bigint): Promise<Pack | undefined>;

  save(pack: Pack): Promise<void>;
  update(pack: Pack): Promise<void>;
  delete(id: bigint): Promise<void>;

  addImage(packId: bigint, imageId: bigint): Promise<void>;
  setPrincipalImage(packId: bigint, imageId: bigint): Promise<void>;
  addMod(packId: bigint, modId: bigint): Promise<void>;
  addShader(packId: bigint, shaderId: bigint): Promise<void>;
  removeMod(packId: bigint, modId: bigint): Promise<void>;
  removeShader(packId: bigint, shaderId: bigint): Promise<void>;

  listAll(): Promise<Pack[]>;
  listByName(name: string): Promise<Pack[]>;
  listByAdmin(admin_id: bigint): Promise<Pack[]>;
  assignAuthor(id: bigint, authorId: bigint): Promise<void>;
}
