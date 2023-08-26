import React from 'react';
import slide1 from '../assets/Slide1.png';
import slide2 from '../assets/Slide2.png';
import slide3 from '../assets/Slide3.png';
import slide4 from '../assets/Slide4.png';
import slide5 from '../assets/Slide5.png';
import slide6 from '../assets/Slide6.png';
import slide7 from '../assets/Slide7.png';
import hrtLogo from '../assets/hrt_logo.png'
import CustomCarousel from './CustomCarousel';

const items = [
  {
    src: slide1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: slide2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: slide3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: slide4,
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: slide6,
    altText: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    src: slide7,
    altText: 'Slide 7',
    caption: 'Slide 7'
  }
];
export const AboutMe = () => {
  return (
    <section id='aboutme'>
      <div className='aboutMe'>
        <h1 className='textAboutUs'>VỀ CHÚNG TÔI</h1>
        <img className='logoCLB' src = {hrtLogo}></img>
          <CustomCarousel items={items}/>
      </div>
      </section>
  )
}