import { REQUEST_ERROR_RESPONSE, REQUEST_SUCCESS_RESPONSE } from "./constants";
const initialState = {
  request_success_response: null,
  request_error_response: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ERROR_RESPONSE:
      return { ...state, request_error_response: action.data };

    case REQUEST_SUCCESS_RESPONSE:
      return { ...state, request_success_response: action.data };
    default:
      return state;
  }
};
