import { sectionData } from "../../data";
import Course from "../Course/Course.jsx";
import "../Course/Course.scss";



const Courses = () => {
    return (
        <>


            {sectionData.map((section, i) => (

                <Course imgSrc={section.imgSrc} key={i} imgAlt={section.imgAlt} title={section.title} subtitle={section.subtitle}
                    time={section.time}
                >


                </Course>

            ))}


        </>
    )
}

export default Courses