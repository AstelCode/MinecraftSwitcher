import { HashService } from "@/domain/services/HashService";
import argon2 from "argon2";

export class ArgonHashService implements HashService {
  async hashPassword(value: string): Promise<string> {
    return await argon2.hash(value);
  }
  async verifyPassword(hash: string, value: string): Promise<boolean> {
    return await argon2.verify(hash, value);
  }
}
