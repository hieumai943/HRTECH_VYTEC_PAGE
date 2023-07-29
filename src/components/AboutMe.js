import React from 'react';
import navIcon1 from '../assets/hrt_logo.png';
import slide1 from '../assets/Slide1.png';


export const AboutMe = () => {
  return (
  
        <div className="AboutMe">
            <h1>VỀ CHÚNG TÔI</h1>
            <img id="logo" src={navIcon1}></img>
            <h1>CÂU LẠC BỘ HRTECH</h1>
            <img id="slide1" src={slide1}></img>
            <p>Cuộc thi Vietnamese Youth Technopreneur Challenge 2022 - VYTEC'22</p>

        </div>
        
    
  )
}