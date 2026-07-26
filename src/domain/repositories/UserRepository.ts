import { User } from "@/domain/model/User";

export interface UserRepository {
  save(user: User): Promise<void>;
  delete(id: bigint): Promise<void>;
  update(user: User): Promise<void>;
  updatePassword(userId: bigint, password: string): Promise<void>;
  updateImage(userId: bigint, imageId: bigint): Promise<void>;
  findById(id: bigint): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  listAll(): Promise<User[]>;
}
