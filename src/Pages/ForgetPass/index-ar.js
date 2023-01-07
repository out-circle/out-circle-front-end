import React , {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import password from '../../Assets/images/password.svg'
import './index'
import Axios from "axios";
import image from '../../Assets/images/ar_photo/login.png'
import './index.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const schema = yup
  .object({
    email: yup.string().email().required("اكتب ايميلك من فضلك"),
  }).required();

const ForgetPassAr = () => {
  const [email , setEmail] = useState("");
  const { register, handleSubmit , formState:{errors}} = useForm({resolver: yupResolver(schema)});
  const navigate = useNavigate()
  
  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const onSubmit = () => {
    Axios.post(`${BASE_API_URL}/api/users/forget-password?email=${email}`)
    .then(res => {
      const response = res.data
      if(typeof response === "string"){
        toast.error("...عذرا الحساب غير موجود")
      }else{
        setTimeout(() => {
          navigate('/reset-password-ar')
        }, 4000);
        toast.success("...تحقق من بريدك الالكتروني");
        localStorage.setItem("user_id",response.user_id);
        localStorage.setItem("account_type",response.account_type);
        localStorage.setItem("code",response.code[0]);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="forgetpass">
    <div><Toaster/></div>
    <div className='body_ar'>
        <header>
            <img src={password} alt=""/>
            <h2>!نسيت كلمة المرور</h2>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
            <div className='pass'>
            <label>أكتب ايميلك من فضلك</label>
            <input type="email"  {...register("email")} value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
            <span>{errors.email?.message}</span>
            </div>
            <button type='submit'>
                إرسال
            </button>
        </form>
    </div>
    <div className="image_ar">
      <img src={image} alt=""/>
    </div>
    </div>
  )
}

export default ForgetPassAr;