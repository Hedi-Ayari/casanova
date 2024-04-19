import React, { useEffect, useRef } from "react";

import { Button, Img, Line, Text } from "components";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";
import "./style.css";
import LayoutNavbar from "layout/layout-navbar";
import LayoutHome from "layout/layout-home";
const ScreenOne = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <LayoutNavbar>
    <LayoutHome>
          <div className="flex items-center" style={{height:"100%"}}>

            <div className="flex flex-col items-start w-[100%] justify-start items-center relative">

              <Img className="textCercle" src="../images/text.svg" />
              <Img
                className=" textCercle-2 top-[100%] left-[56%] inset-[0] justify-center m-auto object-contain w-full"
                src="images/img_sdsza1.png"
                alt="sdszaOne"
              />
      
            </div>
          </div>
      </LayoutHome>
      </LayoutNavbar>
  );
};

export default ScreenOne;
