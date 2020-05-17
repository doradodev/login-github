import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const UnauthenticatedRoute = ({ component: C, appProps, path }) => {
  useEffect(() => {}, []);
  return (
    <Route
      render={props =>
        !appProps.isAuthenticated ? (
          <C {...props} {...appProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default UnauthenticatedRoute;
