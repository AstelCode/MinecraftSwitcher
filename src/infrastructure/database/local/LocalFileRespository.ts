import path from "path";
import fs from "fs";
import { FileRepository } from "@/domain/repositories/FileRepository";

const relativeBasePath = process.env.LOCAL_STORAGE_PATH || "./uploads";
const absoluteBasePath = path.resolve(process.cwd(), relativeBasePath);

export class LocalFileRepository implements FileRepository {
  async saveProfileImage(name: string, file: File): Promise<string> {
    const folder = "profiles";
    await this.save(folder, name, file);
    return `${this.getBaseUrl()}/${folder}/${name}`;
  }

  async deleteProfileImage(filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete("profiles", fileName);
  }

  async saveShaderImage(name: string, file: File): Promise<string> {
    const folder = "shaders/images";
    await this.save(folder, name, file);
    return `${this.getBaseUrl()}/${folder}/${name}`;
  }

  async deleteShaderImage(filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete("shaders/images", fileName);
  }

  async saveShaderFile(name: string, file: File): Promise<string> {
    const folder = "shaders/files";
    await this.save(folder, name, file);
    return `${this.getBaseUrl()}/${folder}/${name}`;
  }

  async deleteShaderFile(filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete("shaders/files", fileName);
  }

  async saveShaderPrincipalFile(name: string, file: File): Promise<string> {
    const folder = "shaders/principal";
    await this.save(folder, name, file);
    return `${this.getBaseUrl()}/${folder}/${name}`;
  }

  async deleteShaderPrincipalFile(filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete("shaders/principal", fileName);
  }

  getBaseUrl(): string {
    return process.env.NEXT_PUBLIC_UPLOADS_URL || "/uploads";
  }

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
