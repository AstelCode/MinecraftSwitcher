import { Pack } from "@/domain/model/Pack";

export interface PackRepository {
  findById(id: bigint): Promise<Pack | undefined>;

  save(pack: Pack): Promise<void>;
  update(pack: Pack): Promise<void>;
  delete(id: bigint): Promise<void>;

  listAll(): Promise<Pack[]>;
  listByName(name: string): Promise<Pack[]>;
  listByAdmin(admin_id: bigint): Promise<Pack[]>;
}
