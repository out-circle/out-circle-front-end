import { useEffect, useState, useRef } from "react";
import { Link , useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import user from "../../Assets/images/user.png";
import update from "../../Assets/images/update.png";
import file from "../../Assets/images/file.png";
import scientific from "../../Assets/images/Mask Group -4.png";
import "./index.css";
import { useSelector } from "react-redux";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ProfileScientific = () => {
  const [file1, setFile1] = useState();

  const ref = useRef();

  const [userInfo, setUserInfo] = useState({});

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  let items = localStorage.getItem("user");
  let obj = JSON.parse(items);
  let user_id = obj._id;

  const navigate = useNavigate();
  const ChangePassword = ()=> {
    navigate("/change-password");
    localStorage.setItem("route" , "profile-corporate");
  }

  useEffect(() => {
    Axios.get(
      `${BASE_API_URL}/api/scientific-careers/scientific-career-user-info/${user_id}`
    )
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BASE_API_URL, user_id]);

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
      key: "work_start_date",
      value: userInfo.work_start_date,
    },
    {
      key: "file1",
      value: file1,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    data.map((el) => formData.append(el.key, el.value));
    Axios.put(
      `${BASE_API_URL}/api/scientific-careers/update-scientific-career-user-info/${user_id}`,
      formData
    )
      .then((res) => {
        toast.success("Your data has been data updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="profile_scientific">
      <header>
        <Link to="/scientific" className="back">
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
        <div>
          <Toaster />
        </div>
        <div className="body my-3">
          <form onSubmit={handleSubmit}>
            <div className="bar">
              <div className="information">
                <input
                  disabled
                  type="text"
                  defaultValue={userInfo.user_name}
                  placeholder="User name"
                />
              </div>
              <div className="information">
                <input
                  disabled
                  type="password"
                  defaultValue={"**********"}
                  placeholder="Password"
                />
                <div onClick={ChangePassword} style={{cursor:"pointer"}}>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  disabled
                  type="text"
                  defaultValue={userInfo.full_name}
                  placeholder="Full Name"
                />
              </div>
              <div className="information">
                <input type="text" defaultValue={userInfo.birthday} disabled/>
              </div>
              <div className="information">
                <input
                  type="text"
                  defaultValue={userInfo.city}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, city: e.target.value });
                  }}
                  placeholder="Current city"
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  type="text"
                  defaultValue={userInfo.current_address}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      current_address: e.target.value,
                    });
                  }}
                  placeholder="Current Address"
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  type="text"
                  defaultValue={userInfo.craftsmanship}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, craftsmanship: e.target.value });
                  }}
                  placeholder="Scientific specialization"
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  ref={ref}
                  onFocus={() => (ref.current.type = "date")}
                  onBlur={() => (ref.current.type = "text")}
                  type="text"
                  defaultValue={userInfo.work_start_date}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      work_start_date: e.target.value,
                    });
                  }}
                  placeholder="Actaul start date"
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  type="number"
                  defaultValue={userInfo.landline_number}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      landline_number: e.target.value,
                    });
                  }}
                  placeholder="Landline number"
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  type="number"
                  defaultValue={userInfo.phone_number}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, phone_number: e.target.value });
                  }}
                  placeholder="Mobile number"
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  type="number"
                  defaultValue={userInfo.whatsapp_number}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      whatsapp_number: e.target.value,
                    });
                  }}
                  placeholder="Whatsapp number"
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <input
                  type="email"
                  defaultValue={userInfo.email}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, email: e.target.value });
                  }}
                  placeholder="Email Address"
                />
                <div>
                  <img src={update} alt="" />
                </div>
              </div>
              <div className="information">
                <label htmlFor="file" className="d-flex">
                  {!file1 ? (
                    <p>Upload work license and certificate</p>
                  ) : (
                    <p>Your file has been updated successfully</p>
                  )}
                  <div>
                    <img src={file} alt="" />
                  </div>
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile1(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="footer">
              <button type="submit" className="mt-4 py-1 px-3">
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="section2">
        <img src={scientific} alt="" />
      </div>
    </div>
  );
};

export default ProfileScientific;
