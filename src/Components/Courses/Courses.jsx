import coursesMock from "../../utils/mock/courses.js";
import Course from "../Course/Course.jsx";


const Courses = () => {
    return (
        <>


            {coursesMock.map((section, i) => (

                <Course imgSrc={section.imgSrc} id={i + 1} key={i} imgAlt={section.imgAlt} title={section.title} subtitle={section.subtitle}
                    time={section.time}
                >


                </Course>

            ))}


        </>
    )
}

export default Courses