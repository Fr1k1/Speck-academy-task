//import "./SinglePage.scss";
import PropTypes from "prop-types";
import { SinglePage as SinglePageWrapper, SinglePageFigure, SinglePageContent, SinglePageImg } from "./SinglePageStyle";

const SinglePage = ({ imgSrc, imgAlt, content }) => {
    return (
        <SinglePageWrapper>
            <SinglePageFigure>
                <SinglePageImg src={imgSrc} alt={imgAlt} />
            </SinglePageFigure>

            <SinglePageContent>{content}</SinglePageContent>

        </SinglePageWrapper>
    );
};

SinglePage.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    content: PropTypes.string,
};

export default SinglePage;
