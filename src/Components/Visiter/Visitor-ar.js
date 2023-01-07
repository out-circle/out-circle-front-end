import React , { useState , useEffect } from 'react'
import './Visiter.css'
import { Link , useNavigate } from 'react-router-dom'
import back from '../../Assets/images/back.png';
import {BsPersonPlus} from "react-icons/bs";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import image1 from "../../Assets/images/ar_photo/corporate.png";
import image2 from "../../Assets/images/ar_photo/institute.png";
import image3 from "../../Assets/images/ar_photo/scientific.png";
import image4 from "../../Assets/images/ar_photo/handicraft.png";
import image5 from "../../Assets/images/ar_photo/Mask Group -6.png";
import toast, { Toaster } from "react-hot-toast";

const schema = yup
  .object({
    email: yup.string().email().required("من فضلك أدخل إيميلك"),
  })


  
const Visiter = () => {

    const [ data , setData ] = useState({
        email:"",
        phone_number:"",
        whatsapp_number:""
    })

    
    const navigate = useNavigate();

    const change_route = localStorage.getItem("change_route");

    const arr = change_route.split("/");
  
    const TypeImage = () => {
      let image_;
      if (arr[0] === "career-service" || arr[0] === "personal-service") {
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

    const { register, handleSubmit , formState:{errors}} = useForm({resolver: yupResolver(schema)});


    const onSubmit = ()=> {
        localStorage.setItem("visitor", JSON.stringify({ ...data }));
        toast.success("يمكنك الأن إرسال رسالة");
        setTimeout(() => {
            navigate(`/${change_route}`)
        }, 2000);
    }
    return (
    <div className='visiter'>
        <Link to={`/${change_route}`} className='back_ar'>
            <span>رجوع</span>
            <img src={back} alt=""/>
        </Link>
        <div className='section1_ar'>
            <header>
                <span className='icon'><BsPersonPlus/></span>
                <span className='text'>زائر</span>
            </header>
            <div><Toaster/></div>
            <form onSubmit = {handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className='body'>
                <div className="my-3">
                <input {...register("email")} value={data.email} onChange={(e)=> setData({...data , email:e.target.value})} className='my-2' type="email" placeholder='البريد الإلكتروني'/>
                <span style={{color:"red"}} className="error">{errors.email?.message}</span>
                </div>
                <div>
                    <input value={data.phone_number} onChange={(e)=> setData({...data , phone_number:e.target.value})} className='my-2' type="number" placeholder='رقم الموبايل'/>
                </div>
                <span>or</span>
                <div>
                    <input value={data.whatsapp_number} onChange={(e)=> setData({...data , whatsapp_number:e.target.value})} className='my-2' type="number" placeholder='رقم الواتس أب'/>
                </div>
            </div>
            <div className='footer'>
                <button type="submit" className='mt-3 btn btn-dark'>تسجيل</button>
            </div>
            </form>
        </div>
        <div className='section2_ar'>
            <img src={TypeImage()} alt=""/>
        </div>
    </div>
  )
}

export default Visiter;