import { GetAdminClient } from "./Auth";
import { Navigate } from "react-router-dom";

export default function AdminRoute({children}) {
  const auth = GetAdminClient();
  return auth==='Admin'? children : <Navigate to="/login"></Navigate>;
}