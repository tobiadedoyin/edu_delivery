import React from "react";
//import homepix from "../assets/homepix.jpg";
import unsplash from "../assets/unsplash.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="container welcome">
      <div className="word">
        <p>
          An online learning platform to learn, unlearn and relearn, with over
          1000+ business and tech courses
        </p>
        <button className="btn" onClick={() => navigate("/signup")}>
          Signup
        </button>
        <p>
          login if you already have an account....{" "}
          <Link to={"/login"}>Login</Link>
        </p>
      </div>
      <div className="homepix">
        <img src={unsplash} alt="homepix" />
      </div>
    </div>
  );
}
