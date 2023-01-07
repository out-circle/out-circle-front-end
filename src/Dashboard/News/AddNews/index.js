import { useState , useEffect} from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AddNews = () => {
  
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
    Axios.post(`${BASE_API_URL}/api/news/add-news`, {
      content,
    })
      .then((res) =>{
        toast.success("تم إضافة خبر بنجاح")
        setTimeout(
        () => navigate("/dashboard/admin/news-managment")
        , 3000)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-news text-center">
      <div className="container">
        <div><Toaster/></div>
        <h1>Add News</h1>
        <form className="add-news-form mb-4" onSubmit={handleSubmit}>
          <textarea
            type="text"
            placeholder="Please Enter Your News Text"
            className="form-control mb-4"
            onChange={(e) => setContent(e.target.value)}
            style={{ resize: "none" }}
            required
          />
          <button type="submit" className="btn btn-primary">
            Add News
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
