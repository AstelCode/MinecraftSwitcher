import { Comment } from "@/domain/model/Comment";
import { CommentRepository } from "@/domain/repositories/CommentRepository";
import { prisma } from "./prisma";

export class PostgresCommentRepository implements CommentRepository {
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
        shader: true,
        mod: true,
        author: true,
        pack: true,
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
  async listAll(): Promise<Comment[]> {
    const data = await prisma.comment.findMany({
      include: {
        author: true,
        shader: true,
        mod: true,
        pack: true,
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
        author: true,
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
        author: true,
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
        author: true,
      },
    });
    return data.map((item) => new Comment().fromData(item));
  }
}
