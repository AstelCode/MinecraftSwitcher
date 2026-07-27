export interface FileRepository {
  save(path: string, name: string, file: File): Promise<void>;
  delete(path: string, name: string): Promise<void>;
  getFile(path: string, name: string): Promise<Buffer | undefined>;
  getBaseUrl(): string;

  deleteUserData(userId: bigint): Promise<void>;
  saveProfileImage(userId: bigint, name: string, file: File): Promise<string>;
  deleteProfileImage(userId: bigint, filePath: string): Promise<void>;

  deleteShaderData(shaderId: bigint): Promise<void>;
  saveShaderImage(shaderId: bigint, name: string, file: File): Promise<string>;
  deleteShaderImage(shaderId: bigint, filePath: string): Promise<void>;
  saveShaderFile(shaderId: bigint, name: string, file: File): Promise<string>;
  deleteShaderFile(shaderId: bigint, filePath: string): Promise<void>;
  saveShaderPrincipalFile(shaderId: bigint, name: string, file: File): Promise<string>;
  deleteShaderPrincipalFile(shaderId: bigint, filePath: string): Promise<void>;

  deleteModData(modId: bigint): Promise<void>;
  saveModImage(modId: bigint, name: string, file: File): Promise<string>;
  deleteModImage(modId: bigint, filePath: string): Promise<void>;
  saveModFile(modId: bigint, name: string, file: File): Promise<string>;
  deleteModFile(modId: bigint, filePath: string): Promise<void>;
  saveModPrincipalFile(modId: bigint, name: string, file: File): Promise<string>;
  deleteModPrincipalFile(modId: bigint, filePath: string): Promise<void>;

  deletePackData(packId: bigint): Promise<void>;
  savePackImage(packId: bigint, name: string, file: File): Promise<string>;
  deletePackImage(packId: bigint, filePath: string): Promise<void>;
  savePackPrincipalFile(packId: bigint, name: string, file: File): Promise<string>;
  deletePackPrincipalFile(packId: bigint, filePath: string): Promise<void>;
}
