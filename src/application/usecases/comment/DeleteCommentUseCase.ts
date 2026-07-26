import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export class DeleteCommnetUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly commentRepository: CommentRepository,
    public readonly tokenService: TokenService,
  ) {}
  async execute(token: string, commentId: bigint): Promise<void> {
    const payload = await this.tokenService.verify(token);
    const user = await this.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    await this.commentRepository.deleteByUser(commentId, user.id);
  }
}
