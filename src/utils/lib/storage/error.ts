import { CustomError, CommonErrorMessage } from "../../lib/error";

export const handleUploadErrorMessage = (error: any): CustomError => {
  switch (error.code) {
    case "LIMIT_FILE_SIZE":
      return new CustomError(CommonErrorMessage.fileTooLarge);
    case "LIMIT_FILE_COUNT":
      return new CustomError(CommonErrorMessage.tooManyFiles);
    case "LIMIT_UNEXPECTED_FILE":
    case "LIMIT_FIELD_KEY":
    case "LIMIT_FIELD_COUNT":
    case "LIMIT_FIELD_VALUE":
      return new CustomError(CommonErrorMessage.invalidFile);
    default:
      return new CustomError(CommonErrorMessage.invalidFile);
  }
};
