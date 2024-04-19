import React, { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { Img, Line, Text } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./style.css";
import { ReactComponent as Slide } from "../../assets/images/Group427320539.svg";
import LayoutNavbar from "layout/layout-navbar";
import LayoutHome from "layout/layout-home";

const ScreenTwo = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <LayoutNavbar>
      <LayoutHome>

        <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  speed={600}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                  }}
                  modules={[Autoplay]}

                  className="swiper-container w-[100%] h-[100%] "
                >
                  {" "}
                  {[...Array(3)].map((_, index) => (
                    <SwiperSlide key={index}>

                          <Slide className={"w-[100%] h-[100%]"}/>
  
                    </SwiperSlide>
                  ))}
                </Swiper>
      </LayoutHome>
      

    </LayoutNavbar>
  );
};

export default ScreenTwo;
