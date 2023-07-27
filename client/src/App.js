import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import IsNavbar from "./component/IsNavbar";

function App() {
  // const location = useLocation();
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <IsNavbar>
          <Navbar />
        </IsNavbar>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={isLoggedin ? <Dashboard /> : <Navigate to={"/login "} />}
          />
          <Route
            path="/login"
            element={<Login setIsLoggedin={setIsLoggedin} />}
          />
        </Routes>
        <IsNavbar>
          <Footer />
        </IsNavbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
