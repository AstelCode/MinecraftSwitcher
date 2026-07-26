import path from "path";
import fs from "fs";
import { FileRepository } from "@/domain/repositories/FileRepository";

const relativeBasePath = process.env.LOCAL_STORAGE_PATH || "./uploads";
const absoluteBasePath = path.resolve(process.cwd(), relativeBasePath);

export class LocalFileRepository implements FileRepository {
  async save(folderPath: string, name: string, file: File): Promise<void> {
    const targetDirectory = path.join(absoluteBasePath, folderPath);
    if (!fs.existsSync(targetDirectory)) {
      await fs.promises.mkdir(targetDirectory, { recursive: true });
    }
    const fullFilePath = path.join(targetDirectory, name);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.promises.writeFile(fullFilePath, buffer);
  }

  async delete(folderPath: string, name: string): Promise<void> {
    const fullFilePath = path.join(absoluteBasePath, folderPath, name);
    if (fs.existsSync(fullFilePath)) {
      await fs.promises.unlink(fullFilePath);
    } else {
      console.warn(
        `Attempted to delete file that does not exist: ${fullFilePath}`,
      );
    }
  }

  async getFile(folderPath: string, name: string): Promise<Buffer | undefined> {
    const fullFilePath = path.join(absoluteBasePath, folderPath, name);
    if (!fs.existsSync(fullFilePath)) {
      return undefined;
    }
    const fileBuffer = await fs.promises.readFile(fullFilePath);
    return fileBuffer;
  }
}
