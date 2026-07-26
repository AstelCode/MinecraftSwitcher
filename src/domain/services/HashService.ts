export interface HashService {
  hashPassword(value: string): Promise<string>;
  verifyPassword(hash: string, value: string): Promise<boolean>;
}
