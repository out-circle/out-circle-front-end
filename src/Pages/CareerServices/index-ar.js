import React from 'react';
import Circle from '../../Components/Circle/Circle_ar';
import './index.css';
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import image from '../../Assets/images/Component 31 – 28.png';
import image2 from '../../Assets/images/hover_ar/Component 31 – 28.png'
function CareerServices() {
  return (
    <div className='careerServices'>
        <header>
            <Link to="/individuals-ar" className="back">
                <span>رجوع</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        circle={image}
        circle2={image2}
        demand1="career-service/service1-ar"
        demand2="career-service/service2-ar"
        demand3="career-service/service3-ar"
        demand4="career-service/service4-ar"
        demand5="career-service/service5-ar"
        demand6="career-service/service6-ar"
        service1="تأمين الدورات التطويرية المناسبة"
        service2="تأمين فرصة عمل"
        service3="استشارات في العمل الحالي"
        service4="نصائح وأفكار تجارية جديدة"
        service5="خدمات (عقارات/مواصلات/مالية سجل تجاري/تعهدات عامة ..الخ)"
        service6="خدمات إعلانية"
        />
        <span className='career_ar'>خدمات مهنية</span>
    </div>
  )
}

export default CareerServices