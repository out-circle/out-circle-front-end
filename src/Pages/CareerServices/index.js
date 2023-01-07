import React from 'react'
import Circle from '../../Components/Circle/Circle'
import './index.css'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png';
import image1 from '../../Assets/images/New folder/Group 429.png'
import image2 from '../../Assets/images/New folder/Component 31 – 9.png'
function CareerServices() {
  return (
    <div className='careerServices'>
        <header>
            <Link to="/individuals">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        circle1={image1}
        circle2={image2}
        demand1="career-services/service1"
        demand2="career-services/service2"
        demand3="career-services/service3"
        demand4="career-services/service4"
        demand5="career-services/service5"
        demand6="career-services/service6"
        service="Individuals"
        service1="Finding appropriate development courses"
        service2="Providing a job opportunity"
        service3="Consulting in current work"
        service4="New businees advice and ideas"
        service5="(Real estate, transportation, financial, commercial registry, general construction ...ect) services"
        service6="Advertising Services"
        />
        <span className='career'>Career services</span>
    </div>
  )
}

export default CareerServices
