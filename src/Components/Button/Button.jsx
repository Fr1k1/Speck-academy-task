import "./Button.scss";
import { useEffect } from "react";




const Button = ({ children }) => {



    useEffect(() => {
        const element = document.querySelector('.Button');
        if (element.closest('nav') !== null) {
            element.classList.remove('Button_secondary');
        }
    }, []);
    return (
        <button className="Button Button_secondary">{children}</button>
    )
}

export default Button