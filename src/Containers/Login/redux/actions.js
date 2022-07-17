import types from "./types";

export const login = (data) => {
  debugger
  return ({
    type: types.LOGIN,
    data,
  })
};

export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  data,
});

export const loginFailed = (data) => {
  debugger
  return ({
    type: types.LOGIN_FAILED,
    data,
  })
};

export const logout = () => ({
  type: types.LOGOUT,
});

export const setAccessToken = (data) => ({
  type: types.SET_ACCESS_TOKEN,
  data,
});
