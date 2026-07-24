import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { prisma } from "@/infrastructure/database/postgres/prisma";

export class SupabaseAdminRepository implements UserRepository {
  async save(user: User): Promise<void> {
    const newUser = await prisma.user.create({
      data: {
        ...user.toPersistence(),
        image: { create: user.image.toPersistence() },
      },
      include: { image: true },
    });
    user.id = newUser.id;
    if (user.image && newUser.image) {
      user.image.id = newUser.image.id;
    }
  }

  async delete(id: bigint): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
  async update(user: User): Promise<void> {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...user.toPersistence(),
        image: {
          update: user.image.toPersistence(),
        },
      },
    });
  }

  async findById(id: bigint): Promise<User | undefined> {
    const userData = await prisma.user.findUnique({
      where: { id },
      include: { image: true },
    });

    if (userData == null) return undefined;

    const user = new User();
    user.fromJson(userData);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const userData = await prisma.user.findUnique({
      where: { email },
      include: { image: true },
    });

    if (userData == null) return undefined;

    const user = new User();
    user.fromJson(userData);
    return user;
  }

  async listAll(): Promise<User[]> {
    const usersData = await prisma.user.findMany({
      include: { image: true },
    });

    return usersData.map((item) => new User().fromJson(item));
  }
}
