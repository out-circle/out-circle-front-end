import React from 'react'
import update from '../../../../Assets/images/update.png'
import file from '../../../../Assets/images/file.png'
const PersonalInfo = ({ userInfo , setUserInfo , file1 , setFile1 , file2 , setFile2 }) => {


  return (
    <div>
        <div className='information'>
            <input 
            placeholder="Company name" 
            type="text" 
            value={userInfo.company_name}
            onChange = {(e) => setUserInfo({...userInfo , company_name : e.target.value})}
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            placeholder="Type of company" 
            type="text" 
            value={userInfo.company_type}
            onChange = {(e) => setUserInfo({...userInfo , company_type : e.target.value})}
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            placeholder="Company record number" 
            type="number" 
            value={userInfo.company_record_number}
            disabled
            />
        </div>
        <div className='information'>
            <input 
            placeholder="Company record history" 
            type="text" 
            value={userInfo.company_record_history}
            disabled
            />
        </div>
        <div className='information'>
            <input 
            placeholder="Current city" 
            type="text" 
            value={userInfo.city}
            onChange = {(e) => setUserInfo({...userInfo , city : e.target.value})}
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            placeholder="Current address" 
            type="text" 
            value={userInfo.current_address}
            onChange = {(e) => setUserInfo({...userInfo , current_address : e.target.value})}
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            placeholder="Company's detailes business" 
            type="text" 
            value={userInfo.current_company_activity_details}
            onChange = {(e) => setUserInfo({...userInfo , current_company_activity_details : e.target.value})}
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            placeholder="Company email address" 
            type="email" 
            value={userInfo.email}
            onChange = {(e) => setUserInfo({...userInfo , email : e.target.value})}
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            type="text" 
            placeholder="Work start date"
            value={userInfo.work_start_date}
            disabled
            />
        </div>
        <div className='information'>
            <input 
            placeholder="mobile number" 
            type="number" 
            value={userInfo.phone_number}
            onChange = {(e) => setUserInfo({...userInfo , phone_number : e.target.value})}
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            placeholder="landline number" 
            type="number" 
            value={userInfo.landline_number}
            onChange = {(e) => setUserInfo({...userInfo , landline_number : e.target.value})}
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            type="number" 
            value={userInfo.fax_number} 
            placeholder="Fax number"
            onChange = {(e) => setUserInfo({...userInfo , fax_number : e.target.value})}
            />
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input  
            type="number"
            disabled
            value={userInfo.number_of_partners} 
            placeholder="Number of partners"
            onChange = {(e) => setUserInfo({...userInfo , number_of_partners : e.target.value})}
            />
        </div>
        <div className='information'>
          <label htmlFor="file1">
            { !file1 ? <p>Upload uodated company record</p> : <p>Your file has been uploaded successfully</p> }
            <img src={file} alt=""/>
          </label>
          <input type="file" id="file1" style={{display:"none"}} onChange = {(e)=> setFile1(e.target.files[0])} />
        </div>
        <div className='information'>
          <label htmlFor="file2">
            { !file2 ? <p>Upload company contract supplement</p> : <p>Your file has been uploaded successfully</p> }
            <img src={file} alt=""/>
          </label>
          <input type="file" id="file2" style={{display:"none"}} onChange = {(e)=> setFile2(e.target.files[0])} />
        </div>
    </div>
  )
}

export default PersonalInfo;