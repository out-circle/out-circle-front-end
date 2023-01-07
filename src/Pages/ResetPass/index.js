import React ,{useState , useEffect}from 'react'
import { useForm } from "react-hook-form";
import imagepass from "../../Assets/images/password.svg"
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import * as yup from "yup";
import './index.css';
import Axios from 'axios';
import image from '../../Assets/images/Mask Group 2.png'
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const schema = yup.object({
  code: yup.string().required("Please Enter code"),
  password: yup.string().required('Password is required').min(8 , "Password must contain at least 8 characters"),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();

const ResetPass = () => {
  const navigate = useNavigate();
  const [password , setPassword] = useState("")
  const [code_ , setCode_] = useState("")
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const code = localStorage.getItem("code");
  const user = localStorage.getItem("user_id");
  const account = localStorage.getItem("account_type");
  
  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);

  const BASE_API_URL = useSelector(state => state.BASE_API_URL);

  const onSubmit = ()=>{
    if(code_ === code){
      Axios.put(`${BASE_API_URL}/api/users/reset-password/${user}?account_type=${account}&new_password=${password}`)
      .then((res)=>{
        toast.success("Your password has been changed successfully")
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err)=>{
        console.error(err)
      })
    }else{
      toast.error("The code you entered is incorrect!")
    }
    }
  return (
    <div className='reset'>
      <div><Toaster/></div>
    <div className='body'>
        <header>
            <h2>Reset Password</h2>
            <img src={imagepass} alt=""/>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
          <div className='pass'>
            <label>Enter Code</label>
            <input type="text" {...register("code")} value={code_} onChange={(e)=> setCode_(e.target.value)}/>
            <span style={{color:"red"}}>{errors.code?.message}</span>
          </div>
          <div className='pass'>
            <label>New Password</label>
            <input type="password" {...register("password")} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <span style={{color:"red"}}>{errors.password?.message}</span>
          </div>
          <div className='pass'>
            <label>Confirm Password</label>
            <input type="password" {...register("passwordConfirmation")} />
            <span style={{color:"red"}}>{errors.passwordConfirmation?.message}</span>
          </div>
          <button type='submit' className='submit'>Submit</button>
        </form>
    </div>
    <div className="image">
      <img src={image} alt=""/>
    </div>
    </div>
  )
}

export default ResetPass
