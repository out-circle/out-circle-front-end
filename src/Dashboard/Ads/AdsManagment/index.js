import {useEffect} from 'react';
import { Link , useNavigate} from "react-router-dom";

const AdsManagment = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("admin_login")) {
      navigate("/dashboard/admin/login");
    }
  }, [navigate]);

  return (
    <div className="add-managment text-center">
      <div className="container">
        <h1>Ads Managment Page</h1>
        <Link to="/dashboard/admin/add-ads" className="btn btn-danger d-block mb-4">Add Ads</Link>
        <Link to="/dashboard/admin/delete-ads" className="btn btn-danger d-block">Delete Ads</Link>
      </div>
    </div>
  );
};

export default AdsManagment;
