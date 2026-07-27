import { PackRepository } from "@/domain/repositories/PackRepository";
import { PackDTO } from "../dto/PackDTO";

export interface ListPacksByNameUseCaseDependencies {
  packRepository: Pick<PackRepository, "listByName">;
}

export class ListPacksByNameUseCase {
  constructor(private readonly deps: ListPacksByNameUseCaseDependencies) {}

  async execute(name: string): Promise<PackDTO[]> {
    const data = await this.deps.packRepository.listByName(name);
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
