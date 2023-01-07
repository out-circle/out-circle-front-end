import React, { useEffect, useState  , useRef } from "react";
import { Link , useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import user from "../../Assets/images/user.png";
import update from "../../Assets/images/update.png";
import file from "../../Assets/images/file.png";
import handicraft from "../../Assets/images/Mask Group -3.png";
import "./index.css";
import { useSelector } from "react-redux";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const ProfileHandicraft = () => {
  const navigate = useNavigate();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [userInfo, setUserInfo] = useState({});

  const ref = useRef();

  const ChangePassword = ()=> {
    navigate("/change-password");
    localStorage.setItem("route" , "profile-handicraft")
  }

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  let items = localStorage.getItem("user")
  let obj = JSON.parse(items);
  let user_id = obj._id;

  useEffect(() => {
    Axios.get(
      `${BASE_API_URL}/api/craftsmen/craftsman-user-info/${user_id}`
    )
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BASE_API_URL , user_id]);

  const data = [
    {
      key: "email",
      value: userInfo.email,
    },
    {
      key: "city",
      value: userInfo.city,
    },
    {
      key: "current_address",
      value: userInfo.current_address,
    },
    {
      key: "scientific_certificate",
      value: userInfo.scientific_certificate,
    },
    {
      key: "craftsmanship",
      value: userInfo.craftsmanship,
    },
    {
      key: "landline_number",
      value: userInfo.landline_number,
    },
    {
      key: "phone_number",
      value: userInfo.phone_number,
    },
    {
      key: "whatsapp_number",
      value: userInfo.whatsapp_number,
    },
    {
      key: "work_address",
      value: userInfo.work_address,
    },
    {
      key: "work_start_date",
      value: userInfo.work_start_date,
    },
    {
      key: "file1",
      value: file1,
    },
    {
      key: "file2",
      value: file2,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    data.map((el) => formData.append(el.key, el.value));
    Axios.put(
      `${BASE_API_URL}/api/craftsmen/update-craftsman-user-info/${user_id}`,
      formData
    )
      .then((res) => {
        toast.success("Your data has been data updated successfully")
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="profile_handicraft">
      <header>
        <Link to="/handicraft" className="back">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section>
        <header>
          <span className="icon">
            <img src={user} alt="" width="40px" />
          </span>
          <span className="text">Your Profile</span>
        </header>
        <div><Toaster/></div>
        <div className="body my-3">
          <form onSubmit={handleSubmit}>
            <div className="bar">
              <div className="information">
                <input
                  placeholder="User name"
                  type="text"
                  defaultValue={userInfo.user_name}
                  disabled
                />
              </div>
              <div className="information">
                <input
                  disabled
                  placeholder="Password"
                  type="password"
                  defaultValue={"**********"}
                />
                <div onClick={ChangePassword} style={{cursor:"pointer"}}>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  placeholder="Full Name"
                  type="text"
                  defaultValue={userInfo.full_name}
                  disabled
                />
              </div>
              <div className="information">
                <input
                  placeholder="Born date"
                  type="text"
                  defaultValue={userInfo.birthday}
                  disabled
                />
              </div>
              <div className="information">
                <input
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, city: e.target.value });
                  }}
                  placeholder="Current city"
                  type="text"
                  defaultValue={userInfo.city}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      current_address: e.target.value,
                    });
                  }}
                  placeholder="Current Address"
                  type="text"
                  defaultValue={userInfo.current_address}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  placeholder="Scientific certificate"
                  type="text"
                  defaultValue={userInfo.scientific_certificate}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      scientific_certificate: e.target.value,
                    });
                  }}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  placeholder="Craft specialization"
                  type="text"
                  defaultValue={userInfo.craftsmanship}
                  onChange={(e) => {
                    setUserInfo({
                    ...userInfo,
                    craftsmanship: e.target.value,
                    });
                }}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  disabled
                  placeholder="Actaul start date"
                  type="text"
                  ref={ref}
                  defaultValue={userInfo.work_start_date}
                  onFocus={() => (ref.current.type = "date")}
                  onBlur={() => (ref.current.type = "text")}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  placeholder="Current work address"
                  type="text"
                  defaultValue={userInfo.work_address}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, work_address: e.target.value });
                  }}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  placeholder="mobile number"
                  type="text"
                  defaultValue={userInfo.phone_number}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      phone_number: e.target.value,
                    });
                  }}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  placeholder="Phone number"
                  type="number"
                  defaultValue={userInfo.landline_number}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      landline_number: e.target.value,
                    });
                  }}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  placeholder="whatsapp number"
                  type="number"
                  defaultValue={userInfo.whatsapp_number}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      whatsapp_number: e.target.value,
                    });
                  }}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  placeholder="Email Address"
                  type="email"
                  defaultValue={userInfo.email}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      email : e.target.value,
                    });
                  }}
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <label htmlFor="file1">
                  <p>Upload work license</p>
                  <div>
                    <img src={file} alt="" />
                  </div>
                </label>
                <input onChange={(e) => setFile1(e.target.files[0])} id="file1" type="file" style={{ display: "none" }} />
              </div>
              <div className="information">
                <label htmlFor="file2">
                  <p>Upload work samples in the field of craft</p>
                  <div>
                    <img src={file} alt="" />
                  </div>
                </label>
                <input onChange={(e) => setFile2(e.target.files[0])} id="file2" type="file" style={{ display: "none" }} />
              </div>
            </div>
            <div className="footer">
              <button type="submit" className="mt-4 py-1 px-3">Update</button>
            </div>
          </form>
        </div>
      </section>
      <div className="section2">
        <img src={handicraft} alt="" />
      </div>
    </div>
  );
};

export default ProfileHandicraft;
