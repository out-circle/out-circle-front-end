import { useEffect, useState } from "react";
import Circle from "../../Components/Circle/Circle_ar";
import "./index.css";
import { Link } from "react-router-dom";
import back from "../../Assets/images/back.png";
import logout from "../../Assets/images/logout.png";
import notifications from "../../Assets/images/notification.png";
import profile from "../../Assets/images/profile.png";
import image from "../../Assets/images/Component 31 – 27.png";
import image2 from "../../Assets/images/hover_ar/Component 31 – 27.png";
import home from "../../Assets/images/padlock.png";
import WelcomeVisitorAr from "../../Components/WelcomeVisitor/index-ar";

function Handicraft_ar() {
  const [isShowWelcomeVisitorAr, setShowWelcomeVisitorAr] = useState("yes");

  const Logout = () => {
    localStorage.removeItem("user_handicraft");
    localStorage.removeItem("user");
    localStorage.removeItem("is-user-login");
  };

  useEffect(() => {
    let showWelcomeMessageTemp = localStorage.getItem("showWelcomeVisitorAr");
    if (!showWelcomeMessageTemp) {
      localStorage.setItem("showWelcomeVisitorAr", "yes");
    } else {
      setShowWelcomeVisitorAr(localStorage.getItem("showWelcomeVisitorAr"));
    }
  }, []);

  const state = localStorage.getItem("user_handicraft");

  return (
    <div className="handicraft">
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
          <Link to="/profile-handicraft-ar" className="my-2">
            <span>الملف الشخصي</span>
            <img src={profile} alt="" />
          </Link>
          <Link to="/notifications" className="my-2">
            <span>الإشعارات</span>
            <img src={notifications} alt="" />
          </Link>
          <Link onClick={Logout} to="/ar" className="my-2">
            <span>تسجيل الخروج</span>
            <img src={logout} alt="" />
          </Link>
          <Link to="/ar" className="my-2" >
            <span>الصفحة الرئيسية</span>
            <img src={home} alt="" />
          </Link>
        </header>
      )}
      <Circle
        circle={image}
        circle2={image2}
        demand1="handicraft/service1-ar"
        demand2="handicraft/service2-ar"
        demand3="handicraft/service3-ar"
        demand4="handicraft/service4-ar"
        demand5="handicraft/service5-ar"
        demand6="handicraft/service6-ar"
        demand7="handicraft/service7-ar"
        demand8="handicraft/service8-ar"
        service1="استشارات حول العمل الحالي في كافة مجالات الخدمات المصرفية والمعاملات المالية واستراتيجيات التسويق"
        service2="نصائح وأفكار تجارية جديدة"
        service3="إدارة الحسابات(المالية والمصرفية / وسائل التواصل الاجتماعي ... إلخ)"
        service4="متابعة الأنشطة الاستثمارية"
        service5="خدمات (عقارات ، مواصلات ، مالية، .. إلخ)"
        service6="أفكار وخدمات إكساء وديكور"
        service7="تأمين موظفين مؤهلين"
        service8="خدمات إعلانية"
      />
    </div>
  );
}

export default Handicraft_ar;
