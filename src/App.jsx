import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Section from "./Components/Section/Section"
import Grid from "./Components/Grid/Grid"
import Courses from "./Components/Courses/Courses"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>

      <Routes>

        <Route path="/"


          element={

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
                    </Grid>
                  </div>



                </Section>
              </main>

              </div>
          }


        >

        </Route>

      </Routes>
    </>


  )
}

export default App
