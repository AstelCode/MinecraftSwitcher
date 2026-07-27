import { PackRepository } from "@/domain/repositories/PackRepository";
import { PackDTO } from "../dto/PackDTO";

export interface ListPacksUseCaseDependencies {
  packRepository: Pick<PackRepository, "listAll">;
}

export class ListPacksUseCase {
  constructor(private readonly deps: ListPacksUseCaseDependencies) {}

  async execute(): Promise<PackDTO[]> {
    const data = await this.deps.packRepository.listAll();
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
