import { all } from "redux-saga/effects";
import login from "../Containers/Login/redux/saga";
import commonsaga from "Containers/redux/saga";
export function* mainSaga() {
  yield all([
    login,
    commonsaga,
  ]);
}
