import React from 'react'
import {BsPersonPlus} from 'react-icons/bs'
import './Header.css'
const Header = ({text}) => {
  return (
    <div className='header_'>
        <header>
            <span className='icon'><BsPersonPlus/></span>
            <span className='text'>New User / {text}</span>
        </header>
    </div>
  )
}

export default Header
