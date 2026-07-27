import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { CommentDTO } from "../dto/CommentDTO";

export interface GetCommentUseCaseDependencies {
  commentRepository: Pick<CommentRepository, "findById">;
}

export class GetCommentUseCase {
  constructor(private readonly deps: GetCommentUseCaseDependencies) {}

  async execute(id: string): Promise<CommentDTO> {
    const comment = await this.deps.commentRepository.findById(BigInt(id));
    if (!comment) throw new Error("Comment not found");
    return {
      id: comment.id.toString(),
      text: comment.text,
      author: comment.author
        ? {
            id: comment.author.id.toString(),
            nickname: comment.author.nickname,
            imageUrl: comment.author.image?.src,
            isAdmin: comment.author.isAdmin,
          }
        : undefined,
      pack: comment.pack
        ? {
            id: comment.pack.id.toString(),
            name: comment.pack.name,
            imageUrl: comment.pack.principalImage?.src,
          }
        : undefined,
      shader: comment.shader
        ? {
            id: comment.shader.id.toString(),
            name: comment.shader.name,
            imageUrl: comment.shader.principalImage?.src,
          }
        : undefined,
      mod: comment.mod
        ? {
            id: comment.mod.id.toString(),
            name: comment.mod.name,
            imageUrl: comment.mod.principalImage?.src,
          }
        : undefined,
    };
  }
}
