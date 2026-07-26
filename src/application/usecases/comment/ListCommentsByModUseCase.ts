import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { CommentDTO } from "../dto/CommentDTO";
export class ListCommentByModCommentUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly commentRepository: CommentRepository,
    public readonly tokenService: TokenService,
  ) {}
  async execute(modId: bigint): Promise<CommentDTO[]> {
    const comments = await this.commentRepository.listByMod(modId);
    return comments.map((item) => ({
      id: item.id.toString(),
      text: item.text,
      mod: item.mod
        ? {
            id: item.mod.id.toString(),
            name: item.mod.name,
            imageUrl: item.mod.images[0].src,
          }
        : undefined,
    }));
  }
}
