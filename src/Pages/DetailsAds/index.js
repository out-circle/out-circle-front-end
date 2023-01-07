import { useEffect, useState, Fragment, useCallback } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import Axios from "axios";

const DetailsAds = () => {
  const ads_id = localStorage.getItem("ads_id");

  const [adsInfo, setAdsInfo] = useState({});

  const [photos, setPhotos] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const getAdsDetails = useCallback(() => {
    return new Promise((resolve, reject) => {
      Axios.get(`${BASE_API_URL}/api/ads/ads-info/${ads_id}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => reject(err));
    });
  }, [BASE_API_URL, ads_id]);
  useEffect(() => {
    getAdsDetails()
      .then((data) => {
        setAdsInfo(data);
        setPhotos(data.file_paths);
      })
      .catch((err) => console.log(err));
  }, [BASE_API_URL, getAdsDetails]);

  return (
    <div className="details_ads">
      <div className="rectangle">
        {
          <div className="content" key={adsInfo._id}>
            <p>{adsInfo.text}</p>
            <div>
              {(() => {
                let td = [];
                for (let i = 1; i <= photos.length; i++) {
                  td.push(
                    <div key={i}>
                      <img
                        className="image my-3"
                        src={`${BASE_API_URL}/${photos[i]}`}
                        alt=""
                      />
                      <video autoplay>
                        <source
                          src={`${BASE_API_URL}/${photos[i]}`}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  );
                }
                return td;
              })()}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default DetailsAds;
