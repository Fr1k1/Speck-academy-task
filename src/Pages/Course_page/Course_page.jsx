import Section from "../../Components/Section/Section";
import SinglePage from "../../Components/SinglePage/SinglePage";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import coursesMock from "../../utils/mock/courses";

const Course_page = () => {

    const { title } = useParams();

    const [courses, setCourses] = useState(null);
    const [course, setCourse] = useState(null);



    useEffect(() => {

        setTimeout(() => {

            setCourses(coursesMock);

            //console.log(coursesMock); znaci tu postoje

        }, 1000);
    }, []);

    useEffect(() => {

        courses && setCourse(courses.find((course) => course.title === title));

    }, [courses, title]) //osluskujem svaku promjenu na courses state varijabli


    return (

        course && (
            <div>

                <Header />
                <Section title={course.title}>
                    <SinglePage
                        imgSrc={course.imgSrc}
                        imgAlt={course.imgAlt}
                        content={
                            course.content
                        }
                    />
                </Section>
            </div>)
    );
};
export default Course_page;
