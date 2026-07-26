import { Image } from "@/domain/model/Image";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { prisma } from "./prisma";

export class PostgresImageRepository implements ImageRepository {
  async save(image: Image): Promise<void> {
    const { src, packId, modId, shaderId, basePath } = image.toPersistence();
    const newImage = await prisma.image.create({
      data: {
        src,
        basePath,
        pack: packId ? { connect: { id: packId } } : undefined,
        mod: modId ? { connect: { id: modId } } : undefined,
        shader: shaderId ? { connect: { id: shaderId } } : undefined,
      },
    });
    newImage.id = image.id;
  }
  async update(image: Image): Promise<void> {
    const { src: url } = image.toPersistence();
    const id = image.getPersistanceId();
    await prisma.image.update({
      where: { id },
      data: { url: url },
    });
  }
  async delete(id: bigint): Promise<void> {
    await prisma.image.delete({ where: { id } });
  }
  async findById(id: bigint): Promise<Image | undefined> {
    const data = await prisma.image.findFirst({
      where: { id },
      include: { shader: true, mod: true, pack: true },
    });
    if (!data) return;
    return new Image().fromData(data);
  }
  async listByShader(shader_id: bigint): Promise<Image[]> {
    const data = await prisma.image.findMany({
      where: { shaderId: shader_id },
    });
    return data.map((item) => new Image().fromData(item));
  }
  async listByMod(mod_id: bigint): Promise<Image[]> {
    const data = await prisma.image.findMany({
      where: { modId: mod_id },
    });
    return data.map((item) => new Image().fromData(item));
  }
  async listByPack(pack_id: bigint): Promise<Image[]> {
    const data = await prisma.image.findMany({
      where: { packId: pack_id },
    });
    return data.map((item) => new Image().fromData(item));
  }
  async listAll(): Promise<Image[]> {
    const data = await prisma.image.findMany({});
    return data.map((item) => new Image().fromData(item));
  }
}
