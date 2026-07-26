export interface FileRepository {
  save(path: string, name: string, file: File): Promise<void>;

  saveProfileImage(name: string, file: File): Promise<string>;
  deleteProfileImage(filePath: string): Promise<void>;
  saveShaderImage(name: string, file: File): Promise<string>;
  deleteShaderImage(filePath: string): Promise<void>;

  saveShaderFile(name: string, file: File): Promise<string>;
  deleteShaderFile(filePath: string): Promise<void>;
  saveShaderPrincipalFile(name: string, file: File): Promise<string>;
  deleteShaderPrincipalFile(filepath: string): Promise<void>;

  delete(path: string, name: string): Promise<void>;
  getFile(path: string, name: string): Promise<Buffer | undefined>;
  getBaseUrl(): string;
}
