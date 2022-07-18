import types from "./types";

const initialState = {
  requesting: false,
  accessToken: false,
  user: false,
  errors: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      
      return {
        ...state,
        requesting: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        errors: false,
        user: action.data,
      };

    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.data,
      };

    case types.LOGIN_FAILED:
      
      return {
        ...state,
        requesting: false,
        errors: action.data,
      };

    case types.LOGOUT:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
