import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"
import CoursesPage from "./Pages/Courses/CoursesPage"


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

      </Routes>
    </>


  )
}

export default App
