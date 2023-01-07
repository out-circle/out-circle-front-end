import {useEffect} from 'react';
import { Link  , useNavigate} from "react-router-dom";

const Services = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin_login")) {
      navigate("/dashboard/admin/login");
    }
  }, [navigate]);


  const Logout = () => {
    localStorage.removeItem("admin_login");
    navigate("/dashboard/admin/login")
  }


  return (
    <div className="services text-center">
      <div className="container">
        <h1>Services Page</h1>
        <Link to="/dashboard/admin/ads-managment" className="btn btn-danger d-block mb-4">Ads Managment</Link>
        <Link to="/dashboard/admin/news-managment" className="btn btn-danger d-block mb-4">News Managment</Link>
        <Link to="/dashboard/admin/notifications-managment" className="btn btn-danger d-block mb-4">Notifications Managment</Link>
        <Link to="/dashboard/admin/users-managment" className="btn btn-danger d-block">Users Managment</Link>
        <button onClick={Logout} className="btn btn-success d-block my-4">Logout</button>
      </div>
    </div>
  );
};

export default Services;