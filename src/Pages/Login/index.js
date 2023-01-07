import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import toast, { Toaster } from "react-hot-toast";
import Axios from "axios";
import { useSelector } from "react-redux";
import login from "../../Assets/images/Mask Group 2.png";
import logoLogin from "../../Assets/images/logoLogin.png";
import "./index.css";

function Login() {
  const intialValues = { text: "", password: "", user_type: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    const errors = Object.values(validate(formValues));
    if (errors.length === 0) {
      Axios.get(
        `${BASE_API_URL}/api/users/user-info?${`input=${formValues.text}`}&${`password=${formValues.password}`}&${`user_type=${formValues.user_type}`}`
      )
        .then((res) => {
          let data = res.data;
          if (data === "عذراً الحساب الذي ادخلته غير موجود ، رجاءً أدخل إيميل آخر من فضلك ...") {
            toast.error("Sorry, the account you entered does not exist, please enter another email please...");
          } else {
            switch (formValues.user_type) {
              case "companies":
                localStorage.setItem("user_corporate", JSON.stringify(data));
                setTimeout(() => {
                  navigate("/corporate");
                }, 3000);
                break;
              case "institutes":
                localStorage.setItem("user_institute", JSON.stringify(data));
                setTimeout(() => {
                  navigate("/institute");
                }, 3000);
                break;
              case "scientific_careers":
                localStorage.setItem("user_scientific", JSON.stringify(data));
                setTimeout(() => {
                  navigate("/scientific");
                }, 3000);
                break;
              case "craftsmen":
                localStorage.setItem("user_handicraft", JSON.stringify(data));
                setTimeout(() => {
                  navigate("/handicraft");
                }, 3000);
                break;
              case "individuals":
                localStorage.setItem("user_individuals", JSON.stringify(data));
                setTimeout(() => {
                  navigate("/individuals");
                }, 3000);
                break;
              default:
                break;
            }
            toast.success("Logged in successfully...");
            localStorage.setItem("is-user-login", true);
            localStorage.setItem("user" , JSON.stringify(data));
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const validate = (values) => {
    let errors = {};

    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
    if (!values.text) {
      errors.text = "Please enter email or mobile number"
    } else if (!mailFormat.test(values.text)) {
      errors.text = "Invalid Input Please enter Email Or mobile number";
    }
    if (!values.password) {
      errors.password = "Please enter password";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }
    if (!values.user_type) {
      errors.user_type = "Please enter type account";
    }
    return errors;
  };

  return (
    <div className="login">
      <Link to="/" className="back">
        <span>Back</span>
        <img src={back} alt="" />
      </Link>
      <div className="login_">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={logoLogin} alt="" />
          </div>
          <div>
            <div>
              <Toaster />
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="bar">
                <div className="select">
                  <label>select your type account</label>
                  <br />
                  <select
                    name="user_type"
                    value={formValues.user_type}
                    onChange={handleChange}
                  >
                    <option value="" hidden>account type</option>
                    <option value="companies">Corporate</option>
                    <option value="institutes">Institute</option>
                    <option value="scientific_careers">
                      Scientific Profissional
                    </option>
                    <option value="craftsmen">Handicraft</option>
                    <option value="individuals">Individuals</option>
                  </select>
                  {formErrors.user_type && (
                    <span className="error" style={{ color: "red" }}>
                      {formErrors.user_type}
                    </span>
                  )}
                </div>
                <div className="email">
                  <label htmlFor="email">mobile number or email</label>
                  <br />
                  <input
                    type="text"
                    name="text"
                    id="email"
                    onChange={handleChange}
                    className={formErrors.text && "input-error"}
                  />
                  {formErrors.text && (
                    <span className="error" style={{ color: "red" }}>
                      {formErrors.text}
                    </span>
                  )}
                </div>
                <div className="password">
                  <label htmlFor="password_">password</label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    className={formErrors.password && "input-error"}
                  />
                  {formErrors.password && (
                    <span className="error" style={{ color: "red" }}>
                      {formErrors.password}
                    </span>
                  )}
                </div>
              </div>
              <Link to="/forget-password" className="forget">
                forget password
              </Link>
              <button type="submit" className="loginButton mt-1">
                login
              </button>
              <br />
            </form>
            <div className="register mt-2">
              <p className="my-0">don't have an account?</p>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <img src={login} alt="" />
      </div>
    </div>
  );
}

export default Login;
