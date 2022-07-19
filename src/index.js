import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Switch, Router, Redirect } from "react-router-dom";
import { store, history } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import RouteGuard from "./RouterGuard";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Loader from "components/Loader/Loader";

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <RouteGuard
                path="/auth"
                component={(props) => <AuthLayout {...props} />}
              />
              <RouteGuard
                path="/admin"
                component={(props) => <AdminLayout {...props} />}
                isProtected
              />
              <Redirect to="/admin/index" />
            </Switch>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
