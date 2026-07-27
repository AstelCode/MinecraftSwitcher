import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { Comment } from "@/domain/model/Comment";

export interface CreateModCommentUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  commentRepository: Pick<CommentRepository, "save">;
  tokenService: Pick<TokenService, "verify">;
}

export class CreateModCommentUseCase {
  constructor(private readonly deps: CreateModCommentUseCaseDependencies) {}
  async execute(token: string, text: string, modId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const comment = new Comment().forMod(text, modId).setAuthor(user);
    await this.deps.commentRepository.save(comment);
  }
}
