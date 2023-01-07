import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const HandcraftsManagment = () => {

    const BASE_API_URL = useSelector(state => state.BASE_API_URL);

    const navigate = useNavigate();

    const [craftsmenInfoList, setCraftsmenInfoList] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("admin_login")) {
            navigate("/dashboard/admin/login");
        }
        axios.get(`${BASE_API_URL}/api/craftsmen/all-craftsmen-users-info`)
            .then((res) => {
                setCraftsmenInfoList(res.data);
            })
            .catch(err => console.log(err));
    }, [BASE_API_URL]);

    return (
        <div className="handcraft-managment text-center">
            <div className="container">
                <h1>Handicraft Managment Page</h1>
                {craftsmenInfoList.length > 0 ?
                    /* Start Handcrafts Info Section */
                    <section className="handcrafts-info">
                        {craftsmenInfoList.map((craftsmanInfo, index) =>
                            /* Start Handcraft Details Box */
                            <div className="handcraft-details-box mb-5" key={craftsmanInfo._id}>
                                <h5 className="mb-4">Handcraft #{index + 1} info :</h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold p-3">User Name</td>
                                            <td className="p-3">{craftsmanInfo.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Full Name</td>
                                            <td className="p-3">{craftsmanInfo.full_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Born Date</td>
                                            <td className="p-3">{craftsmanInfo.birthday}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Current City</td>
                                            <td className="p-3">{craftsmanInfo.city}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Current Address</td>
                                            <td className="p-3">{craftsmanInfo.current_address}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Scientific Certificate</td>
                                            <td className="p-3">{craftsmanInfo.scientific_certificate}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Craft Specialization</td>
                                            <td className="p-3">{craftsmanInfo.craftsmanship}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Actual Start Date</td>
                                            <td className="p-3">{craftsmanInfo.work_start_date}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Current Work Address</td>
                                            <td className="p-3">{craftsmanInfo.work_address}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Phone Number</td>
                                            <td className="p-3">{craftsmanInfo.landline_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Mobile Number</td>
                                            <td className="p-3">{craftsmanInfo.phone_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Whatsapp Number</td>
                                            <td className="p-3">{craftsmanInfo.whatsapp_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Email Address</td>
                                            <td className="p-3">{craftsmanInfo.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Files</td>
                                            {craftsmanInfo.file_paths.length > 0 ? <td>
                                                {craftsmanInfo.file_paths.map((path, index) =>
                                                    <a href={`${BASE_API_URL}/${path}`} target="_blank" className="d-block btn btn-success mb-3" key={index}>Download File {index + 1}</a>
                                                )}
                                            </td> : <td>Sorry Can't Files Added By User !!</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            /* End Handcraft Details Box */
                        )}
                    </section>
                    // End Handcrafts Info Section
                    : <p className="alert alert-danger">Sorry' Can't Users Now !!!</p>
                }
            </div>
        </div >
    );
};

export default HandcraftsManagment;