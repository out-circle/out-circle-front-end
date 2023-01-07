import React , {useState , useEffect ,Fragment, useCallback} from 'react';
import whatsapp from '../../Assets/images/whatsapp.png';
import facebook from '../../Assets/images/facebook.png'
import linkedin from '../../Assets/images/linkedin.png'
import telegram from '../../Assets/images/telegram.png';
import instegram from '../../Assets/images/instagram.png'
import appStore from '../../Assets/images/appStore.png'
import googlePlay from '../../Assets/images/googlePlay.png'
import {Link} from 'react-router-dom'
import icon1 from "../../Assets/images/icon1.png"
import icon2 from "../../Assets/images/icon2.png"
import icon3 from "../../Assets/images/icon3.png"
import logo from "../../Assets/images/Group 360.svg"
import user from "../../Assets/images/user.png"
import outcircle from '../../Assets/images/OUTCIRCLE.svg'
import es from '../../Assets/images/1667844570962.png'
import i1 from '../../Assets/images/serviceAr/Group 519.png'
import i2 from '../../Assets/images/serviceAr/Group 322.png'
import i3 from '../../Assets/images/serviceAr/Component 16 – 8.png'
import i4 from '../../Assets/images/serviceAr/Component 16 – 7.png'
import i5 from '../../Assets/images/serviceAr/Group 521.png'
import iui1 from '../../Assets/images/serviceAr/hover/Group 518.png';
import iui2 from '../../Assets/images/serviceAr/hover/Group 520.png';
import iui3 from '../../Assets/images/serviceAr/hover/Group 519.png';
import iui4 from '../../Assets/images/serviceAr/hover/Group 521.png';
import iui5 from '../../Assets/images/serviceAr/hover/Group 522.png';
import ads from '../../Assets/images/Group_287.png'
import { useNavigate } from 'react-router-dom';
import './index.css'
import { useSelector } from "react-redux";
import Axios from 'axios';
import Sidebar from '../../Components/Sidebar/index';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import WelcomeMessage from '../../Components/WelcomeMessage/index-ar';




function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}


function HomeAr() {

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
        setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
        window.removeEventListener('resize', handleWindowResize);
    };
    }, []);
    const width = windowSize.innerWidth;


  const [adsImage, setAdsImage] = useState([]);
  const [newsInfo, setNewsInfo] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isShowWelcomeMessageAr , setShowWelcomeMessageAr] = useState("yes");

    const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

     
    const getAllNews = useCallback(() => {
      return new Promise((resolve, reject) => {
        Axios.get(`${BASE_API_URL}/api/news/all-news`)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => reject(err));
      });
    }, [BASE_API_URL]);
  
    const getAllAds = useCallback(() => {
        return new Promise((resolve, reject) => {
          Axios.get(`${BASE_API_URL}/api/ads/all-ads`)
            .then((res) => {
              resolve(res.data);
            })
            .catch((err) => reject(err));
        });
  
    }, [BASE_API_URL])
  
    useEffect(() => {
      setIsLogin(localStorage.getItem("is-user-login"));
      let showWelcomeMessageTemp = localStorage.getItem("showWelcomeMessageAr");
    if(!showWelcomeMessageTemp) {
      localStorage.setItem("showWelcomeMessageAr", "yes");
    } else {
      setShowWelcomeMessageAr(localStorage.getItem("showWelcomeMessageAr"));
    }
      getAllNews()
        .then((data) => {
          setNewsInfo(data);
          getAllAds().then((data) => {
            setAdsImage(data);
          })
          .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }, [BASE_API_URL, getAllNews, getAllAds]);


  const navigate =  useNavigate();
  
  return (
      <div className='home'>
      {isShowWelcomeMessageAr === "yes" && <div><WelcomeMessage/></div>}
      <img className='img2_ar' src={es} alt=""/>
      <header className='_header1'>
      <button className="Ar_" style={{borderRadius:"20px 0px 0px 20px" , width:"40px" , border:"2px solid #000"}} onClick={() => navigate("/ar")}>Ar</button>
      <button className="En_" style={{borderRadius:"0px 20px 20px 0px" , width:"40px" , border:"2px solid #000"}} onClick={() => navigate("/")}>En</button>
      </header>
      <header className='_header2_ar'></header>
      <Link to="/news-ar">
          <marquee className="marquee_ar" direction="right">
          {newsInfo.map((item) => (
            <Fragment key={item._id}>
              <span>{item.content}</span>
              <span>|</span>
            </Fragment>
          ))}
          </marquee>
      </Link>
      <div>
      {
        !isLogin && (
        <div className='login1_ar'>
        <Link to="/login-ar" className='mx-1' style={{display:"flex" , alignItems:"center"}}>
              <div style={{border:"2px solid black" , color:"black"}}>تسجيل الدخول</div> 
              <img src={user} alt="" width="36px" style={{background:"#DCECDD" , borderRadius:"50%"}}/>
        </Link>
        </div> 
        )}
      <div className="name_qr">
        {
            width < 1300 && <Sidebar route1={"whyus-ar"} route2={"goals-ar"} route3={"contactus-ar"} item1={"من نحن"} item2={"أهدافنا و مميزاتنا"} item3={"أتصل بنا"}/>
        }
      </div>
      <div className='main_ar'>
        <img className='outcircle' src={outcircle} alt="" width="154"/>
        <div className='cards'>
            <Link to="/individuals-ar" className='hov'>
                <img className='img_ mx-3' src={i5} alt=""/>
                <img className='iui' src={iui5} alt=""/>
            </Link>
            <Link to="/handicraft-ar" className='hov'>
                <img className='img_ mx-3'  src={i4} alt=""/>
                <img className='iu' src={iui4} alt=""/>
            </Link>
            <Link to="/scientific-ar" className='hov'>
                <img className='img_ mx-3'  src={i3} alt=""/>
                <img className='iu' src={iui3} alt=""/>
            </Link>
            <Link to="/institute-ar" className='hov'>
                <img  className='img_ mx-3'  src={i2} alt=""/>
                <img  className='iu'  src={iui2} alt=""/>
            </Link>
            <Link to="/corporate-ar" className='hov'>
                <img className='img_ mx-3'  src={i1} alt=""/>
                <img className='iu'  src={iui1} alt=""/>
            </Link>
        </div>
        </div>
        </div>
        <div className='sidebar_ar'>
          <Link to="/" className='logo'>
              <img src={logo} alt=""/>
          </Link>
          <nav className='navbar_'>
          <Link to="/whyus-ar" className='my-4 icon1'>
              <img src={icon1} alt="" width="60px"/> 
              <span>من نحن</span>
          </Link>
          <Link to="/goals-ar" className='my-4 icon2'>
              <img src={icon2} alt="" width="60px"/> 
              <span>أهدافنا و مميزاتنا</span>
          </Link>
          <Link to="/contactus-ar" className='my-4 icon3'>
              <img src={icon3} alt="" width="60px"/> 
              <span>أتصل بنا</span>
          </Link>
          </nav>
        </div>  
        <footer className="footer_ar">
        {
          adsImage.length !==0 ? (
        <>
        <div onClick={()=>{ navigate("/ads-ar")}} className="alll"></div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        >
          {adsImage.map((item) => (
          <SwiperSlide  key={item._id}>
            <Link to="/ads-ar">
              <img
                className="ads_space"
                src={`http://localhost:8000/${item.file_paths[0]}`}
                alt=""
              />
            </Link>
          </SwiperSlide>
          ))}
        </Swiper>
        </>
          ) : <div><img src={ads} alt="" className="space_ar"/></div>
        }
        <div className='icons_ar'>
        <ul>
            <li className="mx-0">
              <a href="https://wa.me/+963946202311" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="https://m.facebook.com/profile.php?id=100088302496274&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="https://www.linkedin.com/in/out-circle-463675259" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="http://t.me/OutCircle" target="_blank" rel="noreferrer">
                <img src={telegram} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="https://www.instagram.com/out.circle.2023/?fbclid=IwAR1Y7wuS-QtVNNG7hhzwsbzzNfPNUbVGrqTAfCVYPwKMZUGKfKdKJSPU9K8" target="_blank" rel="noreferrer">
                <img src={instegram} alt="" />
              </a>
            </li>
          </ul>
          </div>
        </footer>
    </div>
  )
}

export default HomeAr