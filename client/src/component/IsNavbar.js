import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function IsNavbar({ children }) {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
}
