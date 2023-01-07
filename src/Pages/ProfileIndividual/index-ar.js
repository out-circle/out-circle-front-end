import { useEffect, useState , useRef } from "react";
import { Link , useNavigate } from "react-router-dom";
import user from "../../Assets/images/user.png";
import update from "../../Assets/images/update.png";
import file from "../../Assets/images/file.png";
import individuals from "../../Assets/images/ar_photo/Mask Group -6.png";
import "./index.css";
import back from "../../Assets/images/back.png";
import { useSelector } from "react-redux";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ProfileIndividualAr = () => {

  const ref = useRef();
  
  const navigate = useNavigate();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [userInfo, setUserInfo] = useState({});

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const ChangePasswod = ()=> {
    navigate("/change-password-ar")
    localStorage.setItem("route" , "profile-individual-ar");
  }

  let items = localStorage.getItem("user");
  let obj = JSON.parse(items);
  let user_id = obj._id;

  const data = [
    {
      key: "email",
      value: userInfo.email,
    },
    {
      key: "birthday",
      value: userInfo.birthday,
    },
    {
      key: "full_name",
      value: userInfo.full_name,
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
      key: "phone_number",
      value: userInfo.phone_number,
    },
    {
      key: "whatsapp_number",
      value: userInfo.whatsapp_number,
    },
    {
      key: "current_work",
      value: userInfo.current_work,
    },
    {
      key: "scientific_certificate_details",
      value: userInfo.scientific_certificate_details,
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
      key: "business_phone_number",
      value: userInfo.business_phone_number,
    },
    {
      key: "shunt",
      value: userInfo.shunt,
    },
    {
      key: "scientific_experience_details",
      value: userInfo.scientific_experience_details,
    },
    {
      key: "language_skills",
      value: userInfo.language_skills,
    },
    {
      key: "technical_skills",
      value: userInfo.technical_skills,
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

  useEffect(() => {
    Axios.get(`${BASE_API_URL}/api/individuals/individual-user-info/${user_id}`)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BASE_API_URL, user_id]);


const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    data.map((el) => formData.append(el.key, el.value));
    Axios.put(
    `${BASE_API_URL}/api/individuals/update-individual-user-info/${user_id}`,
    formData
    )
    .then((res) => {
        toast.success("تم تحديث بياناتك بنجاح")
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err);
    });
};

  return (
    <div className="profile">
      <header>
        <Link to="/individuals-ar" className="back_ar">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="section1-ar">
        <header>
          <span className="icon">
            <img src={user} alt="" width="40px" />
          </span>
          <span className="text">ملفك الشخصي</span>
        </header>
        <div><Toaster/></div>
        <div className="body my-3">
        <form onSubmit={handleSubmit}>
          <div  className="bar">
            <div className="information">
              <input disabled type="text" defaultValue={userInfo.user_name} placeholder="اسم المستخدم" />
            </div>
            <div className="information">
              <div onClick={ChangePasswod} style={{cursor:"pointer"}}>
                <img src={update} alt="" />
              </div>
              <input type="password" defaultValue={"**********"} placeholder="كلمة المرور" />
            </div>
            <div className="information">
              <input disabled type="text" defaultValue={userInfo.full_name} placeholder="الاسم الكامل" />
            </div>
            <div className="information">
              <input disabled type="text" defaultValue={userInfo.birthday} placeholder="المواليد" />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              placeholder="المحافظة"
                type="text" 
                defaultValue={userInfo.city} 
                onChange={(e) => {
                setUserInfo({ ...userInfo, city: e.target.value });
                }}
            />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              placeholder="العنوان الحالي"
              type="text" 
              defaultValue={userInfo.current_address} 
              onChange={(e) => {
                setUserInfo({
                ...userInfo,
                current_address: e.target.value,
                })}}
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
              placeholder="تفاصيل الشهادة العلمية"
              type="text" 
              defaultValue={userInfo.scientific_certificate_details} 
              onChange={(e) => {
                setUserInfo({
                ...userInfo,
                scientific_certificate_details: e.target.value,
                });
              }}
              />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              placeholder="رقم الموبايل"
              type="number" 
              defaultValue={userInfo.phone_number} 
              onChange={(e) => {
                setUserInfo({ ...userInfo, phone_number: e.target.value });
              }}
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
                setUserInfo({
                ...userInfo,
                whatsapp_number: e.target.value,
                });
              }}
              placeholder="رقم الواتس أب"
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
                setUserInfo({ ...userInfo, email: e.target.value });
              }} 
              />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              placeholder="العمل الحالي"
              type="text" 
              defaultValue={userInfo.current_work} 
              onChange={(e) => {
                setUserInfo({ ...userInfo, current_work: e.target.value });
              }}
              />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              placeholder="عنوان العمل"
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
              placeholder="تاريخ بدء العمل"
              ref = {ref}
              type="text" 
              defaultValue={userInfo.work_start_date} 
              onFocus={() => (ref.current.type = "date")}
              onBlur={() => (ref.current.type = "text")}
              onChange={(e) => {
                setUserInfo({
                  ...userInfo,
                  work_start_date: e.target.value,
                });
              }}
              />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              placeholder="رقم هاتف العمل"
              type="number" 
              defaultValue={userInfo.business_phone_number} 
              onChange={(e) => {
                setUserInfo({
                ...userInfo,
                business_phone_number: e.target.value,
                });
              }}
              />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              type="number" 
              defaultValue={userInfo.shunt} 
              onChange={(e) => {
                setUserInfo({ ...userInfo, shunt: e.target.value });
              }}
              placeholder="التحويلة"
              />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              placeholder="تفاصيل الخبرات العملية"
              type="text" 
              defaultValue={userInfo.scientific_experience_details}
              onChange={(e) => {
                setUserInfo({...userInfo , scientific_experience_details: e.target.value});
              }}
              />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              type="text" 
              defaultValue={userInfo.language_skills}
              onChange={(e) => {
                setUserInfo({
                ...userInfo,
                language_skills: e.target.value,
                });
              }}
              placeholder="المهارات اللغوية"
              />
            </div>
            <div className="information">
              <div>
                <img src={update} alt="" />
              </div>
              <input 
              placeholder="المهارات التقنية"
              type="text" 
              defaultValue={userInfo.technical_skills}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      technical_skills: e.target.value,
                    });
                  }}
              />
            </div>
            <div className="information">
                <label htmlFor="file1">
                  { !file1 ? <p>تحميل الشهادة العلمية الأخيرة</p> : <p>تم تحميل الملف</p>}
                  <div>
                    <img src={file} alt="" />
                  </div>
                </label>
                <input
                  onChange={(e) => setFile1(e.target.files[0])}
                  id="file1"
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
              <div className="information">
                <label htmlFor="file2">
                { !file2 ? <p>تحميل شهادات أخرى أو دورات تدريبية</p> : <p>تم تحميل الملف</p>}
                <div>
                    <img src={file} alt="" />
                </div>
                </label>
                <input
                onChange={(e) => setFile2(e.target.files[0])}
                id="file2"
                type="file"
                style={{ display: "none" }}
                />
            </div>
          </div>
          <div className="footer">
              <button type="submit" className="mt-4 py-1 px-3">تعديل</button>
          </div>
        </form>
        </div>
      </section>
      <div className="section2-ar">
        <img src={individuals} alt="" />
      </div>
    </div>
  );
};

export default ProfileIndividualAr;
