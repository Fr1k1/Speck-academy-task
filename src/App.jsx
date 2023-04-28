import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"
import CoursesPage from "./Pages/Courses/CoursesPage"
import Course_page from "./Pages/Course_page/Course_page"


function App() {

  return (
    <>

      <Routes>

        <Route path="/"


          element={

            <Homepage />
          }


        >

        </Route>

        <Route path="/courses"

          element={

            <CoursesPage />
          }

        >


        </Route>

        <Route path={"/courses/:id"} element={<Course_page/>} />

      </Routes>
    </>


  )
}

export default App
