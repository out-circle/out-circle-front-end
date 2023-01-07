import { useState , useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

const AddAds = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");

  const [yourFile, setYourFile] = useState();

  const [customerFiles, setCustomerFiles] = useState();

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);
  
  useEffect(() => {
    if (!localStorage.getItem("admin_login")) {
      navigate("/dashboard/admin/login");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    formData.append("yourFile", yourFile);
    for(let i = 0; i < customerFiles.length; i++) {
        formData.append("file" + i, customerFiles[i]);
    }
    Axios.post(`${BASE_API_URL}/api/ads/add-new-ads`, formData)
      .then((res) => {
        toast.success("تم إضافة الإعلان بنجاح")
        setTimeout(() => {
          navigate("/dashboard/admin/ads-managment")
        }, 3000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-ads text-center">
      <div className="container">
        <div><Toaster/></div>
        <h1>Add Ads</h1>
        <form className="add-ads-form mb-4" onSubmit={handleSubmit} encType="multipart/form-data">
          <textarea
            type="text"
            placeholder="Please Enter Your Ads Text"
            className="form-control mb-4"
            onChange={(e) => setText(e.target.value)}
            style={{ resize: "none" }}
            required
          />
          <div>
            <label>Add Your Ads Image: </label>
            <input
              type="file"
              className="form-control mb-4"
              onChange={(e) => setYourFile(e.target.files[0])}
              required
            />
          </div>
          <div>
            <label>Add Customer's Files: </label>
            <input
              type="file"
              className="form-control mb-4"
              onChange={(e) => setCustomerFiles(e.target.files)}
              multiple
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Ads
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAds;
