import React from "react";
import logo from "../../Assets/images/Group 360.svg";
import back from "../../Assets/images/back.png";
import { Link } from "react-router-dom";
import whyus from "../../Assets/images/Group 384.png";
import "./index.css";
function WhyusAr() {
  return (
    <div className="whyus">
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
      <img className="background" src={whyus} alt="" />
      <section className="main">
        <div>
          <h2>من نحن</h2>
        </div>
        <div className="text_ar">
          <p>
            النجاح في ظل الظروف الطبيعية لا يعتبر نجاح ولا حتى مهارة... والإحباط
            في ظل الظروف الصعبة دليل عجز
          </p>
          <p>
            النجاح الحقيقي والمهارات والخبرات تظهر فقط في الأوقات الصعبة وتحت
            الظروف القاسية... النجاح الحقيقي هو أن تجد شيء من لا شيء
          </p>
          <p>
            .نحن فريق عمل نقدم خدمات استشارية وتطويرية بالإضافة لخدمات مهنية
            لجميع قطاعات العمل الخاصة بطريقة تقنية خارجة عن المألوف توفر الوقت
            والجهد على الجميع وتعطي نتائج قيَمة وفعلية وتحديات في سوق العمل خارج
            الدائرة العامة والروتين المعتاد
          </p>
          <p>
            لمعرفة تفاصيل أكثر والاستفادة من خدماتنا يرجى دخول كل شخص حسب مجال
            عمله أو الدخول كفرد مستقل ومن ثم تحديد مجال الخدمة المطلوبة وإرسال
            رسالة أو تسجيل صوتي بطلبه مفصلاً، ونحن بدورنا سنقوم بالتواصل معكم
            وخدمتكم
          </p>
          <strong>:ملاحظات مهمة جدا</strong>
          <ul dir="rtl">
            <li>
              <p>مجال عملنا الأساسي هو ضمن المجال الأستشاري</p>
            </li>
            <li>
              <p>معظم خدماتنا خدمات استشارية مع إمكانية تطبيقها لتصبح خدمات مهنية حسب الاتفاق</p>
            </li>
            <li>
              <p>خدماتنا المهنية والشخصية تحتاج لدراسة ممنهجة ودقيقة لقبولها لذا يرجى طلبها مع إتاحة الوقت الكافي لتجنب أي إشكال قد يحدث حيث إنه يوجد احتمال عدم تلبيتها</p>
            </li>
            <li>
              <p>في حالة عدم التمكن من تلبية أي طلب ، سيتم تقديم اعتذار رسمي خلال فترة وجيزة</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default WhyusAr;
