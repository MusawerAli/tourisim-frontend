import { all, call, put, takeLatest } from "redux-saga/effects";

// apis

import {login} from "../../../services/apis";
// redux
import types from "./types";
import { loginSuccess, loginFailed, setAccessToken } from "./actions";


function* loginApi({ data }) {
  
  try {
    const response = yield call(login, data);
    debugger;
    debugger
    yield put(loginSuccess(response.data.data));
    debugger;
    yield put(setAccessToken(response.data.data.access_token));
    // localStorage.setItem("token", response.data.data.access_token);
    // localStorage.setItem("user_Id", response.data.data.user.id);
    // localStorage.setItem("user_uuid", response.data.data.user.user_uuid);
  } catch (e) {
    debugger
    // if (e.response !== undefined) {
    //   const { response } = e;
    //   if (response && response.data.message !== undefined) {
    //     const { failed } = response.data.message;
    //     yield put(loginFailed(failed));
    //   }
    // }

    // response && showNotification(response.data.message, 'error')
  }
}

export default all([takeLatest(types.LOGIN, loginApi)]);
