import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import CoursesPage from "./Pages/Courses/CoursesPage";
import Course_page from "./Pages/Course_page/Course_page";
import SignIn from "./Pages/SignIn/SignIn";
import Register from "./Pages/Register/Register";
import Header from "./Components/Header/Header";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("is_admin") === "true"
  );
  const [isLogedIn, setIsLoggedIn] = useState(
    localStorage.getItem("jwt_token") ? true : false
  );

  return (
    <>
      <Header
        isAdmin={isAdmin}
        isLogedIn={isLogedIn}
        setIsAdmin={setIsAdmin}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}>
            {" "}
          </Route>

          <Route path="/courses" element={<CoursesPage />}></Route>

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                path="/profile"
                isLoggedIn={isLogedIn}
                isAdmin={isAdmin}
              >
                <ProfilePage />
              </ProtectedRoute>
            }
          ></Route>

          <Route path={"/courses/:title"} element={<Course_page />} />

          <Route
            path="/login"
            element={
              <SignIn
                isLogedIn={isLogedIn}
                isAdmin={isAdmin}
                setIsLoggedIn={setIsLoggedIn}
                setIsAdmin={setIsAdmin}
              />
            }
          />

          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
