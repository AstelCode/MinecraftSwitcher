import { ModRepository } from "@/domain/repositories/ModRepository";
import { ModDTO } from "../dto/ModDTO";

export interface GetModUseCaseDependencies {
  modRepository: Pick<ModRepository, "findById">;
}

export class GetModUseCase {
  constructor(private readonly deps: GetModUseCaseDependencies) {}

  async execute(id: string): Promise<ModDTO> {
    const mod = await this.deps.modRepository.findById(BigInt(id));
    if (!mod) throw new Error("Mod not found");
    return {
      id: mod.id.toString(),
      name: mod.name,
      imageUrl: mod.principalImage?.src,
    };
  }
}
