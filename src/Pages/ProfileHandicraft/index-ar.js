import React, { useEffect, useState  , useRef } from "react";
import { Link , useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import user from "../../Assets/images/user.png";
import update from "../../Assets/images/update.png";
import file from "../../Assets/images/file.png";
import handicraft from "../../Assets/images/ar_photo/handicraft.png";
import "./index.css";
import { useSelector } from "react-redux";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const ProfileHandicraftAr = () => {
  const navigate = useNavigate();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [userInfo, setUserInfo] = useState({});

  const ref = useRef();

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
        toast.success("تم تعديل بياناتك بنجاح")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ChangePassword = ()=> {
    navigate("/change-password-ar");
    localStorage.setItem("route" , "profile-handicraft-ar")
  }

  return (
    <div className="profile_handicraft">
      <header>
        <Link to="/handicraft-ar" className="back-ar">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="section-ar">
        <header>
          <span className="icon">
            <img src={user} alt="" width="40px" />
          </span>
          <span className="text">ملفك الشخصي</span>
        </header>
        <div><Toaster/></div>
        <div className="body my-3">
          <form onSubmit={handleSubmit}>
            <div className="bar">
              <div className="information">
                <input
                  placeholder="اسم المستخدم" 
                  type="text"
                  defaultValue={userInfo.user_name}
                  disabled
                />
              </div>
              <div className="information">
              <div onClick={ChangePassword} style={{cursor:"pointer"}}>
                <img src={update} alt="" />
              </div>
                <input
                  placeholder="كلمة المرور"
                  type="password"
                  defaultValue={"**********"}
                  disabled
                />
              </div>
              <div className="information">
                <input
                  placeholder="الاسم الكامل"
                  type="text"
                  defaultValue={userInfo.full_name}
                  disabled
                />
              </div>
              <div className="information">
                <input
                  placeholder="المواليد" 
                  type="text"
                  defaultValue={userInfo.birthday}
                  disabled
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, city: e.target.value });
                  }}
                  placeholder="المحافظة" 
                  type="text"
                  defaultValue={userInfo.city}
                />
              </div>
              <div className="information">
                <div>
                  <img src={update} alt="" />
                </div>
                <input
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      current_address: e.target.value,
                    });
                  }}
                  placeholder="العنوان الحالي"
                  type="text"
                  defaultValue={userInfo.current_address}
                />
              </div>
              <div className="information">
                <div>
                  <img src={update} alt="" />
                </div>
                <input
                  placeholder="الشهادة العلمية" 
                  type="text"
                  defaultValue={userInfo.scientific_certificate}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      scientific_certificate: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input
                  placeholder="الاختصاص الحرفي" 
                  type="text"
                  defaultValue={userInfo.craftsmanship}
                  onChange={(e) => {
                    setUserInfo({
                    ...userInfo,
                    craftsmanship: e.target.value,
                    });
                }}
                />
              </div>
              <div className="information">
                <input
                  disabled
                  placeholder="تاريخ بدء العمل الفعلي"
                  type="text"
                  ref={ref}
                  defaultValue={userInfo.work_start_date}
                  onFocus={() => (ref.current.type = "date")}
                  onBlur={() => (ref.current.type = "text")}
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input
                  placeholder="عنوان العمل الحالي"
                  type="text"
                  defaultValue={userInfo.work_address}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, work_address: e.target.value });
                  }}
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input
                  placeholder="رقم الموبايل"
                  type="text"
                  defaultValue={userInfo.phone_number}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      phone_number: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="information">
                <input
                  placeholder="رقم الهاتف الأرضي"
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
                <div>
                    <img src={update} alt="" />
                </div>
                <input
                  placeholder="رقم الواتس أب"
                  type="text"
                  defaultValue={userInfo.whatsapp_number}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      whatsapp_number: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input
                  placeholder="البريد الألكتروني" 
                  type="email"
                  defaultValue={userInfo.email}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      email : e.target.value,
                    });
                  }}
                />
              </div>
              <div className="information">
                <label htmlFor="file1">
                    { !file1 ? <p>تحميل رخصة العمل</p> : <p>تم تحميل الملف</p>}
                  <div>
                    <img src={file} alt="" />
                  </div>
                </label>
                <input onChange={(e) => setFile1(e.target.files[0])} id="file1" type="file" style={{ display: "none" }} />
              </div>
              <div className="information">
                <label htmlFor="file2">
                    { !file2 ? <p>تحميل نماذج أعمال الحرفة</p> : <p>تم تحميل الملف</p>}
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
      <div className="section2-ar">
        <img src={handicraft} alt="" />
      </div>
    </div>
  );
};

export default ProfileHandicraftAr;