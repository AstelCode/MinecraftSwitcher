import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { CommentDTO } from "../dto/CommentDTO";
export class ListCommentByShaderCommentUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly commentRepository: CommentRepository,
    public readonly tokenService: TokenService,
  ) {}
  async execute(shaderId: bigint): Promise<CommentDTO[]> {
    const comments = await this.commentRepository.listByShader(shaderId);
    return comments.map((item) => ({
      id: item.id.toString(),
      text: item.text,
      shader: item.shader
        ? {
            id: item.shader.id.toString(),
            name: item.shader.name,
            imageUrl: item.shader.images[0].src,
          }
        : undefined,
    }));
  }
}
