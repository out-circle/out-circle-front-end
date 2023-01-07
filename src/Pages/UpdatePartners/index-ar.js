import { useState, useEffect, useRef } from "react";
import { Link , useNavigate} from "react-router-dom";
import back from "../../Assets/images/back.png";
import corporate from "../../Assets/images/ar_photo/corporate.png";
import "./index.css";
import { BsPersonPlus } from "react-icons/bs";
import Axios from "axios";
import { useSelector } from "react-redux";
import update from "../../Assets/images/update.png";
import axios from "axios";

const UpdatePartnersAr = () => {
  const [partnersInfo, setPartnersInfo] = useState([]);
  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);
  let items = localStorage.getItem("user_corporate")
  let obj = JSON.parse(items);
  let company_id = obj._id;
  const ref1 = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(
      `${BASE_API_URL}/api/partners/partners-info?company_id=${company_id}`
    )
      .then((res) => {
        setPartnersInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, [BASE_API_URL, company_id]);

  const deletePartner = (e, partner_id) => {
    e.preventDefault();
    axios.delete(`${BASE_API_URL}/api/partners/delete-partner/${partner_id}?company_id=${company_id}`)
      .then(() => {
        document.location.reload();
      })
      .catch(err => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    for await (let partner_info of partnersInfo) {
      try {
        await Axios.put(
          `${BASE_API_URL}/api/partners/update-partner-info/${partner_info._id}`,
          {
            full_name: partner_info.full_name,
            birthday: partner_info.birthday,
            phone_number: partner_info.phone_number,
            whatsapp_number: partner_info.whatsapp_number,
            land_phone_extension: partner_info.land_phone_extension,
            email: partner_info.email,
            participation_rate: partner_info.participation_rate,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="add_parteners">
      <header>
        <Link to="/corporate" className="back_ar">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="register1_ar">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">بيانات الشركاء</span>
        </header>
        <form className="form-container">
          <div className="body">
            {partnersInfo.map((partnerInfo, index) => (
              <div className="my-4" key={index}>
                <h3
                  className="my-2"
                  style={{ color: "#fff", borderBottom: "2px solid #fff" }}
                >
                  {" "}
                  بيانات الشريك({index + 1})
                </h3>
                <div className="my-3 input_">
                  <input
                    defaultValue={partnerInfo.full_name}
                    onChange={(e) => {
                      const partnersInfoList = partnersInfo.map((data) => data);
                      partnersInfoList[index] = { ...partnerInfo, full_name: e.target.value };
                      setPartnersInfo(partnersInfoList);
                    }}
                    type="text"
                    placeholder="الاسم الكامل للشريك"
                  />
                  <div>
                    <img src={update} alt="" width="25px" />
                  </div>
                </div>
                <div className="my-3 input_">
                  <input
                    defaultValue={partnerInfo.birthday}
                    onChange={(e) => {
                      const partnersInfoList = partnersInfo.map((data) => data);
                      partnersInfoList[index] = { ...partnerInfo, birthday: e.target.value };
                      setPartnersInfo(partnersInfoList);
                    }}
                    className="input"
                    ref={ref1}
                    onFocus={() => (ref1.current.type = "date")}
                    onBlur={() => (ref1.current.type = "text")}
                    placeholder="المواليد"
                    type="text"
                  />
                  <div>
                    <img src={update} alt="" width="25px" />
                  </div>
                </div>
                <div className="my-3 input_">
                  <input
                    defaultValue={partnerInfo.phone_number}
                    onChange={(e) => {
                      const partnersInfoList = partnersInfo.map((data) => data);
                      partnersInfoList[index] = { ...partnerInfo, phone_number: e.target.value };
                      setPartnersInfo(partnersInfoList);
                    }}
                    type="number"
                    placeholder="رقم الموبايل الشخصي"
                  />
                  <div>
                    <img src={update} alt="" width="25px" />
                  </div>
                </div>
                <div className="my-3 input_">
                  <input
                    defaultValue={partnerInfo.whatsapp_number}
                    onChange={(e) => {
                      const partnersInfoList = partnersInfo.map((data) => data);
                      partnersInfoList[index] = { ...partnerInfo, whatsapp_number: e.target.value };
                      setPartnersInfo(partnersInfoList);
                    }}
                    type="number"
                    placeholder="رقم الواتس أب"
                  />
                  <div>
                    <img src={update} alt="" width="25px" />
                  </div>
                </div>
                <div className="my-3 input_">
                  <input
                    defaultValue={partnerInfo.land_phone_extension}
                    onChange={(e) => {
                      const partnersInfoList = partnersInfo.map((data) => data);
                      partnersInfoList[index] = { ...partnerInfo, land_phone_extension: e.target.value };
                      setPartnersInfo(partnersInfoList);
                    }}
                    type="number"
                    placeholder="تحويلة الهاتف الأرضي"
                  />
                  <div>
                    <img src={update} alt="" width="25px" />
                  </div>
                </div>
                <div className="my-3 input_">
                  <input
                    defaultValue={partnerInfo.email}
                    onChange={(e) => {
                      const partnersInfoList = partnersInfo.map((data) => data);
                      partnersInfoList[index] = { ...partnerInfo, email: e.target.value };
                      setPartnersInfo(partnersInfoList);
                    }}
                    type="email"
                    placeholder="البريد الألكتروني الشخصي"
                  />
                  <div>
                    <img src={update} alt="" width="25px" />
                  </div>
                </div>
                <div className="my-3 input_">
                  <input
                    defaultValue={partnerInfo.participation_rate}
                    onChange={(e) => {
                      const partnersInfoList = partnersInfo.map((data) => data);
                      partnersInfoList[index] = { ...partnerInfo, participation_rate: e.target.value };
                      setPartnersInfo(partnersInfoList);
                    }}
                    type="number"
                    placeholder="نسبة المشاركة"
                  />
                  <div>
                    <img src={update} alt="" width="25px" />
                  </div>
                </div>
                {partnersInfo.length > 2 && <button className="btn btn-danger w-100" onClick={(e) => deletePartner(e, partnerInfo._id)}>Delete</button>}
              </div>
            ))}
          </div>
          <div className="footer">
            <button className="mt-3 w-100 button_update" onClick={handleSubmit}>
              تعديل
            </button>
            <button
              className="mt-3 d-block w-100 button_add"
              style={{ }}
              onClick={() => navigate("/add-new-partners-ar")}
            >
              إضاة شركاء جدد
            </button>
          </div>
        </form>
      </section>
      <div className="background2_ar">
        <img src={corporate} alt="" />
      </div>
    </div>
  );
};

export default UpdatePartnersAr;