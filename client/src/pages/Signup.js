import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Signup() {
  const [emailExist, setEmailExist] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("first name is required")
      .min(3, "first name must be at least 3 characters"),
    lastName: yup
      .string()
      .required("last name is required")
      .min(3, "last name must be at least 3 characters"),
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required").min(8).max(12),
    gender: yup.string().required("gender is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password does not match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = async (data) => {
    try {
      setIsLoading(true);
      const checkEmail = await axios.post(
        "http://localhost:5000/users/checkEmail",
        { email: data.email }
      );
      if (checkEmail.data.exists) {
        setEmailExist(checkEmail.data.message);
        setIsLoading(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/users/signup",
        data
      );
      console.log(response);
      if (response.status === 201) {
        console.log("User saved successfully.");
        setIsLoading(false);
        navigate("/login");
        return;
      }

      // setIsLoading(false);
      // console.log("error saving to the database");
    } catch (error) {
      console.error(error.response.data);
    }
    // finally {
    //   setIsLoading(false);
    // }
  };
  const handleEmailChange = () => {
    setEmailExist("");
  };

  return (
    <div>
      <h4>signup</h4>
      {isLoading && <p>loading......</p>}
      {emailExist && <p>{emailExist}</p>}
      <form className="formpage" onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="first name"
          {...register("firstName")}
        />
        <span style={{ color: "red" }}> {errors.firstName?.message}</span>
        <input type="text" placeholder="last name" {...register("lastName")} />
        <span style={{ color: "red" }}>{errors.lastName?.message}</span>
        <input
          type="email"
          placeholder="email"
          {...register("email")}
          onChange={handleEmailChange}
        />
        <span style={{ color: "red" }}>{errors.email?.message}</span>
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <span style={{ color: "red" }}>{errors.password?.message}</span>

        <input
          type="password"
          placeholder="confirm password"
          {...register("confirmPassword")}
        />
        <span style={{ color: "red" }}>{errors.confirmPassword?.message}</span>
        <select {...register("gender")}>
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="others">others</option>
        </select>
        <span style={{ color: "red" }}>{errors.gender?.message}</span>
        <button className="btn" style={{ margin: "3em auto" }}>
          submit
        </button>
      </form>
    </div>
  );
}
