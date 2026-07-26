import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export class UpdateCommentUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly commentRepository: CommentRepository,
    public readonly tokenService: TokenService,
  ) {}
  async execute(token: string, text: string, commentId: bigint): Promise<void> {
    const payload = await this.tokenService.verify(token);
    const user = await this.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const comment = await this.commentRepository.findById(commentId);
    if (!comment) throw new Error("Comment not  found.");
    if (comment.author?.id != payload.id)
      throw new Error("Unauthorized operation");
    comment.text = text;
    await this.commentRepository.updateText(comment.id, comment.text);
  }
}
