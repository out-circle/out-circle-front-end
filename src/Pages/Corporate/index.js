import {useState , useEffect} from 'react';
import Circle from '../../Components/Circle/Circle'
import './index'
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import image1 from '../../Assets/images/New folder/Group 428.png';
import image2 from '../../Assets/images/New folder/Component 31 – 8.png';
import logout from '../../Assets/images/logout.png';
import notifications from '../../Assets/images/notification.png';
import profile from '../../Assets/images/profile.png';
import { FaUsers } from "react-icons/fa";
import home from '../../Assets/images/padlock.png';
import WelcomeVisitor from '../../Components/WelcomeVisitor/index';


import './index.css'
function Croporate() {

    const [isShowWelcomeVisitor, setShowWelcomeVisitor] = useState("yes");

    const Logout = () => {
        localStorage.removeItem("user_corporate");
        localStorage.removeItem("user");
        localStorage.removeItem("is-user-login");
        localStorage.removeItem("company_id")
        localStorage.removeItem("number_partners");
    };

    useEffect(
        ()=> {
          let showWelcomeMessageTemp = localStorage.getItem("showWelcomeVisitor");
        if (!showWelcomeMessageTemp) {
          localStorage.setItem("showWelcomeVisitor", "yes");
        } else {
          setShowWelcomeVisitor(localStorage.getItem("showWelcomeVisitor"));
        }
        },[])

    const state = localStorage.getItem("user_corporate")
  return (
    <div className='croporate'>
        {
                    !state ? (
                        <div>
                        {isShowWelcomeVisitor === "yes" && (
                          <div className="welcome_">
                            <WelcomeVisitor />
                          </div>
                        )}
                        <header className="header2">
                          <Link to="/">
                            <span>Back</span>
                            <img src={back} alt="" />
                          </Link>
                        </header>
                      </div>
                    ):(
                        <header className='header1_ar'>
                        <Link to="/profile-corporate" className="my-2">
                            <span>Profile</span>
                            <img src={profile} alt=""/>
                        </Link>
                        <Link to="/notifications" className="my-2">
                            <span>Notifications</span>
                            <img src={notifications} alt=""/>
                        </Link>
                        <Link to="/update-partners" className="my-2">
                            <span>Partners</span>
                            <div className="partners"><FaUsers/></div>
                        </Link>
                        <Link onClick={Logout} to="/" className="my-2">
                            <span>Logout</span>
                            <img src={logout} alt=""/>
                        </Link>
                        <Link to="/" className="my-2">
                            <span>Home</span>
                            <img src={home} alt=""/>
                        </Link>
                    </header>
                    )
                }
        <Circle 
        circle1={image1}
        circle2={image2}
        demand1="corporate/service1"
        demand2="corporate/service2"
        demand3="corporate/service3"
        demand4="corporate/service4"
        demand5="corporate/service5"
        demand6="corporate/service6"
        demand7="corporate/service7"
        demand8="corporate/service8"
        service="Croporate"
        service1="Consultations on the current work in all fields of banking services , financial transactions and marketing strategies"
        service2="New business advice and ideas"
        service3="Account management (financial and banking/social media... ect)"
        service4="Follow-up  services for the investment activities of the company"
        service5="(Real estate, transpotation, financial, commercial registry ..ect) services"
        service6="Cladding and decoration ideas and services for the company"
        service7="Providing qualified employees."
        service8="Advertising Services"
        />
    </div>
)
}

export default Croporate;