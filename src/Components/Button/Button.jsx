import "./Button.scss";

const Button = ({children}) => {
    return (
        <button className="Button Button_secondary">{children}</button>
    )
}

export default Button