import { useEffect } from "react";
import { Header as HeaderWrapper, HeaderInner, LogoImg } from "./HeaderStyle";
import { Link } from "react-router-dom";


import Navbar from "../Navbar/Navbar";


const Header = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])





    return (

        <HeaderWrapper>

            <HeaderInner>
                <Link to="/">
                    <LogoImg />

                </Link>


                <Navbar />

            </HeaderInner>
        </HeaderWrapper>

    )
}

export default Header