import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteCommnetUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  commentRepository: Pick<CommentRepository, "deleteByUser">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeleteCommnetUseCase {
  constructor(private readonly deps: DeleteCommnetUseCaseDependencies) {}
  async execute(token: string, commentId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    await this.deps.commentRepository.deleteByUser(commentId, user.id);
  }
}
