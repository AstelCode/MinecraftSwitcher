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

  saveModImage(name: string, file: File): Promise<string>;
  deleteModImage(filePath: string): Promise<void>;

  saveModFile(name: string, file: File): Promise<string>;
  deleteModFile(filePath: string): Promise<void>;
  saveModPrincipalFile(name: string, file: File): Promise<string>;
  deleteModPrincipalFile(filepath: string): Promise<void>;

  savePackImage(name: string, file: File): Promise<string>;
  deletePackImage(filePath: string): Promise<void>;
  savePackPrincipalFile(name: string, file: File): Promise<string>;
  deletePackPrincipalFile(filepath: string): Promise<void>;

  delete(path: string, name: string): Promise<void>;
  getFile(path: string, name: string): Promise<Buffer | undefined>;
  getBaseUrl(): string;
}
