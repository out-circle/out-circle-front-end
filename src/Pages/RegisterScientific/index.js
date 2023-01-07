import { useRef, useState, useEffect } from "react";
import "./index.css";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import back from "../../Assets/images/back.png";
import { BsPersonPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import file from "../../Assets/images/file.png";
import image from "../../Assets/images/Mask Group -4.png";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";


const schema = yup.object({
  username: yup.string().required("Please Enter your username"),
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
  scientific_specialization: yup
    .string()
    .required("Please enter your scientific specialization"),
});

function RegisterScientific() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [data, setData] = useState({
    username: "",
    password: "",
    comfirm_password: "",
    email: "",
    full_name: "",
    born_date: "",
    current_city: "",
    current_address: "",
    scientific_specialization: "",
    start_date: "",
    whatsapp_number: "",
    phone_number: "",
  });
  const [num, setNum] = useState("");

  const [file1, setFile1] = useState();

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);
  const navigate = useNavigate();

  const [formError , setFormError] = useState({});

  const validate = (n) => {
    let errors={};
    if(n === ""){
      errors.num = "Please enter your mobile number";
    }
    return errors;
  }

  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);

  const ref1 = useRef();
  const ref2 = useRef();
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
      key: "craftsmanship",
      value: data.scientific_specialization,
    },
    {
      key: "landline_number",
      value: data.phone_number,
    },
    {
      key: "phone_number",
      value: num,
    },
    {
      key: "whatsapp_number",
      value: data.whatsapp_number,
    },
    {
      key: "work_start_date",
      value: data.start_date,
    }
  ];

  const onSubmit = () => {

    setFormError(validate(num));

    const formData = new FormData();
    data_.map((item) => formData.append(item.key, item.value));

    for (let i = 0; i < file1.length; i++) {
      formData.append("file1" + i, file1[i]);
    }

    const errors = Object.values(validate(num));

    if(errors.length === 0){
    Axios.post(`${BASE_API_URL}/api/scientific-careers/add-new-user`, formData)
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
  return (
    <div className="scientific">
      <header>
        <Link to="/register">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="register3">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">New User / Profisional Scientific</span>
        </header>
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="bar">
            <div></div>
            <div className="my-3 input_">
              <input
                {...register("username")}
                value={data.username}
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
                placeholder="User name"
                className="input"
                type="text"
              />
              <br />
              <span style={{ color: "red" }}>{errors.username?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                {...register("password")}
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                placeholder="Password"
                className="input"
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
                value={data.full_name}
                onChange={(e) => {
                  setData({ ...data, full_name: e.target.value });
                }}
                placeholder="Full Name"
                className="input"
                type="text"
              />
              <br />
              <span style={{ color: "red" }}>{errors.full_name?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                required
                value={data.born_date}
                onChange={(e) => {
                  setData({ ...data, born_date: e.target.value });
                }}
                ref={ref1}
                type="text"
                placeholder="Born date"
                onFocus={() => (ref1.current.type = "date")}
                onBlur={() => (ref1.current.type = "text")}
                className="input"
              />
            </div>
            <div className="my-3 input_">
              <input
                {...register("current_city")}
                value={data.current_city}
                onChange={(e) => {
                  setData({ ...data, current_city: e.target.value });
                }}
                className="input"
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
                value={data.current_address}
                onChange={(e) => {
                  setData({ ...data, current_address: e.target.value });
                }}
                className="input"
                placeholder="Current Address"
                type="text"
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.current_address?.message}
              </span>
            </div>
            <div className="my-3 input_">
              <textarea
                {...register("scientific_specialization")}
                style={{ resize: "none" }}
                value={data.scientific_specialization}
                onChange={(e) => {
                  setData({
                    ...data,
                    scientific_specialization: e.target.value,
                  });
                }}
                className="input"
                placeholder="Scientific specialization"
                type="text"
              ></textarea>
              <br />
              <span style={{ color: "red" }}>
                {errors.scientific_specialization?.message}
              </span>
            </div>
            <div className="my-3 input_">
              <input
                required
                value={data.start_date}
                onChange={(e) => {
                  setData({ ...data, start_date: e.target.value });
                }}
                className="input"
                ref={ref2}
                onFocus={() => (ref2.current.type = "date")}
                onBlur={() => (ref2.current.type = "text")}
                placeholder="Actaul start date"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <input
                value={data.phone_number}
                onChange={(e) => {
                  setData({ ...data, phone_number: e.target.value });
                }}
                className="input"
                placeholder="Phone number"
                type="number"
              />
              <br />
            </div>
            <div className="my-3 input_">
              <ReactPhoneInput
                value={num}
                onChange={setNum}
                className="phone_number"
                placeholder="Mobile number"
                defaultCountry="sy"
                enableSearchField
              />
              {formError.num && (<span className="error" style={{ color: "red" }}>{formError.num}</span>)}
            </div>
            <div className="my-3 input_">
              <input
                value={data.whatsapp_number}
                onChange={(e) => {
                  setData({ ...data, whatsapp_number: e.target.value });
                }}
                className="input"
                placeholder="Whatsapp number"
                type="number"
              />
            </div>
            <div className="my-3 input_">
              <input
                {...register("email")}
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                className="input"
                placeholder="Email Address"
                type="email"
              />
              <br />
              <span style={{ color: "red" }}>{errors.email?.message}</span>
            </div>
            <div className="my-3 input_1">
              <label htmlFor="file1">
                <p>Upload work license and certificate</p>
                <img src={file} alt="" width="30" />
              </label>
              <input
                required
                onChange={(e) => setFile1(e.target.files)}
                className="input text-light"
                name="uploadFile"
                id="file1"
                type="file"
                multiple
              />
              <br />
            </div>
          </div>
          <button className="mx-3 submit" type="submit">
            Register
          </button>
        </form>
      </section>
      <div className="background1">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default RegisterScientific;
