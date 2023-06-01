//import coursesMock from "../../utils/mock/courses.js";
import Course from "../Course/Course.jsx";
import { useState, useEffect } from "react";
import { observer } from "mobx-react";
import coursesStore from "../../store/CoursesStore.js";
import LectureImg8 from "../../assets/images/lecture-8.jpg";

const Courses = ({ courses }) => {
  const [filteredCourses, setFilteredCourses] = useState([]);

  const { mobxCourses, coursesLength, setCourses, setCourse } = coursesStore;

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  useEffect(() => {
    if (coursesLength === 0) {
      setTimeout(() => {
        setCourses(mobxCourses);
      }, 1000);
    }
  });

  const handleAddCourse = () => {
    const courseId = coursesLength + 1;

    setCourse({
      id: courseId,
      imgSrc: LectureImg8,
      imgAlt: `New course ${courseId}`,
      title: `${courseId}. New course`,
      subtitle: "90 minutes",
      text: "Lorem ipsum dolor sit amet",
    });
  };

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
        <Course
          imgSrc={section.imgSrc}
          id={i + 1}
          key={i}
          imgAlt={section.imgAlt}
          title={section.title}
          subtitle={section.subtitle}
          time={section.time}
        ></Course>
      ))}
    </>
  );
};

export default observer(Courses);
