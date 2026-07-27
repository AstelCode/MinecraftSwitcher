import { ModRepository } from "@/domain/repositories/ModRepository";
import { ModDTO } from "../dto/ModDTO";

export interface ListModsByQueryUseCaseDependencies {
  modRepository: Pick<ModRepository, "listByQuery">;
}

export class ListModsByQueryUseCase {
  constructor(private readonly deps: ListModsByQueryUseCaseDependencies) {}

  async execute(query: string): Promise<ModDTO[]> {
    const data = await this.deps.modRepository.listByQuery(query);

    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
