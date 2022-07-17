import { all, call, put, takeLatest } from "redux-saga/effects";

// constants
import { appConfig } from "../../../Config/app";

// utils
import XHR from "../../../Utils/xhr";

// redux
import types from "./types";
import { loginSuccess, loginFailed, setAccessToken } from "./actions";

function loginAPI(data) {
  const URL = `${appConfig.apiUrl}/api/auth/login`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      "Accept": 'application/json'
    },
    method: "POST",
    data,
  };

  return XHR(URL, options);
}

function* login({ data }) {
  debugger
  try {
    const response = yield call(loginAPI, data);
    debugger
    yield put(loginSuccess(response.data.data));
    yield put(setAccessToken(response.data.data.access_token));
    localStorage.setItem("token", response.data.data.access_token);
    localStorage.setItem("user_Id", response.data.data.user.id);
    localStorage.setItem("user_uuid", response.data.data.user.user_uuid);
  } catch (e) {
    debugger;
    if (e.response !== undefined) {
      const { response } = e;
      if (response && response.data.message !== undefined) {
        const { failed } = response.data.message;
        yield put(loginFailed(failed));
      }
    }

    // response && showNotification(response.data.message, 'error')
  }
}

export default all([takeLatest(types.LOGIN, login)]);
