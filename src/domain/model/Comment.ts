import { User, UserData } from "./User";
import { Pack, PackData } from "./Pack";
import { Shader, ShaderData } from "./Shader";
import { Mod, ModData } from "./Mod";

export interface CommentData {
  id: bigint;
  text: string;
  author?: UserData | null;
  pack?: PackData | null;
  shader?: ShaderData | null;
  mod?: ModData | null;
}

export class Comment {
  id!: bigint;
  text!: string;
  author?: User;
  pack?: Pack;
  shader?: Shader;
  mod?: Mod;

  fromData(data: CommentData) {
    this.id = data.id;
    this.text = data.text;

    if (data.author) {
      this.author = new User().fromData(data.author);
    }
    if (data.pack) {
      this.pack = new Pack().fromData(data.pack);
    }
    if (data.shader) {
      this.shader = new Shader().fromData(data.shader);
    }
    if (data.mod) {
      this.mod = new Mod().fromData(data.mod);
    }

    return this;
  }

  forShader(text: string, shaderId: bigint) {
    this.shader = new Shader();
    this.shader.id = shaderId;
    this.text = text;
    return this;
  }
  forMod(text: string, modId: bigint) {
    this.mod = new Mod();
    this.mod.id = modId;
    this.text = text;
    return this;
  }
  forPack(text: string, packId: bigint) {
    this.pack = new Pack();
    this.pack.id = packId;
    this.text = text;
    return this;
  }
  setAuthor(user: User) {
    this.author = user;
    return this;
  }

  toPersistance() {
    if (!this.author) throw new Error("comment author not assigned");

    return {
      text: this.text,
      authorId: this.author.id,
      packId: this.pack?.id,
      shaderId: this.shader?.id,
      modId: this.mod?.id,
    };
  }

  getPersistanceId() {
    if (!this.id) throw new Error("comment id no assigned");
    return this.id;
  }
}
