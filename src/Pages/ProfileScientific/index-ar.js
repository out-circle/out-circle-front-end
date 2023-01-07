import React, { useEffect, useState, useRef } from "react";
import { Link , useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import user from "../../Assets/images/user.png";
import update from "../../Assets/images/update.png";
import file from "../../Assets/images/file.png";
import scientific from "../../Assets/images/ar_photo/scientific.png";
import "./index.css";
import { useSelector } from "react-redux";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const ProfileScientificAr = () => {

    const [file1, setFile1] = useState();

    const ref = useRef();

    const [userInfo, setUserInfo] = useState({});

    const BASE_API_URL = useSelector((state) => state.BASE_API_URL);
    
    let items = localStorage.getItem("user")
    let obj = JSON.parse(items);
    let user_id = obj._id;

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

  const navigate = useNavigate();
  const ChangePassword = ()=> {
    navigate("/change-password-ar");
    localStorage.setItem("route" , "profile-scientific-ar");
  }

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
    }
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
        toast.success("تم تحديث بياناتك بنجاح");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="profile_scientific">
      <header>
        <Link to="/scientific-ar" className="back_ar">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="section-ar" >
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
                <input disabled type="text" defaultValue={userInfo.user_name} placeholder="اسم المستخدم" />
              </div>
              <div className="information">
                <div onClick={ChangePassword} style={{cursor:"pointer"}}>
                    <img src={update} alt="" />
                </div>
                <input disabled type="password" defaultValue={"**********"} placeholder="كلمة المرور" />
              </div>
              <div className="information">
                <input disabled type="text" defaultValue={userInfo.full_name} placeholder="الاسم الكامل"/>
              </div>
              <div className="information">
                <input disabled type="text" defaultValue={userInfo.birthday} placeholder="المواليد" />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input 
                type="text" 
                defaultValue={userInfo.city}
                onChange={(e) => {
                    setUserInfo({ ...userInfo, city: e.target.value });
                }}
                placeholder="المحافظة"
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input 
                type="text" 
                defaultValue={userInfo.current_address} 
                onChange={(e) => {
                    setUserInfo({ ...userInfo, current_address: e.target.value });
                }}
                placeholder="العنوان الحالي"
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input 
                type="text" defaultValue={userInfo.craftsmanship} 
                onChange={(e) => {
                    setUserInfo({ ...userInfo, craftsmanship: e.target.value });
                }}
                placeholder="الاختصاص العلمي"
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input
                ref={ref}
                onFocus={() => (ref.current.type = "date")}
                onBlur={() => (ref.current.type = "text")}
                type="text"
                defaultValue={userInfo.work_start_date}
                onChange={(e) => {
                    setUserInfo({ ...userInfo, work_start_date: e.target.value });
                }}
                placeholder="تاريخ بدء العمل الفعلي"
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input 
                type="number" 
                defaultValue={userInfo.landline_number} 
                onChange={(e) => {
                    setUserInfo({ ...userInfo, landline_number: e.target.value });
                }}
                placeholder="الهاتف الأرضي"
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input 
                type="number" 
                defaultValue={userInfo.phone_number} 
                onChange={(e) => {
                    setUserInfo({ ...userInfo, phone_number: e.target.value });
                }}
                placeholder='رقم الموبايل'
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input 
                type="number" 
                defaultValue={userInfo.whatsapp_number} 
                onChange={(e) => {
                    setUserInfo({ ...userInfo, whatsapp_number: e.target.value });
                }}
                placeholder="رقم الواتس أب"
                />
              </div>
              <div className="information">
                <div>
                    <img src={update} alt="" />
                </div>
                <input 
                type="email" defaultValue={userInfo.email} 
                onChange={(e) => {
                    setUserInfo({ ...userInfo, email: e.target.value });
                }}
                placeholder="البريد الألكتروني"  
                />
              </div>
              <div className="information">
                <label htmlFor="file" className="d-flex">
                { !file1 ? <p>تحميل رخصة العمل والشهادة</p> : <p>تم تحميل الملف بنجاح</p>}
                <div>
                    <img src={file} alt="" />
                </div>
                </label>
                <input type="file" id="file" onChange={(e) => setFile1(e.target.files[0])} style={{ display: "none" }}/>
            </div>
            </div>
            <div className="footer">
                <button type="submit" className="mt-4 py-1 px-3">تعديل</button>
            </div>
          </form>
        </div>
      </section>
      <div className="section2-ar">
        <img src={scientific} alt="" />
      </div>
    </div>
  );
};

export default ProfileScientificAr;