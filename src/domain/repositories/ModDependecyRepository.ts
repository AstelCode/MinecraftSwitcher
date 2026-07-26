import { ModDependency } from "@/domain/model/ModDependency";

export interface ModDependencyRepository {
  save(dependency: ModDependency): Promise<void>;
  findById(
    modId: bigint,
    dependencyId: bigint,
  ): Promise<ModDependency | undefined>;
  delete(modId: bigint, dependencyId: bigint): Promise<void>;
  listAll(): Promise<ModDependency[]>;
  listByMod(mod_id: bigint): Promise<ModDependency[]>;
}
