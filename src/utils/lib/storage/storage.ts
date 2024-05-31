import path from "path";
import { v4 as uuidv4 } from "uuid";

/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class BaseStorage {
  protected baseUrl: string | undefined;

  constructor() {}

  abstract getInstance(func: any): any;

  abstract getConfig(func: any): any;

  protected generateFileName(fileName: string, width?: number) {
    const sufixName = uuidv4();
    const { name, ext } = path.parse(fileName);
    if (width) {
      return `${name}_${sufixName}_${width}${ext}`;
    }

    return `${name}_${sufixName}${ext}`;
  }

  public abstract list(
    path?: string,
    options?: {
      limit?: number;
      sort?: number;
    } & any
  ): any;

  public abstract uploads(params: any, options: any): any;

  public abstract delete(key: any): any;
}
