import { useState , useEffect } from 'react'
import './index.css';
import {Link , useNavigate} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import {BsPersonPlus} from "react-icons/bs";
import institute from '../../Assets/images/ar_photo/institute.png';
import PersonalInfoAr from './steps/PersonalInfo/index-ar';
import InstituteInfoAr from './steps/InstituteInfo/index-ar';
import Axios from 'axios';
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";


function RegisterInstituse() {

  const [formErrors, setFormErrors] = useState({});

  const [page , setPage] = useState(0)
  const navigate = useNavigate();
  const[ num , setNum ] = useState("");
  const[ file1 , setFile1 ] = useState();

  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);


  const [data , setData] = useState({
    username:"",
    password:"",
    confirm_password:"",
    full_name:"",
    born_date:"",
    whatsapp_number:"",
    email:"",
    institute_name:"",
    record_history:"",
    record_number:"",
    current_city:"",
    current_address:"",
    institute_email:"",
    detailed_business:"",
    start_date:"",
    phone_number:"",
    fax_number:"",
    landline_number:""
  })


  const data_ = [
    {
      key:"user_name",
      value:data.username
    },{
      key:"password",
      value:data.password
    },{
      key:"full_name",
      value:data.full_name
    },{
      key:"birthday",
      value:data.born_date
    },{
      key:"phone_number",
      value:num,
    },{
      key:"whatsapp_number",
      value:data.whatsapp_number
    },{
      key:"user_email",
      value:data.email
    },{
      key:"institute_name",
      value:data.institute_name
    },{
      key:"institute_record_number",
      value:data.record_number
    },{
      key:"institute_record_history",
      value:data.record_history
    },{
      key:"city",
      value:data.current_city
    },{
      key:"current_address",
      value:data.current_address
    },{
      key:"current_institute_activity_details",
      value:data.detailed_business
    },{
      key:"email",
      value:data.institute_email
    },{
      key:"work_start_date",
      value:data.start_date
    },{
      key:"landline_number",
      value:data.phone_number
    },{
      key:"fax_number",
      value:data.fax_number
    },{
      key:"land_phone_extension",
      value:data.landline_number
    }
  ]

   //--------------add validation ----------

   const validate_ = (values)=> {
    const errors = {};
    if(!values.username){
      errors.username = "من فضلك أدخل اسم المستخدم";
    }
    if (values.password.length < 8) {
      errors.password = "كلمة السر يجب أن تحوي على الأقل 8 محارف";
    }
    if (values.password !== values.confirm_password) {
      errors.confirm_password = "يجب أن تتطابق كلمات المرور";
    }
    if(!values.full_name){
      errors.full_name = "من فضلك أدخل اسمك الكامل";
    }
    if(!values.born_date){
      errors.born_date = "من فضلك أدخل المواليد";
    }
    if(!num){
      errors.num = "من فضلك أدخل رقم الموبايل";
    }
    return errors;
  }

   const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.institute_name){
      errors.institute_name = "من فضلك أدخل اسم المؤسسة";
    }
    if(!values.record_number){
      errors.record_number = "من فضلك أدخل رقم سجل المؤسسة";
    }
    if(!values.record_history){
      errors.record_history = "من فضلك أدخل تاريخ سجل المؤسسة";
    }
    if(!values.current_city){
      errors.current_city = "من فضلك أدخل محافظتك";
    }
    if(!values.current_address){
      errors.current_address = "من فضلك أدخل عنوانك الحالي";
    }
    if(!values.detailed_business){
      errors.detailed_business = "من فضلك ادخل هذا الحقل";
    }
    if(!values.start_date){
      errors.start_date = "من فضلك ادخل هذا الحقل";
    }
    if(!values.institute_email){
      errors.institute_email = "من فضلك ادخل هذا الحقل";
    }else if (!regex.test(data.institute_email)) {
      errors.institute_email = "تنسيق البريد الإلكتروني غير صالح";
    }
    if(!file1){
      errors.file1 = "الرجاء تحميل سجل الشركة";
    }
    return errors;
  };

  const BASE_API_URL = useSelector(state => state.BASE_API_URL);

  const handleSubmit = () => {
    setFormErrors(validate(data))
    if(data.record_number === "" && data.institute_email === ""){
      toast.error("من فضلك أدخل بياناتك في الحقول")
    }else{
    const formData = new FormData();
    data_.map((item)=>(
      formData.append(item.key , item.value)
    ))

    if (file1) {
      for (let i = 0; i < file1.length; i++) {
          formData.append("file1" + i, file1[i]);
      }}

    const errors = Object.values(validate(data));
    if(errors.length === 0){
    Axios.post(`${BASE_API_URL}/api/institutes/add-new-user`, formData)
      .then((res) => {
        const data1 = res.data;
        if(typeof(data1) === "string"){
            toast.error(data1)
        }else{
            toast.success("تم إنشاء حسابك بنجاح")
            setTimeout(() => navigate("/login-ar") , 2000);
          }
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }
  }

  const displayPage = ()=>{
    if(page === 0){
      return <PersonalInfoAr formErrors={formErrors} num={num} setNum={setNum}  setData={setData} data={data}/>
    }else if(page === 1){
      return <InstituteInfoAr formErrors = {formErrors} setFile1={setFile1} setData={setData} data={data} />
    } 
  }
  const FormTitle = ["معلومات شخصية" , "معلومات المؤسسة"]
  return (
    <div className='instituse'>
        <header>
        <Link to="/register-ar" className="back_ar">
            <span>رجوع</span>
            <img src={back} alt=""/>
        </Link>
        </header>
        <section className='register2_ar'>
        <header>
            <span className='icon'><BsPersonPlus/></span>
            <span className='text'>مستخدم جديد / مؤسسة</span>
        </header>
        <div><Toaster/></div>
        <div className='form-container'>
            <div className='header'>
            <h2>{FormTitle[page]}</h2>
            </div>
            <div className='body'>
            {displayPage()}
            </div>
            <div className='footer'>
            <button
            className='next mt-3 ms-2 py-1 px-4'
            onClick={(currPage) => {
                if(page === FormTitle.length-1){
                    handleSubmit()
                }else{
                  setFormErrors(validate_(data));
                  const errors_ = Object.values(validate_(data));
                  if(errors_.length === 0){
                  setPage((currPage) => currPage + 1);
                  }
                }
            }}>
                {page === FormTitle.length-1 ? "إرسال" : "التالي"}
            </button>
            <button
                className='next mt-3 ms-2 py-1 px-4'
                disabled={page === 0}
                onClick={(currPage) => {
                setPage((currPage) => currPage - 1);
            }}>السابق</button>
            </div>
            </div>
        </section>
        <div className='background2_ar'>
            <img src={institute} alt=""/>
        </div>
    </div>
  )
}

export default RegisterInstituse;