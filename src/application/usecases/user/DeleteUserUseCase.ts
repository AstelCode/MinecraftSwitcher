import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteUserUseCaseDependencies {
  userRepository: Pick<UserRepository, "delete" | "findById">;
  imageRepository: Pick<ImageRepository, "delete">;
  fileRepository: Pick<FileRepository, "deleteUserData">;
  shaderRepository: Pick<ShaderRepository, "listByAuthor">;
  modRepository: Pick<ModRepository, "listByAuthor">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeleteUserUseCase {
  constructor(private readonly deps: DeleteUserUseCaseDependencies) {}

  async execute(token: string): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    if (user.image) {
      await this.deps.imageRepository.delete(user.image.id);
      await this.deps.fileRepository.deleteUserData(user.id);
    }
    await this.deps.userRepository.delete(payload.id);
  }
}

