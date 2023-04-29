import Courses from "../../Components/Courses/Courses";
import Grid from "../../Components/Grid/Grid";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearcBar";
import Section from "../../components/Section/Section";
import { useState } from "react";
import PropTypes from "prop-types";
import coursesMock from "../../utils/mock/courses";

const CoursesPage = () => {
  const [filteredCourses, setFilteredCourses] = useState(coursesMock);

  const handleSearch = (event) => {
    const searchValue = (event && event.target && event.target.value) ? event.target.value.toLowerCase() : '';
    const filtered = coursesMock.filter((course) =>
      course.title.toLowerCase().includes(searchValue)
    );
    setFilteredCourses(filtered);
  };
  

  return (
    <div>
      <Header />
      <main>
        <Section
          title="Browse our all courses"
          subtitle="We recommend that you choose one of the featured courses. If you don't find anything for you here, search for courses in detail on the courses page."
        >
          <div>
            <SearchBar
              placeholder={"Search courses"}
              disabled={false}
              onValueChange={handleSearch}
            />
            <Grid>
              <Courses courses={filteredCourses} />
            </Grid>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default CoursesPage;

CoursesPage.propTypes = {
  filteredCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      enrolled: PropTypes.bool.isRequired,
      progress: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
