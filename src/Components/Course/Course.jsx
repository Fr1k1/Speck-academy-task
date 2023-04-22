import PropTypes from 'prop-types'
import "./Course.scss";

const Course = ({ imgSrc, imgAlt, title, subtitle, time }) => {
    return (
        <article className="Course">
            <figure className="Course-Figure">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="Course-Img"
                />
            </figure>
            <h3 className="Course-Title">{title}</h3>
            <p className="Course-Subtitle">{subtitle}</p>
            <p className="Course-Time">{time}</p>
        </article>
    )
}

Course.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    time: PropTypes.string,


}

export default Course