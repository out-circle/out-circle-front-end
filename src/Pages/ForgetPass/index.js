import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import password from "../../Assets/images/password.svg";
import "./index";
import Axios from "axios";
import image from "../../Assets/images/Mask Group 2.png";
import "./index.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const schema = yup
  .object({
    email: yup.string().email().required("Please Enter your Email"),
  })
  .required();

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const onSubmit = () => {
    Axios.post(`${BASE_API_URL}/api/users/forget-password?email=${email}`)
      .then((res) => {
        const response = res.data;
        if (typeof response === "string") {
          toast.error("Sorry, the account does not exist...");
        } else {
          toast.success("Check your email...");
          setTimeout(() => {
            navigate("/reset-password");
          }, 4000);
          localStorage.setItem("user_id", response.user_id);
          localStorage.setItem("account_type", response.account_type);
          localStorage.setItem("code", response.code[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="forgetpass">
      <div>
        <Toaster />
      </div>
      <div className="body">
        <header>
          <h2>forget password</h2>
          <img src={password} alt="" />
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
          <div className="pass">
            <label>Please Write your email</label>
            <input
              type="email"
              {...register("email")}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span style={{ color: "red" }}>{errors.email?.message}</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ForgetPass;
