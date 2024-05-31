import { getOsEnv } from "../../utils/env";

export enum StorageType {
  S3 = "S3",
  Disk = "Disk",
  FTP = "FTP",
}

export interface IFTPConfig {
  host: string;
  username: string;
  password: string;
  directory: string;
  baseUrl: string;
}

export interface IS3Config {
  access_key_id: string;
  secret_access_key: string;
  region: string;
  bucket_default: string;
  limit_file_size_default_mb: number;
  expires_in_seconds_default: number;
}

export interface IStorageConfig {
  type: string;
  ftp: IFTPConfig;
  s3: IS3Config;
  disk: {
    localStorageRootFolderPath: string;
    localStorageAbsoluteUrl: string; // http://localhost:1001
  };
}

export default {
  type: process.env.STORAGE_TYPE as StorageType,
  disk: {
    localStorageRootFolderPath: getOsEnv("LOCAL_STORAGE_ROOT_FOLDER_PATH"),
    localStorageAbsoluteUrl: getOsEnv("LOCAL_STORAGE_ABSOLUTE_URL"), // http://localhost:30001
  },
} as IStorageConfig ; 
