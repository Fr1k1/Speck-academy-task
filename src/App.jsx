import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import CoursesPage from "./Pages/Courses/CoursesPage";
import Course_page from "./Pages/Course_page/Course_page";
import SignIn from "./Pages/SignIn/SignIn";
import Register from "./Pages/Register/Register";
import Header from "./Components/Header/Header";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute path="/profile">
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="/courses/:title" element={<Course_page />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
