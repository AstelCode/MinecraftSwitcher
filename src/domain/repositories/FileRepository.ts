export interface FileRepository {
  save(path: string, name: string, file: File): Promise<void>;
  delete(path: string, name: string): Promise<void>;
  getFile(path: string, name: string): Promise<File | undefined>;
}
