import React, { useState, useEffect } from "react";
import { BsPersonPlus } from "react-icons/bs";
import back from "../../Assets/images/back.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PersonalInfoAr from "./steps/PersonalInfo/index-ar";
import CompanyInfoAr from "./steps/CompanyInfo/index-ar";
import corporate from "../../Assets/images/ar_photo/corporate.png";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function RegisterCorporateAr() {
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const [num, setNum] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bornDate: "",
    mobileNumber: "",
    fullName: "",
    whatsNumber: "",
    companyName: "",
    typeCompany: "",
    companyRecord: "",
    companyDate: "",
    currentCity: "",
    currentAddress: "",
    detaileBusiness: "",
    companyEmail: "",
    companyMobile: "",
    actualStart: "",
    phoneNumber: "",
    faxNumber: "",
    number_partners: "",
    file_record: "",
    establContract: "",
  });
  const data_ = [
    {
      key: "user_name",
      value: data.username,
    },
    {
      key: "company_name",
      value: data.companyName,
    },
    {
      key: "company_type",
      value: data.typeCompany,
    },
    {
      key: "company_record_history",
      value: data.companyDate,
    },
    {
      key: "city",
      value: data.currentCity,
    },
    {
      key: "current_address",
      value: data.currentAddress,
    },
    {
      key: "current_company_activity_details",
      value: data.detaileBusiness,
    },
    {
      key: "phone_number",
      value: num,
    },
    {
      key: "work_start_date",
      value: data.actualStart,
    },
    {
      key: "landline_number",
      value: data.phoneNumber,
    },
    {
      key: "fax_number",
      value: data.faxNumber,
    },
    {
      key: "number_of_partners",
      value: data.number_partners,
    },
    {
      key: "company_record_number",
      value: data.companyRecord,
    },
    {
      key: "email",
      value: data.companyEmail,
    },
    {
      key: "password",
      value: data.password,
    }
  ];

  //--------------add validation ----------


  const validate_ = ()=>{
    let errors ={};
    if (!data.username) {
      errors.username = "من فضلك ادخل اسم المستخدم";
    }
    if (data.password.length < 8) {
      errors.password = "كلمة المرور يجب ان تحوي 8 محارف على الأقل";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "يجب ان تتطابق كلمات المرور";
    }
    return errors;
  }

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "من فضلك ادخل اسم المستخدم";
    }
    if (values.password.length < 8) {
      errors.password = "كلمة المرور يجب ان تحوي 8 محارف على الأقل";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "يجب ان تتطابق كلمات المرور";
    }
    if(!data.companyName){
      errors.companyName="من فضلك أدخل اسم الشركة"
    }
    if(!data.typeCompany){
      errors.typeCompany="من فضلك أدخل نوع الشركة"
    }
    if(!data.companyDate){
      errors.companyDate = "من فضلك أدخل تاريخ سجل الشركة"
    }
    if(!data.currentCity){
      errors.currentCity = "من فضلك أدخل اسم المحافظة"
    }
    if(!data.currentAddress){
      errors.currentAddress = "من فضلك أدخل العنوان الحالي"
    }
    if(!data.detaileBusiness){
      errors.detaileBusiness = "من فضلك أدخل تفاصيل نشاط الشركة الحالي"
    }
    if(!data.companyEmail){
      errors.companyEmail = "من فضلك أدخل البريد الألكتروني للشركة"
    }else if (!regex.test(data.companyEmail)) {
      errors.companyEmail = "تنسيق بريد إلكتروني غير صالح";
    }
    if(!num){
      errors.num = "من فضلك أدخل رقم الموبايل"
    }
    if(!data.actualStart){
      errors.actualStart = "من فضلك أدخل تاريخ بدء العمل الفعلي"
    }
    if(!data.number_partners){
      errors.number_partners = "من فضلك أدخل عدد الشركاء"
    }else if( data.number_partners < 2){
      errors.number_partners = "لا يمكن إدخال اقل من 2 شريك/"
    }
    if(!data.companyRecord){
      errors.companyRecord = "من فضلك أدخل رقم سجل الشركة"
    }
    if(!data.file_record){
      errors.file_record = "الرجاء تحميل سجل الشركة"
    }
    if(!data.establContract){
      errors.establContract = "الرجاء تحميل عقد تأسيس الشركة"
    }
    return errors;
  };

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const handleSubmit = () => {
    setFormErrors(validate(data));
    if (
      !data.password ||
      !data.companyName ||
      !data.number_partners ||
      !data.companyEmail ||
      !data.companyRecord ||
      !data.file_record ||
      !data.establContract
    ) {
      toast.error("من فضلك أدخل كامل بياناتك في الحقول");
    } else {
      const formData = new FormData();
      data_.map((item) => formData.append(item.key, item.value));

      if (data.file_record) {
        for (let i = 0; i < data.file_record.length; i++) {
            formData.append("file1" + i, data.file_record[i]);
        }}

        if (data.establContract) {
          for (let i = 0; i < data.establContract.length; i++) {
              formData.append("file1" + i, data.establContract[i]);
          }}

      const errors = Object.values(validate(data));
      if (errors.length === 0) {
        Axios.post(`${BASE_API_URL}/api/companies/add-new-user`, formData)
          .then((res) => {
            const data1 = res.data;
              if(typeof data1 === "string"){
                toast.error(data1)
              }
            else {
              toast.success("تم إنشاء حسابك بنجاح");
              localStorage.setItem("number_partners", data.number_partners);
              localStorage.setItem("company_id" , data1);
              setTimeout(() => navigate("/add-partners-ar"), 2000);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  };

  const displayPage = () => {
    if (page === 0) {
      return (
        <PersonalInfoAr
          formErrors={formErrors}
          page={page}
          setPage={setPage}
          data={data}
          setData={setData}
        />
      );
    } else if (page === 1) {
      return (
        <CompanyInfoAr
          formErrors={formErrors}
          num={num}
          setNum={setNum}
          data={data}
          setData={setData}
        />
      );
    }
  };
  const FormTitle = ["معلومات شخصية", "معلومات الشركة"];
  return (
    <div className="registerCorporate">
      <header>
        <Link to="/register-ar" className="back_ar">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <div>
        <Toaster />
      </div>
      <section className="register1_ar">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">مستخدم جديد / شركة</span>
        </header>
        <div className="form-container">
          <div className="header">
            <h2>{FormTitle[page]}</h2>
          </div>
          <div className="body">{displayPage()}</div>
          <div className="footer">
            <button
              className="next mt-3 ms-2 py-1 px-4"
              onClick={(currPage) => {
                if (page === FormTitle.length - 1) {
                  handleSubmit();
                } else {
                  setFormErrors(validate_())
                  const errors_ = Object.values(validate_());
                  if(errors_.length === 0){
                  setPage((currPage) => currPage + 1);
                  }
                }
              }}
            >
              {page === FormTitle.length - 1 ? "إرسال" : "التالي"}
            </button>
            <button
              className="next mt-3 ms-2 py-1 px-4"
              disabled={page === 0}
              onClick={(currPage) => {
                setPage((currPage) => currPage - 1);
              }}
            >
              السابق
            </button>
          </div>
        </div>
      </section>
      <div className="background2-ar">
        <img src={corporate} alt="" />
      </div>
    </div>
  );
}

export default RegisterCorporateAr;
