import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import back from "../../Assets/images/back.png";
import { BsPersonPlus } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";
import individuals from "../../Assets/images/Mask Group -5.png";
import file from "../../Assets/images/file.png";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const schema = yup.object({
  user_name: yup.string().required("Please enter your username"),
  email: yup.string().email().required("Please enter your Email"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Password must contain at least 8 characters"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  full_name: yup.string().required("Please enter your Full name"),
  current_city: yup.string().required("Please enter your current city"),
  current_address: yup.string().required("Please enter your current address"),
  current_work: yup.string().required("Please enter your current work")
});

function RegisterIndividuals() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    born_date: "",
    full_name: "",
    current_city: "",
    current_address: "",
    scientific_sertificate: "",
    whatsapp_number: "",
    email: "",
    current_work: "",
    academic_certificate: "",
    work_address: "",
    work_date: "",
    work_number: "",
    extention: "",
    experience: "",
    skills: "",
    it_skills: "",
  });

  const [num1, setNum1] = useState("");
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [formError , setFormError] = useState({});

  const validate = (n) => {
    let errors={};
    if(n === ""){
      errors.num1 = "Please enter your mobile number";
    }
    return errors;
  }

  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);
  
  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const data_ = [
    {
      key: "user_name",
      value: data.username,
    },
    {
      key: "email",
      value: data.email,
    },
    {
      key: "password",
      value: data.password,
    },
    {
      key: "confirm_password",
      value: data.confirm_password,
    },
    {
      key: "birthday",
      value: data.born_date,
    },
    {
      key: "full_name",
      value: data.full_name,
    },
    {
      key: "city",
      value: data.current_city,
    },
    {
      key: "current_address",
      value: data.current_address,
    },
    {
      key: "scientific_certificate",
      value: data.scientific_sertificate,
    },
    {
      key: "phone_number",
      value:num1,
    },
    {
      key: "whatsapp_number",
      value: data.whatsapp_number,
    },
    {
      key: "current_work",
      value: data.current_work,
    },
    {
      key: "scientific_certificate_details",
      value: data.academic_certificate,
    },
    {
      key: "work_address",
      value: data.work_address,
    },
    {
      key: "work_start_date",
      value: data.work_date,
    },
    {
      key: "business_phone_number",
      value: data.work_number,
    },
    {
      key: "shunt",
      value: data.extention,
    },
    {
      key: "scientific_experience_details",
      value: data.experience,
    },
    {
      key: "language_skills",
      value: data.skills,
    },
    {
      key: "technical_skills",
      value: data.it_skills,
    }
  ];

  const onSubmit = () => {

    setFormError(validate(num1));

    const formData = new FormData();
    data_.map((item) => formData.append(item.key, item.value));

    const errors = Object.values(validate(num1));

    if (file2) {
      for (let i = 0; i < file2.length; i++) {
        formData.append("file2" + i, file2[i]);
      }
    }

    if (file1) {
      for (let i = 0; i < file1.length; i++) {
        formData.append("file1" + i, file1[i]);
      }
    }


    
    if(errors.length === 0){
    Axios.post(`${BASE_API_URL}/api/individuals/add-new-user`, formData)
      .then((res) => {
        const data1 = res.data;
        if (data1 === "عذراً البريد الالكتروني الذي أدخلته موجود مسبقاً ،  من فضلك أدخل بريد الكتروني آخر ...") {
          toast.error(
            "Sorry, the email you entered already exists, please enter another email..."
          );
        } else if (data1 === "عذراً رقم الموبايل الذي أدخلته موجود مسبقاً ،  من فضلك أدخل رقم موبايل آخر ..."){
          toast.error(
            "Sorry, the mobile number you entered already exists, please enter another mobile number..."
          );
        } else {
          toast.success("Your account has been created successfully");
          setTimeout(() => navigate("/login"), 2000);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    }
  };

  const ref1 = useRef();
  const ref2 = useRef();
  return (
    <div className="register_individuals">
      <header>
        <Link to="/register">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="body">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">New User / Individuals</span>
        </header>
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="bar">
            <div className="my-3 input_">
              <input
                type="text"
                {...register("user_name")}
                className="input"
                value={data.username}
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
                placeholder="User name"
              />
              <br />
              <span style={{ color: "red" }}>{errors.user_name?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                {...register("password")}
                className="input"
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                placeholder="Password"
                type="password"
              />
              <br />
              <span style={{ color: "red" }}>{errors.password?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                {...register("confirm_password")}
                className="input"
                value={data.confirm_password}
                onChange={(e) => {
                  setData({ ...data, confirm_password: e.target.value });
                }}
                placeholder="Confirm password"
                type="password"
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.confirm_password?.message}
              </span>
            </div>
            <div className="my-3 input_">
              <input
                {...register("full_name")}
                className="input"
                value={data.full_name}
                onChange={(e) => {
                  setData({ ...data, full_name: e.target.value });
                }}
                placeholder="Full Name"
                type="text"
              />
              <br />
              <span style={{ color: "red" }}>{errors.full_name?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                required
                {...register("born_date")}
                className="input"
                ref={ref1}
                type="text"
                placeholder="Born date"
                value={data.born_date}
                onChange={(e) => {
                  setData({ ...data, born_date: e.target.value });
                }}
                onFocus={() => (ref1.current.type = "date")}
                onBlur={() => (ref1.current.type = "text")}
              />
              <br />
              <span style={{ color: "red" }}>{errors.born_date?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                {...register("current_city")}
                className="input"
                value={data.current_city}
                onChange={(e) => {
                  setData({ ...data, current_city: e.target.value });
                }}
                placeholder="Current city"
                type="text"
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.current_city?.message}
              </span>
            </div>
            <div className="my-3 input_">
              <input
                {...register("current_address")}
                className="input"
                value={data.current_address}
                onChange={(e) => {
                  setData({ ...data, current_address: e.target.value });
                }}
                placeholder="Current Address"
                type="text"
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.current_address?.message}
              </span>
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.scientific_sertificate}
                onChange={(e) => {
                  setData({ ...data, scientific_sertificate: e.target.value });
                }}
                placeholder="Scientific certificate"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.academic_certificate}
                onChange={(e) => {
                  setData({ ...data, academic_certificate: e.target.value });
                }}
                placeholder="Details of the academic certificate"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <ReactPhoneInput
                value={num1}
                onChange={setNum1}
                className="phone_number"
                placeholder="Mobile number"
                defaultCountry="sy"
                enableSearchField
              />
              {formError.num1 && (<span className="error" style={{ color: "red" }}>{formError.num1}</span>)}
              <span>{() => validate()}</span>
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.whatsapp_number}
                onChange={(e) => {
                  setData({ ...data, whatsapp_number: e.target.value });
                }}
                placeholder="Whatsapp number"
                type="number"
              />
            </div>
            <div className="my-3 input_">
              <input
                {...register("email")}
                className="input"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                placeholder="Email Address"
                type="email"
              />
              <br />
              <span style={{ color: "red" }}>{errors.email?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                {...register("current_work")}
                className="input"
                value={data.current_work}
                onChange={(e) => {
                  setData({ ...data, current_work: e.target.value });
                }}
                placeholder="Current Work"
                type="text"
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.current_work?.message}
              </span>
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.work_address}
                onChange={(e) => {
                  setData({ ...data, work_address: e.target.value });
                }}
                placeholder="Work Address"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                ref={ref2}
                type="text"
                onFocus={() => (ref2.current.type = "date")}
                onBlur={() => (ref2.current.type = "text")}
                value={data.work_date}
                onChange={(e) => {
                  setData({ ...data, work_date: e.target.value });
                }}
                placeholder="Work Start date"
              />
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.work_number}
                onChange={(e) => {
                  setData({ ...data, work_number: e.target.value });
                }}
                placeholder="Work phone number"
                type="number"
              />
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.extention}
                onChange={(e) => {
                  setData({ ...data, extention: e.target.value });
                }}
                placeholder="Extention"
                type="number"
              />
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.experience}
                onChange={(e) => {
                  setData({ ...data, experience: e.target.value });
                }}
                placeholder="Detailed practical experience"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.skills}
                onChange={(e) => {
                  setData({ ...data, skills: e.target.value });
                }}
                placeholder="Languages skills"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.it_skills}
                onChange={(e) => {
                  setData({ ...data, it_skills: e.target.value });
                }}
                placeholder="IT skills"
                type="text"
              />
            </div>
            <div className="my-3 input_1">
              <label htmlFor="file1">
                <p>Upload last academic certificate</p>
                <img src={file} alt="" width="30" />
              </label>
              <input
                className="input text-light"
                id="file1"
                type="file"
                onChange={(e) => setFile1(e.target.files)}
                multiple
              />
            </div>
            <div className="my-3 input_1">
              <label htmlFor="file2">
                <p>Upload Other certificate orobtained</p>
                <img src={file} alt="" width="30" />
              </label>
              <input
                className="input text-light"
                name="uploadFile"
                id="file2"
                placeholder="Upload file"
                type="file"
                onChange={(e) => setFile2(e.target.files)}
                multiple
              />
            </div>
          </div>
          <button className="mx-3 submit" type="submit">
            Register
          </button>
        </form>
      </section>
      <div className="background3">
        <img src={individuals} alt="" />
      </div>
    </div>
  );
}

export default RegisterIndividuals;
