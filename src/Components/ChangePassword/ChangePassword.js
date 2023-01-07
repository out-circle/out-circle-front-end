import { useState } from "react";
import pass from "../../Assets/images/password.svg";
import login from "../../Assets/images/Mask Group 2.png";
import "./ChangePasswod.css";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    old_password: yup.string().required("Please enter old password"),
    new_password: yup.string().required("Password is required").min(8 , "Password must be more than 8 characters"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("new_password"), null], "Passwords must match"),
  })
  .required();

const ChangePassword = () => {

  const navigate = useNavigate();

  const [old_password, setOld_Password] = useState("");
  const [new_password, setNew_Password] = useState("");
  const route = localStorage.getItem("route");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const items = localStorage.getItem("user");
  const obj = JSON.parse(items);
  const user_id = obj._id;
  const user_type = obj.account_type;

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const onSubmit = () => {
    Axios.put(
      `${BASE_API_URL}/api/users/update-user-password/${user_id}?old_password=${old_password}&new_password=${new_password}&user_type=${user_type}`
    )
      .then((res) => {
        if (
          res.data ===
          "كلمة السر التي أدخلتها غير صحيحة ، من فضلك أعد إدخال كلمة السر القديمة بشكل صحيح .."
        ) {
          toast.error(
            "The password you entered is incorrect, please re-enter your old password correctly."
          );
        } else if (typeof res.data === "object") {
          toast.success("Your password has been changed successfully");
          setTimeout(() => {
            navigate(`/${route}`);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="changepassword">
      <div>
        <Toaster />
      </div>
      <div className="form">
        <div className="header">
          <h2>Change Password</h2>
          <img src={pass} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="body">
            <div className="feild">
              <label>Old Password</label>
              <input
                type="password"
                {...register("old_password")}
                placeholder="old password"
                value={old_password}
                onChange={(e) => setOld_Password(e.target.value)}
              />
              <span style={{ color: "red" }}>
                {errors.old_password?.message}
              </span>
            </div>
            <div className="feild">
              <label>New Password</label>
              <input
                type="password"
                {...register("new_password")}
                value={new_password}
                onChange={(e) => setNew_Password(e.target.value)}
              />
              <span style={{ color: "red" }}>
                {errors.new_password?.message}
              </span>
            </div>
            <div className="feild">
              <label>Confirm New Password</label>
              <input type="password" {...register("confirm_password")} />
              <span style={{ color: "red" }}>
                {errors.confirm_password?.message}
              </span>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="section2">
        <img src={login} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default ChangePassword;
