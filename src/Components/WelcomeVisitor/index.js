import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import './index.css';

const WelcomeVisitor = () => {
  const [isShowWelcomeVisitor_, setShowWelcomeVisitor] = useState("yes");

  const handleShowWelcome = () => {
    localStorage.setItem("showWelcomeVisitor", "no");
    setShowWelcomeVisitor("no");
  };

  return (
    isShowWelcomeVisitor_ === "yes" && (
      <div className="welcome_visitor">
        <span className="icon" onClick={handleShowWelcome}>
          <VscChromeClose />
        </span>
        <div className="bar">
          <p>
            Your login as a visitor entitles you to maintain your privacy where
            you can access our services completely without knowing your personal
            information. It also entitles you to obtain your request in any
            service of any field through only one mean of communication that you
            choose as an email or mobile only without any other details.
          </p>
        </div>
      </div>
    )
  );
};

export default WelcomeVisitor;
