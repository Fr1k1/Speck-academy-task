import Courses from "../../Components/Courses/Courses";
import Grid from "../../Components/Grid/Grid";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import "./Homepage.scss";

const Homepage = () => {
    return (
        <div>

            <Header />

            <main>

                <Hero />

                <Section title="Open your new posibilities" subtitle="We recommend that you choose one of the featured courses. If you
    don&apos;t find anything for you here, search for courses in detail on
    the courses page.">




                    <div>
                        <Grid>

                            <Courses />
                            <Courses/>
                        </Grid>
                    </div>



                </Section>
            </main>

        </div>
    )
}

export default Homepage