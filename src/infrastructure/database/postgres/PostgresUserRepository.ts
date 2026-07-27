import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { prisma } from "./prisma";

export class PostgresUserRepository implements UserRepository {
  async save(user: User): Promise<void> {
    const { nickname, password, email, isAdmin, isSuperadmin, imageId } =
      user.toPersistance();
    const newUser = await prisma.user.create({
      data: {
        nickname,
        password,
        email,
        is_admin: isAdmin,
        is_superadmin: isSuperadmin,
        image: imageId ? { connect: { id: imageId } } : undefined,
      },
    });
    user.id = newUser.id;
  }
  async delete(id: bigint): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
  async update(user: User): Promise<void> {
    const { password, nickname, isAdmin, isSuperadmin, recoveryKey, imageId } =
      user.toPersistance();
    const id = user.getPersistanceId();
    await prisma.user.update({
      where: { id },
      data: {
        password,
        nickname,
        is_admin: isAdmin,
        is_superadmin: isSuperadmin,
        recovery_key: recoveryKey,
        image: imageId ? { connect: { id: imageId } } : undefined,
      },
    });
  }

  async updateImage(userId: bigint, imageId: bigint): Promise<void> {
    await prisma.user.update({
      where: { id: userId },
      data: {
        image: { connect: { id: imageId } },
      },
    });
  }

  async updatePassword(userId: bigint, password: string): Promise<void> {
    await prisma.user.update({
      where: { id: userId },
      data: {
        password,
      },
    });
  }
  async findById(id: bigint): Promise<User | undefined> {
    const data = await prisma.user.findFirst({
      where: { id },
      include: {
        image: true,
      },
    });
    if (!data) return undefined;
    return new User().fromData(data);
  }
  async findByEmail(email: string): Promise<User | undefined> {
    const data = await prisma.user.findFirst({
      where: { email },
      include: {
        image: true,
      },
    });
    if (!data) return undefined;
    return new User().fromData(data);
  }
  async listAll(): Promise<User[]> {
    const data = await prisma.user.findMany({
      include: {
        image: true,
      },
    });
    return data.map((item) => new User().fromData(item));
  }
}
