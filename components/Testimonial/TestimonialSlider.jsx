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
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
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