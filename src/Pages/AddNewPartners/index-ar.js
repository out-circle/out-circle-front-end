import { useState } from "react";
import { Link  , useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import corporate from "../../Assets/images/ar_photo/corporate.png";
import "./index.css";
import { BsPersonPlus } from "react-icons/bs";
import Axios from "axios";
import PartnerAr from "../../Components/PartnerInfo/index-ar";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const AddNewPartnersAr = () => {

  const navigate = useNavigate();
  const [partnersInfo, setPartnersInfo] = useState([]);
  let company_id = localStorage.getItem("company_id");
  const [dataFromChild, setDataFromChild] = useState();
  const [formErrors, setFormErrors] = useState({});
  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);
  const [number_of_new_partners, set_number_of_new_partners] = useState(0);
  const validate = (values) => {
    const errors = {};
    if (!values.full_name) {
      errors.full_name = "من فضلك أدخل هذا الحقل";
    }
    if (!values.birthday) {
      errors.birthday = "من فضلك أدخل هذا الحقل";
    }
    if (!values.participation_rate) {
      errors.participation_rate = "من فضلك أدخل هذا الحقل";
    }
    return errors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(dataFromChild));

    const errors = Object.values(validate(dataFromChild));
    if (errors.length === 0) {
      Axios.post(
        `${BASE_API_URL}/api/partners/add-new-partners?company_id=${company_id}&number_of_new_partners=${number_of_new_partners}`,
        {
          partners_info: partnersInfo,
        }
      )
        .then(() => {
          toast.success("تم إضاقة بيانات الشركاء بنجاح");
          setTimeout(() => {
            navigate("/corporate-ar")
          }, 2000);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="add_parteners">
      <div>
        <Toaster />
      </div>
      <header>
        <Link to="/register" className="back_ar">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="register_ar">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">إضافة شركاء جدد</span>
        </header>
        <form className="form-container">
          <div className="my-3 input_">
            <input type="number" placeholder="أدخل عدد الشركاء الجدد" onChange={(e) => set_number_of_new_partners(e.target.value)} />
          </div>
          <div className="body">
            {(() => {
              const arr = [];
              for (let i = 0; i < number_of_new_partners; i++) {
                arr.push(
                  <div key={i}>
                    <PartnerAr
                      setDataFromChild={setDataFromChild}
                      formErrors={formErrors}
                      num={i}
                      setPartnersInfo={setPartnersInfo}
                      partnersInfo={partnersInfo}
                    />
                  </div>
                );
              }
              return arr;
            })()}
          </div>
          <div className="footer">
            <button className="mt-3" onClick={handleSubmit}>
              إضافة
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

export default AddNewPartnersAr;