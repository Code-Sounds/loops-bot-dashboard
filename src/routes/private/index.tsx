import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { isExpiredToken } from "../../utils/generic";

export type PrivateRouteProps = {
  children: React.ReactNode;
} & RouteProps;

export function PrivateRoute({ children, ...props }: PrivateRouteProps) {
  const isExpiredUserToken = isExpiredToken();

  return (
    <Route
      {...props}
      render={() => {
        return !isExpiredUserToken ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
}
