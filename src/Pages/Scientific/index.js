import { useEffect, useState } from "react";
import Circle from "../../Components/Circle/Circle";
import "./index.css";
import { Link } from "react-router-dom";
import back from "../../Assets/images/back.png";
import logout from "../../Assets/images/logout.png";
import notifications from "../../Assets/images/notification.png";
import profile from "../../Assets/images/profile.png";
import image1 from "../../Assets/images/New folder/Group 426.png";
import image2 from "../../Assets/images/New folder/Component 31 – 10.png";
import home from "../../Assets/images/padlock.png";
import WelcomeVisitor from "../../Components/WelcomeVisitor/index";

function Scietific() {
  const [isShowWelcomeVisitor, setShowWelcomeVisitor] = useState("yes");

  const Logout = () => {
    localStorage.removeItem("user_scientific");
    localStorage.removeItem("user");
    localStorage.removeItem("is-user-login");
  };

  useEffect(() => {
    let showWelcomeMessageTemp = localStorage.getItem("showWelcomeVisitor");
    if (!showWelcomeMessageTemp) {
      localStorage.setItem("showWelcomeVisitor", "yes");
    } else {
      setShowWelcomeVisitor(localStorage.getItem("showWelcomeVisitor"));
    }
  }, []);

  const state = localStorage.getItem("user_scientific");

  return (
    <div className="scientific_">
      {!state ? (
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
      ) : (
        <header className="header1_ar">
          <Link to="/profile-scientific" className="my-2">
            <span>Profile</span>
            <img src={profile} alt="" />
          </Link>
          <Link to="/notifications" className="my-2">
            <span>Notifications</span>
            <img src={notifications} alt="" />
          </Link>
          <Link onClick={Logout} to="/" className="my-2">
            <span>Logout</span>
            <img src={logout} alt="" />
          </Link>
          <Link to="/" className="my-2">
            <span>Home</span>
            <img src={home} alt="" />
          </Link>
        </header>
      )}
      <Circle
        circle1={image1}
        circle2={image2}
        demand1="scientific/service1"
        demand2="scientific/service2"
        demand3="scientific/service3"
        demand4="scientific/service4"
        demand5="scientific/service5"
        demand6="scientific/service6"
        demand7="scientific/service7"
        demand8="scientific/service8"
        service="Professional Scientific"
        service1="Consultations on the current work in all fields of banking services , financial transactions and marketing strategies"
        service2="New business advice and ideas"
        service3="Account management (financial and banking/social media... ect)"
        service4="Follow-up  services for the investment activities"
        service5="(Real estate, transpotation, financial, licenses ..ect) services"
        service6="Cladding and decoration ideas and services"
        service7="Providing qualified employees"
        service8="Advertising Services"
      />
    </div>
  );
}

export default Scietific;
