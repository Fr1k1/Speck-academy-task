import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("is_admin") === "true"
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("jwt_token") ? true : false
  );
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthConsumer, AuthProvider, AuthContext };

AuthContext.PropTypes = {
  isLoggedIn: PropTypes.bool,
  children: PropTypes.node,
};
