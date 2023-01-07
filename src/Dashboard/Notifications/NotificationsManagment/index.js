import {useEffect} from 'react';
import { Link , useNavigate} from "react-router-dom";


const NotificationsManagment = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("admin_login")) {
      navigate("/dashboard/admin/login");
    }
  }, [navigate]);
  
  return (
    <div className="news-managment text-center">
      <div className="container">
        <h1>Notifications Managment Page</h1>
        <Link to="/dashboard/admin/add-notification" className="btn btn-danger d-block mb-4">Add Notifications</Link>
      </div>
    </div>
  );
};

export default NotificationsManagment;