import coursesMock from "../../utils/mock/courses.js";
import Course from "../Course/Course.jsx";
import { useState, useEffect } from "react";


const Courses = ({ courses }) => {

    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        setFilteredCourses(courses);
    }, [courses]);

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filtered = courses.filter((course) =>
            course.title.toLowerCase().includes(searchValue)
        );
        setFilteredCourses(filtered);
    };

    return (
        <>


            {filteredCourses.map((section, i) => (
                <Course imgSrc={section.imgSrc} id={i + 1} key={i} imgAlt={section.imgAlt} title={section.title} subtitle={section.subtitle}
                    time={section.time}
                >
                </Course>
            ))}

        </>
    )
}

export default Courses;
