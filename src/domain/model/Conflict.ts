import { Mod, ModData } from "./Mod";
import { Shader, ShaderData } from "./Shader";

export interface ConflictData {
  id: bigint;
  mod?: ModData | null;
  conflictShader?: ShaderData | null;
  conflictMod?: ModData | null;
}

export class Conflict {
  id!: BigInt;
  mod?: Mod;
  conflictShader?: Shader;
  conflictMod?: Mod;

  fromData(data: ConflictData) {
    this.id = data.id;
    if (data.conflictShader) {
      this.conflictShader = new Shader().fromData(data.conflictShader);
    }
    if (data.mod) {
      this.mod = new Mod().fromData(data.mod);
    }
    if (data.conflictMod) {
      this.conflictMod = new Mod().fromData(data.conflictMod);
    }
    return this;
  }

  toPersistance() {
    if (!this.conflictShader && !this.conflictMod)
      throw new Error("conflict: conflict_shader or conflict_mod not assigned");
    if (!this.mod) throw new Error("conflict: mod not assigned");

    return {
      modId: this.mod.id,
      conflictShaderId: this.conflictShader?.id,
      conflictModId: this.conflictMod?.id,
    };
  }

  getPersistanceId() {
    if (!this.id) throw new Error("conflict id no assigned");
    return this.id;
  }
}
