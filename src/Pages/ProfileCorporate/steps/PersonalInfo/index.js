import React from 'react'
import { useNavigate } from 'react-router-dom'
import update from '../../../../Assets/images/update.png'
const PersonalInfo = ({ userInfo }) => {
  
  const navigate = useNavigate();
  const ChangePassword = ()=> {
    navigate("/change-password");
    localStorage.setItem("route" , "profile-corporate")
  }
  return (
    <div>
        <div className='information'>
            <input disabled placeholder="User name" type="text" defaultValue={userInfo.user_name}/>
        </div>
        <div className='information'>
            <input type="password" defaultValue={"**********"}/>
            <div onClick={ChangePassword} style={{cursor:"pointer"}}>
                <img src={update} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo;
