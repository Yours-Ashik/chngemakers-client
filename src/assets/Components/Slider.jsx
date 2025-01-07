import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img4 from "../../assets/img4.jpg"
const Slider = () => {
    return (
        <div className="carousel w-full">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><img className='lg:h-[80vh] w-full object-cover' src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='lg:h-[80vh] w-full object-cover' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='lg:h-[80vh] w-full object-cover' src={img4} alt="" /></SwiperSlide>
                
                
            </Swiper>

        </div>
    );
};

export default Slider;