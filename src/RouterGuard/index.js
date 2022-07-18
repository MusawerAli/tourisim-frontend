import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const RouteGuard = ({
  isProtected = false,
  accessToken,
  user,
  component: Component,
  ...rest
}) => {
  console.log('accessToken',user)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isProtected) {
          return accessToken ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/auth/login" }} />
          );
        } else {
          return accessToken ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            <Component {...props} />
          );
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  accessToken: state.login.accessToken,
  user: state.login.user,
});

export default connect(mapStateToProps, null)(RouteGuard);
