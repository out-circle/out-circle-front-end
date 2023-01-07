import React , {useRef} from 'react'
import file from '../../../../Assets/images/file.png';
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CompanyInfoAr = ({ data , setData , num , setNum , formErrors }) => {
    const ref2 = useRef();
    const ref1 = useRef();
  return (
    <div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="companyName"
          placeholder='اسم الشركة'
          value={data.companyName}
          onChange={(e) => {
            setData({ ...data, companyName: e.target.value });
          }}
          /><br/>
          {formErrors.companyName && (<span className="error" style={{ color: "red" }}>{formErrors.companyName}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="typeCompany"
          placeholder='نوع الشركة'
          value={data.typeCompany}
          onChange={(e) => {
            setData({ ...data, typeCompany: e.target.value });
          }}
          /><br/>
          {formErrors.typeCompany && (<span className="error" style={{ color: "red" }}>{formErrors.typeCompany}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="companyRecord"
          placeholder='رقم سجل الشركة'
          value={data.companyRecord}
          onChange={(e) => {
            setData({ ...data, companyRecord: e.target.value });
          }}
          /><br/>
          {formErrors.companyRecord && (<span className="error" style={{ color: "red" }}>{formErrors.companyRecord}</span>)}
        </div>
        <div className='my-3 input_'>
                    <input 
                    className='input'
                    ref={ref1}
                    onFocus={() => (ref1.current.type = "date")}
                    onBlur={() => (ref1.current.type = "text")}
                    placeholder="تاريخ سجل الشركة" 
                    type="text"
                    value={data.companyDate}
                    onChange = {(e) => {
                      setData({ ...data,  companyDate: e.target.value });
                    }}
                    /><br/>
                    {formErrors.companyDate && (<span className="error" style={{ color: "red" }}>{formErrors.companyDate}</span>)}
                </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="currentCity"
          placeholder='المحافظة'
          value={data.currentCity}
          onChange={(e) => {
            setData({ ...data,  currentCity: e.target.value });
          }}
          /><br/>
          {formErrors.currentCity && (<span className="error" style={{ color: "red" }}>{formErrors.currentCity}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="currentAddress"
          placeholder='العنوان الحالي'
          value={data.currentAddress}
          onChange={(e) => {
            setData({ ...data,  currentAddress: e.target.value });
          }}
          /><br/>
          {formErrors.currentAddress && (<span className="error" style={{ color: "red" }}>{formErrors.currentAddress}</span>)}
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="detaileBusiness"
          placeholder="تفاصيل نشاط الشركة الحالي"
          value={data.detaileBusiness}
          onChange={(e) => {
            setData({ ...data, detaileBusiness: e.target.value });
          }}
          /><br/>
          {formErrors.detaileBusiness && (<span className="error" style={{ color: "red" }}>{formErrors.detaileBusiness}</span>)}
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="email"
          name="companyEmail"
          placeholder="البريد الألكتروني للشركة"
          value={data.companyEmail}
          onChange={(e) => {
            setData({ ...data, companyEmail: e.target.value });
          }}
          /><br/>
          {formErrors.companyEmail && (<span className="error" style={{ color: "red" }}>{formErrors.companyEmail}</span>)}
        </div>
        <div className='my-3 input_'>
            <input 
            className='input'
            ref={ref2}
            onFocus={() => (ref2.current.type = "date")}
            onBlur={() => (ref2.current.type = "text")}
            placeholder="تاريخ بدء العمل الفعلي"
            value={data.actualStart} 
            type="text"
            onChange={(e) => {
              setData({ ...data, actualStart : e.target.value });
            }}
            /><br/>
            {formErrors.actualStart && (<span className="error" style={{ color: "red" }}>{formErrors.actualStart}</span>)}
        </div>
        <div className='my-3 input_'>
        <ReactPhoneInput  
            value={num}
            onChange={setNum}
            className="phone_number" 
            placeholder='رقم موبايل الشركة' 
            defaultCountry="sy" enableSearchField />
            {formErrors.num && (<span className="error" style={{ color: "red" }}>{formErrors.num}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="phoneNumber"
          placeholder="الهاتف الأرضي"
          value={data.phoneNumber}
          onChange={(e) => {
            setData({ ...data, phoneNumber: e.target.value });
          }}
          />
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="faxNumber"
          placeholder="رقم الفاكس"
          value={data.faxNumber}
          onChange={(e) => {
            setData({ ...data, faxNumber: e.target.value });
          }}
          />
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="number_partners"
          placeholder="عدد الشركاء"
          value={data.number_partners}
          onChange={(e) => {
            setData({ ...data, number_partners: e.target.value });
          }}
          /><br/>
          {formErrors.number_partners && (<span className="error" style={{ color: "red" }}>{formErrors.number_partners}</span>)}
        </div>
        <div className='my-3 input_1'>
                    <label htmlFor="file2">
                        <p>تحميل سجل الشركة</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input
                    required
                    onChange = {(e)=>{
                      setData({...data , file_record:e.target.files})
                    }}
                    className='input text-light' 
                    name='uploadFile' 
                    id="file2" 
                    placeholder="Upload file" 
                    type="file"
                    multiple
                    />                     
        </div>
        {formErrors.file_record && (<span className="error" style={{ color: "red" }}>{formErrors.file_record}</span>)}
        <div className='my-3 input_1'>
            <label htmlFor="file2">
                <p>تحميل عقد تأسيس الشركة</p>
                <img src={file} alt="" width="30"/>
            </label>
            <input 
            required
              onChange = {(e)=>{
                setData({...data , establContract:e.target.files})
              }}
                className='input text-light' 
                name='uploadFile' 
                id="file2" 
                placeholder="Upload file" 
                type="file"
                multiple
                />                     
        </div>
        {formErrors.establContract && (<span className="error" style={{ color: "red" }}>{formErrors.establContract}</span>)}
    </div>
  )
}

export default CompanyInfoAr;