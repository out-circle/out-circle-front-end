import { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const DeleteAds = () => {
  const navigate = useNavigate();

  const [adsInfo, setAdsInfo] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    
    if (!localStorage.getItem("admin_login")) {
      navigate("/dashboard/admin/login");
    }

    Axios.get(`${BASE_API_URL}/api/ads/all-ads`)
      .then((res) => {
        let data = res.data;
        if (data.length > 0) setAdsInfo(data);
        else setErrorMessage("Sorry Can't Ads Now For Delete It");
      })
      .catch((err) => console.log(err));
  }, [BASE_API_URL]);

  const deleteAds = (e, adsId) => {
    e.preventDefault();
    Axios.delete(`${BASE_API_URL}/api/ads/delete-ads/${adsId}`)
      .then((res) => {
        document.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="delete-ads text-center">
      <div className="container">
        <h1>Delete Ads</h1>
        {adsInfo.length ? (
          <table style={{ direction: "rtl", width: "100%" }}>
            <tbody>
              {adsInfo.map((ads) => (
                <tr key={ads._id} style={{ border: "2px solid #EEE" }}>
                  <td style={{ border: "2px solid #EEE", padding: "10px" }}>
                    <textarea
                      type="text"
                      className="form-control"
                      defaultValue={ads.text}
                      style={{ resize: "none" }}
                      disabled
                    />
                  </td>
                  <td>
                    <form
                      className="delete-ads-form"
                      onSubmit={(e) => deleteAds(e, ads._id)}
                    >
                      <button type="submit" className="btn btn-danger">
                        Delete Ads
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="alert alert-danger">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default DeleteAds;
