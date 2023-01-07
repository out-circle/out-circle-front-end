import React from 'react'
import MessageAr from '../../../Components/Message/Message-Ar'
import image from '../../../Assets/images/personal_service-ar/image2.png'
const PersonalServiceAr_2 = () => {
  return (
    <div>
        <MessageAr 
        gmail={"p.individuals.outcircle@gmail.com"}
        admin={"outcircle2023@gmail.com"}
        change_route={"personal-service/service2-ar"}
        user={"user_individuals"}
        image={image} text={"استشارات حول القضايا والمشاكل العامة"}
        head={"أفراد"} address={"استشارات حول القضايا والمشاكل العامة"}
        text1={"تقديم الاستشارات والنصائح والحلول في أي قضية أو مشكلة عامة"}
        text2={"مشاركة الأقكار المراد عملها وتقديم الحل الأمثل"}
        text3={"تقديم النصح في القضايا الشخصية في حال الرغبة"}
        text4={"تقديم المساعدة بشكل عملي في حال الإمكان"}
        text5={"...."}
        text6={"...."}
        text7={"...."}
        text8={"...."}
        />
    </div>
  )
}

export default PersonalServiceAr_2;