import { Image } from "@/domain/model/Image";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { prisma } from "@/infrastructure/database/postgres/prisma";

export class PrismaImageRespository implements ImageRepository {
  async save(image: Image): Promise<void> {
    const newImage = await prisma.image.create({
      data: image.toPersistence(),
    });
    image.id = newImage.id;
  }
  async update(image: Image): Promise<void> {
    await prisma.image.update({
      where: {
        id: image.id,
      },
      data: image.toPersistence(),
    });
  }
  async delete(id: bigint): Promise<void> {
    await prisma.image.delete({ where: { id } });
  }
  async findById(id: bigint): Promise<Image | undefined> {
    const data = await prisma.image.findFirst({
      where: {
        id,
      },
    });
    if (data == null) return undefined;

    return new Image().fromJson(data);
  }
  async listByShader(shader_id: bigint): Promise<Image[]> {
    const data = await prisma.image.findMany({
      where: {
        shaderId: shader_id,
      },
    });

    return data.map((item) => new Image().fromJson(item));
  }

  async listByMod(mod_id: bigint): Promise<Image[]> {
    const data = await prisma.image.findMany({
      where: {
        modId: mod_id,
      },
    });
    return data.map((item) => new Image().fromJson(item));
  }

  async listByPack(pack_id: bigint): Promise<Image[]> {
    const data = await prisma.image.findMany({
      where: {
        packId: pack_id,
      },
    });
    return data.map((item) => new Image().fromJson(item));
  }
}
