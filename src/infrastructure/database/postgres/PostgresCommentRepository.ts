import { Comment } from "@/domain/model/Comment";
import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { prisma } from "./prisma";

export class PostgresCommentRepository implements CommentRepository {
  async updateText(commentId: bigint, text: string): Promise<void> {
    await prisma.comment.update({
      where: { id: commentId },
      data: { text },
    });
  }
  async save(commment: Comment): Promise<void> {
    const { text, authorId, packId, shaderId, modId } =
      commment.toPersistance();
    const newComment = await prisma.comment.create({
      data: {
        text,
        author: { connect: { id: authorId } },
        pack: packId ? { connect: { id: packId } } : undefined,
        shader: shaderId ? { connect: { id: shaderId } } : undefined,
        mod: modId ? { connect: { id: modId } } : undefined,
      },
    });
    commment.id = newComment.id;
  }

  async update(commment: Comment): Promise<void> {
    const { text } = commment.toPersistance();
    const id = commment.getPersistanceId();
    await prisma.comment.update({
      where: { id },
      data: { text },
    });
  }
  async findById(id: bigint): Promise<Comment | undefined> {
    const data = await prisma.comment.findFirst({
      where: { id },
      include: {
        shader: { include: { principalImage: true } },
        mod: { include: { principalImage: true } },
        author: true,
        pack: { include: { principalImage: true } },
      },
    });
    if (!data) return;
    const comment = new Comment().fromData(data);
    return comment;
  }
  async delete(id: bigint): Promise<void> {
    await prisma.comment.delete({
      where: {
        id,
      },
    });
  }
  async deleteByUser(id: bigint, userId: bigint): Promise<void> {
    await prisma.comment.delete({
      where: {
        id,
        userId,
      },
    });
  }
  async listAll(): Promise<Comment[]> {
    const data = await prisma.comment.findMany({
      include: {
        author: { include: { image: true } },
        shader: { include: { principalImage: true } },
        mod: { include: { principalImage: true } },
        pack: { include: { principalImage: true } },
      },
    });
    return data.map((item) => new Comment().fromData(item));
  }
  async listByShader(shader_id: bigint): Promise<Comment[]> {
    const data = await prisma.comment.findMany({
      where: {
        shaderId: shader_id,
      },
      include: {
        author: { include: { image: true } },
      },
    });
    return data.map((item) => new Comment().fromData(item));
  }
  async listByMod(mod_id: bigint): Promise<Comment[]> {
    const data = await prisma.comment.findMany({
      where: {
        modId: mod_id,
      },
      include: {
        author: { include: { image: true } },
      },
    });
    return data.map((item) => new Comment().fromData(item));
  }
  async listByPack(pack_id: bigint): Promise<Comment[]> {
    const data = await prisma.comment.findMany({
      where: {
        packId: pack_id,
      },
      include: {
        author: { include: { image: true } },
      },
    });
    return data.map((item) => new Comment().fromData(item));
  }

  async listByUser(userId: bigint): Promise<Comment[]> {
    const data = await prisma.comment.findMany({
      where: {
        authorId: userId,
      },
      include: {
        shader: { include: { images: true } },
        mod: { include: { images: true } },
        pack: { include: { images: true } },
      },
    });
    return data.map((item) => new Comment().fromData(item));
  }
}
