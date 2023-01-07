import update from "../../../../Assets/images/update.png";
import file from "../../../../Assets/images/file.png";
const PersonalInfo = ({
  userInfo,
  setUserInfo,
  file1,
  setFile1,
  file2,
  setFile2,
}) => {
  return (
    <div>
      <div className="information">
        <div>
          <img src={update} alt="" />
        </div>
        <input
          placeholder="اسم الشركة"
          type="text"
          value={userInfo.company_name}
          onChange={(e) =>
            setUserInfo({ ...userInfo, company_name: e.target.value })
          }
        />
      </div>
      <div className="information">
        <div>
          <img src={update} alt="" />
        </div>
        <input
          placeholder="نوع الشركة"
          type="text"
          value={userInfo.company_type}
          onChange={(e) =>
            setUserInfo({ ...userInfo, company_type: e.target.value })
          }
        />
      </div>
      <div className="information">
        <input
          placeholder="رقم سجل الشركة"
          type="number"
          value={userInfo.company_record_number}
          disabled
        />
      </div>
      <div className="information">
        <input
          placeholder="تاريخ سجل الشركة"
          type="text"
          value={userInfo.company_record_history}
          disabled
        />
      </div>
      <div className="information">
        <input
          placeholder="المحافظة"
          type="text"
          value={userInfo.city}
          onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
        />
        <div>
          <img src={update} alt="" />
        </div>
      </div>
      <div className="information">
        <div>
          <img src={update} alt="" />
        </div>
        <input
          placeholder="العنوان الحالي"
          type="text"
          value={userInfo.current_address}
          onChange={(e) =>
            setUserInfo({ ...userInfo, current_address: e.target.value })
          }
        />
      </div>
      <div className="information">
        <div>
          <img src={update} alt="" />
        </div>
        <input
          placeholder="تفاصيل نشاط الشركة الحالي"
          type="text"
          value={userInfo.current_company_activity_details}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              current_company_activity_details: e.target.value,
            })
          }
        />
      </div>
      <div className="information">
        <div>
          <img src={update} alt="" />
        </div>
        <input
          placeholder="البريد الألكتروني للشركة"
          type="email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
      </div>
      <div className="information">
        <input
          type="text"
          placeholder="تاريخ بدء العمل الفعلي"
          value={userInfo.work_start_date}
          disabled
        />
      </div>
      <div className="information">
        <div>
          <img src={update} alt="" />
        </div>
        <input
          placeholder="رقم موبايل الشركة"
          type="number"
          value={userInfo.phone_number}
          onChange={(e) =>
            setUserInfo({ ...userInfo, phone_number: e.target.value })
          }
        />
      </div>
      <div className="information">
        <div>
          <img src={update} alt="" />
        </div>
        <input
          placeholder="الهاتف الأرضي"
          type="number"
          value={userInfo.landline_number}
          onChange={(e) =>
            setUserInfo({ ...userInfo, landline_number: e.target.value })
          }
        />
      </div>
      <div className="information">
        <div>
          <img src={update} alt="" />
        </div>
        <input
          type="number"
          value={userInfo.fax_number}
          placeholder="رقم الفاكس"
          onChange={(e) =>
            setUserInfo({ ...userInfo, fax_number: e.target.value })
          }
        />
      </div>
      <div className="information">
        <div>
          <img src={update} alt="" />
        </div>
        <input
          type="number"
          value={userInfo.number_of_partners}
          placeholder="عدد الشركاء"
          onChange={(e) =>
            setUserInfo({ ...userInfo, number_of_partners: e.target.value })
          }
        />
      </div>
      <div className="information">
        <label htmlFor="file1">
          {!file1 ? (
            <p>تحميل سجل الشركة بعد التحديث</p>
          ) : (
            <p>تم تحميل الملف بنجاح</p>
          )}
          <img src={file} alt="" />
        </label>
        <input
          type="file"
          id="file1"
          style={{ display: "none" }}
          onChange={(e) => setFile1(e.target.files[0])}
        />
      </div>
      <div className="information">
        <label htmlFor="file2">
          {!file2 ? (
            <p>تحميل ملحق عقد الشركة الأخير</p>
          ) : (
            <p>تم تحميل الملف بنجاح</p>
          )}
          <img src={file} alt="" />
        </label>
        <input
          type="file"
          id="file2"
          style={{ display: "none" }}
          onChange={(e) => setFile2(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
