import { useState , useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AddNotification = () => {
  const [email, setEmail] = useState("");

  const [content, setContent] = useState("");

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin_login")) {
      navigate("/dashboard/admin/login");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${BASE_API_URL}/api/notifications/add-new-notification`, {
      email,
      content,
    })
      .then((res) =>{
        toast.success("تم إرسال الإشعار بنجاح")
        setTimeout(
        () => navigate("/dashboard/admin/notifications-managment")
        , 3000)
        localStorage.setItem("email", email);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-notification text-center">
      <div><Toaster/></div>
      <div className="container">
        <h1>Add Notification</h1>
        <form className="add-notification-form mb-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Please Enter Customer Email"
            className="form-control mb-4"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Please Enter Your Notification Text"
            className="form-control mb-4"
            onChange={(e) => setContent(e.target.value)}
            style={{ resize: "none" }}
            required
          />
          <button type="submit" className="btn btn-primary">
            Add Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotification;
