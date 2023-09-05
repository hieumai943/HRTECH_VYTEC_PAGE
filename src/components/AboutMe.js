import React from 'react';
import './AboutMe.css'
import slide1 from '../assets/Slide1.png';
import slide2 from '../assets/Slide2.png';
import slide3 from '../assets/Slide3.png';
import slide4 from '../assets/Slide4.png';
import slide5 from '../assets/Slide5.png';
import slide6 from '../assets/Slide6.png';
import slide7 from '../assets/Slide7.png';
import hrtLogo from '../assets/hrt_logo.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar: slide1,
    review: 'Cuộc thi Vietnamese Youth Technopreneur Challenge 2022 - VYTEC22'
  },
  {
    avatar: slide2,
    review: 'Cuộc thi Vietnamese Youth Technopreneur Challenge 2021 - VYTEC21'
  },
  {
    avatar: slide3,
    review: 'Cuộc thi Ý tưởng sáng tạo công nghệ'
  },
  {
    avatar: slide4,
    name: 'Nana McBrown',
    review: 'Cuộc thi Ươm mầm ý tưởng sáng tạo khởi nghiệp công nghệ - Innovative Entrepreneurs 2019'
  },
  {
    avatar: slide5,
    review: 'Ngày hội truyến thông UET Connect'
  },
  {
    avatar: slide6,
    review: 'Cuộc thi UET Makerthon'
  },
  {
    avatar: slide7,
    review: 'Ngày hội việc làm UET Job Fair'
  },
  
]
export const AboutMe = () => {
  return (
    <section id='testimonials'>
    <h1>VỀ CHÚNG TÔI</h1>
    <img src={hrtLogo} id='hrtlogo'></img>
    <h1>CÂU LẠC BỘ HRTECH</h1>

    <Swiper className="container testimonials__container"
    // install Swiper modules
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar}/>       
              </div>
             
                <span className='client__review'>
                  {review}
                </span>
            </SwiperSlide>
          )
        })
      }  
    </Swiper>
  </section>
  )
}