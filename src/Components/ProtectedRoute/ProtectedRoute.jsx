import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAdmin, isLoggedIn } = useContext(AuthContext);
  if (!isAdmin || !isLoggedIn) {
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
