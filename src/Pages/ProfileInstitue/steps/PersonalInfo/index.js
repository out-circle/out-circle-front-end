import React from 'react'
import { useNavigate} from 'react-router-dom'
import update from '../../../../Assets/images/update.png'
const PersonalInfo = ({ userInfo , setUserInfo }) => {

  const navigate = useNavigate();
  const ChangePassword = ()=> {
    navigate("/change-password");
    localStorage.setItem("route" , "profile-institute");
  }

  return (
    <div>
        <div className='information'>
              <input disabled type="text" defaultValue={userInfo.user_name} placeholder="User name"/>
        </div>
        <div className='information'>
            <input disabled type="password" defaultValue={"**********"} placeholder="password"/>
            <div onClick={ChangePassword} style={{cursor:"pointer"}}>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
          <input disabled type="text" defaultValue={userInfo.full_name} plaseholder="Full name"/>
        </div>
        <div className='information'>
          <input disabled type="text" defaultValue={userInfo.birthday} placeholder="born date" />
        </div>
        <div className='information'>
            <input 
            type="text" 
            defaultValue={userInfo.phone_number}
            onChange = {(e)=> setUserInfo({...userInfo , phone_number : e.target.value})}
            placeholder="Mobile number"
            />
            <div>
                <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            type="text" 
            defaultValue={userInfo.whatsapp_number}
            onChange = {(e)=> setUserInfo({...userInfo , whatsapp_number : e.target.value})}
            placeholder="Whatsapp number"
            />
            <div>
                <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            type="email" 
            defaultValue={userInfo.user_email}
            onChange = {(e)=> setUserInfo({...userInfo , user_email : e.target.value})}
            placeholder="E-mail address"
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo;
