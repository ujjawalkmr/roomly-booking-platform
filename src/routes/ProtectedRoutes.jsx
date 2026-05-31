import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;