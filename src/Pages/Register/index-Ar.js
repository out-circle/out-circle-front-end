import {useEffect} from 'react'
import './index.css'
import back from '../../Assets/images/back.png';
import home from '../../Assets/images/padlock.png';
import circle1 from '../../Assets/images/Component 31 – 24.png';
import circle2 from '../../Assets/images/Component 31 – 25.png';
import circle3 from '../../Assets/images/Component 31 – 26.png';
import circle4 from '../../Assets/images/Component 31 – 27.png';
import circle5 from '../../Assets/images/Component 31 – 28.png';
import circleHover1 from '../../Assets/images/hover_ar/Component 31 – 24.png';
import circleHover2 from '../../Assets/images/hover_ar/Component 31 – 25.png';
import circleHover3 from '../../Assets/images/hover_ar/Component 31 – 26.png';
import circleHover4 from '../../Assets/images/hover_ar/Component 31 – 27.png';
import circleHover5 from '../../Assets/images/hover_ar/Component 31 – 28.png';
import mask from '../../Assets/images/ar_photo/register.png'
import { Link , useNavigate } from 'react-router-dom'
function Register_ar() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className='register_'> 
        <header className="header_ar">
          <Link to="/login-ar" className='back'>
            <span>رجوع</span>
            <img src={back} alt=""/>
          </Link>
          <Link to="/ar" className='home_'>
            <span>الصفحة الرئيسية</span>
            <img src={home} alt=""/>
          </Link>
        </header>
        <section className='formRegister_ar'>
          <div className='forms'>
            <div className="first">
                <Link to="/register-institute-ar" className='me-3'>
                    <img src={circle2} alt="" width="220px" className='_circle'/>
                    <img src={circleHover2} alt="" width="220px" className='_circlehover'/>
                </Link>
            </div>
            <div className="second">
                <Link to="/register-corporate-ar" className='ms-3'>
                    <img src={circle1} alt="" width="220px" className='_circle'/>
                    <img src={circleHover1} alt="" width="220px" className='_circlehover'/>
                </Link>
            </div>
            <div className="three">
              <Link to="/register-scientific-ar">
                  <img src={circle3} alt="" width="220px" className='_circle'/>
                  <img src={circleHover3} alt="" width="220px" className='_circlehover'/>
              </Link>
            </div>
            <div className="four">
              <Link to="/register-individuals-ar" style={{position:"relative" , right:"14px"}}>
                  <img src={circle5} alt="" width="220px" className='_circle'/>
                  <img src={circleHover5} alt="" width="220px" className='_circlehover'/>
              </Link>
            </div>
            <div className="fife"> 
              <Link to="/register-handicraft-ar" style={{position:"relative" , left:"14px"}}>
                  <img src={circle4} alt="" width="220px" className='_circle'/>
                  <img src={circleHover4} alt="" width="220px" className='_circlehover'/>
              </Link>
            </div>
          </div>
        </section>
        <div className='backgroundRegister_ar'>
            <img src={mask} alt=""/>
        </div>
    </div>
  )
}

export default Register_ar;