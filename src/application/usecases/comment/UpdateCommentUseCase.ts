import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface UpdateCommentUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  commentRepository: Pick<CommentRepository, "findById" | "updateText">;
  tokenService: Pick<TokenService, "verify">;
}

export class UpdateCommentUseCase {
  constructor(private readonly deps: UpdateCommentUseCaseDependencies) {}
  async execute(token: string, text: string, commentId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const comment = await this.deps.commentRepository.findById(commentId);
    if (!comment) throw new Error("Comment not  found.");
    if (comment.author?.id != payload.id)
      throw new Error("Unauthorized operation");
    comment.text = text;
    await this.deps.commentRepository.updateText(comment.id, comment.text);
  }
}
