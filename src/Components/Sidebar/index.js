import whatsapp from "../../Assets/images/whatsapp.png";
import facebook from "../../Assets/images/facebook.png";
import linkedin from "../../Assets/images/linkedin.png";
import telegram from "../../Assets/images/telegram.png";
import instegram from "../../Assets/images/instagram.png";
import appStore from "../../Assets/images/appStore.png";
import googlePlay from "../../Assets/images/googlePlay.png";
import logo from "../../Assets/images/Group 360.svg";
import {FaBars} from "react-icons/fa";
import icon1 from "../../Assets/images/icon1.png";
import icon2 from "../../Assets/images/icon2.png";
import icon3 from "../../Assets/images/icon3.png";
import { Link } from "react-router-dom";

const Sidebar = ({item1 , item2 , item3 , route1 , route2 , route3}) => {
    return (
      <div className="sidebar">
          <button
            className="btn btn-none mt-5 px-1 py-0 off"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            <span style={{ fontSize: "25px"}} className="text-light bar">
              <FaBars/>
            </span>
          </button>
  
          <div
            className="offcanvas offcanvas-start"
            data-bs-backdrop="static"
            tabIndex="-1"
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
            style={{background:"#003f30"}}
          >
            <div className="offcanvas-header text-light" style={{background:"#003f30"}}>
              <img src={logo} alt="" width="100px"/>
              <button
                type="button"
                className="btn-close bg-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body mt-3">
              <div>
              <Link to={`/${route1}`} className="mt-0 icon1">
                  <img src={icon1} alt="" width="60px" />
                  <span>{item1}</span>
              </Link>
              </div>
              <div>
                <Link to={`/${route2}`} className="mt-4 icon1">
                <img src={icon2} alt="" width="60px" />
                <span>{item2}</span>
                </Link>
              </div>
              <div>
              <Link to={`/${route3}`} className="mt-4 icon1">
              <img src={icon3} alt="" width="60px" />
              <span>{item3}</span>
              </Link>
            </div>
            </div>
            <div className="icons">
            <ul>
              <li className="mx-0">
                <a href="https://wa.me/+963946202311" target="_blank" rel="noreferrer">
                  <img src={whatsapp} alt="" />
                </a>
              </li>
              <li className="mx-0">
                <a href="https://m.facebook.com/profile.php?id=100088302496274&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li className="mx-0">
                <a href="https://www.linkedin.com/in/out-circle-463675259" target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li className="mx-0">
                <a href="http://t.me/OutCircle" target="_blank" rel="noreferrer">
                  <img src={telegram} alt="" />
                </a>
              </li>
              <li className="mx-0">
                <a href="https://www.instagram.com/out.circle.2023/?fbclid=IwAR1Y7wuS-QtVNNG7hhzwsbzzNfPNUbVGrqTAfCVYPwKMZUGKfKdKJSPU9K8" target="_blank" rel="noreferrer">
                  <img src={instegram} alt="" />
                </a>
              </li>
            </ul>
            {/* <div className="ms-4">
              <Link to="" className="me-1">
                <img src={googlePlay} alt="" />
              </Link>
              <Link to="" className="ms-2">
                <img src={appStore} alt="" />
              </Link>
            </div> */}
          </div>
          </div>
        </div>
    )
  }
export default Sidebar;