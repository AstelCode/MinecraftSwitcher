import { PackRepository } from "@/domain/repositories/PackRepository";
import { PackDTO } from "../dto/PackDTO";

export interface GetPackUseCaseDependencies {
  packRepository: Pick<PackRepository, "findById">;
}

export class GetPackUseCase {
  constructor(private readonly deps: GetPackUseCaseDependencies) {}

  async execute(id: string): Promise<PackDTO> {
    const pack = await this.deps.packRepository.findById(BigInt(id));
    if (!pack) throw new Error("Pack not found");
    return {
      id: pack.id.toString(),
      name: pack.name,
      imageUrl: pack.principalImage?.src,
    };
  }
}
