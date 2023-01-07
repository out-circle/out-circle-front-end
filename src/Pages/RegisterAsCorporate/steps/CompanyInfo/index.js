import React ,{useRef} from 'react'
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import file from '../../../../Assets/images/file.png';

const CompanyInfo = ({data , setData , setNum , num , formErrors}) => {
  const ref1 = useRef();
  const ref2 = useRef();

  return (
    <div>
      <form encType="multipart/form-data">
        <div className='my-3 input_'>
          <input
          type="text"
          name="companyName"
          placeholder='Company name'
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
          placeholder='Type of company'
          value={data.typeCompany}
          onChange={(e) => {
            setData({ ...data, typeCompany: e.target.value });
          }}
          />
          {formErrors.typeCompany && (<span className="error" style={{ color: "red" }}>{formErrors.typeCompany}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          required
          type="number"
          name="companyRecord"
          placeholder='Company record number'
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
            placeholder="Company record date" 
            type="text"
            value={data.companyDate}
            onChange = {(e) => {
              setData({ ...data,  companyDate: e.target.value });
            }}/>
            {formErrors.companyDate && (<span className="error" style={{ color: "red" }}>{formErrors.companyDate}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="currentCity"
          placeholder='Current city'
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
          placeholder='Current Address'
          value={data.currentAddress}
          onChange={(e) => {
            setData({ ...data,  currentAddress: e.target.value });
          }}
          /><br/>
          {formErrors.currentAddress && (<span className="error" style={{ color: "red" }}>{formErrors.currentAddress}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="detaileBusiness"
          placeholder="Company's detialed business"
          value={data.detaileBusiness}
          onChange={(e) => {
            setData({ ...data, detaileBusiness: e.target.value });
          }}
          /><br/>
          {formErrors.detaileBusiness && (<span className="error" style={{ color: "red" }}>{formErrors.detaileBusiness}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          type="email"
          name="companyEmail"
          placeholder="Company Email address"
          value={data.companyEmail}
          onChange={(e) => {
            setData({ ...data, companyEmail: e.target.value });
          }}
          /><br/>
          {formErrors.companyEmail && (<span className="error" style={{ color: "red" }}>{formErrors.companyEmail}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          placeholder="Actual start date"
          value={data.actualStart}
          ref={ref2}
          onFocus={() => (ref2.current.type = "date")}
          onBlur={() => (ref2.current.type = "text")}
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
            placeholder='Company mobile number' 
            defaultCountry="sy" enableSearchField />
            {formErrors.num && (<span className="error" style={{ color: "red" }}>{formErrors.num}</span>)}
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="phoneNumber"
          placeholder="Phone number"
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
          placeholder="Fax number"
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
          placeholder="Number of partners"
          value={data.number_partners}
          onChange={(e) => {
            setData({ ...data, number_partners: e.target.value });
          }}
          /><br/>
          {formErrors.number_partners && (<span className="error" style={{ color: "red" }}>{formErrors.number_partners}</span>)}
        </div>
        <div className='my-3 input_1'>
              <label htmlFor="file2">
                  <p>Upload company record</p>
                  <img src={file} alt="" width="30"/>
              </label>
              <input 
                  required
                  className='input text-light' 
                  name='uploadFile' 
                  id="file2" 
                  placeholder="Upload file" 
                  type="file"
                  onChange = {(e)=>{
                    setData({...data , file_record:e.target.files})
                  }}
                  multiple
                  /> 
          </div>
            {formErrors.file_record && (<span className="error" style={{ color: "red" }}>{formErrors.file_record}</span>)}
        <div className='my-3 input_1'>
            <label htmlFor="file2">
                <p>Upload establishment contract</p>
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
        </form>
    </div>
  )
}

export default CompanyInfo;
