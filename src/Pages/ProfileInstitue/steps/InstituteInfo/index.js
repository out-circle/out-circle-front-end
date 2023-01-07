import React from 'react'
import update from '../../../../Assets/images/update.png'
import file from '../../../../Assets/images/file.png';

const InstituteInfo = ({ userInfo , setUserInfo , setFile1 , file1 }) => {
  return (
    <div>
        <div className='information'>
            <input 
            type="text" 
            defaultValue={userInfo.institute_name}
            onChange = {(e)=> setUserInfo({...userInfo , institute_name : e.target.value})}
            placeholder="Institute name" 
            />
            <div>
                <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input 
            disabled
            type="text" 
            defaultValue={userInfo.institute_record_number}
            placeholder="Institute record number"
            />
        </div>
        <div className='information'>
            <input 
            disabled
            type="text" 
            defaultValue={userInfo.institute_record_history}
            placeholder="Institute record date"
            />
        </div>
        <div className='information'>
          <input 
          type="text" 
          defaultValue={userInfo.city}
          onChange = {(e)=> setUserInfo({...userInfo , city : e.target.value})}
          placeholder="Current city"
          />
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input 
          type="text" 
          defaultValue={userInfo.current_address}
          onChange = {(e)=> setUserInfo({...userInfo , current_address : e.target.value})}
          placeholder="Current address"
          />
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input 
          type="text" 
          defaultValue={userInfo.current_institute_activity_details}
          onChange = {(e)=> setUserInfo({...userInfo , current_institute_activity_details : e.target.value})}
          placeholder="institute's detailed business activity"
          />
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input 
          type="email" 
          defaultValue={userInfo.email}
          onChange = {(e)=> setUserInfo({...userInfo , email : e.target.value})}
          placeholder="Institute email address"
          />
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input 
          disabled
          type="text" 
          defaultValue={userInfo.work_start_date}
          placeholder="Actual start date"
          />
        </div>
        <div className='information'>
          <input 
          type="number" 
          defaultValue={userInfo.landline_number}
          onChange = {(e)=> setUserInfo({...userInfo , landline_number : e.target.value})}
          placeholder="Phone number" 
          />
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input 
          type="number" 
          defaultValue={userInfo.fax_number}
          onChange = {(e)=> setUserInfo({...userInfo , fax_number : e.target.value})}
          placeholder="Fax number" 
          />
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input 
          type="number" 
          defaultValue={userInfo.land_phone_extension}
          onChange = {(e)=> setUserInfo({...userInfo , land_phone_extension : e.target.value})}
          placeholder="Landline extention"
          />
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <label htmlFor="file" className="d-flex align-items-center">
            { !file1 ? <p>Upload updated institute record</p> : <p>Your file has been uploaded successfully</p>}
            <img src={file} alt=""/>
          </label>
          <input type="file" id="file" style={{display:"none"}} onChange={(e)=> setFile1(e.target.files[0])}/>
        </div>
    </div>
  )
}

export default InstituteInfo;
