import { Mod, ModData } from "./Mod";
import { Shader, ShaderData } from "./Shader";

export interface ShaderDependencyData {
  mod?: ModData | null;

  shader?: ShaderData | null;
}

export class ShaderDependency {
  mod!: Mod;
  shader!: Shader;

  fromData(data: ShaderDependencyData) {
    if (data.mod) {
      this.mod = new Mod().fromData(data.mod);
    }
    if (data.shader) {
      this.shader = new Shader().fromData(data.shader);
    }
    return this;
  }

  toPersistance() {
    if (!this.mod) throw new Error("shaderDependency mod not assigned");
    if (!this.shader) throw new Error("shaderDependency shader not assigned");

    return {
      modId: this.mod.id,
      shaderId: this.shader.id,
    };
  }
}
