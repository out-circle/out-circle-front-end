import React from 'react'
import { useNavigate } from 'react-router-dom'
import update from '../../../../Assets/images/update.png'
const PersonalInfo = ({ userInfo , setUserInfo }) => {

  const navigate = useNavigate();
  const ChangePassword = ()=> {
    navigate("/change-password-ar");
    localStorage.setItem("route" , "profile-institute-ar");
  }
  return (
    <div>
        <div className='information'>
              <input disabled placeholder="اسم المستخدم" type="text" defaultValue={userInfo.user_name}/>
        </div>
        <div className='information'>
            <div onClick={ChangePassword} style={{cursor:"pointer"}}>
              <img src={update} alt=""/>
            </div>
            <input disabled type="password" placeholder="كلمة المرور" defaultValue={"**********"}/>
        </div>
        <div className='information'>
          <input disabled placeholder="الاسم الكامل" type="text" defaultValue={userInfo.full_name}/>
        </div>
        <div className='information'>
          <input disabled placeholder="الموليد" type="text" defaultValue={userInfo.birthday}/>
        </div>
        <div className='information'>
            <div>
                <img src={update} alt=""/>
            </div>
            <input 
            placeholder="رقم الموبايل"
            type="text" 
            defaultValue={userInfo.phone_number}
            onChange = {(e)=> setUserInfo({...userInfo , phone_number : e.target.value})}
            />
        </div>
        <div className='information'>
            <div>
                <img src={update} alt=""/>
            </div>
            <input 
            placeholder="رقم الواتس أب"
            type="text" 
            defaultValue={userInfo.whatsapp_number}
            onChange = {(e)=> setUserInfo({...userInfo , whatsapp_number : e.target.value})}
            />
        </div>
        <div className='information'>
            <div>
              <img src={update} alt=""/>
            </div>
            <input 
            placeholder="البريد الألكتروني" 
            type="email" 
            defaultValue={userInfo.user_email}
            onChange = {(e)=> setUserInfo({...userInfo , user_email : e.target.value})}
            />
        </div>
    </div>
  )
}

export default PersonalInfo;