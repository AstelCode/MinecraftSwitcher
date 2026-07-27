import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { CommentDTO } from "../dto/CommentDTO";

export interface ListCommentByPackCommentUseCaseDependencies {
  commentRepository: Pick<CommentRepository, "listByPack">;
}

export class ListCommentByPackCommentUseCase {
  constructor(private readonly deps: ListCommentByPackCommentUseCaseDependencies) {}
  async execute(packId: bigint): Promise<CommentDTO[]> {
    const comments = await this.deps.commentRepository.listByPack(packId);
    return comments.map((item) => ({
      id: item.id.toString(),
      text: item.text,
      pack: item.pack
        ? {
            id: item.pack.id.toString(),
            name: item.pack.name,
            imageUrl: item.pack.images[0].src,
          }
        : undefined,
    }));
  }
}
