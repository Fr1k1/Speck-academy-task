//import "./Section.scss";
import PropTypes from "prop-types";
import { Section as SectionWrapper, SectionInner, SectionSubtitle, SectionTitle } from "./SectionStyle";

const Section = ({ title, subtitle, children, button, displayIsFlex, removeMargin, maxWidth95 }) => {
    return (
        <SectionWrapper>
            <SectionInner>

                <SectionTitle {...button} displayIsFlex={displayIsFlex} removeMargin={removeMargin}
                    maxWidth95={maxWidth95}

                >{title} {button}</SectionTitle>

                <SectionSubtitle>{subtitle}</SectionSubtitle>

                {children}
            </SectionInner>

        </SectionWrapper>
    )
}

Section.propTypes = {

    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node,
    button: PropTypes.node,
    displayIsFlex: PropTypes.bool,
    removeMargin: PropTypes.bool,
    maxWidth95: PropTypes.bool,

}

export default Section