import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
// Custom route component to handle private routes
export function PrivateRoute({ isLoggedin }) {
  return isLoggedin ? <Dashboard /> : <Navigate to="/login" />;
}
