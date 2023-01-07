import { useState } from "react";
import "./index.css";
import { VscChromeClose } from "react-icons/vsc";

const WelcomeMessage = () => {
  const [isShowWelcomeMessageAr, setShowWelcomeMessageAr] = useState("yes");

  const handleShowWelcome = () => {
    localStorage.setItem("showWelcomeMessageAr", "no");
    setShowWelcomeMessageAr("no");
  };

  return (
    isShowWelcomeMessageAr === "yes" && (
      <div className="welcome2">
        <span className="icon" onClick={handleShowWelcome}>
          <VscChromeClose />
        </span>
        <div className="bar">
          <p>أهلا و سهلا بكم في</p>
          <p className="circle_">Out Circle</p>
          <p>يسعدنا دخولك إلى موقعنا</p>
          <p>
            خدماتنا تلبي جميع رغباتك بشكل مميز وغير مألوف لنكون معاً نحو مستقبل
            أفضل، فنحن طريقك نحو الراحة وخدمتك هي مهمتنا
          </p>
          <p>: ملاحظات هامة جداً</p>
          <p>مجال عملنا الرئيسي هو -<br/> ضمن المجال الإستشاري</p>
          <p>
                معظم خدماتنا خدمات -<br/> استشارية مع إمكانية تطبيقها لتصبح خدمات مهنية حسب الاتفاق
          </p>
          <p>
            خدماتنا المهنية والشخصية -<br/> تحتاج لدراسة ممنهجة ودقيقة لقبولها لذا يرجى طلبها مع إتاحة الوقت الكافي لتجنب أي إشكال قد يحدث حيث إنه يوجد احتمال عدم تلبيتها
          </p>
          <p>
            في حال عدم القدرة على -<br/> تلبية أي طلب سيتم الاعتذار بشكل رسمي خلال فترة وجيزة
          </p>
        </div>
      </div>
    )
  );
};

export default WelcomeMessage;