import { Mod, ModData } from "./Mod";
import { Pack, PackData } from "./Pack";
import { Shader, ShaderData } from "./Shader";
import { User, UserData } from "./User";

export interface FavoriteData {
  id: bigint;
  user?: UserData | null;
  userId: bigint;
  mod?: ModData | null;
  modId?: bigint | null;
  pack?: PackData | null;
  packId?: bigint | null;
  shader?: ShaderData | null;
  shaderId?: bigint | null;
  createdAt: Date;
}

export type FavoriteType = "mod" | "pack" | "shader";

export class Favorite {
  id!: bigint;
  userId!: bigint;
  mod?: Mod | null;
  pack?: Pack | null;
  shader?: Shader | null;
  createdAt!: Date;

  forMod(userId: bigint, modId: bigint) {
    this.userId = userId;
    this.mod = new Mod();
    this.mod.id = modId;
    return this;
  }

  forPack(userId: bigint, packId: bigint) {
    this.userId = userId;
    this.pack = new Pack();
    this.pack.id = packId;
    return this;
  }

  forShader(userId: bigint, shaderId: bigint) {
    this.userId = userId;
    this.shader = new Shader();
    this.shader.id = shaderId;
    return this;
  }

  fromData(data: FavoriteData) {
    this.id = data.id;
    this.userId = data.userId;
    this.createdAt = data.createdAt;
    if (data.mod) this.mod = new Mod().fromData(data.mod);
    if (data.pack) this.pack = new Pack().fromData(data.pack);
    if (data.shader) this.shader = new Shader().fromData(data.shader);
    return this;
  }

  toPersistence() {
    const hasTarget = this.mod ?? this.pack ?? this.shader;
    if (!hasTarget) throw new Error("favorite: must have a mod, pack or shader");
    return {
      userId: this.userId,
      modId: this.mod?.id ?? null,
      packId: this.pack?.id ?? null,
      shaderId: this.shader?.id ?? null,
    };
  }

  getPersistenceId() {
    if (!this.id) throw new Error("favorite id not assigned");
    return this.id;
  }
}
