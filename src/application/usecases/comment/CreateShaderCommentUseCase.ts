import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { Comment } from "@/domain/model/Comment";
export class CreateShaderCommentUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly commentRepository: CommentRepository,
    public readonly tokenService: TokenService,
  ) {}
  async execute(token: string, text: string, shaderId: bigint): Promise<void> {
    const payload = await this.tokenService.verify(token);
    const user = await this.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const comment = new Comment().forShader(text, shaderId).setAuthor(user);
    await this.commentRepository.save(comment);
  }
}
