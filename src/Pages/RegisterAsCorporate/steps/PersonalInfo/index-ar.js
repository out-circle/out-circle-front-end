
const PersonalInfoAr = ({data , setData , page , setPage , formErrors}) => {

  return (
    <div>
      <div className='my-3 input_'>
        <input 
        name="username"
        placeholder="اسم المستخدم"
        value={data.username}
        onChange={(e) => {
          setData({ ...data, username: e.target.value });
        }}
        type="text"
        /><br/>
        {formErrors.username && (<span className="error" style={{ color: "red" }}>{formErrors.username}</span>)}
      </div>
      <div className='my-3 input_'>
        <input 
        name='password'
        placeholder="كلمة المرور" 
        type="password"
        value={data.password}
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
        /><br/>
        {formErrors.password && (<span className="error" style={{ color: "red" }}>{formErrors.password}</span>)}
      </div>
      <div className='my-3 input_'>
          <input 
          name="confirmPassword"
          placeholder="تأكيد كلمة المرور" 
          type="password"
          value={data.confirmPassword}
          onChange={(e) => {
          setData({ ...data, confirmPassword: e.target.value });
        }}
          /><br/>
        {formErrors.confirmPassword && (<span className="error" style={{ color: "red" }}>{formErrors.confirmPassword}</span>)}
      </div>
    </div>
  )
}

export default PersonalInfoAr;
