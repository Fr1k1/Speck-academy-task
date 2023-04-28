import PropTypes from 'prop-types'
//import "./Course.scss";
import { Link } from "react-router-dom";
import {  CourseWrapper, CourseFigure, CourseImg, CourseTitle, CourseSubtitle, CourseTime } from "./CourseStyle";

const Course = ({ imgSrc, imgAlt, title, subtitle, time, id }) => {
    return (
        <CourseWrapper>
            <Link to={`/courses/${id}`}>

                <CourseFigure>

                    <CourseImg src={imgSrc} alt={imgAlt} />
                </CourseFigure>

                <CourseTitle>{title}</CourseTitle>
                <CourseSubtitle>{subtitle}</CourseSubtitle>
                <CourseTime>{time}</CourseTime>

            </Link>

        </CourseWrapper>

    )
}

Course.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    time: PropTypes.string,
    id: PropTypes.number,


}

export default Course