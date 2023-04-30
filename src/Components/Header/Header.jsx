//import "./Header.scss";
//import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Header as HeaderWrapper, HeaderInner, LogoImg} from "./HeaderStyle";
import { Link } from "react-router-dom";
//import styled from 'styled-components';

import Navbar from "../Navbar/Navbar";


const Header = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


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


           <Navbar/>

            </HeaderInner>
        </HeaderWrapper>

    )
}

export default Header