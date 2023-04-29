//import "./Button.scss";
import { useEffect } from "react";
import PropTypes from "prop-types";

import { Button as ButtonStyle } from "../../utils/styles/generalStyles";




const Button = ({ children }) => {



    useEffect(() => {
        const element = document.querySelector('.Button');
        if (element.closest('nav') !== null) {
            element.classList.remove('Button_secondary');
        }
    }, []);
    return (
        <ButtonStyle className="Button Button_secondary">{children}</ButtonStyle>
    )
}

Button.propTypes = {

    children: PropTypes.node,
}

export default Button