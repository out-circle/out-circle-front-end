import React, { useRef } from "react";
import file from "../../../../Assets/images/file.png";

const InstituteInfo = ({ data, setData, file1, setFile1 , formErrors}) => {
  const ref1 = useRef();
  const ref2 = useRef();
  return (
    <div>
      <form encType="multipart/form-data">
        <div className="my-3 input_">
          <input
            value={data.institute_name}
            onChange={(e) =>
              setData({ ...data, institute_name: e.target.value })
            }
            placeholder="Institute name"
            type="text"
          /><br/>
          {formErrors.institute_name && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.institute_name}
            </span>
          )}
        </div>
        <div className="my-3 input_">
          <input
            value={data.record_number}
            onChange={(e) =>
              setData({ ...data, record_number: e.target.value })
            }
            placeholder="Institute record number"
            type="number"
          /><br/>
          {formErrors.record_numbere && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.record_number}
            </span>
          )}
        </div>
        <div className="my-3 input_">
          <input
            ref={ref2}
            value={data.record_history}
            onChange={(e) =>
              setData({ ...data, record_history: e.target.value })
            }
            onFocus={() => (ref2.current.type = "date")}
            onBlur={() => (ref2.current.type = "text")}
            type="text"
            placeholder="Institute record date"
          /><br/>
          {formErrors.record_history && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.record_history}
            </span>
          )}
        </div>
        <div className="my-3 input_">
          <input
            value={data.current_city}
            onChange={(e) => setData({ ...data, current_city: e.target.value })}
            placeholder="Current city"
            type="text"
          /><br/>
          {formErrors.current_city && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.current_city}
            </span>
          )}
        </div>
        <div className="my-3 input_">
          <input
            value={data.current_address}
            onChange={(e) =>
              setData({ ...data, current_address: e.target.value })
            }
            placeholder="Current address"
            type="text"
          /><br/>
          {formErrors.current_address && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.current_address}
            </span>
          )}
        </div>
        <div className="my-3 input_">
          <textarea
            style={{ resize: "none" }}
            value={data.detailed_business}
            onChange={(e) =>
              setData({ ...data, detailed_business: e.target.value })
            }
            placeholder="institute's detailed business activity"
            type="text"
          /><br/>
          {formErrors.detailed_business && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.detailed_business}
            </span>
          )}
        </div>
        <div className="my-3 input_">
          <input
            value={data.institute_email}
            onChange={(e) =>
              setData({ ...data, institute_email: e.target.value })
            }
            placeholder="Institute email address"
            type="email"
          /><br/>
          {formErrors.institute_email && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.institute_email}
            </span>
          )}
        </div>
        <div className="my-3 input_">
          <input
            ref={ref1}
            value={data.start_date}
            onChange={(e) => setData({ ...data, start_date: e.target.value })}
            type="text"
            placeholder="Actual start date"
            onFocus={() => (ref1.current.type = "date")}
            onBlur={() => (ref1.current.type = "text")}
            className="input"
          /><br/>
          {formErrors.start_date && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.start_date}
            </span>
          )}
        </div>
        <div className="my-3 input_">
          <input
            value={data.phone_number}
            onChange={(e) => setData({ ...data, phone_number: e.target.value })}
            placeholder="Phone number"
            type="number"
          />
        </div>
        <div className="my-3 input_">
          <input
            value={data.fax_number}
            onChange={(e) => setData({ ...data, fax_number: e.target.value })}
            placeholder="Fax number"
            type="number"
          />
        </div>
        <div className="my-3 input_">
          <input
            value={data.landline_number}
            onChange={(e) =>
              setData({ ...data, landline_number: e.target.value })
            }
            placeholder="Landline extention"
            type="number"
          /><br/>
        </div>
        <div className="my-3 input_1">
          <label htmlFor="file2">
            <p>Upload institute record</p>
            <img src={file} alt="" width="30" />
          </label>
          <input
            required
            onChange={(e) => setFile1(e.target.files)}
            className="input"
            name="uploadFile"
            id="file2"
            placeholder="Upload file"
            type="file"
            multiple
          />
        </div>
        {formErrors.file1 && (
            <span className="error" style={{ color: "red" }}>
              {formErrors.file1}
            </span>
          )}
      </form>
    </div>
  );
};

export default InstituteInfo;
