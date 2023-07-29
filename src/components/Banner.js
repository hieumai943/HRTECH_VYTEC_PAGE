import React from 'react';
import videoBg from '../assets/bgr_vid.mp4';

export const Banner = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video className='bgrvid' src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
  )
}
