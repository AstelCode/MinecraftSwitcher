import path from "path";
import fs from "fs";
import { FileRepository } from "@/domain/repositories/FileRepository";

const relativeBasePath = process.env.LOCAL_STORAGE_PATH || "./uploads";
const absoluteBasePath = path.resolve(process.cwd(), relativeBasePath);

export class LocalFileRepository implements FileRepository {
  async deleteUserData(userId: bigint): Promise<void> {
    const targetDirectory = path.join(absoluteBasePath, `users/${userId}`);
    if (fs.existsSync(targetDirectory)) {
      await fs.promises.rm(targetDirectory, { recursive: true, force: true });
    }
  }

  async saveProfileImage(userId: bigint, name: string, file: File): Promise<string> {
    const folder = `users/${userId}/profiles`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${fileName}`;
  }
  async deleteProfileImage(userId: bigint, filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete(`users/${userId}/profiles`, fileName);
  }

  async deleteShaderData(shaderId: bigint): Promise<void> {
    const targetDirectory = path.join(absoluteBasePath, `shaders/${shaderId}`);
    if (fs.existsSync(targetDirectory)) {
      await fs.promises.rm(targetDirectory, { recursive: true, force: true });
    }
  }

  async saveShaderImage(shaderId: bigint, name: string, file: File): Promise<string> {
    const folder = `shaders/${shaderId}/images`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }
  async deleteShaderImage(shaderId: bigint, filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete(`shaders/${shaderId}/images`, fileName);
  }

  async saveShaderFile(shaderId: bigint, name: string, file: File): Promise<string> {
    const folder = `shaders/${shaderId}/files`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }
  async deleteShaderFile(shaderId: bigint, filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete(`shaders/${shaderId}/files`, fileName);
  }

  async saveShaderPrincipalFile(shaderId: bigint, name: string, file: File): Promise<string> {
    const folder = `shaders/${shaderId}/principal`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }
  async deleteShaderPrincipalFile(shaderId: bigint, filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete(`shaders/${shaderId}/principal`, fileName);
  }

  async deleteModData(modId: bigint): Promise<void> {
    const targetDirectory = path.join(absoluteBasePath, `mods/${modId}`);
    if (fs.existsSync(targetDirectory)) {
      await fs.promises.rm(targetDirectory, { recursive: true, force: true });
    }
  }

  async saveModImage(modId: bigint, name: string, file: File): Promise<string> {
    const folder = `mods/${modId}/images`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }
  async deleteModImage(modId: bigint, filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete(`mods/${modId}/images`, fileName);
  }

  async saveModFile(modId: bigint, name: string, file: File): Promise<string> {
    const folder = `mods/${modId}/files`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }
  async deleteModFile(modId: bigint, filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete(`mods/${modId}/files`, fileName);
  }

  async saveModPrincipalFile(modId: bigint, name: string, file: File): Promise<string> {
    const folder = `mods/${modId}/principal`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }
  async deleteModPrincipalFile(modId: bigint, filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete(`mods/${modId}/principal`, fileName);
  }

  async deletePackData(packId: bigint): Promise<void> {
    const targetDirectory = path.join(absoluteBasePath, `packs/${packId}`);
    if (fs.existsSync(targetDirectory)) {
      await fs.promises.rm(targetDirectory, { recursive: true, force: true });
    }
  }

  async savePackImage(packId: bigint, name: string, file: File): Promise<string> {
    const folder = `packs/${packId}/images`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }
  async deletePackImage(packId: bigint, filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete(`packs/${packId}/images`, fileName);
  }

  async savePackPrincipalFile(packId: bigint, name: string, file: File): Promise<string> {
    const folder = `packs/${packId}/principal`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }
  async deletePackPrincipalFile(packId: bigint, filePath: string): Promise<void> {
    const fileName = path.basename(filePath);
    await this.delete(`packs/${packId}/principal`, fileName);
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
