import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import hrtLogo from '../assets/hrt_logo.png'
import './AboutMe.css';

const CustomCarousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000); // duration to automatically change slides.

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  /*const previous = () => {
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };*/ // cái này để prev đề phòng thôi a ạ :))))
  return (
    <Carousel activeIndex={activeIndex} onSelect={() => {}} prevIcon ={null} nextIcon = {null}>
      {items.map((item, index) => (
        <Carousel.Item key={index} >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <Carousel.Caption>
            <img className='logoCLB' src = {hrtLogo}></img>
            <h3>{item.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
