interface ErrorMessage {
  message: string;
  code: number;
}

export class CustomError extends Error {
  constructor(error: ErrorMessage, extraParams?: any, localParams?: any) {
    super();
    this.message = error.message;
    this.code = error.code;
    this.extraParams = extraParams;
    this.localParams = localParams;
  }
  message: string;
  code: number;
  extraParams?: any;
  localParams?: any;
}
