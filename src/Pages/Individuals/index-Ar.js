import  {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import home from "../../Assets/images/padlock.png";
import back from "../../Assets/images/back.png";
import logout from "../../Assets/images/logout.png";
import notifications from "../../Assets/images/notification.png";
import profile from "../../Assets/images/profile.png";
import image1 from "../../Assets/images/Component 31 – 28.png";
import image2 from "../../Assets/images/hover_ar/Component 31 – 28.png";
import "./index.css";
import WelcomeVisitorAr from "../../Components/WelcomeVisitor/index-ar";


function Individuals() {

    const [isShowWelcomeVisitorAr, setShowWelcomeVisitorAr] = useState("yes");



  const ClearLocalStorate = () => {
    localStorage.removeItem("user_individuals");
    localStorage.removeItem("user");
    localStorage.removeItem("is-user-login");
  };


  useEffect(()=> {
    let showWelcomeMessageTemp = localStorage.getItem("showWelcomeVisitorAr");
  if(!showWelcomeMessageTemp) {
    localStorage.setItem("showWelcomeVisitorAr", "yes");
  } else {
    setShowWelcomeVisitorAr(localStorage.getItem("showWelcomeVisitorAr"));
  }
  } , [])


  const state = localStorage.getItem("user_individuals");
  return (
    <div className="individuals">
      {!state ? (
        <div>
          {isShowWelcomeVisitorAr === "yes" && (
            <div className="welcome_">
              <WelcomeVisitorAr />
            </div>
          )}
          <header className="header2_ar">
            <Link to="/ar">
              <span>رجوع</span>
              <img src={back} alt="" />
            </Link>
          </header>
        </div>
      ) : (
        <header className="header1">
          <Link to="/profile-individual-ar" className="my-2">
            <span>الملف الشخصي</span>
            <img src={profile} alt="" />
          </Link>
          <Link to="/notifications-ar" className="my-2">
            <span>اﻹشعارات</span>
            <img src={notifications} alt="" />
          </Link>
          <Link onClick={ClearLocalStorate} to="/ar" className="my-2">
            <span>تسجيل الخروج</span>
            <img src={logout} alt="" />
          </Link>
          <Link to="/ar" className="my-2">
            <span>الصفحة الرئيسية</span>
            <img src={home} alt="" />
          </Link>
        </header>
      )}
      <div className="individual_ar">
        <img src={image1} alt="" className="circle1" />
        <img src={image2} alt="" className="circle2" />
      </div>
      <div className="services_ar">
        <Link to="/career-services-ar" className="career">
          <p>خدمات مهنية</p>
        </Link>
        <Link to="/personal-services-ar" className="personal">
          <p>خدمات شخصية</p>
        </Link>
      </div>
    </div>
  );
}

export default Individuals;
