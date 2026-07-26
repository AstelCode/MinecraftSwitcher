import { UuidService } from "@/domain/services/RandomService";
import { randomUUID } from "node:crypto";

export class NodeUuidService implements UuidService {
  generate(): string {
    return randomUUID();
  }
}
