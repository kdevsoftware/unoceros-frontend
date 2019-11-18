import { InMemoryDbService } from "angular-in-memory-web-api";
import { uWindows } from "./u-windows";

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      window: uWindows
    };
  }
}
