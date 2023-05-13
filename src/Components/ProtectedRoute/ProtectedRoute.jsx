import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children, isLogedIn }) => {
  if (!isAdmin || !isLogedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
