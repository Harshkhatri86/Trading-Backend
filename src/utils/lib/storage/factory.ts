import config, { StorageType } from "../../../common/config";
import { LocalStorageManager } from "./localStorage/localStorage";

export class StorageFactory {
  static createStorage() {
    const storageType = config.storage.type;
    switch (storageType) {
      case StorageType.Disk:
        return new LocalStorageManager();
      default:
        throw new Error("Invalid storage type");
    }
  }
}
