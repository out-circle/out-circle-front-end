import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const ProfessionalScintificManagment = () => {

    const navigate = useNavigate();
    const BASE_API_URL = useSelector(state => state.BASE_API_URL);

    const [scientific_careers_Info_list, set_scientific_careers_Info_list] = useState([]);

    useEffect(() => {

        if (!localStorage.getItem("admin_login")) {
            navigate("/dashboard/admin/login");
        }

        axios.get(`${BASE_API_URL}/api/scientific-careers/all-scientific-careers-users-info`)
            .then((res) => {
                set_scientific_careers_Info_list(res.data);
            })
            .catch(err => console.log(err));
    }, [BASE_API_URL , navigate]);

    return (
        <div className="scientific-careers-managment text-center">
            <div className="container">
                <h1>Professional Scintific Managment Page</h1>
                {scientific_careers_Info_list.length > 0 ?
                    /* Start Scientific Careers Users Info Section */
                    <section className="scientific-careers-info">
                        {scientific_careers_Info_list.map((scientific_careers_user_Info, index) =>
                            /* Start Scientific Career User Details Box */
                            <div className="institute-details-box mb-5" key={scientific_careers_user_Info._id}>
                                <h5 className="mb-4">Professional Scintific User #{index + 1} info :</h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold p-3">User Name</td>
                                            <td className="p-3">{scientific_careers_user_Info.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Full Name</td>
                                            <td className="p-3">{scientific_careers_user_Info.full_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Born Date</td>
                                            <td className="p-3">{scientific_careers_user_Info.birthday}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Current City</td>
                                            <td className="p-3">{scientific_careers_user_Info.city}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Scientific Specialization</td>
                                            <td className="p-3">{scientific_careers_user_Info.craftsmanship}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Actual Start Date</td>
                                            <td className="p-3">{scientific_careers_user_Info.work_start_date}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Phone Number</td>
                                            <td className="p-3">{scientific_careers_user_Info.landline_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Mobile Number</td>
                                            <td className="p-3">{scientific_careers_user_Info.current_address}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Whatsapp Number</td>
                                            <td className="p-3">{scientific_careers_user_Info.whatsapp_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Email Address</td>
                                            <td className="p-3">{scientific_careers_user_Info.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Files</td>
                                            {scientific_careers_user_Info.file_paths.length > 0 ? <td>
                                                {scientific_careers_user_Info.file_paths.map((path, index) =>
                                                    <a href={`${BASE_API_URL}/${path}`} target="_blank" className="d-block btn btn-success mb-3" key={index}>Download File {index + 1}</a>
                                                )}
                                            </td> : <td>Sorry Can't Files Added By User !!</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            /* End Scientific Career User Details Box */
                        )}
                    </section>
                    // End Scientific Careers Users Info
                    : <p className="alert alert-danger">Sorry' Can't Users Now !!!</p>
                }
            </div>
        </div >
    );
};

export default ProfessionalScintificManagment;