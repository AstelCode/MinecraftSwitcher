import { Conflict } from "@/domain/model/Conflict";
import { Mod } from "../model/Mod";

export interface ConflictRepository {
  save(conflict: Conflict): Promise<void>;
  delete(id: bigint): Promise<void>;
  findById(id: bigint): Promise<Conflict | undefined>;
  listAll(): Promise<Conflict[]>;
  listAllByMod(mod_id: bigint): Promise<Conflict[]>;
}
