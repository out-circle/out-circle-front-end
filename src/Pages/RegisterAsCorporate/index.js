import { useState , useEffect } from "react";
import { BsPersonPlus } from "react-icons/bs";
import back from "../../Assets/images/back.png";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import PersonalInfo from "./steps/PersonalInfo";
import CompanyInfo from "./steps/CompanyInfo";
import corporate from "../../Assets/images/Mask Group -1.png";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function RegisterCorporate() {
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
      errors.username = "Please enter a username";
    }
    if (data.password.length < 8) {
      errors.password = "Password must contain at least 8 characters";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }
    return errors;
  }


  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Please enter a username";
    }
    if (values.password.length < 8) {
      errors.password = "Password must contain at least 8 characters";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }
    if(!data.companyName){
      errors.companyName="Please enter the company name"
    }
    if(!data.typeCompany){
      errors.typeCompany="Please enter the type of company"
    }
    if(!data.companyDate){
      errors.companyDate = "Please enter company record history"
    }
    if(!data.currentCity){
      errors.currentCity = "Please enter the currnet city"
    }
    if(!data.currentAddress){
      errors.currentAddress = "Please enter the currnet address"
    }
    if(!data.detaileBusiness){
      errors.detaileBusiness = "Please enter company's detaild business"
    }
    if(!data.companyEmail){
      errors.companyEmail = "Please enter the company email"
    }else if (!regex.test(data.companyEmail)) {
      errors.companyEmail = "Invalid email format";
    }
    if(!num){
      errors.num = "Please enter mobile number"
    }
    if(!data.actualStart){
      errors.actualStart = "Please enter actual start date"
    }
    if(!data.number_partners){
      errors.number_partners = "Please enter the number partners"
    }else if( data.number_partners < 2){
      errors.number_partners = "Less than 2 partners cannot be entered"
    }
    if(!data.companyRecord){
      errors.companyRecord = "Please enter the company record"
    }
    if(!data.file_record){
      errors.file_record = "Please enter this field"
    }
    if(!data.establContract){
      errors.establContract = "Please enter this field"
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
      toast.error("Please enter all your data in the fields");
    } else {
      const formData = new FormData();
      data_.map((item) => formData.append(item.key, item.value));
      const errors = Object.values(validate(data));

      if (data.file_record) {
        for (let i = 0; i < data.file_record.length; i++) {
            formData.append("file1" + i, data.file_record[i]);
        }}

        if (data.file_record) {
          for (let i = 0; i < data.file_record.length; i++) {
              formData.append("file1" + i, data.file_record[i]);
          }}

          if (data.establContract) {
            for (let i = 0; i < data.establContract.length; i++) {
                formData.append("file1" + i, data.establContract[i]);
            }}

      if (errors.length === 0) {
        Axios.post(`${BASE_API_URL}/api/companies/add-new-user`, formData)
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
            } else if (
              data1 ===
              "عذراً ، توجد شركة تحمل نفس رقم السجل ، الرجاء إدخال رقم سجل آخر ..."
            ) {
              toast.error(
                "Sorry, there is a company with the same registration number, please enter another registration number..."
              );
            } else {
              toast.success("Your account has been created successfully");
              localStorage.setItem("number_partners", data.number_partners);
              localStorage.setItem("company_id" , data1);
              setTimeout(() => navigate("/add-partners"), 2000);
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
        <PersonalInfo
          formErrors={formErrors}
          page={page}
          setPage={setPage}
          data={data}
          setData={setData}
        />
      );
    } else if (page === 1) {
      return (
        <CompanyInfo
          formErrors={formErrors}
          num={num}
          setNum={setNum}
          data={data}
          setData={setData}
        />
      );
    }
  };
  const FormTitle = ["Personal Information", "Company Information"];
  return (
    <div className="registerCorporate">
      <header>
        <Link to="/register">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <div>
        <Toaster />
      </div>
      <section className="register1">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">New User / Corporate</span>
        </header>
        <div className="form-container">
          <div className="header">
            <h2>{FormTitle[page]}</h2>
          </div>
          <div className="body">{displayPage()}</div>
          <div className="footer">
            <button
              className="next mt-3 ms-2 py-1 px-4"
              disabled={page === 0}
              onClick={(currPage) => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
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
              {page === FormTitle.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </section>
      <div className="background2">
        <img src={corporate} alt="" />
      </div>
    </div>
  );
}

export default RegisterCorporate;
