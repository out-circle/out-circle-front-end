import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import './index.css';

const WelcomeMessageAr = () => {
  const [isShowWelcomeVisitorAr, setShowWelcomeVisitorAr] = useState("yes");

  const handleShowWelcome = () => {
    localStorage.setItem("showWelcomeVisitorAr", "no");
    setShowWelcomeVisitorAr("no");
  };

  return (
    isShowWelcomeVisitorAr === "yes" && (
      <div className="welcome_visitor_">
        <span className="icon" onClick={handleShowWelcome}>
          <VscChromeClose />
        </span>
        <div className="bar">
          <p>
            تخولك خاصية دخولك كزائر الحفاظ على خصوصتك حيث يمكنك الإطلاع على
            خدماتنا بشكل كلي بدون معرفة معلوماتك الشخصية، كما تخولك ميزة الحصول
            على طلبك في أي مجال وفي أي خدمة من خلال فقط وسيلة تواصل تختارها أنت
            كإيميل أو موبايل فقط دون أي تفاصيل أخرى
          </p>
        </div>
      </div>
    )
  );
};

export default WelcomeMessageAr;
