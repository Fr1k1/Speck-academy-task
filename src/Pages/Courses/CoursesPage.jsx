import Courses from "../../Components/Courses/Courses";
import Grid from "../../Components/Grid/Grid";
import SearchBar from "../../Components/SearchBar/SearcBar";
import Section from "../../Components/Section/Section";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import coursesMock from "../../utils/mock/courses";
import { MutatingDots } from "react-loader-spinner";
import coursesStore from "../../store/CoursesStore.js";
import { observer } from "mobx-react";

const CoursesPage = () => {
  const [filteredCourses, setFilteredCourses] = useState(coursesMock);
  const [loading, setLoading] = useState(false);
  const { mobxCourses, coursesLength, setCourses, setCourse } = coursesStore;

  const handleSearch = (event) => {
    const searchValue =
      event && event.target && event.target.value
        ? event.target.value.toLowerCase()
        : "";
    const filtered = coursesMock.filter((course) =>
      course.title.toLowerCase().includes(searchValue)
    );
    setFilteredCourses(filtered);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setFilteredCourses(coursesMock);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <main>
        <Section
          title="Browse our all courses"
          subtitle="We recommend that you choose one of the featured courses. If you don't find anything for you here, search for courses in detail on the courses page."
        >
          <div>
            <SearchBar
              placeholder={"Search courses"}
              disabled={loading} // disable the search bar if loading is true
              onValueChange={handleSearch}
            />
            {coursesLength < 0 ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <MutatingDots
                  height={100}
                  width={100}
                  color="#4fa94d"
                  secondaryColor="#4fa94d"
                  radius={12.5}
                  ariaLabel="mutating-dots-loading"
                />
              </div>
            ) : (
              <Grid>
                <Courses courses={filteredCourses} />
              </Grid>
            )}
          </div>
        </Section>
      </main>
    </div>
  );
};

export default observer(CoursesPage);

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
  ),
};
