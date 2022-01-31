import { getToken } from "./Auth";
import { Outlet,Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const auth = getToken();
  return auth ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>;
}