import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const IndividualsManagment = () => {

    const navigate = useNavigate();

    const BASE_API_URL = useSelector(state => state.BASE_API_URL);

    const [individualsInfoList, setIndividualsInfoList] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("admin_login")) {
            navigate("/dashboard/admin/login");
        }
        axios.get(`${BASE_API_URL}/api/individuals/all-individuals-users-info`)
            .then((res) => {
                setIndividualsInfoList(res.data);
            })
            .catch(err => console.log(err));
    }, [BASE_API_URL]);

    return (
        <div className="individuals-managment text-center">
            <div className="container">
                <h1>Individuals Managment Page</h1>
                {individualsInfoList.length > 0 ?
                    /* Start Individuals Info Section */
                    <section className="individuals-info">
                        {individualsInfoList.map((individualInfo, index) =>
                            /* Start Individual Details Box */
                            <div className="individual-details-box mb-5" key={individualInfo._id}>
                                <h5 className="mb-4">Individual #{index + 1} info :</h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold p-3">User Name</td>
                                            <td className="p-3">{individualInfo.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Full Name</td>
                                            <td className="p-3">{individualInfo.full_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Born Date</td>
                                            <td className="p-3">{individualInfo.birthday}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Current City</td>
                                            <td className="p-3">{individualInfo.city}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Current Address</td>
                                            <td className="p-3">{individualInfo.current_address}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Scientific Certificate</td>
                                            <td className="p-3">{individualInfo.scientific_certificate}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Details of the academic certificate</td>
                                            <td className="p-3">{individualInfo.scientific_certificate_details}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Mobile Number</td>
                                            <td className="p-3">{individualInfo.phone_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Whatsapp Number</td>
                                            <td className="p-3">{individualInfo.whatsapp_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Email Address</td>
                                            <td className="p-3">{individualInfo.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Current Work</td>
                                            <td className="p-3">{individualInfo.current_work}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Work Address</td>
                                            <td className="p-3">{individualInfo.work_address}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Work Start Date</td>
                                            <td className="p-3">{individualInfo.work_start_date}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Work Phone Number</td>
                                            <td className="p-3">{individualInfo.business_phone_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Extension</td>
                                            <td className="p-3">{individualInfo.shunt}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Detailed Practical Experience</td>
                                            <td className="p-3">{individualInfo.scientific_experience_details}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">Languages Skills</td>
                                            <td className="p-3">{individualInfo.language_skills}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold p-3">IT Skills</td>
                                            <td className="p-3">{individualInfo.technical_skills}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Files</td>
                                            {individualInfo.file_paths.length > 0 ? <td>
                                                {individualInfo.file_paths.map((path, index) =>
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

export default IndividualsManagment;