import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h1>edutech_tutor</h1>
        <i style={{ marginTop: "15px", paddingLeft: "10px" }}>
          ......unending learning platform
        </i>
      </div>

      <div className="navbar_link">
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/signup" className="link">
          Signup
        </Link>
      </div>
    </div>
  );
}
