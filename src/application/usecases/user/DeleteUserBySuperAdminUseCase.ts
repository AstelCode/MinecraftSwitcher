import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteUserBySuperAdminUseCaseDependencies {
  userRepository: Pick<UserRepository, "delete" | "findById">;
  imageRepository: Pick<ImageRepository, "delete">;
  fileRepository: Pick<FileRepository, "deleteUserData">;
  shaderRepository: Pick<ShaderRepository, "listByAuthor">;
  modRepository: Pick<ModRepository, "listByAuthor">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeleteUserBySuperAdminUseCase {
  constructor(private readonly deps: DeleteUserBySuperAdminUseCaseDependencies) {}

  async execute(token: string, userId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    
    // Verify that the token belongs to a superadmin
    const requester = await this.deps.userRepository.findById(payload.id);
    if (!requester || !requester.isSuperadmin) {
      throw new Error("Unauthorized: Requester is not a superadmin.");
    }

    // Verify that the user to be deleted exists
    const userToDelete = await this.deps.userRepository.findById(userId);
    if (!userToDelete) {
      throw new Error("User not found.");
    }

    // Perform the deletion of the user data
    if (userToDelete.image) {
      await this.deps.imageRepository.delete(userToDelete.image.id);
      await this.deps.fileRepository.deleteUserData(userToDelete.id);
    }
    await this.deps.userRepository.delete(userId);
  }
}

