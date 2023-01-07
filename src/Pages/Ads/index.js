import {useEffect , useState} from 'react';
import { useSelector } from "react-redux";
import back from '../../Assets/images/back.png';
import logo from '../../Assets/images/logo.svg';
import logo1 from '../../Assets/images/Group 360.svg';
import './index.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}


const Ads = () => {
    
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



    const [adsInfo, setAdsInfo] = useState([]);

    const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

    useEffect(() => {
        Axios.get(`${BASE_API_URL}/api/ads/all-ads`)
            .then((res) => {
            let data = res.data;
            setAdsInfo(data);
        })
        .catch((err) => console.log(err));
    }, [BASE_API_URL]);

    return (
        <div className='ads'>
            <header>
            <Link className='back' to="/">
                <span>Back</span>
                <img src={back} alt="" width="30px"/>
            </Link>
            </header>
            <div className='rectangle'>
                {
                    adsInfo && adsInfo.map((item) => (
                        <div key={item._id} className="item">
                            <img src={`${BASE_API_URL}/${item.file_paths[0]}`} alt="" className="image"/>
                            <Link
                            onClick={
                                () => {
                                    localStorage.setItem("ads_id" ,item._id)
                                }}
                            to="/detials-ads" className="details text-danger"
                            >Click for more details</Link>
                        </div>
                    ))
                }
            </div>
            <div className='side'>
                <Link to="/">
                    <img src={logo1} alt=""/>
                </Link>
                <span className='title'>ads</span>
            </div>
            <div>
                {
                    width < 600 && (
                    <div className='head'>
                        <span className='title'>ads</span>
                        <Link to="/">
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    )
                }
            </div>
        </div>
)
}

export default Ads;
