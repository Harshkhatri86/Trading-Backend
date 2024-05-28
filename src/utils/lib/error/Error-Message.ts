import status from "http-status";

export const CommonErrorMessage = {
  internalServerError: {
    code: status.INTERNAL_SERVER_ERROR,
    message: "Internal server error",
  },
  notFound: {
    code: status.NOT_FOUND,
    message: "Data Not Found",
  },
  dataIsExisted: {
    code: status.NOT_FOUND,
    message: "Data Is Existed",
  },
  badRequest: {
    code: status.BAD_REQUEST,
    message: "Bad Request",
  },
};
