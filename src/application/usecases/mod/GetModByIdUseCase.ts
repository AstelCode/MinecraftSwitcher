import { ModRepository } from "@/domain/repositories/ModRepository";
import { ModDTO } from "../dto/ModDTO";

export interface GetModByIdUseCaseDependencies {
  modRepository: Pick<ModRepository, "findById">;
}

export class GetModByIdUseCase {
  constructor(private readonly deps: GetModByIdUseCaseDependencies) {}

  async execute(id: bigint): Promise<ModDTO | undefined> {
    const item = await this.deps.modRepository.findById(id);

    if (!item) return undefined;

    return {
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    };
  }
}
