import React from 'react'
import { useNavigate } from 'react-router-dom'
import update from '../../../../Assets/images/update.png'
const PersonalInfoAr = ({ userInfo }) => {

  const navigate = useNavigate();
  const ChangePassword = ()=> {
    navigate("/change-password-ar");
    localStorage.setItem("route" , "profile-corporate-ar")
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
            <input type="password" defaultValue={"**********"}/>
        </div>
    </div>
  )
}

export default PersonalInfoAr;