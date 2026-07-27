import { Favorite } from "@/domain/model/Favorite";
import { FavoriteRepository } from "@/domain/repositories/FavoriteRepository";
import { prisma } from "./prisma";

const includeAll = {
  mod: { include: { principalImage: true, author: true } },
  pack: { include: { principalImage: true, author: true } },
  shader: { include: { principalImage: true, author: true } },
} as const;

export class PostgresFavoriteRepository implements FavoriteRepository {
  async save(favorite: Favorite): Promise<void> {
    const { userId, modId, packId, shaderId } = favorite.toPersistence();
    const created = await prisma.favorite.create({
      data: {
        user: { connect: { id: userId } },
        mod: modId ? { connect: { id: modId } } : undefined,
        pack: packId ? { connect: { id: packId } } : undefined,
        shader: shaderId ? { connect: { id: shaderId } } : undefined,
      },
    });
    favorite.id = created.id;
  }

  async delete(id: bigint): Promise<void> {
    await prisma.favorite.delete({ where: { id } });
  }

  async findById(id: bigint): Promise<Favorite | undefined> {
    const data = await prisma.favorite.findFirst({
      where: { id },
      include: includeAll,
    });
    if (!data) return undefined;
    return new Favorite().fromData(data as any);
  }

  async findByUserAndMod(userId: bigint, modId: bigint): Promise<Favorite | undefined> {
    const data = await prisma.favorite.findFirst({ where: { userId, modId } });
    if (!data) return undefined;
    return new Favorite().fromData(data as any);
  }

  async findByUserAndPack(userId: bigint, packId: bigint): Promise<Favorite | undefined> {
    const data = await prisma.favorite.findFirst({ where: { userId, packId } });
    if (!data) return undefined;
    return new Favorite().fromData(data as any);
  }

  async findByUserAndShader(userId: bigint, shaderId: bigint): Promise<Favorite | undefined> {
    const data = await prisma.favorite.findFirst({ where: { userId, shaderId } });
    if (!data) return undefined;
    return new Favorite().fromData(data as any);
  }

  async listByUser(userId: bigint): Promise<Favorite[]> {
    const data = await prisma.favorite.findMany({
      where: { userId },
      include: includeAll,
      orderBy: { createdAt: "desc" },
    });
    return data.map((item) => new Favorite().fromData(item as any));
  }

  async listModFavoritesByUser(userId: bigint): Promise<Favorite[]> {
    const data = await prisma.favorite.findMany({
      where: { userId, modId: { not: null } },
      include: { mod: { include: { principalImage: true, author: true } } },
      orderBy: { createdAt: "desc" },
    });
    return data.map((item) => new Favorite().fromData(item as any));
  }

  async listPackFavoritesByUser(userId: bigint): Promise<Favorite[]> {
    const data = await prisma.favorite.findMany({
      where: { userId, packId: { not: null } },
      include: { pack: { include: { principalImage: true, author: true } } },
      orderBy: { createdAt: "desc" },
    });
    return data.map((item) => new Favorite().fromData(item as any));
  }

  async listShaderFavoritesByUser(userId: bigint): Promise<Favorite[]> {
    const data = await prisma.favorite.findMany({
      where: { userId, shaderId: { not: null } },
      include: { shader: { include: { principalImage: true, author: true } } },
      orderBy: { createdAt: "desc" },
    });
    return data.map((item) => new Favorite().fromData(item as any));
  }
}
