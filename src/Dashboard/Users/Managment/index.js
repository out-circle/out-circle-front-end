import { useEffect } from 'react';
import { Link , useNavigate } from "react-router-dom";

const UsersManagment = () => {

    const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("admin_login")) {
      navigate("/dashboard/admin/login");
    }
  }, [navigate]);
  
    return (
        <div className="users-managment text-center">
            <div className="container">
                <h1>Users Managment Page</h1>
                <Link to="/dashboard/admin/corporate-managment" className="btn btn-danger d-block mb-4">Corporate Managment</Link>
                <Link to="/dashboard/admin/institutes-managment" className="btn btn-danger d-block mb-4">Institutes Managment</Link>
                <Link to="/dashboard/admin/professional-Scintific-managment" className="btn btn-danger d-block mb-4">Professional Scintific Managment</Link>
                <Link to="/dashboard/admin/handicraft-managment" className="btn btn-danger d-block mb-4">Handicraft Managment</Link>
                <Link to="/dashboard/admin/individuals-managment" className="btn btn-danger d-block">Individuals Managment</Link>
            </div>
        </div>
    );
};

export default UsersManagment;