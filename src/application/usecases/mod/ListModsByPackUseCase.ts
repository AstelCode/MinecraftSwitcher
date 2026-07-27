import { ModRepository } from "@/domain/repositories/ModRepository";
import { ModDTO } from "../dto/ModDTO";

export interface ListModsByPackUseCaseDependencies {
  modRepository: Pick<ModRepository, "listByPack">;
}

export class ListModsByPackUseCase {
  constructor(private readonly deps: ListModsByPackUseCaseDependencies) {}

  async execute(packId: bigint): Promise<ModDTO[]> {
    const data = await this.deps.modRepository.listByPack(packId);

    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
