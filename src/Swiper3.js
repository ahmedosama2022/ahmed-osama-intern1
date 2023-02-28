import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiprr3.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Swiper3 = () => {
    
  return (
    <div className="swip3">
    
         <Swiper
         cssMode={true}
         navigation={true}
         pagination={true}
         mousewheel={true}
         keyboard={true}
         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
         className="mySwiper"
      >
        <SwiperSlide><img src="https://pure-soft.com/designs/10/images/gift/New%20folder/t-6.png"/></SwiperSlide>
        <SwiperSlide><img src="https://pure-soft.com/designs/10/images/gift/New%20folder/t-7.png"/></SwiperSlide>
        <SwiperSlide><img src="	https://pure-soft.com/designs/10/images/gift/New%20folder/t-2.png"/></SwiperSlide>
        <SwiperSlide><img src="https://pure-soft.com/designs/10/images/gift/New%20folder/t-6.png"/></SwiperSlide>
       
      </Swiper>
      <div className="s">
      <Swiper
         cssMode={true}
         navigation={true}
         pagination={true}
         mousewheel={true}
         keyboard={true}
         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
         className="mySwiper"
      >
        <SwiperSlide><img src="	https://pure-soft.com/designs/10/images/gift/New%20folder/j-6.png"/></SwiperSlide>
        <SwiperSlide><img src="	https://pure-soft.com/designs/10/images/gift/New%20folder/j-1.png"/></SwiperSlide>
        <SwiperSlide><img src="	https://pure-soft.com/designs/10/images/gift/New%20folder/j-3.png"/></SwiperSlide>
        <SwiperSlide><img src="	https://pure-soft.com/designs/10/images/gift/New%20folder/j-7.png"/></SwiperSlide>
       
      </Swiper>
      </div>
    </div>
  )
}

export default Swiper3
