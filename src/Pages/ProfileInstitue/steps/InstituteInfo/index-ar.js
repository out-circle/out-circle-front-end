import update from '../../../../Assets/images/update.png'
import file from '../../../../Assets/images/file.png';

const InstituteInfoAr = ({ userInfo , setUserInfo , setFile1 , data , file1 }) => {
  return (
    <div>
        <div className='information'>
            <div>
              <img src={update} alt=""/>
            </div>
            <input 
            placeholder="اسم المؤسسة"
            type="text" 
            defaultValue={userInfo.institute_name}
            onChange = {(e)=> setUserInfo({...data , institute_name : e.target.value})}
            />
        </div>
        <div className='information'>
            <input disabled placeholder="رقم سجل المؤسسة"  type="number" defaultValue={userInfo.institute_record_number}/>
        </div>
        <div className='information'>
            <input disabled placeholder="تاريخ سجل المؤسسة"  type="text" defaultValue={userInfo.institute_record_history}/>
        </div>
        <div className='information'>
          <img src={update} alt=""/>
          <input 
          placeholder="المحافظة"
          type="text" 
          defaultValue={userInfo.city}
          onChange = {(e)=> setUserInfo({...userInfo , city : e.target.value})}
          />
        </div>
        <div className='information'>
          <img src={update} alt=""/>
          <input 
          placeholder="العنوان الحالي"
          type="text" 
          defaultValue={userInfo.current_address}
          onChange = {(e)=> setUserInfo({...userInfo , current_address : e.target.value})}
          />
        </div>
        <div className='information'>
          <img src={update} alt=""/>
          <input 
          placeholder="تفاصيل نشاط المؤسسة الحالي" 
          type="text" 
          defaultValue={userInfo.current_institute_activity_details}
          onChange = {(e)=> setUserInfo({...userInfo , current_institute_activity_details : e.target.value})}
          />
        </div>
        <div className='information'>
        <img src={update} alt=""/>
          <input 
          placeholder="البريد الإلكتروني للمؤسسة" 
          type="email" 
          defaultValue={userInfo.email}
          onChange = {(e)=> setUserInfo({...userInfo , email : e.target.value})}
          />
        </div>
        <div className='information'>
          <input 
          disabled
          placeholder="تاريخ بدء العمل الفعلي" 
          type="text" 
          defaultValue={userInfo.work_start_date}
          />
        </div>
        <div className='information'>
          <img src={update} alt=""/>
          <input 
          placeholder="الهاتف الأرضي"
          type="number" 
          defaultValue={userInfo.landline_number}
          onChange = {(e)=> setUserInfo({...userInfo , landline_number : e.target.value})}
          />
        </div>
        <div className='information'>
          <img src={update} alt=""/>
          <input 
          placeholder="رقم الفاكس" 
          type="number" 
          defaultValue={userInfo.fax_number}
          onChange = {(e)=> setUserInfo({...userInfo , fax_number : e.target.value})}
          />
        </div>
        <div className='information'>
          <img src={update} alt=""/>
          <input 
          placeholder="تحويلة الهاتف الأرضي" 
          type="number" 
          defaultValue={userInfo.land_phone_extension}
          onChange = {(e)=> setUserInfo({...userInfo , land_phone_extension : e.target.value})}
          />
        </div>
        <div className='information'>
          <label htmlFor="file" className="d-flex align-items-center">
            { !file1 ? <p>تحميل ملف سجل الشركة المحدث</p> : <p>تم تحميل الملف بنجاح</p>}
            <img src={file} alt=""/>
          </label>
          <input type="file" id="file" style={{display:"none"}} onChange={(e)=> setFile1(e.target.files[0])}/>
        </div>
    </div>
  )
}

export default InstituteInfoAr;