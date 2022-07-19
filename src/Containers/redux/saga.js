import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { REQUEST_ERROR_RESPONSE, REQUEST_SUCCESS_RESPONSE,
    GET_DRIVER_REQUEST,GET_DRIVER_SUCCESS,GET_DRIVER_ERROR } from "./constants";
// apis
import {getDriver} from "../../services/apis";


function* getDriverApi({ data }) {
  
    try {
      const response = yield call(getDriver, data);
      debugger;
      debugger
    //   yield put(loginSuccess(response.data.data));
      debugger;
    //   yield put(setAccessToken(response.data.data.access_token));
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


export default all([GET_DRIVER_REQUEST,getDriverApi]);
