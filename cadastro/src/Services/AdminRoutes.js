import { GetAdminClient } from "./Auth";
import { Outlet,Navigate } from "react-router-dom";

export default function AdminRoute() {
  const auth = JSON.parse(GetAdminClient());
  return auth? <Outlet></Outlet> : <Navigate to="/login"></Navigate>;
}