import { FileRepository } from "@/domain/repositories/FileRepository";
import { createClient } from "@supabase/supabase-js";
import path from "path";

export class SupabaseFileRepository implements FileRepository {
  private bucketName = process.env.SUPABASE_BUCKET_NAME || "tu-bucket-name";
  private supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );

  getBaseUrl(): string {
    // Debe apuntar a la base de tu bucket público, ej:
    // https://[PROYECTO].supabase.co/storage/v1/object/public/tu-bucket-name
    return process.env.SUPABASE_BASE_PATH!;
  }

  // --- MÉTODOS ESPECÍFICOS DE DOMINIO ---

  async saveProfileImage(name: string, file: File): Promise<string> {
    const folder = "profiles";
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${fileName}`;
  }

  async deleteProfileImage(fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete("profiles", fileName);
  }

  async saveShaderImage(name: string, file: File): Promise<string> {
    const folder = "shaders/images";
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteShaderImage(fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete("shaders/images", fileName);
  }

  async saveShaderFile(name: string, file: File): Promise<string> {
    const folder = "shaders/files";
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteShaderFile(fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete("shaders/files", fileName);
  }

  async saveShaderPrincipalFile(name: string, file: File): Promise<string> {
    const folder = "shaders/principal";
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteShaderPrincipalFile(fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete("shaders/principal", fileName);
  }

  async saveModImage(name: string, file: File): Promise<string> {
    const folder = "mods/images";
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteModImage(fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete("mods/images", fileName);
  }
  async saveModFile(name: string, file: File): Promise<string> {
    const folder = "mods/files";
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }
  async deleteModFile(fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete("mods/files", fileName);
  }

  async saveModPrincipalFile(name: string, file: File): Promise<string> {
    const folder = "mods/principal";
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deleteModPrincipalFile(fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete("mods/principal", fileName);
  }

  async savePackImage(name: string, file: File): Promise<string> {
    const folder = "packs/images";
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deletePackImage(fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete("packs/images", fileName);
  }

  async savePackPrincipalFile(name: string, file: File): Promise<string> {
    const folder = "packs/principal";
    const ext = path.extname(file.name);
    const fileName = `${name}${ext}`;
    await this.save(folder, fileName, file);
    return `${this.getBaseUrl()}/${folder}/${name}${ext}`;
  }

  async deletePackPrincipalFile(fileUrl: string): Promise<void> {
    const fileName = this.extractFileName(fileUrl);
    if (fileName) await this.delete("packs/principal", fileName);
  }

  // --- UTILERÍA INTERNA ---

  /**
   * Extrae el nombre del archivo de una URL de Supabase
   * Ej: "https://.../profiles/123.png?t=456" -> "123.png"
   */
  private extractFileName(url: string): string | undefined {
    try {
      // Obtenemos la última parte después de '/' y removemos cualquier query param (ej: ?token=...)
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
