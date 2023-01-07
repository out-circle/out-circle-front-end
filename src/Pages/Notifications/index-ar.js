import React , {useState , useEffect , useCallback} from 'react'
import './index.css'
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import logo from '../../Assets/images/Group 360.svg';
import logo1 from '../../Assets/images/logo.svg';
import { useSelector } from "react-redux";
import Axios from 'axios';

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const NotificationsAr = () => {

  const [notificationInfo, setNotificationInfo] = useState([]);

  const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
        }, []);
        const width = windowSize.innerWidth;

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const value = localStorage.getItem("email")

  const getAllNotifications = useCallback(() => {
    return new Promise((resolve, reject) => {
      Axios.get(`${BASE_API_URL}/api/notifications/all-notifications?email=${value}`)
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => reject(err));
    });
}, [BASE_API_URL , value]);

useEffect(()=> {
  getAllNotifications()
  .then((data)=> {
    setNotificationInfo(data)
  })
  .catch((err) => console.log(err))
} , [BASE_API_URL , getAllNotifications]) 

  return (
    <div className='notifications'>
        <div className='notification'>
            <div className='rectangle_ar'>
            {
                notificationInfo.map((item) => (
                        <div key={item._id} className="content">
                            <p className="news_ads">{item.content}</p>
                        </div>
                    ))
            }
            </div>
            <div className='side_ar'>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
                <span className='title'>الإشعارات</span>
            </div>
            <div>
            {
                width < 600 && (
                <div className='head'>
                    <span className='title'>الإشعارات</span>
                    <Link to="/">
                        <img src={logo1} alt=""/>
                    </Link>
                </div>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default NotificationsAr;