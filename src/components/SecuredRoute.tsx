import React from "react";
import { useAuthentication } from "../context/authentication-context";
import Login from "../routes/Login";

const SecuredRoute = ({ children }: { readonly children: React.ReactNode }) => {
  const { user } = useAuthentication();
  if (!user) {
    return <Login />;
  }

  return children as React.ReactElement;
};

export default SecuredRoute;
