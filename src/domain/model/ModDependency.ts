import { Mod, ModData } from "./Mod";

export interface ModDependencyData {
  dependency?: ModData | null;
  mod?: ModData | null;
}

export class ModDependency {
  dependency!: Mod;
  mod!: Mod;

  fromData(data: ModDependencyData) {
    if (data.mod) {
      this.mod = new Mod().fromData(data.mod);
    }
    if (data.dependency) {
      this.dependency = new Mod().fromData(data.dependency);
    }
    return this;
  }

  toPersistance() {
    if (!this.mod) throw new Error("modDependency mod not assigned");
    if (!this.dependency)
      throw new Error("modDependency dependency not assigned");

    return {
      modId: this.mod.id,
      dependencyId: this.dependency.id,
    };
  }
}
