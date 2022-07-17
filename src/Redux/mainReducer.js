import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import login from "../Containers/Login/redux/reducer";
import commonReducer from "../Containers/redux/reducer";
const signInPersistConfig = {
  key: "login",
  storage,
  timeout: null,
};

// eslint-disable-next-line no-unused-vars
export const combinedReducers = (history) => ({
  login: persistReducer(signInPersistConfig, login),
  commonReducer,
});
