import { useEffect, useState } from "react";
import Circle from "../../Components/Circle/Circle_ar";
import "./index.css";
import { Link } from "react-router-dom";
import back from "../../Assets/images/back.png";
import logout from "../../Assets/images/logout.png";
import notifications from "../../Assets/images/notification.png";
import profile from "../../Assets/images/profile.png";
import image from "../../Assets/images/Component 31 – 25.png";
import image2 from "../../Assets/images/hover_ar/Component 31 – 25.png";
import home from "../../Assets/images/padlock.png";
import WelcomeVisitorAr from "../../Components/WelcomeVisitor/index-ar";

function Institute_ar() {
  const [isShowWelcomeVisitorAr, setShowWelcomeVisitorAr] = useState("yes");

  useEffect(() => {
    let showWelcomeMessageTemp = localStorage.getItem("showWelcomeVisitorAr");
    if (!showWelcomeMessageTemp) {
      localStorage.setItem("showWelcomeVisitorAr", "yes");
    } else {
      setShowWelcomeVisitorAr(localStorage.getItem("showWelcomeVisitorAr"));
    }
  }, []);
  const Logout = () => {
    localStorage.removeItem("user_institute");
    localStorage.removeItem("user");
    localStorage.removeItem("is-user-login");
  };
  const state = localStorage.getItem("user_institute");
  return (
    <div className="institute">
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
          <Link to="/profile-institute-ar" className="my-2">
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
          <Link to="/ar" className="my-2">
            <span>الصفحة الرئيسية</span>
            <img src={home} alt="" />
          </Link>
        </header>
      )}
      <Circle
        circle={image}
        circle2={image2}
        demand1="institute/service1-ar"
        demand2="institute/service2-ar"
        demand3="institute/service3-ar"
        demand4="institute/service4-ar"
        demand5="institute/service5-ar"
        demand6="institute/service6-ar"
        demand7="institute/service7-ar"
        demand8="institute/service8-ar"
        service1="استشارات حول العمل الحالي في كافة مجالات الخدمات المصرفية والمعاملات المالية واستراتيجيات التسويق"
        service2="نصائح وأفكار تجارية جديدة"
        service3="إدارة الحسابات(المالية والمصرفية / وسائل التواصل الاجتماعي ... إلخ)"
        service4="متابعة الأنشطة الاستثمارية للمؤسسة"
        service5="خدمات (عقارات ، مواصلات ، مالية ، سجل تجاري .. إلخ)"
        service6="أفكار وخدمات إكساء وديكور للمؤسسة"
        service7="تأمين موظفين مؤهلين"
        service8="خدمات إعلانية"
      />
    </div>
  );
}

export default Institute_ar;
