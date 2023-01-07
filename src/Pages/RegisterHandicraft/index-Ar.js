import React, { useRef, useState, useEffect } from "react";
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
import image from "../../Assets/images/ar_photo/handicraft.png";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

 
const schema = yup.object({
  username: yup.string().required("من فضلك أدخل اسم المستخدم"),
  email: yup.string().email().required("من فضلك أدخل ايميلك"),
  password: yup
    .string()
    .required("من فضلك أدخل كلمة المرور")
    .min(8, "كلمة المرور يجب ان تحوي 8 محارف على الأقل"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "يجب ان تتطابق كلمات المرور"),
  full_name: yup.string().required("من فضلك أدخل اسمك الكامل"),
  current_city: yup.string().required("من فضلك أدخل مدينتك الحالية"),
  current_address: yup.string().required("من فضلك أدخل عنوانك الحالي"),
  craft_specialization: yup.string().required("من فضلك أدخل تخصصك الحرفي"),
  current_work: yup.string().required("من فضلك أدخل عنوان عملك الحالي"),
});

function RegisterHandicraftAr() {
  const [data, setData] = useState({
    username: "",
    password: "",
    comfirm_password: "",
    email: "",
    full_name: "",
    born_date: "",
    current_city: "",
    current_address: "",
    scientific_certificate: "",
    craft_specialization: "",
    start_date: "",
    work_address: "",
    whatsapp_number: "",
    phone_number: ""
  });
  const [num1, setNum1] = useState("");
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const ref1 = useRef();
  const ref2 = useRef();
  const navigate = useNavigate();
  const [formError , setFormError] = useState({});

  const validate = (n) => {
    let errors={};
    if(n === ""){
      errors.num1 = "من فضلك أدخل رقم الموبايل";
    }
    return errors;
  }


  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);


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
      value: data.scientific_certificate,
    },
    {
      key: "craftsmanship",
      value: data.craft_specialization,
    },
    {
      key: "phone_number",
      value:num1,
    },
    {
      key: "landline_number",
      value: data.phone_number,
    },
    {
      key: "whatsapp_number",
      value: data.whatsapp_number,
    },
    {
      key: "work_address",
      value: data.work_address,
    },
    {
      key: "work_start_date",
      value: data.start_date,
    }
  ];

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

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
    Axios.post(`${BASE_API_URL}/api/craftsmen/add-new-user`, formData)
      .then((res) => {
        const data1 = res.data;
        if (typeof data1 === "string") {
          toast.error(data1);
        } else {
          toast.success("تم إنشاء حسابك بنجاح");
          setTimeout(() => navigate("/login-ar"), 2000);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    }
  };

  return (
    <div className="register_handicraft">
      <header>
        <Link to="/register-ar" className="back_ar">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="register3_ar">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">مستخدم جديد / حرفيين</span>
        </header>
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bar">
            <div></div>
            <div className="my-3 input_">
              <input
                {...register("username")}
                value={data.username}
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
                placeholder="اسم المستخدم"
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
                placeholder="كلمة المرور"
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
                placeholder="تأكيد كلمة المرور"
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
                placeholder="الاسم الكامل"
                className="input"
                type="text"
                value={data.full_name}
                onChange={(e) => {
                  setData({ ...data,full_name: e.target.value });
                }}
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
                placeholder="المواليد"
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
                placeholder="المحافظة"
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
                placeholder="العنوان الحالي"
                type="text"
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.current_address?.message}
              </span>
            </div>
            <div className="my-3 input_">
              <textarea
                style={{ resize: "none" }}
                value={data.scientific_certificate}
                onChange={(e) => {
                  setData({ ...data, scientific_certificate: e.target.value });
                }}
                className="input"
                placeholder="الشهادة العلمية"
                type="text"
              ></textarea>
            </div>
            <div className="my-3 input_">
              <textarea
                style={{ resize: "none" }}
                {...register("craft_specialization")}
                value={data.craft_specialization}
                onChange={(e) => {
                  setData({ ...data, craft_specialization: e.target.value });
                }}
                className="input"
                placeholder="الاختصاص الحرفي"
                type="text"
              ></textarea>
              <br />
              <span style={{ color: "red" }}>
                {errors.craft_specialization?.message}
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
                placeholder="تاريخ بدء العمل الفعلي"
                type="text"
              />
            </div>
            <div className="my-3 input_">
              <input
                {...register("current_work")}
                value={data.work_address}
                onChange={(e) => {
                  setData({ ...data, work_address: e.target.value });
                }}
                className="input"
                placeholder="عنوان العمل الحالي"
                type="text"
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.current_work?.message}
              </span>
            </div>
            <div className="my-3 input_">
              <ReactPhoneInput
                value={num1}
                onChange={setNum1}
                className="phone_number"
                placeholder="رقم الموبايل"
                defaultCountry="sy"
                enableSearchField
              />
              {formError.num1 && (<span className="error" style={{ color: "red" }}>{formError.num1}</span>)}
            </div>
            <div className="my-3 input_">
              <input
                value={data.phone_number}
                onChange={(e) => {
                  setData({ ...data, phone_number: e.target.value });
                }}
                className="input"
                placeholder="الهاتف الأرضي"
                type="number"
              />
            </div>
            <div className="my-3 input_">
              <input
                value={data.whatsapp_number}
                onChange={(e) => {
                  setData({ ...data, whatsapp_number: e.target.value });
                }}
                className="input"
                placeholder="رقم الواتس أب"
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
                placeholder="البريد الألكتروني"
                type="email"
              />
              <br />
              <span style={{ color: "red" }}>{errors.email?.message}</span>
            </div>
            <div className="my-3 input_1">
              <label htmlFor="file2">
                <p className="text-center">تحميل رخصة العمل</p>
                <img src={file} alt="" width="30" />
              </label>
              <input
                onChange={(e) => setFile1(e.target.files)}
                className="input text-light"
                name="uploadFile"
                id="file2"
                placeholder="Upload file"
                type="file"
                multiple
              />
            </div>
            <div className="my-3 input_1">
              <label htmlFor="file2">
                <p className="text-center">تحميل نماذج أعمال الحرفة</p>
                <img src={file} alt="" width="30" />
              </label>
              <input
                onChange={(e) => setFile2(e.target.files)}
                className="input text-light"
                name="uploadFile"
                id="file2"
                placeholder="Upload file"
                type="file"
                multiple
              />
            </div>
          </div>
          <button className="mx-3 submit" type="submit">
            تسجيل
          </button>
        </form>
      </section>
      <div className="background2_ar">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default RegisterHandicraftAr;
