import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./views/misc/Login/Login";
import { Home } from "./views/misc/Home/Home";
import { Navbar } from "./components/Misc/Navbar/Navbar";
import FormSignUp from "./views/misc/Signup/Signup";
import SocialFeed from "./views/Feeds/SocialFeed";
import AstroFeed from "./views/Feeds/AstrologicalFeed";
import ProtectedRoute from "./components/Misc/ProtectedRoute/ProtectedRoute";
import { Profile } from "./views/Users/Profile/Profile";

function App() {
  const routesWithoutNav = ["/", "signup", "/login"];
  const location = useLocation();

  return (
    <div className="App">
      {!routesWithoutNav.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* MISC */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<FormSignUp />} />
        <Route path="/login" element={<Login />} />

        {/* PROFILE */}
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/socialfeed"
          element={
            <ProtectedRoute>
              <SocialFeed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/astrofeed"
          element={
            <ProtectedRoute>
              <AstroFeed />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
