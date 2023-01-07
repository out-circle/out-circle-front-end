import React from 'react';
import Circle from '../../Components/Circle/Circle_ar';
import './index.css';
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import image from '../../Assets/images/Component 31 – 28.png';
import image2 from '../../Assets/images/hover_ar/Component 31 – 28.png'
function PersonalServices_ar() {
  return (
    <div className='personalServices'>
        <header>
            <Link to="/individuals-ar" className="back_ar">
                <span>رجوع</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        circle={image}
        circle2={image2}
        demand1="personal-service/service1-ar"
        demand2="personal-service/service3-ar"
        demand3="personal-service/service4-ar"
        demand4="personal-service/service5-ar"
        demand5="personal-service/service7-ar"
        demand6="personal-service/service6-ar"
        demand7="personal-service/service2-ar"
        service1="خدمات طبية"
        service2="خدمات المناسبات والهدايا"
        service3="خدمات السفر والجوازات"
        service4="خدمات الصيانة"
        service5="خدمات الطاقة البديلة"
        service6="خدمة دفع الفواتير والرسوم"
        service7="استشارات حول القضايا والمشاكل العامة"
        />
        <span className='personal_ar'>خدمات شخصية</span>
    </div>
  )
}

export default PersonalServices_ar;