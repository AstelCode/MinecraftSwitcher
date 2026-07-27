import { Favorite } from "../model/Favorite";

export interface FavoriteRepository {
  save(favorite: Favorite): Promise<void>;
  delete(id: bigint): Promise<void>;
  findById(id: bigint): Promise<Favorite | undefined>;
  findByUserAndMod(userId: bigint, modId: bigint): Promise<Favorite | undefined>;
  findByUserAndPack(userId: bigint, packId: bigint): Promise<Favorite | undefined>;
  findByUserAndShader(userId: bigint, shaderId: bigint): Promise<Favorite | undefined>;
  listByUser(userId: bigint): Promise<Favorite[]>;
  listModFavoritesByUser(userId: bigint): Promise<Favorite[]>;
  listPackFavoritesByUser(userId: bigint): Promise<Favorite[]>;
  listShaderFavoritesByUser(userId: bigint): Promise<Favorite[]>;
}
