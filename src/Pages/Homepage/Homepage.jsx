import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import coursesMock from "../../utils/mock/courses";
import { Grid } from "../../utils/styles/generalStyles";
import Course from "../../Components/Course/Course";
import { MutatingDots } from "react-loader-spinner";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  return (
    <div>
     
      <main>
        <Hero />
        <Section
          title="Open your new possibilities"
          subtitle="We recommend that you choose one of the featured courses. If you don't find anything for you here, search for courses in detail on the courses page."
        >
          {courses ? (
            <Grid>
              {courses.slice(0, 4).map((course) => (
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
            </Grid>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MutatingDots
              wrapperStyle={{height:500}}
                height={100}
                width={100}
                color="#4fa94d"
                secondaryColor="#4fa94d"
                radius={12.5}
                ariaLabel="mutating-dots-loading"
              />
            </div>
          )}
        </Section>
      </main>
    </div>
  );
};

export default Homepage;
