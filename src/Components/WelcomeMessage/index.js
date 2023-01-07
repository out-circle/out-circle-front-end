import { useState } from "react";
import "./index.css";
import { VscChromeClose } from "react-icons/vsc";

const WelcomeMessage = () => {
  const [isShowWelcomeMessage, setShowWelcomeMessage] = useState("yes");

  const handleShowWelcome = () => {
    localStorage.setItem("showWelcomeMessage", "no");
    setShowWelcomeMessage("no");
  };

  return (
    isShowWelcomeMessage === "yes" && (
      <div className="welcome">
        <span className="icon" onClick={handleShowWelcome}>
          <VscChromeClose />
        </span>
        <div className="bar">
          <p>welcome to Out Circle.</p>
          <p>We are glad to have you on our site.</p>
          <p>
            Our services meet all your desires in a unique and unusual way to be
            together towards a better future, we are your way to comfort and
            serve you is our mission.
          </p>
          <p>Very important notes:</p>
          <p>- Our main field of work is the consulting aspect</p>
          <p>
            - Most of our services are consulting ones with the possibility of
            applying them to become occupational services according to the
            agreement.
          </p>
          <p>
            - The occupational and personal services that we provide do not
            necessarily have to be met because our services need an organized
            and accurate study to be accepted, so please you have to give us
            enough time to avoid any problems.
          </p>
          <p>
            - In the event of not being able to meet any request, an official
            apology will be made within a short period.
          </p>
        </div>
      </div>
    )
  );
};

export default WelcomeMessage;
