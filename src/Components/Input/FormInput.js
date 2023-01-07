import React , {useRef, useState} from 'react'
import './FormInput.css'
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import back from '../../Assets/images/back.png'
import {BsPersonPlus} from 'react-icons/bs'
import {Link , useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import file from '../../Assets/images/file.png'

const schema = yup.object({
    username:yup.string().required('Please Enter your username'),
    email: yup.string().email().required('Please Enter your Email'),
    password:yup.string().required("Please enter a password")
    .min(8, "Password too short"),
    confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
}).required()

function FormInput({text , setShow , route}) {
    const[number_ , setNumber_] = useState("")
    const ref1 = useRef();
    const ref2 = useRef();
    const navigate = useNavigate()

    const { register, handleSubmit , formState:{errors}} = useForm(
        {resolver: yupResolver(schema)});
    const onSubmit = data => console.log(data);
    
    const OnClick = ()=> {
        navigate(`/${route}`)
        setShow(false)
        console.log(number_)
    }

    return (
        <div>
            <header>
            <Link to="/register">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <section className='register3'>
            <header>
                <span className='icon'><BsPersonPlus/></span>
                <span className='text'>New User / {text}</span>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='bar'>
                <div>
                {/* <ReactPhoneInput defaultCountry="nl" enableSearchField /> */}
                {/* <ReactPhoneInput
                placeholder='phone'
                defaultCountry="pl"
                containerStyle={{ marginTop: "15px" }}
                searchClass="search-class"
                searchStyle={{ margin: "0", width: "97%", height: "30px" }}
                enableSearchField
                disableSearchIcon
                /> */}
                </div>
                <div className='my-2 input_'>
                    <input {...register("username")} placeholder="User name" className='input' type="text"/>
                    <p style={{color:"red"}}>{errors.username?.message}</p>
                </div>
                <div className='my-2 input_'>
                    <input {...register("password")} placeholder="Password" className='input' type="password"/>
                    <p style={{color:"red"}}>{errors.password?.message}</p>
                </div>
                <div className='my-2 input_'>
                    <input {...register("confirmPassword")} placeholder="Confirm Password" className='input' type="password"/>
                    <p style={{color:"red"}}>{errors.confirmPassword?.message}</p>
                </div>
                <div className='my-2 input_'>
                    <input {...register("fullName")} placeholder="Full Name" className='input' type="text"/>
                    <p style={{color:"red"}}>{errors.confirmPasswod?.message}</p>
                </div>
                <div className='my-3 input_'>
                    <input 
                    ref={ref1}
                    // {...register("bornDate")} 
                    type="text" 
                    placeholder="Born date" 
                    style={{width:"400px"}}
                    onFocus={() => (ref1.current.type = "date")}
                    onBlur={() => (ref1.current.type = "text")}
                    className="input"
                    />
                </div>
                <div className='my-2 input_'>
                    <input className='input' {...register("currentCity")} placeholder="Current city" type="text"/>
                    <p style={{color:"red"}}>{errors.username?.message}</p>
                </div>
                <div className='my-2 input_'>
                    <input className='input' {...register("currentAddress")} placeholder="Current Address" type="text"/>
                    <p style={{color:"red"}}>{errors.username?.message}</p>
                </div>
                <div className='my-2 input_'>
                    <textarea className='input' {...register("currentAddress")} placeholder="Scientific specialization" type="text"></textarea>
                    <p style={{color:"red"}}>{errors.username?.message}</p>
                </div>
                <div className='my-2 input_'>
                    <input 
                    className='input'
                    ref={ref2}
                    onFocus={() => (ref2.current.type = "date")}
                    onBlur={() => (ref2.current.type = "text")}
                    placeholder="Actaul start date" 
                    type="text"/>
                    <p style={{color:"red"}}>{errors.username?.message}</p>
                </div>
                <div className='my-2 input_'>
                    <input className='input' {...register("currentAddress")} placeholder="Current work dddress" type="text"/>
                    <p style={{color:"red"}}>{errors.username?.message}</p>
                </div>
                <div className='my-2 input_'>
                    <ReactPhoneInput onClick={(e)=>{
                        setNumber_(e.target.value)
                    }} className="phone_number" placeholder='Mobile number' defaultCountry="sy" enableSearchField />
                </div>
                <div className='my-2 input_'>
                <input className="input"  placeholder="Whatsapp number" type="number"/>
                </div>
                <div className='my-2 input_'>
                    <input className='input' {...register("email")} placeholder="Email Address" type="email"/>
                    <p style={{color:"red"}}>{errors.email?.message}</p>
                </div>
                <div className='my-3 input_1'>
                    <label htmlFor="file2">
                        <p>Upload Other certificate orobtained</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input style={{opacity:"0"}} className='input' name='uploadFile' id="file2" placeholder="Upload file" 
                    type="file"/>                     
                </div>
                </div>
                <button className='mx-3 submit' type='submit' onClick={OnClick}>Register</button>
            </form>
        </section>
        </div>
)
}

export default FormInput;
