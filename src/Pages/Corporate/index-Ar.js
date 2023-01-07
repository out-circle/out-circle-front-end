import {useEffect , useState} from 'react';
import Circle from '../../Components/Circle/Circle_ar';
import './index.css';
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import image from '../../Assets/images/Component 31 – 24.png';
import image2 from '../../Assets/images/hover_ar/Component 31 – 24.png';
import logout from '../../Assets/images/logout.png';
import notifications from '../../Assets/images/notification.png';
import profile from '../../Assets/images/profile.png';
import { FaUsers } from "react-icons/fa";
import home from '../../Assets/images/padlock.png';
import WelcomeVisitorAr from "../../Components/WelcomeVisitor/index-ar";


function Croporate_ar() {

    const [isShowWelcomeVisitorAr, setShowWelcomeVisitorAr] = useState("yes");

    const Logout = () => {
        localStorage.removeItem("user_corporate");
        localStorage.removeItem("user");
        localStorage.removeItem("is-user-login");
        localStorage.removeItem("company_id");
        localStorage.removeItem("number_partners");
    };

    useEffect(()=> {
        let showWelcomeMessageTemp = localStorage.getItem("showWelcomeVisitorAr");
      if(!showWelcomeMessageTemp) {
        localStorage.setItem("showWelcomeVisitorAr", "yes");
      } else {
        setShowWelcomeVisitorAr(localStorage.getItem("showWelcomeVisitorAr"));
      }
      } , []);

    const state = localStorage.getItem("user_corporate")
  return (
    <div className='croporate'>
            {
                    !state ? (
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
                    ):(
                        <header className='header1'>
                        <Link to="/profile-corporate-ar" className="my-2">
                            <span>الملف الشخصي</span>
                            <img src={profile} alt=""/>
                        </Link>
                        <Link to="/notifications" className="my-2">
                            <span>الإشعارات</span>
                            <img src={notifications} alt=""/>
                        </Link>
                        <Link to="/update-partners-ar" className="my-2">
                            <span>الشركاء</span>
                            <div className="partners"><FaUsers/></div>
                        </Link>
                        <Link onClick={Logout} to="/ar" className="my-2">
                            <span>تسجيل الخروج</span>
                            <img src={logout} alt=""/>
                        </Link>
                        <Link to="/ar" className="my-2">
                            <span>الصفحة الرئيسية</span>
                            <img src={home} alt=""/>
                        </Link>
                    </header>
                    )
                }
        <Circle 
        circle={image}
        circle2={image2}
        demand1="corporate/service1-ar"
        demand2="corporate/service2-ar"
        demand3="corporate/service3-ar"
        demand4="corporate/service4-ar"
        demand5="corporate/service5-ar"
        demand6="corporate/service6-ar"
        demand7="corporate/service7-ar"
        demand8="corporate/service8-ar"
        service="شركة"
        service1="استشارات حول العمل الحالي في كافة مجالات الخدمات المصرفية والمعاملات المالية واستراتيجيات التسويق"
        service2="نصائح وأفكار تجارية جديدة"
        service3="إدارة الحسابات(المالية والمصرفية / وسائل التواصل الاجتماعي ... إلخ)"
        service4="متابعة الأنشطة الاستثمارية للشركة"
        service5="خدمات (عقارات ، مواصلات ، مالية ، سجل تجاري .. إلخ)"
        service6="أفكار وخدمات إكساء وديكور للشركة"
        service7="تأمين موظفين مؤهلين"
        service8="خدمات إعلانية"
        />
    </div>
)
}

export default Croporate_ar;