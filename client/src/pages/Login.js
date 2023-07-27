import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

//import "red-hot-toast/dist/index.css";

export default function Login({ isLoggedin, setIsLoggedin }) {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      });

      if (response.data.success === true) {
        // Login successful, store the token and perform necessary actions
        const token = response.data.accessToken;
        localStorage.setItem("token", token); // Store the token securely (e.g., in local storage
        setTimeout(() => {
          // Successful login
          setIsLoading(false);
          toast.success("Login successful!", { autoClose: 2000 });
          setIsLoggedin(true);
          navigate("/dashboard");
        }, 2000);

        return;
      } else {
        // Handle other response statuses, if applicable
        console.error("Login failed");
        setErrorMessage(response.data.message);
        setIsLoading(false);
        return;
      }
    } catch (error) {
      // Handle error response
      setIsLoading(false);
      console.error(error.message);
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div>
      <div>
        <h4>Login</h4>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {isLoading && <p style={{ color: "green" }}>Loading.....</p>}
        <Toaster />
        <form className="formpage" onSubmit={handleSubmit}>
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button className="btn" style={{ margin: "3em auto" }}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
