import React from 'react';
import slide1 from '../assets/Slide1.png';
import hrtLogo from '../assets/hrt_logo.png'
import CustomCarousel from './CustomCarousel';

const items = [
  {
    src: slide1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: slide1,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: slide1,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];
export const AboutMe = () => {
  return (
      <div className='aboutMe'>
        <h1 className='textAboutUs'>VỀ CHÚNG TÔI</h1>
        <img className='logoCLB' src = {hrtLogo}></img>
          <CustomCarousel items={items}/>
      </div>
  )
}