import React , { useState } from 'react';
import videoBg from '../assets/bgr_vid.mp4';
import vytec from "../assets/text_ VYTEC.png";
export const Banner = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleClick = () => {
    setShowLinks(true);
  };
  return (
    <section  id="banner">
    <div className='main'>
        <div className="overlay"></div>
        <video className='bgrvid' src={videoBg} autoPlay playsInline loop muted />
        <div className="content">
            <img src={vytec}></img>
            <p>CUỘC THI Ý TƯỞNG SÁNG TẠO CÔNG NGHỆ</p>
            <a id='dangky'><button onClick={handleClick}>ĐĂNG KÝ</button></a>
      {showLinks && (
        <div className='LinkDangKy'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScGZlmYyztAfhlWrD0vj7o7AdHaf4lFOyvqAHLR2yPQJt8Bng/viewform?usp=sharing" target="_blank">
            <button >ĐỘI</button>
          </a>
          <a href="https://docs.google.com/forms/u/3/d/19wzFsTXH7ROAdxOm2NP0iOUwjzeG9uY6ACbCImWqSy8/edit?usp=drive_web" target="_blank">
          <button>CÁ NHÂN</button>
          </a>
        </div>
      )}
        
        </div>
    </div>
    </section>

  )
}
