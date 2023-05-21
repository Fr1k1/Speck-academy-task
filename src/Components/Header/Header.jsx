import { useEffect } from "react";
import { Header as HeaderWrapper, HeaderInner, LogoImg } from "./HeaderStyle";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Navbar from "../Navbar/Navbar";

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <LogoImg />
        </Link>
        <Navbar /> {/*iz headera dajem navbaru*/}
      </HeaderInner>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  isAdmin: PropTypes.bool,
  isLogedIn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  setIsAdmin: PropTypes.func,
  setIsLoggedIn: PropTypes.func,
};

export default Header;
