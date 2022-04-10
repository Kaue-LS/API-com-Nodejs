import { getToken } from "./Auth";
import {Navigate } from "react-router-dom";

export default function PrivateRoute({children}) {
  const auth = getToken();
  console.log(auth)

  return auth ?children: <Navigate to="/login"></Navigate>;
}