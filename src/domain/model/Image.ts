import { Mod, ModData } from "./Mod";
import { Pack, PackData } from "./Pack";
import { Shader, ShaderData } from "./Shader";
import { isValidText } from "../validators/validators";

export interface ImageData {
  id: bigint;
  src: string;
  shader?: ShaderData | null;
  mod?: ModData | null;
  pack?: PackData | null;
}

export class Image {
  id!: bigint;
  src!: string;
  shader?: Shader;
  mod?: Mod;
  pack?: Pack;

  setId(id: bigint) {
    this.id = id;
    return this;
  }
  create(url: string) {
    this.src = url;
    return this;
  }
  setShader(shader: Shader) {
    this.shader = shader;
    return this;
  }
  setMod(mod: Mod) {
    this.mod = mod;
    return this;
  }
  setPack(pack: Pack) {
    this.pack = pack;
    return this;
  }

  fromData(data: ImageData) {
    this.id = data.id;
    this.src = data.src;
    if (data.shader) {
      this.shader = new Shader().fromData(data.shader);
    }
    if (data.pack) {
      this.pack = new Pack().fromData(data.pack);
    }
    if (data.mod) {
      this.mod = new Mod().fromData(data.mod);
    }
    return this;
  }

  toPersistence() {
    if (!isValidText(this.src)) throw new Error("url is empty");
    return {
      src: this.src,
      packId: this.pack?.id,
      modId: this.mod?.id,
      shaderId: this.shader?.id,
    };
  }
  getPersistanceId() {
    if (!this.id) throw new Error("image id no assigned");
    return this.id;
  }
}
