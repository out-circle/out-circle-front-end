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
import individuals from "../../Assets/images/ar_photo/Mask Group -6.png";
import file from "../../Assets/images/file.png";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";



const schema = yup.object({
    user_name: yup.string().required("من فضلك إدخل اسم المستخدم"),
    email: yup.string().email().required("من فضلك أدخل بريدك الإلكتروني"),
    password: yup.string().required("من فضلك إدخل كلمة المرور").min(8, "كلمة المرور يجب ان تحوي 8 محارف على الأقل"),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], 'يجب ان تتطابق كلمات المرور'),
    full_name:yup.string().required("من فضلك ادخل اسمك الكامل"),
    current_city:yup.string().required("من فضلك إدخل مدينتك الحالية"),
    current_address:yup.string().required("من فضلك إدخل عنوانك الحالي"),
    current_work:yup.string().required("من فضلك أدخل عملك الحالي"),
  }).required();

function RegisterIndividualsAr() {
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
      errors.num1 = "من فضلك أدخل رقم الموبايل";
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
      key:"user_name",
      value:data.username
    },{
      key:"email",
      value:data.email
    },{
      key:"password",
      value:data.password
    },{
      key:"confirm_password",
      value:data.confirm_password
    },{
      key:"birthday",
      value:data.born_date
    },{
      key:"full_name",
      value:data.full_name
    },{
      key:"city",
      value:data.current_city
    },{
      key:"current_address",
      value:data.current_address
    },{
      key:"scientific_certificate",
      value:data.scientific_sertificate
    },{
      key:"phone_number",
      value:num1
    },{
      key:"whatsapp_number",
      value:data.whatsapp_number
    },{
      key:"current_work",
      value:data.current_work
    },{
      key:"scientific_certificate_details",
      value:data.academic_certificate
    },{
      key:"work_address",
      value:data.work_address
    },{
      key:"work_start_date",
      value:data.work_date
    },{
      key:" business_phone_number",
      value:data.work_number
    },{
      key:"extention",
      value:data.extention
    },{
      key:"scientific_experience_details",
      value:data.experience
    },{
      key:"language_skills",
      value:data.skills
    },{
      key:"technical_skills",
      value:data.it_skills
    }
  ]
  const onSubmit =() => {

    setFormError(validate(num1));

    const formData = new FormData();
    data_.map((item)=>(
      formData.append(item.key , item.value)
    ))

    const errors = Object.values(validate(num1));

    if (file2) {
      for (let i = 0; i < file2.length; i++) {
          formData.append("file2" + i, file2[i]);
      }}
    
  if (file1) {
    for (let i = 0; i < file1.length; i++) {
        formData.append("file1" + i, file1[i]);
    }}

    if(errors.length === 0){
    Axios.post(`${BASE_API_URL}/api/individuals/add-new-user`, formData)
      .then((res) => {
        const data1 = res.data;
        if(typeof(data1) === "string"){
          toast.error(data1)
        }else{
          toast.success("تم إنشاء حسابك بنجاح");
          localStorage.setItem("user_individuals", JSON.stringify({ ...data }));
          localStorage.setItem("users", JSON.stringify({ ...data }));
          setTimeout(() => navigate("/login-ar") , 2000);
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
        <Link to="/register-ar" className="back_ar">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="body_ar">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">مستخدم جديد / أفراد</span>
        </header>
        <div><Toaster /></div>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="bar">
            <div className="my-3 input_">
              <input
              {...register("user_name")}
                className="input"
                value={data.username}
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
                placeholder="اسم المستخدم"
                type="text"
                name="user_name"
              /><br/>
              <span style={{color:"red"}}>{errors.user_name?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                {...register("password")}
                className="input"
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                placeholder="كلمة المرور"
                type="password"
              /><br/>
              <span style={{color:"red"}}>{errors.password?.message}</span>
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
              /><br/>
            <span style={{color:"red"}}>{errors.confirm_password?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                  {...register("full_name")}
                className="input"
                value={data.full_name}
                onChange={(e) => {
                  setData({ ...data, full_name: e.target.value });
                }}
                placeholder="الاسم الكامل"
                type="text"
              /><br/>
              <span style={{color:"red"}}>{errors.full_name?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                required
                className="input"
                ref={ref1}
                type="text"
                placeholder="المواليد"
                value={data.born_date}
                onChange={(e) => {
                  setData({ ...data, born_date: e.target.value });
                }}
                onFocus={() => (ref1.current.type = "date")}
                onBlur={() => (ref1.current.type = "text")}
              />
            </div>
            <div className="my-3 input_">
              <input
              {...register("current_city")}
                className="input"
                value={data.current_city}
                onChange={(e) => {
                  setData({ ...data, current_city: e.target.value });
                }}
                placeholder="المحافظة"
                type="text"
              /><br/>
              <span style={{color:"red"}}>{errors.current_city?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
              {...register("current_address")}
                className="input"
                value={data.current_address}
                onChange={(e) => {
                  setData({ ...data, current_address: e.target.value });
                }}
                placeholder="العنوان الحالي"
                type="text"
              /><br/>
              <span style={{color:"red"}}>{errors.current_address?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.scientific_sertificate}
                onChange={(e) => {
                  setData({ ...data, scientific_sertificate: e.target.value });
                }}
                placeholder="الشهادة العلمية"
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
                placeholder="تفاصيل الشهادة العلمية"
                type="text"
              />
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
                className="input"
                value={data.whatsapp_number}
                onChange={(e) => {
                  setData({ ...data, whatsapp_number : e.target.value });
                }}
                placeholder="رقم الواتس أب"
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
                placeholder="البريد الألكتروني"
                type="email"
              /><br/>
              <span style={{color:"red"}}>{errors.email?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                {...register("current_work")}
                className="input"
                value={data.current_work}
                onChange={(e) => {
                  setData({ ...data, current_work: e.target.value });
                }}
                placeholder="العمل الحالي"
                type="text"
              />
              <span style={{color:"red"}}>{errors.current_work?.message}</span>
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.work_address}
                onChange={(e) => {
                  setData({ ...data, work_address: e.target.value });
                }}
                placeholder="عنوان العمل"
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
                placeholder="تاريخ بدء العمل"
              />
            </div>
            <div className="my-3 input_">
              <input
                className="input"
                value={data.work_number}
                onChange={(e) => {
                  setData({ ...data, work_number: e.target.value });
                }}
                placeholder="رقم هاتف العمل"
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
                placeholder="التحويلة"
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
                placeholder="تفاصيل الخبرات العملية"
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
                placeholder="المهارات اللغوية"
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
                placeholder="المهارات التقنية"
                type="text"
              />
            </div>
            <div className="my-3 input_1">
              <label htmlFor="file1">
                <p>تحميل الشهادة العلمية الأخيرة</p>
                <img src={file} alt="" width="30" />
              </label>
              <input multiple className="input text-light" id="file1" type="file" onChange={(e) => setFile1(e.target.files)}/>
            </div>
            <div className="my-3 input_1">
              <label htmlFor="file2">
                <p>تحميل شهادات أخرى أو دورات تدريبية</p>
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
            تسجيل
          </button>
        </form>
      </section>
      <div className="background3_ar">
        <img src={individuals} alt="" />
      </div>
    </div>
  );
}

export default RegisterIndividualsAr;