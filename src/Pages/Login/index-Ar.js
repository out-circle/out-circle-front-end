import React , {useState , useEffect} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import back from '../../Assets/images/back.png'
import toast  ,{Toaster} from 'react-hot-toast';
import Axios from 'axios';
import { useSelector } from "react-redux";
import login from '../../Assets/images/ar_photo/login.png'
import logoLogin from '../../Assets/images/logoLogin.png'
import './index.css'

function Login_ar() {

    const intialValues = { text: "", password: "" , user_type:""};
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("is-user-login")) {
            navigate("/ar");
        }
    }, [navigate]);

    const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

    const handleChange = (e)=> {
        const{name , value} = e.target;
        setFormValues({...formValues , [name]:value.trim()})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        const errors = Object.values(validate(formValues));
        
        if(errors.length === 0){
            
        Axios.get(
            `${BASE_API_URL}/api/users/user-info?${`input=${formValues.text}`}&${`password=${formValues.password}`}&${`user_type=${formValues.user_type}`}`
        )
        .then((res) => {
            let data = res.data;
            if (typeof data === "string") {
                toast.error(res.data);
            } else {
                switch (formValues.user_type) {
                    case "companies":
                        localStorage.setItem("user_corporate", JSON.stringify(data));
                        setTimeout(() => {
                            navigate("/corporate-ar")
                        }, 3000);
                        break;
                    case "institutes":
                        localStorage.setItem("user_institute", JSON.stringify(data));
                        setTimeout(() => {
                            navigate("/institute-ar")
                        }, 3000);
                        break;
                    case "scientific_careers":
                        localStorage.setItem("user_scientific", JSON.stringify(data));
                        setTimeout(() => {
                            navigate("/scientific-ar")
                            }, 3000);
                        break;
                    case "craftsmen":
                        localStorage.setItem("user_handicraft", JSON.stringify(data));
                        setTimeout(() => {
                            navigate("/handicraft-ar")
                        }, 3000);
                        break;
                    case "individuals":
                        localStorage.setItem("user_individuals", JSON.stringify(data));
                        setTimeout(() => {
                            navigate("/individuals-ar")
                        }, 3000);
                        break;
                    default:
                        break;
                }
                toast.success("...???? ?????????? ???????????? ??????????");
                localStorage.setItem("is-user-login", true);
                localStorage.setItem("user" , JSON.stringify(data));
            }
        }).catch((err) => {
            console.error(err);
        });
        }
    };
    const validate = (values) => {
        let errors = {};
        var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

        if (!values.text) {
            errors.text = "???????????? ?????????? ???????????? ????????????????????";
        } else if (!mailFormat.test(values.text)) {
            errors.text = "?????????? ?????? ???????? ???????????? ?????????? ???????????? ???????????????????? ???? ?????? ???????????? ??????????????";
        }
        if (!values.password) {
        errors.password = "???????????? ?????????? ???????? ????????????";
        } else if (values.password.length < 8) {
            errors.password = "?????? ???? ???????? ???????? ???????????? ???????? ???? 8 ????????";
        }
        if(!values.user_type){
            errors.user_type = "???????????? ?????????? ?????? ???????????? ?????????? ????";
        }
        return errors;
    };
    
    return (
    <div className='login'>
        <Link to="/ar" className='back_ar'>
            <img src={back} alt=""/>
            <span>????????</span>
        </Link>
        <div className="login_ar">
        <div>
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <img src={logoLogin} alt=""/>
            </div>
            <div>
                <div><Toaster/></div>
                <form onSubmit={handleSubmit} noValidate>
                <div className='bar'>
                    <div className='select mt-2'>
                        <label>???????? ?????? ????????????</label><br/>
                        <select name='user_type' value={formValues.user_type} onChange={handleChange}>
                        <option value="" hidden> ?????? ????????????</option>
                        <option value="companies">????????</option>
                        <option value="institutes">??????????</option>
                        <option value="scientific_careers">?????? ??????????</option>
                        <option value="craftsmen">????????????</option>
                        <option value="individuals">??????????</option>
                        </select>
                    {formErrors.user_type && (
                        <span className="error_ar" style={{color:"red"}}>{formErrors.user_type}</span>
                        )}
                    </div>
                    <div className='email mt-2'>
                        <label htmlFor="email" >?????? ???????????????? ???? ??????????????</label><br/>
                        <input 
                        type="text" 
                        name='text' 
                        id="email" 
                        value={formValues.text}
                        onChange={handleChange}
                        className={formErrors.text && "input-error"}
                        />
                        {formErrors.text && (
                        <span className="error_ar" style={{color:"red"}}>{formErrors.text}</span>
                        )}
                    </div>
                    <div className='password mt-2'>
                        <label htmlFor="password_">???????? ????????????</label><br/>
                        <input 
                        type="password" 
                        id="password" 
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                        className={formErrors.password && "input-error"}
                        />
                        {formErrors.password && (
                        <span className="error_ar" style={{color:"red"}}>{formErrors.password}</span>
                        )}
                    </div>
                    </div>
                    <Link className='forget' to="/forget-password-ar">???????? ???????? ????????????</Link>
                    <button type='submit' className='loginButton mt-2'>?????????? ????????????</button><br/>
                </form>
                <div className='register mt-3'>
                    <p className='my-0'>???? ???????? ??????????</p>
                    <Link to="/register-ar">
                        <button>??????????????</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        <div className="section2_ar">
            <img src={login} alt=""/>
        </div>
    </div>
)
}

export default Login_ar