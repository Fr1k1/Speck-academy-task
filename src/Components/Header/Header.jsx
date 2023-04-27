import Button from "../Button/Button";
//import "./Header.scss";
//import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Header as HeaderWrapper, HeaderInner, Hamburger, LogoImg, HeaderLink, HeaderNav } from "./HeaderStyle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import styled from 'styled-components';


const Header = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate=useNavigate();

   /* const navLinkStyles = ({ isActive }) => { //ovo bum moral promjeniti onda
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',


        }
    }*/

 /*   const HeaderLink = styled(Link)`
  font-weight: ${({ isActive }) => isActive ? 'bold' : 'normal'};
  text-decoration: ${({ isActive }) => isActive ? 'underline' : 'none'};
`;*/


    return (

        <HeaderWrapper>

            <HeaderInner>
                <Link to="/">
                    <LogoImg />

                </Link>


                <Hamburger />
                <HeaderNav>

                    <HeaderLink  to={"/"}>Home</HeaderLink>


                    <HeaderLink  to={"/courses"}>Courses</HeaderLink>

                    <Link to="/register">

                        <Button onClick={()=>navigate("/register")}>Register</Button>
                    </Link>

                </HeaderNav>
            </HeaderInner>
        </HeaderWrapper>

    )
}

export default Header