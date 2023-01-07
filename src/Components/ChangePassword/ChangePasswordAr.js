import { useState } from "react";
import pass from "../../Assets/images/password.svg";
import login from "../../Assets/images/ar_photo/login.png";
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
    old_password: yup.string().required("من فضلك أدخل كلمة المرور القديمة"),
    new_password: yup
      .string()
      .required("من فضلك أدخل كلمة المرور الجديدة")
      .min(8, "يجب أن تكون كلمة المرور أكثر من 8 أحرف"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("new_password"), null], "يجب أن تتطابق كلمات المرور"),
  })
  .required();

const ChangePasswordAr = () => {
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
        if (typeof res.data === "string") {
          toast.error(
            "كلمة المرور التي أدخلتها غير صحيحة ، يرجى إعادة إدخال كلمة المرور القديمة بشكل صحيح"
          );
        } else if (typeof res.data === "object") {
          toast.success("تم تغيير كلمة المرور الخاصة بك بنجاح");
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
      <div className="form_ar">
        <div className="header">
          <img src={pass} alt="" />
          <h2>تغيير كلمة المرور</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="body">
            <div className="feild">
              <label>كلمة المرور القديمة</label>
              <input
                {...register("old_password")}
                type="password"
                value={old_password}
                onChange={(e) => setOld_Password(e.target.value)}
              />
              <span style={{ color: "red" }}>
                {errors.old_password?.message}
              </span>
            </div>
            <div className="feild">
              <label>كلمة المرور الجديدة</label>
              <input
                {...register("new_password")}
                type="password"
                value={new_password}
                onChange={(e) => setNew_Password(e.target.value)}
              />
              <span style={{ color: "red" }}>
                {errors.new_password?.message}
              </span>
            </div>
            <div className="feild">
              <label>تأكيد كلمة المرور الجديدة</label>
              <input type="password" {...register("confirm_password")} />
              <span style={{ color: "red" }}>
                {errors.confirm_password?.message}
              </span>
            </div>
          </div>
          <button type="submit">إرسال</button>
        </form>
      </div>
      <div className="section2-ar">
        <img src={login} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default ChangePasswordAr;
