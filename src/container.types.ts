import { UserRepository } from "@/domain/repositories/UserRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { PackRepository } from "@/domain/repositories/PackRepository";
import { ConflictRepository } from "@/domain/repositories/ConflictRepository";
import { ModDependencyRepository } from "@/domain/repositories/ModDependecyRepository";
import { ShaderDependencyRepository } from "@/domain/repositories/ShaderDependecyRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";
import { UuidService } from "@/domain/services/RandomService";
import { FavoriteRepository } from "@/domain/repositories/FavoriteRepository";

export interface GlobalContext {
  userRepository: UserRepository;
  modRepository: ModRepository;
  shaderRepository: ShaderRepository;
  packRepository: PackRepository;
  conflictRepository: ConflictRepository;
  modDependencyRepository: ModDependencyRepository;
  shaderDependencyRepository: ShaderDependencyRepository;
  imageRepository: ImageRepository;
  commentRepository: CommentRepository;
  fileRepository: FileRepository;
  hashService: HashService;
  tokenService: TokenService;
  uuidService: UuidService;
  favoriteRepository: FavoriteRepository;
}
