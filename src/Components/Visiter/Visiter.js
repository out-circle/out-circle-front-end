import React, { useState , useEffect } from "react";
import "./Visiter.css";
import { Link, useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import { BsPersonPlus } from "react-icons/bs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import image1 from "../../Assets/images/Mask Group -1.png";
import image2 from "../../Assets/images/Mask Group -2.png";
import image3 from "../../Assets/images/Mask Group -3.png";
import image4 from "../../Assets/images/Mask Group -4.png";
import image5 from "../../Assets/images/Mask Group -5.png";


const schema = yup.object({
  email: yup.string().email().required("Please Enter your Email"),
});

const Visiter = () => {
  const [data, setData] = useState({
    email: "",
    phone_number: "",
    whatsapp_number: "",
  });

  const navigate = useNavigate();

  const change_route = localStorage.getItem("change_route");

  const arr = change_route.split("/");

  const TypeImage = () => {
    let image_;
    if (arr[0] === "career-services" || arr[0] === "personal-services") {
      image_ = image5;
    } else if (arr[0] === "corporate") {
      image_ = image1;
    } else if (arr[0] === "institute") {
      image_ = image2;
    } else if (arr[0] === "scientific") {
      image_ = image3;
    } else if (arr[0] === "handicraft") {
      image_ = image4;
    }
    return image_;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    localStorage.setItem("visitor", JSON.stringify({ ...data }));
    toast.success("Now you are ready to send your message");
    setTimeout(() => {
      navigate(`/${change_route}`);
    }, 2000);
  };
  return (
    <div className="visiter">
      <Link to={`/${change_route}`} className="back">
        <span>Back</span>
        <img src={back} alt="" />
      </Link>
      <div className="section1">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">Visitor</span>
        </header>
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="body">
            <div className="my-3">
              <input
                {...register("email")}
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="my-2"
                type="email"
                placeholder="E-mail address"
              />
              <span style={{ color: "red" }} className="error">
                {errors.email?.message}
              </span>
            </div>
            <div>
              <input
                value={data.phone_number}
                onChange={(e) =>
                  setData({ ...data, phone_number: e.target.value })
                }
                className="my-2"
                type="number"
                placeholder="mobile number"
              />
            </div>
            <span>or</span>
            <div>
              <input
                value={data.whatsapp_number}
                onChange={(e) =>
                  setData({ ...data, whatsapp_number: e.target.value })
                }
                className="my-2"
                type="number"
                placeholder="Whatsapp number"
              />
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="mt-3 btn btn-dark">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="section2">
        <img src={TypeImage()} alt="" />
      </div>
    </div>
  );
};

export default Visiter;
