import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"
import CoursesPage from "./Pages/Courses/CoursesPage"
import Course_page from "./Pages/Course_page/Course_page"
import SignIn from "./Pages/SignIn/SignIn"
import Register from "./Pages/Register/Register"
import  Header  from "./Components/Header/Header"


function App() {

  return (
    <>

    <Header/>

    <main>

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

        <Route path={"/courses/:title"} element={<Course_page/>} />

        <Route path="/sign-in" element={<SignIn/>}/>

        <Route path="/register" element={<Register/>}/>


      </Routes>

      </main>
    </>


  )
}

export default App
