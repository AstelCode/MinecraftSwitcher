import { Mod } from "@/domain/model/Mod";
export interface ModRepository {
  save(mod: Mod): Promise<void>;
  update(mod: Mod): Promise<void>;
  findById(id: bigint): Promise<Mod | undefined>;
  listByPack(pack_id: bigint): Promise<Mod[]>;
  delete(id: bigint): Promise<void>;
  listAll(): Promise<Mod[]>;
}
