import { FileRepository } from "@/domain/repositories/FileRepository";
import { createClient } from "@supabase/supabase-js";
import path from "path";

export class SupabaseFileRepository implements FileRepository {
  private bucketName = process.env.SUPABASE_BUCKET_NAME || "tu-bucket-name";
  private supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  getBaseUrl(): string {
    return process.env.SUPABASE_BASE_PATH!;
  }

  private async deleteFolder(folderPath: string): Promise<void> {
    const { data, error } = await this.supabase.storage
      .from(this.bucketName)
      .list(folderPath);

    if (error) {
      console.warn(
        `Error listing folder ${folderPath} in Supabase:`,
        error.message,
      );
      return;
    }
    if (data && data.length > 0) {
      // Supabase list solo lista un nivel por defecto. Para subcarpetas habría que hacer recursión.
      // Aquí hacemos un borrado simple de los archivos en ese nivel por simplicidad.
      const filesToRemove = data.map((file) => `${folderPath}/${file.name}`);
      await this.supabase.storage.from(this.bucketName).remove(filesToRemove);
    }
  }

  async deleteUserData(userId: bigint): Promise<void> {
    await this.deleteFolder(`users/${userId}/profiles`);
  }

  async saveProfileImage(
    userId: bigint,
    name: string,
    file: File,
  ): Promise<string> {
    const folder = `users/${userId}/profiles`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${fileName}`;
  }

  async deleteProfileImage(userId: bigint, fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete(`users/${userId}/profiles`, fileName);
  }

  async deleteShaderData(shaderId: bigint): Promise<void> {
    // Intentamos borrar el contenido de subcarpetas conocidas
    await this.deleteFolder(`shaders/${shaderId}/images`);
    await this.deleteFolder(`shaders/${shaderId}/files`);
    await this.deleteFolder(`shaders/${shaderId}/principal`);
  }

  async saveShaderImage(
    shaderId: bigint,
    name: string,
    file: File,
  ): Promise<string> {
    const folder = `shaders/${shaderId}/images`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteShaderImage(shaderId: bigint, fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete(`shaders/${shaderId}/images`, fileName);
  }

  async saveShaderFile(
    shaderId: bigint,
    name: string,
    file: File,
  ): Promise<string> {
    const folder = `shaders/${shaderId}/files`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteShaderFile(shaderId: bigint, fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete(`shaders/${shaderId}/files`, fileName);
  }

  async saveShaderPrincipalFile(
    shaderId: bigint,
    name: string,
    file: File,
  ): Promise<string> {
    const folder = `shaders/${shaderId}/principal`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteShaderPrincipalFile(
    shaderId: bigint,
    fileUrl: string,
  ): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete(`shaders/${shaderId}/principal`, fileName);
  }

  async deleteModData(modId: bigint): Promise<void> {
    await this.deleteFolder(`mods/${modId}/images`);
    await this.deleteFolder(`mods/${modId}/files`);
    await this.deleteFolder(`mods/${modId}/principal`);
  }

  async saveModImage(modId: bigint, name: string, file: File): Promise<string> {
    const folder = `mods/${modId}/images`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteModImage(modId: bigint, fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete(`mods/${modId}/images`, fileName);
  }

  async saveModFile(modId: bigint, name: string, file: File): Promise<string> {
    const folder = `mods/${modId}/files`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteModFile(modId: bigint, fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete(`mods/${modId}/files`, fileName);
  }

  async saveModPrincipalFile(
    modId: bigint,
    name: string,
    file: File,
  ): Promise<string> {
    const folder = `mods/${modId}/principal`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteModPrincipalFile(modId: bigint, fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete(`mods/${modId}/principal`, fileName);
  }

  async deletePackData(packId: bigint): Promise<void> {
    await this.deleteFolder(`packs/${packId}/images`);
    await this.deleteFolder(`packs/${packId}/principal`);
  }

  async savePackImage(
    packId: bigint,
    name: string,
    file: File,
  ): Promise<string> {
    const folder = `packs/${packId}/images`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deletePackImage(packId: bigint, fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete(`packs/${packId}/images`, fileName);
  }

  async savePackPrincipalFile(
    packId: bigint,
    name: string,
    file: File,
  ): Promise<string> {
    const folder = `packs/${packId}/principal`;
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deletePackPrincipalFile(
    packId: bigint,
    fileUrl: string,
  ): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete(`packs/${packId}/principal`, fileName);
  }

  private extractFileName(url: string): string | undefined {
    try {
      return url.substring(url.lastIndexOf("/") + 1).split("?")[0];
    } catch {
      return undefined;
    }
  }

  async save(path: string, name: string, file: File | Buffer): Promise<void> {
    const filePath = `${path}/${name}`;

    const { error } = await this.supabase.storage
      .from(this.bucketName)
      .upload(filePath, file, { upsert: true });

    if (error) {
      throw new Error(`Error saving file to Supabase: ${error.message}`);
    }
  }

  async delete(path: string, name: string): Promise<void> {
    const filePath = `${path}/${name}`;

    const { error } = await this.supabase.storage
      .from(this.bucketName)
      .remove([filePath]);

    if (error) {
      throw new Error(`Error deleting file from Supabase: ${error.message}`);
    }
  }

  async getFile(path: string, name: string): Promise<Buffer | undefined> {
    const filePath = `${path}/${name}`;

    const { data, error } = await this.supabase.storage
      .from(this.bucketName)
      .download(filePath);

    if (error || !data) {
      return undefined;
    }

    const arrayBuffer = await data.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }
}
