import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
function Card({text , image , route}) {
  return (
    <div className='card_'>
        <Link to={`${route}`} >
            <img src={image} alt=""/>
            <div className='bodyCard'>
                <p className=''>{text}</p>
            </div>
        </Link>
    </div>
  )
}

export default Card
