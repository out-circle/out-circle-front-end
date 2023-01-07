import React from 'react'
import { Link } from 'react-router-dom'
import back from '../../Assets/images/back.png'
import './Profile.css';
import user from '../../Assets/images/user.png'
import update from '../../Assets/images/update.png'
import file from '../../Assets/images/file.png'
const ProfileHandicraft = ({image , value}) => {
  return (
    <div className='profile_handicraft'>
        <header>
            <Link to="/" className='back'>
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <section>
        <header>
                <span className='icon'><img src={user} alt="" width="40px"/></span>
                <span className='text'>Your Profile</span>
        </header>
        <div className='body my-3'>
            <div style={{height:"350px" , overflowY:"scroll"}}>
                <div className='information'>
                    <input type="text" value="User name"/>
                </div>
                <div className='information'>
                    <input type="password" value={"**********"}/>
                    <Link to="/change_password">
                        <img src={update} alt=""/>
                    </Link>
                </div>
                <div className='information'>
                    <input type="text" value="Full name"/>
                </div>
                <div className='information'>
                    <input type="text" value="Born date"/>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Current city"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Current address"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Scientific certificate"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Craft Specialization"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Actual start dates"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Current work address"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Phone number"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Mobile number"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Whatsapp number"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="email" defaultValue={value || "E-mail address"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <p>Upload file</p>
                    <div>
                        <img src={file} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <p>Upload file</p>
                    <div>
                        <img src={file} alt=""/>
                    </div>
                </div>
            </div>
            <div className='footer'>
            <Link to="">
                <button className='mt-4 py-1 px-3'>Update</button>
            </Link>
            </div>
            </div>
        </section>
        <div className='section2'>
            <img src={image} alt=""/>
        </div>
    </div>
  )
}

export default ProfileHandicraft;