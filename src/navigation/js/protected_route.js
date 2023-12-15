import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
