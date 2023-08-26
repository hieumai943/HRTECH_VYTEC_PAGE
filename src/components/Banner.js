import React from 'react';
import videoBg from '../assets/bgr_vid.mp4';
import vytec from "../assets/text_ VYTEC.png";
export const Banner = () => {
  return (
    <section  id="banner">
    <div className='main'>
        <div className="overlay"></div>
        <video className='bgrvid' src={videoBg} autoPlay playsInline loop muted />
        <div className="content">
            <img src={vytec}></img>
            <p>CUỘC THI Ý TƯỞNG SÁNG TẠO CÔNG NGHỆ</p>
            <a href='https://www.facebook.com/hrtechclub'><button>ĐĂNG KÝ</button></a>
            
        </div>
    </div>
    </section>

  )
}
