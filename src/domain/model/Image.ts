import { Mod } from "./Mod";
import { Pack } from "./Pack";
import { Shader } from "./Shader";
import { isValidText } from "../validators/validators";

export class Image {
  id!: bigint;
  url!: string;
  shader?: Shader;
  mod?: Mod;
  pack?: Pack;

  setId(id: bigint) {
    this.id = id;
    return this;
  }
  create(url: string) {
    this.url = url;
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

  toPersistence() {
    if (isValidText(this.url)) throw new Error("url is empty");
    return {
      url: this.url,
      packId: this.pack?.id,
      modId: this.mod?.id,
      shaderId: this.shader?.id,
    };
  }
}
