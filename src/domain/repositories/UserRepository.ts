import { User } from "@/domain/model/User";

export interface UserRepository {
  save(user: User): Promise<void>;
  delete(id: bigint): Promise<void>;
  update(user: User): Promise<void>;
  findById(id: bigint): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  listAll(): Promise<User[]>;
}
