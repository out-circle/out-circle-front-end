import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import corporate from "../../Assets/images/Mask Group -1.png";
import "./index.css";
import { BsPersonPlus } from "react-icons/bs";
import Axios from "axios";
import Partner from "../../Components/PartnerInfo/index";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const AddNewPartners = () => {

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
      errors.full_name = "Please enter this field";
    }
    if (!values.birthday) {
      errors.birthday = "Please enter this field";
    }
    if (!values.participation_rate) {
      errors.participation_rate = "Please enter this field";
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
          toast.success("Partner information has been added successfully");
          setTimeout(() => {
            navigate("/corporate")
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
        <Link to="/register">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="register">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">add new partners</span>
        </header>
        <form className="form-container">
          <div className="my-3 input_">
            <input type="number" placeholder="enter number of new partners" onChange={(e) => set_number_of_new_partners(e.target.value)} />
          </div>
          <div className="body">
            {(() => {
              const arr = [];
              for (let i = 0; i < number_of_new_partners; i++) {
                arr.push(
                  <div key={i}>
                    <Partner
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
              Add
            </button>
          </div>
        </form>
      </section>
      <div className="background2">
        <img src={corporate} alt="" />
      </div>
    </div>
  );
};

export default AddNewPartners;