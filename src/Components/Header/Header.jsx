import { useEffect } from "react";
import { Header as HeaderWrapper, HeaderInner, LogoImg } from "./HeaderStyle";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Navbar from "../Navbar/Navbar";

const Header = ({ isAdmin, isLogedIn, setIsAdmin, setIsLoggedIn }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <LogoImg />
        </Link>
        <Navbar isAdmin={isAdmin} isLogedIn={isLogedIn} />{" "}
        {/*iz headera dajem navbaru*/}
      </HeaderInner>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  isAdmin: PropTypes.bool,
  isLogedIn: PropTypes.bool,
  setIsAdmin: PropTypes.func,
  setIsLoggedIn: PropTypes.func,
};

export default Header;
