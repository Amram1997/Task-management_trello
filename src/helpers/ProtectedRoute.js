import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute({ children, isAllowed, redirectURL = "/login" }) {
  if (!isAllowed) {
    return <Navigate replace to={redirectURL} />;
  }
  return <Outlet />;
}
export default ProtectedRoute;
