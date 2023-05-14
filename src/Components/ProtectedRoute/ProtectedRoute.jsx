import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ isAdmin, children, isLogedIn }) => {
  if (!isAdmin || !isLogedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  isAdmin: PropTypes.bool,
  children: PropTypes.node,
  isLogedIn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default ProtectedRoute;
