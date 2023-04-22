import "./Section.scss";
import PropTypes from "prop-types";

const Section = ({ title, subtitle, children }) => {
    return (
        <section className="Section">
            <div className="Section-Inner">
                <h2 className="Section-Title">{title}</h2>
                <p className="Section-Subtitle">
                    {subtitle}
                </p>
                {children}
            </div>


        </section>
    )
}

Section.propTypes = {

    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node,
}

export default Section