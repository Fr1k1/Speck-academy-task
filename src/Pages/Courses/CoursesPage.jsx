import "./CoursesPage.scss";
import Courses from "../../Components/Courses/Courses";
import Grid from "../../Components/Grid/Grid";
import Header from "../../Components/Header/Header";
import Section from "../../components/Section/Section";


const CoursesPage = () => {
    return (
        <div>

            <Header />

            <main>


                <Section title="Browse our all courses" subtitle="We recommend that you choose one of the featured courses. If you don't find anything for you here, 
                search for courses in detail on the courses page.">




                    <div>
                        <Grid>

                            <Courses />
                        </Grid>
                    </div>



                </Section>
            </main>

        </div>
    )
}

export default CoursesPage