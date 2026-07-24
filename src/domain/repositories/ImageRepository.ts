import { Image } from "@/domain/model/Image";

export interface ImageRepository {
  save(image: Image): Promise<void>;
  update(image: Image): Promise<void>;
  delete(id: bigint): Promise<void>;
  findById(id: bigint): Promise<Image | undefined>;
  listByShader(shader_id: bigint): Promise<Image[]>;
  listByMod(mod_id: bigint): Promise<Image[]>;
  listByPack(pack_id: bigint): Promise<Image[]>;
}
