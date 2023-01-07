import React from "react";
import logo from "../../Assets/images/Group 360.svg";
import back from "../../Assets/images/back.png";
import { Link } from "react-router-dom";
import goals from "../../Assets/images/goals.png";
import "./index.css";
function GoalsAr() {
  return (
    <div className="goals">
      <div className="logo_ar">
        <Link className="my-3" to="/ar">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="back_ar">
        <Link to="/ar" className="m-2">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </div>
      <img className="background" src={goals} alt="" />
      <div className="rectangle"></div>
      <section className="main main_ar">
        <div>
          <h2>أهدافنا و مميزاتنا</h2>
        </div>
        <div className="text_ar">
          <div>
            <h3 style={{ fontWeight: "bold" }}>:أهدافنا</h3>
            <ul dir="rtl">
              <li>
              <p>الخروج من الدائرة العامة و الإطار العام لأسلوب العمل والبعد عن الروتين المعتاد والتقليدي نحو أفق واسع بدون حدود</p>
              </li>
              <li>
              <p>تطوير بيئة أي عمل بشكل عام عن وضعها الحالي من خلال أفكار وطرق احترافية</p>
              </li>
              <li>
                <p>تغيير مفهوم الإحباط المهني في ظل الظروف الصعبة وتحويله إلى نجاحات عملية دائمة في كل الظروف</p>
              </li>
              <li>
              <p>تغيير مفهوم الاستغلال من خلال تقديم استشارات وخدمات حقيقية بأسعار منطقية و مدروسة</p>
              </li>
              <li>
              <p>تغيير مفهوم العمل الفردي إلى العمل الجماعي</p>
              </li>
              <li>
              <p>تغيير مفهوم العمل العشوائي لعمل منظم ومدروس ودقيق وهادف</p>
              </li>
              <li>
              <p>توفير فرص العمل لمن يستحقها</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: "bold" }}>:مميزاتنا</h3>
            <ul dir="rtl">
              <li>
                <p>توفير الوقت والجهد للعملاء من خلال التواصل معنا بطرق سهلة في أي وقت ومكان</p>
              </li>
              <li>
                <p>توفير الوقت والجهد وعناء التفكير في الأمور العامة والنثرية ضمن العمل من خلال تقديم استشارات وخدمات وتنظيم أعمال ومتابعتها</p>
              </li>
              <li>
                <p>تقديم خدمات متكاملة وشاملة تلبي معظم احتياجات العملاء المهنية والشخصية في مكان واحد مما يوفر على العملاء عناء التشتت</p>
              </li>
              <li>
                <p>تطوير الأعمال وخلق أفكار جديدة تساهم في تحقيق إيرادات في ظل كافة الظروف</p>
              </li>
              <li>
                <p>جُل اهتمامنا الحصول على نتائج مميزة على أرض الواقع حيث لا نكتفي بتقديم الاستشارات والخدمات بشكل كلامي فقط</p>
              </li>
              <li>
                <p>المتابعات الحثيثة وخدمات ما بعد البيع</p>
              </li>
              <li>
                <p>تسليط الضوء على أصحاب الخبرات المهملين وإعطائهم حقهم</p>
              </li>
              <li>
                <p>تقديم خدمات لها طابع شخصي وإنساني</p>
              </li>
            </ul>
    
          </div>
        </div>
      </section>
    </div>
  );
}

export default GoalsAr;
