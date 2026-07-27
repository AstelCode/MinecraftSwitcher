import { ModRepository } from "@/domain/repositories/ModRepository";
import { ModDTO } from "../dto/ModDTO";

export interface ListAllModsUseCaseDependencies {
  modRepository: Pick<ModRepository, "listAll">;
}

export class ListAllModsUseCase {
  constructor(private readonly deps: ListAllModsUseCaseDependencies) {}

  async execute(): Promise<ModDTO[]> {
    const data = await this.deps.modRepository.listAll();

    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
