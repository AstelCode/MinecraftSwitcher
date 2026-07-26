import { FileRepository } from "@/domain/repositories/FileRepository";
import { createClient } from "@supabase/supabase-js";

export class SupabaseFileRepository implements FileRepository {
  private supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );
  private bucketName = "tu-bucket-name";

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
