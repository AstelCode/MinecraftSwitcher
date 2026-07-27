import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { CommentDTO } from "../dto/CommentDTO";

export interface ListCommentByAuthorCommentUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  commentRepository: Pick<CommentRepository, "listByUser">;
  tokenService: Pick<TokenService, "verify">;
}

export class ListCommentByAuthorCommentUseCase {
  constructor(private readonly deps: ListCommentByAuthorCommentUseCaseDependencies) {}
  async execute(token: string): Promise<CommentDTO[]> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const comments = await this.deps.commentRepository.listByUser(user.id);
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
      mod: item.mod
        ? {
            id: item.mod.id.toString(),
            name: item.mod.name,
            imageUrl: item.mod.images[0].src,
          }
        : undefined,
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
