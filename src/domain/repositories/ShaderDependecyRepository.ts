import { ShaderDependency } from "@/domain/model/ShaderDependency";

export interface ShaderDependencyRepository {
  save(dependency: ShaderDependency): Promise<void>;
  findById(
    shaderId: bigint,
    modId: bigint,
  ): Promise<ShaderDependency | undefined>;
  delete(shaderId: bigint, modId: bigint): Promise<void>;
  listAll(): Promise<ShaderDependency[]>;
  listByShader(shader_id: bigint): Promise<ShaderDependency[]>;
}
