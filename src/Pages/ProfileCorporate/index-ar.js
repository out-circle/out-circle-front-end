import React, {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png';
import corporate from "../../Assets/images/ar_photo/corporate.png"
import PersonalInfo from './steps/PersonalInfo/index-ar';
import CompanyInfo from './steps/CompanyInfo/index-ar'
import user from '../../Assets/images/user.png'
import './index.css';
import { useSelector } from "react-redux";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const ProfileInstitute = () => {

    const [page , setPage] = useState(0);

    const [file1 , setFile1] = useState();
    const [file2 , setFile2] = useState();
    const [userInfo, setUserInfo] = useState({});

    const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

    let items = localStorage.getItem("user")
    let obj = JSON.parse(items);
    let user_id = obj._id;

    const data = [
        {
          key:"company_name",
          value:userInfo.company_name
        },
        {
          key:"company_type",
          value:userInfo.company_type
        },{
          key:"city",
          value:userInfo.city
        },{
          key:"current_address",
          value:userInfo.current_address
        },{
          key:"current_company_activity_details",
          value:userInfo.current_company_activity_details
        },{
          key:"email",
          value:userInfo.email
        },{
          key:"phone_number",
          value:userInfo.phone_number
        },{
          key:"landline_number",
          value:userInfo.landline_number
        },{
          key:"fax_number",
          value:userInfo.fax_number
        },{
          key:"number_of_partners",
          value:userInfo.number_of_partners
        },{
          key:"file1",
          value:file1
        },{
          key:"file2",
          value:file2
        },
    ]

    useEffect(() => {
      Axios.get(
        `${BASE_API_URL}/api/companies/company-user-info/${user_id}`
      )
        .then((res) => {
          setUserInfo(res.data);
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, [BASE_API_URL, user_id]);


    const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData();
      data.map((el) => formData.append(el.key, el.value));
      Axios.put(
        `${BASE_API_URL}/api/companies/update-company-user-info/${user_id}`,
        formData
      )
        .then((res) => {
          toast.success("تم تحديث بياناتك بنجاح")
        })
        .catch((err) => {
          console.log(err);
        });
    };


  const displayPage = ()=>{
    if(page === 0){
      return <PersonalInfo userInfo={userInfo} setUserInfo={setUserInfo} />
    }else{
      return <CompanyInfo file1={file1} file2={file2}  userInfo={userInfo} setUserInfo={setUserInfo} setFile1={setFile1} setFile2={setFile2} />
    } 
  }
  const FormTitle = ["معلومات شخصية" , "معلومات الشركة"]

  return (
    <div className='profile_corporate'>
        <header>
            <Link to="/corporate-ar" className='back_ar'>
                <span>رجوع</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <div><Toaster/></div>
        <section className="section-ar">
        <header>
                <span className='icon'><img src={user} alt="" width="40px"/></span>
                <span className='text'>ملفك الشخصي</span>
        </header>
        <div className='form-container'>
          <div>
            <h3 className="py-1">{FormTitle[page]}</h3>
          </div>
          <div className='body' style={{overflowY:"scroll" , height:"300px"}}>
              {displayPage()}
          </div>
          <div className='footer'>
          <button
              className='next mt-3 ms-2 py-1 px-4'
                onClick={(e , currPage) => {
                  if(page === FormTitle.length-1){
                    handleSubmit(e);
                  }else{
                    setPage((currPage) => currPage + 1)
                  }
                }}
              >
                {page === 1 ? "تعديل" : "التالي"}
          </button>
          <button
              className='next mt-3 ms-2 py-1 px-4'
              disabled={page === 0}
              onClick={(currPage) => {
                setPage((currPage) => currPage - 1);
              }}
              >السابق</button>
          </div>
        </div>
        </section>
        <div className='section2_ar'>
          <img src={corporate} alt=""/>
        </div>
    </div>
  )
}

export default ProfileInstitute;