import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Section from "./Components/Section/Section"
import Grid from "./Components/Grid/Grid"
import Course from "./Components/Course/Course"
import LectureImg1 from "./assets/images/lecture-1.jpg";


function App() {

  return (
    <>
      <Header />

      <main>

        <Hero />

        <Section title="Open your new posibilities" subtitle="We recommend that you choose one of the featured courses. If you
                    don&apos;t find anything for you here, search for courses in detail on
                    the courses page.">


          <Grid>

            <Course imgSrc={LectureImg1} imgAlt="Lekcija 1" title="Introduction"
              subtitle="Get to know us better..." time="60min" />
              <Course imgSrc={LectureImg1} imgAlt="Lekcija 1" title="Introduction"
              subtitle="Get to know us better..." time="60min" />
              <Course imgSrc={LectureImg1} imgAlt="Lekcija 1" title="Introduction"
              subtitle="Get to know us better..." time="60min" />
              <Course imgSrc={LectureImg1} imgAlt="Lekcija 1" title="Introduction"
              subtitle="Get to know us better..." time="60min" />
              <Course imgSrc={LectureImg1} imgAlt="Lekcija 1" title="Introduction"
              subtitle="Get to know us better..." time="60min" />
          </Grid>
        </Section>
      </main>
    </>
  )
}

export default App
