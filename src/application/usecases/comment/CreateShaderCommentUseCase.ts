import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { Comment } from "@/domain/model/Comment";

export interface CreateShaderCommentUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  commentRepository: Pick<CommentRepository, "save">;
  tokenService: Pick<TokenService, "verify">;
}

export class CreateShaderCommentUseCase {
  constructor(private readonly deps: CreateShaderCommentUseCaseDependencies) {}
  async execute(token: string, text: string, shaderId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const comment = new Comment().forShader(text, shaderId).setAuthor(user);
    await this.deps.commentRepository.save(comment);
  }
}
