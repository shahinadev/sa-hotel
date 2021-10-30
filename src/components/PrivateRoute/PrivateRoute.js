import React from "react";
import { Route } from "react-router-dom";
import useFirebase from "./../../hooks/useFirebase";
import { Redirect } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
  const { user,isLoading } = useFirebase();
  if(isLoading) return <h1>Page is Loading</h1>
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
