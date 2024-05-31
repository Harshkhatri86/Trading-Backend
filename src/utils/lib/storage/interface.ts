export enum PATH_TYPE {
    folder = "folder",
    file = "file",
  }
  
  export enum AttachmentType {
    audio = "audio",
    image = "image",
    video = "video",
    application = "application",
  }
  
  export enum Choice {
    single = "single",
    multiple = "multiple",
  }
  
  export const AVAILABLE_ATTACHMENT_MIMES = {
    [AttachmentType.audio]: {
      mineType: ["audio/mpeg", "audio/mp3", "audio/x-aac"],
    },
    [AttachmentType.image]: {
      mineType: ["image/jpg", "image/jpeg", "image/png", "image/svg+xml"],
    },
    [AttachmentType.video]: {
      mineType: [
        "video/mp4",
        "video/webm",
        "video/mpeg",
        "video/quicktime",
        "video/x-flv",
        "video/x-msvideo",
        "video/mwv",
        "video/mkv",
      ],
    },
    [AttachmentType.application]: {
      mineType: [
        "application/vnd.rar",
        "application/zip",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "text/plain",
        "application/vnd.google-apps.script+json",
        "text/csv",
        "text/tab-separated-values"
      ],
    },
  } as { [_: string]: any };
  
  export interface IUploadRequestOptions {
    type: AttachmentType | string;
    choice?: Choice | string;
    folderPath?: string | any;
    isResize?: boolean | any;
    overide?: boolean | any;
  }
  