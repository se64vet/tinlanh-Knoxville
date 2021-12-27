import React from 'react'

import { FaInstagram, FaFacebookSquare,  FaYoutube} from "react-icons/fa";
import './Footer.style.css'
import Logo from '../../../vendors/assets/logo.png'

const Footer = () => {
    const center = 'd-flex justify-content-center align-items-center '
    return (
        <div className='text-center py-5 mt-5 footer'>
            <img src={Logo} alt="logo" className='mb-4'/>

            <div className='footer-infos'>
                <h6>Thờ Phượng Chúa Nhật</h6>
                <p>1:30PM  - 3:30PM</p>
                <p>8000 Middlebrook Pike</p>
                <p>Knoxville, TN, 37909</p>
            </div>

            <div className='footer-links'>
                <a href="#">Hội Thánh</a>
                <a href="#">Góp ý</a>
                <a href="#">Liên hệ</a>
                <a href="#">Tiếng Anh</a>
            </div>
            
            <div className='footer-social mt-4'>
                <p className='d-block'>Follow us</p>
                <FaInstagram style={{color: '#E4405F', fontSize: '1.2rem'}} />
                <FaFacebookSquare className='mx-2' style={{color: '#1877F2', fontSize: '1.2rem'}} />
                <FaYoutube style={{color: '#CD201F', fontSize: '1.2rem'}} />
            </div>

            <small className='d-block'>
                    &copy; 2022 All rights reserved
            </small>

        </div>
    )
}

export default Footer
