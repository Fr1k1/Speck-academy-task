import { useEffect } from "react";
import { Header as HeaderWrapper, HeaderInner, LogoImg } from "./HeaderStyle";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const Header = ({ isAdmin, isLogedIn, setIsAdmin, setIsLoggedIn }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //console.log("Header veli da je isAdmin" + isAdmin);
  //console.log("Header veli da je isLogedIn" + isLogedIn);

  console.log("Header veli da je setIsAdmin" + setIsAdmin);
  //console.log("Header veli da je isLogedIn" + isLogedIn); dobro ga dobiva
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

export default Header;
