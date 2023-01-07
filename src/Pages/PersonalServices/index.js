import React from 'react'
import Circle from '../../Components/Circle/Circle'
import './index.css'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png'
import image1 from '../../Assets/images/New folder/Group 429.png'
import image2 from '../../Assets/images/New folder/Component 31 – 9.png'
function PersonalServices() {
  return (
    <div className='personalServices'>
        <header>
            <Link to="/individuals" className="back">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        circle1={image1}
        circle2={image2}
        demand1="personal-services/service1"
        demand2="personal-services/service3"
        demand3="personal-services/service4"
        demand4="personal-services/service5"
        demand5="personal-services/service7"
        demand6="personal-services/service6"
        demand7="personal-services/service2"
        service="Individuals"
        service1="Medical services"
        service2="Gift and occasions services"
        service3="Travel and reservation services"
        service4="Maintenance Services"
        service5="Alternative energy services"
        service6="Bill and fee payment service"
        service7="Consultations on general issues and problems"
        />
        <span className='personal'>Personal services</span>
    </div>
  )
}

export default PersonalServices