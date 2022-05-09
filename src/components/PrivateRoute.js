import react from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "./hooks/UseAuth";
import Spinner from "./shared/Spinner";

export default function PrivateRoute() {
  // const loggedIn = false;
  const { loggedIn, checkingStatus } = useAuthStatus();

  // SPACER

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
