import { Image } from "@/domain/model/Image";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { prisma } from "@/infrastructure/database/postgres/prisma";

export class PrismaImageRespository implements ImageRepository {
  async save(image: Image): Promise<void> {
    const data = image.toPersistence();

    const newImage = await prisma.image.create({
      data,
    });

    image.id = newImage.id;
  }
  async update(image: Image): Promise<void> {
    const { url } = image.toPersistence();
    await prisma.image.update({
      where: {
        id: image.id,
      },
      data: { url },
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
    return new Image().create(data.url).setId(data.id);
  }
  async listByShader(shader_id: bigint): Promise<Image[]> {
    const data = await prisma.image.findMany({
      where: {
        shaderId: shader_id,
      },
    });
    return data.map((item) => new Image().create(item.url).setId(item.id));
  }

  async listByMod(mod_id: bigint): Promise<Image[]> {
    const data = await prisma.image.findMany({
      where: {
        modId: mod_id,
      },
    });
    return data.map((item) => new Image().create(item.url).setId(item.id));
  }

  async listByPack(pack_id: bigint): Promise<Image[]> {
    const data = await prisma.image.findMany({
      where: {
        packId: pack_id,
      },
    });
    return data.map((item) => new Image().create(item.url).setId(item.id));
  }
}
