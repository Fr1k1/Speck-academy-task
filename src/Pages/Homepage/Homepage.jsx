//import Courses from "../../Components/Courses/Courses";
//import Grid from "../../Components/Grid/Grid";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import coursesMock from "../../utils/mock/courses";
import { Grid } from "../../utils/styles/generalStyles";
import Course from "../../Components/Course/Course";
//import "./Homepage.scss";

import { useState, useEffect } from "react";


const Homepage = () => {

    const [courses, setCourses] = useState(null);

    useEffect(() => {

        setTimeout(() => {

            setCourses(coursesMock);
        }, 1000);

    }, [])
    return (
        <div>

            <Header />

            <main>

                <Hero />

                <Section title="Open your new posibilities" subtitle="We recommend that you choose one of the featured courses. If you
    don&apos;t find anything for you here, search for courses in detail on
    the courses page.">




                    <div>

                        {courses &&
                            <Grid>

                                {courses.map((course, index) => (


                                    //ako nema vitica sve se gleda ko 1 liner
                                    index < 4 && //tu mora return jer se koriste vitice pa eksplicitno treba return (mogu se i normalne zagrade)
                                    <Course
                                        key={course.id}
                                        imgSrc={course.imgSrc}
                                        imgAlt={course.imgAlt}
                                        title={course.title}
                                        subtitle={course.subtitle}
                                        time={course.time}
                                        id={course.id}


                                    />
                                ))}
                            </Grid>} {/*ako courses postoji ucitaj grid*/}
                    </div>



                </Section>
            </main>

        </div>
    )
}

export default Homepage