import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const InstitutesManagment = () => {

    const navigate = useNavigate();

    const BASE_API_URL = useSelector(state => state.BASE_API_URL);

    const [institutesInfoList, setInstitutesInfoList] = useState([]);

    useEffect(() => {
        
        if (!localStorage.getItem("admin_login")) {
            navigate("/dashboard/admin/login");
        }

        axios.get(`${BASE_API_URL}/api/institutes/all-institutes-info`)
            .then((res) => {
                setInstitutesInfoList(res.data);
            })
            .catch(err => console.log(err));
    }, [BASE_API_URL]);

    return (
        <div className="institutes-managment text-center">
            <div className="container">
                <h1>Institutes Managment Page</h1>
                {institutesInfoList.length > 0 ?
                    /* Start Institutes Info Section */
                    <section className="institutes-info">
                        {institutesInfoList.map((instituteInfo, index) =>
                            /* Start Institute Details Box */
                            <div className="institute-details-box mb-5" key={instituteInfo._id}>
                                <h5 className="mb-4">Institute #{index + 1} info :</h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold p-3">User Name</td>
                                            <td className="p-3">{instituteInfo.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Full Name</td>
                                            <td className="p-3">{instituteInfo.full_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Born Date</td>
                                            <td className="p-3">{instituteInfo.birthday}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Mobile Number</td>
                                            <td className="p-3">{instituteInfo.phone_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Whatsapp Number</td>
                                            <td className="p-3">{instituteInfo.whatsapp_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Email Address</td>
                                            <td className="p-3">{instituteInfo.user_email}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Institute Name</td>
                                            <td className="p-3">{instituteInfo.institute_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Institute Record Number</td>
                                            <td className="p-3">{instituteInfo.institute_record_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Institute Record Date</td>
                                            <td className="p-3">{instituteInfo.institute_record_history}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Current City</td>
                                            <td className="p-3">{instituteInfo.city}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Current Address</td>
                                            <td className="p-3">{instituteInfo.current_address}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Institute's detailed bussiness activity</td>
                                            <td className="p-3">{instituteInfo.current_institute_activity_details}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Institute Email Address</td>
                                            <td className="p-3">{instituteInfo.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Actual Start Date</td>
                                            <td className="p-3">{instituteInfo.work_start_date}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Phone Number</td>
                                            <td className="p-3">{instituteInfo.landline_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Fax Number</td>
                                            <td className="p-3">{instituteInfo.fax_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Landline Extension</td>
                                            <td className="p-3">{instituteInfo.land_phone_extension}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Files</td>
                                            {instituteInfo.file_paths.length > 0 ? <td>
                                                {instituteInfo.file_paths.map((path, index) =>
                                                    <a href={`${BASE_API_URL}/${path}`} target="_blank" className="d-block btn btn-success mb-3" key={index}>Download File {index + 1}</a>
                                                )}
                                            </td> : <td>Sorry Can't Files Added By User !!</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            /* End Individual Details Box */
                        )}
                    </section>
                    // End Individuals Info Section
                    : <p className="alert alert-danger">Sorry' Can't Users Now !!!</p>
                }
            </div>
        </div >
    );
};

export default InstitutesManagment;