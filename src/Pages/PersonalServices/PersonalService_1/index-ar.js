import React from 'react';
import MessageAr from '../../../Components/Message/Message-Ar';
import image from '../../../Assets/images/personal_service-ar/image1.png';
import './index.css';

const PersonalServiceAr_1 = () => {
  return (
    <div>
        <MessageAr 
        gmail={"p.individuals.outcircle@gmail.com"}
        admin={"outcircle2023@gmail.com"}
        change_route={"personal-service/service1-ar"}
        user={"user_individuals"}
        image={image} text={"خدمات طبية"}
        head={"أفراد"} address={"خدمات طبية"}
        text1={"تقديم النصائح الطبيّة بناءً على خبرات موثوقة"}
        text2={"ترشيح أسماء أطباء أو مخبريين تناسب الحالة"}
        text3={"المساعدة على إيجاد أدوية مفقودة في حال الإمكان"}
        text4={"تأمين ممرضين ذوي خبرات عالية بأسعار رحيمة"}
        text5={"الاستشارات ةالنصائح الطبيّة بناءً على الطب البديل"}
        text6={"تأمين العلاجات العشبية والخلاصات العشبية المضمونة لكثير من الحالات من مصادة موثوقة"}
        text7={"تقديم الدعم النفسي لجميع الحالات من خلال طرق فعّالة و مدروسة"}
        text8={"يمكنك أيضًا تقديم خبرتك الطبية الشخصية والحالات التي مررت بها من خلال تقديمها إلينا لصالح الجميع في حال عرض حالات مماثلة إلينا"}
        />
    </div>
  )
}

export default PersonalServiceAr_1