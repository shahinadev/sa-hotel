import React from "react";
import { Route } from "react-router-dom";
import useFirebase from "./../../hooks/useFirebase";
import { Redirect } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();
  if (isLoading) return <Loading />;
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
