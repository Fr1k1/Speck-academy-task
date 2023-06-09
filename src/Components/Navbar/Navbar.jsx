import { useContext, useState } from "react";
import { Hamburger } from "../Header/HeaderStyle";
import { HeaderNav, HeaderLink } from "../Header/HeaderStyle";
import { Button } from "../../utils/styles/generalStyles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { isAdmin, isLoggedIn, setIsAdmin, setIsLoggedIn } =
    useContext(AuthContext);
  const logoutUser = () => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("is_admin");

    setIsAdmin(false);
    setIsLoggedIn(false);
  };
  const navigate = useNavigate();

  const [mobileNavbar, setMobileNavbar] = useState(false);

  const mobile = window.innerWidth <= 1024 ? true : false;

  return (
    <>
      {mobileNavbar === false && mobile === true ? (
        <Hamburger onClick={() => setMobileNavbar(true)} />
      ) : !isLoggedIn ? (
        <HeaderNav>
          <HeaderLink
            onClick={() => setMobileNavbar(false)}
            to="/"
            $isActive={(match) => match.url === "/"}
          >
            Home
          </HeaderLink>

          <Link to="/login">
            <Button
              isOutline
              mobitel
              onClick={() => {
                navigate("/login");
                setMobileNavbar(false);
              }}
            >
              Sign in
            </Button>
          </Link>

          <Link to="/register">
            <Button
              isOutline={false}
              mobitel
              onClick={() => {
                navigate("/register");
                setMobileNavbar(false);
              }}
            >
              Register
            </Button>
          </Link>
        </HeaderNav>
      ) : isAdmin ? (
        <HeaderNav>
          <HeaderLink
            onClick={() => setMobileNavbar(false)}
            to="/"
            $isActive={(match) => match.url === "/"}
          >
            Home
          </HeaderLink>

          <HeaderLink
            onClick={() => setMobileNavbar(false)}
            to="/courses"
            $isActive={(match) => match.url === "/courses"}
          >
            Courses
          </HeaderLink>

          <HeaderLink
            onClick={() => setMobileNavbar(false)}
            to="/profile"
            $isActive={(match) => match.url === "/profile"}
          >
            Profile
          </HeaderLink>

          <HeaderLink
            onClick={() => {
              setMobileNavbar(false);
              logoutUser();
            }}
            to="/profile"
          >
            Logout
          </HeaderLink>
        </HeaderNav>
      ) : (
        <HeaderNav>
          <HeaderLink
            onClick={() => setMobileNavbar(false)}
            to="/"
            $isActive={(match) => match.url === "/"}
          >
            Home
          </HeaderLink>

          <HeaderLink
            onClick={() => setMobileNavbar(false)}
            to="/courses"
            $isActive={(match) => match.url === "/courses"}
          >
            Courses
          </HeaderLink>

          <HeaderLink
            onClick={() => {
              setMobileNavbar(false);
              logoutUser();
            }}
            to="/profile"
          >
            Logout
          </HeaderLink>
        </HeaderNav>
      )}
    </>
  );
};

Navbar.propTypes = {
  isAdmin: PropTypes.bool,
  isLogedIn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  setIsAdmin: PropTypes.func,
  setIsLoggedIn: PropTypes.func,
};

export default Navbar;
