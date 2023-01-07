import React, { useRef } from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PartnerInfoAr = ({ num, setNum, setData, data, formErrors }) => {
  const ref = useRef();
  return (
    <div>
      <div className="my-3 input_">
        <input
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          placeholder="اسم المستخدم"
          type="text"
        /><br/>
        {formErrors.username && (
            <span className="error" style={{ color: "red" }}>
                {formErrors.username}
            </span>
          )}
      </div>
      <div className="my-3 input_">
        <input
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder="كلمة المرور"
          type="password"
        />
        <br />
        {formErrors.password && (
          <span className="error" style={{ color: "red" }}>
            {formErrors.password}
          </span>
        )}
      </div>
      <div className="my-3 input_">
        <input
          value={data.confirm_password}
          onChange={(e) =>
            setData({ ...data, confirm_password: e.target.value })
          }
          placeholder="تأكيد كلمة المرور"
          type="password"
        />
        <br />
        {formErrors.confirm_password && (
          <span className="error" style={{ color: "red" }}>
            {formErrors.confirm_password}
          </span>
        )}
      </div>
      <div className="my-3 input_">
        <input
          value={data.full_name}
          onChange={(e) => setData({ ...data, full_name: e.target.value })}
          placeholder="الاسم الكامل"
          type="text"
        /><br/>
        {formErrors.full_name && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.full_name}
            </span>
          )}
      </div>
      <div className="my-3 input_">
        <input
          ref={ref}
          value={data.born_date}
          onChange={(e) => setData({ ...data, born_date: e.target.value })}
          type="text"
          placeholder="المواليد"
          onFocus={() => (ref.current.type = "date")}
          onBlur={() => (ref.current.type = "text")}
          className="input"
        /><br/>
        {formErrors.born_date && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.born_date}
            </span>
          )}
      </div>
      <div className="my-3 input_">
        <ReactPhoneInput
          value={num}
          onChange={setNum}
          className="phone_number"
          placeholder="رقم الموبايل"
          defaultCountry="sy"
          enableSearchField
        />
        {formErrors.num && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.num}
            </span>
          )}
      </div>
      <div className="my-3 input_">
        <input
          value={data.whatsapp_number}
          onChange={(e) =>
            setData({ ...data, whatsapp_number: e.target.value })
          }
          className="input"
          placeholder="رقم الواتس أب"
          type="number"
        />
      </div>
      <div className="my-3 input_">
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="البريد الألكتروني"
          type="email"
        /><br/>
      </div>
    </div>
  );
};
export default PartnerInfoAr;
