import { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const data_ = {
    email,
    password
  }

  const [errorMessage, setErrorMessage] = useState("");

  const BASE_API_URL = useSelector(state => state.BASE_API_URL);

  const navigate = useNavigate();
  const ChangeRoute = ()=> {
    navigate('/forget-password')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(`${BASE_API_URL}/api/admin/login?email=${email}&password=${password}`)
    .then((res) => {
        const data = res.data;
        if (typeof data === "string") {
          setErrorMessage(data);
        } else{
          navigate("/dashboard/admin/services");
          localStorage.setItem("admin_login" ,JSON.stringify(data_));
        }
    })
    .catch(err => console.log(err));
  };
  return (
    <div className="admin-login text-center">
      <div className="container">
        <h1>Admin Login</h1>
        <form className="admin-login-form mb-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Please Enter Your Email"
            className="form-control mb-4"
            onChange = {(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Please Enter Your Password"
            className="form-control mb-4"
            onChange = {(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <button  className="btn btn-success" onClick={ChangeRoute}>
          Forget Password
        </button>
        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
