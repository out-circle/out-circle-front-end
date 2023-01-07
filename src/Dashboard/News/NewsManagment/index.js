import {useEffect} from 'react';
import { Link , useNavigate} from "react-router-dom";

const NewsManagment = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("admin_login")) {
      navigate("/dashboard/admin/login");
    }
  }, [navigate]);
  
  return (
    <div className="news-managment text-center">
      <div className="container">
        <h1>News Managment Page</h1>
        <Link to="/dashboard/admin/add-news" className="btn btn-danger d-block mb-4">Add News</Link>
        <Link to="/dashboard/admin/delete-news" className="btn btn-danger d-block">Delete News</Link>
      </div>
    </div>
  );
};

export default NewsManagment;
