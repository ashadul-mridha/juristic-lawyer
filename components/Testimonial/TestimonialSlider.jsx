import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import modules
import { Pagination } from "swiper";
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = ({ pagination }) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialSlider;