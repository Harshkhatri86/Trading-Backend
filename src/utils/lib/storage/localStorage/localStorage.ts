import { BaseStorage } from "../storage";
import config from "../../../../common/config/index";
import { IUploadRequestOptions } from "..//interface";

export class LocalStorageManager extends BaseStorage {
  getInstance(func: any) {
    throw new Error("Method not implemented.");
  }
  getConfig(func: any) {
    throw new Error("Method not implemented.");
  }

  private rootDirectoryName: string =
    config.storage.disk.localStorageRootFolderPath;

  getRelativePath(folderPath: string, name: string): string {
    return folderPath ? `static/${folderPath}/${name}` : `static/${name}`;
  }

  getAbsoluteUrl(folderPath: string, name: string): string {
    return folderPath
      ? `${config.storage.disk.localStorageAbsoluteUrl}/static/${folderPath}/${name}`
      : `${config.storage.disk.localStorageAbsoluteUrl}/static/${name}`;
  }

  public list(path?: string, options?: any) {
    throw new Error("Method not implemented.");
  }

  private async upload(
    file: Express.Multer.File,
    options?: IUploadRequestOptions
  ): Promise<any> {
    try {
      return {
        name: file.filename,
        type: options?.type || "application",
        original_name: file.originalname,
        encoding: file.encoding,
        mimetype: file.mimetype,
        size: file.size,
        url: this.getAbsoluteUrl(options?.folderPath, file.filename),
        relative_path: this.getRelativePath(options?.folderPath, file.filename),
      };
    } catch (error) {
      console.log("error uploading", error);
      return error;
    }
  }

  public async uploads(params: any, options?: IUploadRequestOptions) {
    const rs = [];
    for (const file of params) {
      try {
        const data = await this.upload(file, options);
        rs.push(data);
      } catch (error) {
        console.log("error uploading", error);
      }
    }

    return rs;
  }

  public async uploadSingle(
    file: Express.Multer.File,
    options?: IUploadRequestOptions
  ) {
    try {
      return await this.upload(file, options);
    } catch (error) {
      console.log("error uploading", error);
      return error;
    }
  }

  public delete(key: any) {
    throw new Error("Method not implemented.");
  }
}
