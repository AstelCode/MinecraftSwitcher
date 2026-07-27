import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { CommentDTO } from "../dto/CommentDTO";

export interface ListCommentByShaderCommentUseCaseDependencies {
  commentRepository: Pick<CommentRepository, "listByShader">;
}

export class ListCommentByShaderCommentUseCase {
  constructor(private readonly deps: ListCommentByShaderCommentUseCaseDependencies) {}
  async execute(shaderId: bigint): Promise<CommentDTO[]> {
    const comments = await this.deps.commentRepository.listByShader(shaderId);
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
