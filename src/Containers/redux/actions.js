import { REQUEST_ERROR_RESPONSE, REQUEST_SUCCESS_RESPONSE } from "./constants";

export const requestErrorResponse = (data) => ({
  type: REQUEST_ERROR_RESPONSE,
  data,
});
export const requestSuccessResponse = (data) => ({
  type: REQUEST_SUCCESS_RESPONSE,
  data,
});
