import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./views/misc/Login/Login";
import { Home } from "./views/misc/Home/Home";
import { Navbar } from "./components/Misc/Navbar/Navbar";
import FormSignUp from "./views/misc/Signup/Signup";
import SocialFeed from "./views/Feeds/SocialFeed/SocialFeed";
import AstroFeed from "./views/Feeds/AstroFeed/AstrologicalFeed";
import ProtectedRoute from "./components/Misc/ProtectedRoute/ProtectedRoute";
import ProfileOld from "./views/Users/Profile/OldProfile";
import { FormBg } from "./components/BackgroudForms/BackgroundForm";
import { OtherProfile } from "./views/Users/OthersProfile/OldOtherProfile";
import { NewPost } from "./views/Post/Post";



function App() {
  const routesWithoutNav = ["/", "signup", "/login"];
  const location = useLocation();

  return (
    <div className="App">
      {!routesWithoutNav.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* MISC */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={
          <>
            <FormBg />
            <FormSignUp />
          </>
        } />
        <Route path="/login" element={<Login />} />

        {/* PROFILE */}



        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileOld />
            </ProtectedRoute>
          }
        />

        <Route
          path="/other"
          element={
            <ProtectedRoute>
              <OtherProfile />
            </ProtectedRoute>
          }
        />

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

        {/* Post */}
        <Route path="/newpost" element={<NewPost />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
