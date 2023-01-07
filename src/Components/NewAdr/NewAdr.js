import React from 'react';
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import logo from '../../Assets/images/Group 360.svg';
import './NewAdr.css';

const NewAdr = ({title , route}) => {
    return (
        <div className='news'>
            <header>
            <Link className='back' to={`/${route}`}>
                <span>Back</span>
                <img src={back} alt="" width="30px"/>
            </Link>
            </header>
            <div className='rectangle'>
            </div>
            <div className='side'>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
                <span className='title'>{title}</span>
            </div>
        </div>
)
}

export default NewAdr
