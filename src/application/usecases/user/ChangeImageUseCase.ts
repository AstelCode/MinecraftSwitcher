import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { Image } from "@/domain/model/Image";

export class ChangeImageUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly tokenService: TokenService,
    public readonly imageRepository: ImageRepository,
    public readonly fileRepository: FileRepository,
  ) {}
  async execute(token: string, file: File): Promise<void> {
    const payload = await this.tokenService.verify(token);
    const user = await this.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");

    const oldImage = user.image;

    // const extension = path.extname(file.name);
    // const name = `${user.id}${extension}`;
    // const filePath = "ProfilesIcons";
    let filePath;
    try {
      filePath = await this.fileRepository.saveProfileImage(
        user.id.toString(),
        file,
      );
      try {
        const image = new Image();
        image.src = filePath;
        image.basePath = this.fileRepository.getBaseUrl();
        await this.imageRepository.save(image);
        await this.userRepository.updateImage(user.id, image.id);
      } catch (error) {
        await this.fileRepository.deleteProfileImage(user.id.toString());
        throw error;
      }
      if (oldImage) {
        await this.fileRepository.deleteProfileImage(filePath);
        await this.imageRepository.delete(oldImage.id);
      }
    } catch (error) {
      throw error;
    }
  }
}
