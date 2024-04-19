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

const ScreenFive = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <LayoutNavbar>
    <LayoutHome>
    

            <div className="flex flex-col items-start w-[100%] justify-start relative"   style={{borderLeft: "1px black solid",height:"100%" }}>
              <div className="bg-red-300" style={{position:"absolute",width:"50%",zIndex:"-1",height:"100%"}}></div>
                <div className="h-[25%] px-5">
                  <Text
                    className=" text-[12px] text-black-900 pt-[18%] tracking-[5.00px] uppercase"
                    size="txtMontserratRegular16"
                  >
                    La fête de mariage
                  </Text>
                  <Text
                    className="  md:text-4xl text-4xl text-black-900 top-[23%] uppercase"
                    size="txtCormorantRegular60Black900"
                  >
                    NOTRE GALERIE
                  </Text>
                </div>
                <div  className="flex align-center h-[75%] w-[100%]">
                  <div className="h-[100%] w-[100%]">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                      }}
                      slidesPerView={3}
                      pagination={{ clickable: true }}
                      loop={true}
                      speed={600}
                      coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                      }}
                      modules={[Autoplay]}

                      className="swiper-container w-[100%] flex-grow"
                    >
                      {[
                        {
                          src: "images/img_jaysonhinrichs.png",
                          alt: "jaysonhinrichs",
                        },
                        { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
                        {
                          src: "images/img_weddingbouquet.png",
                          alt: "weddingbouquet",
                        },
                        {
                          src: "images/img_jaysonhinrichs.png",
                          alt: "jaysonhinrichs",
                        },
                        { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
                        {
                          src: "images/img_weddingbouquet.png",
                          alt: "weddingbouquet",
                        },
                        {
                          src: "images/img_jaysonhinrichs.png",
                          alt: "jaysonhinrichs",
                        },
                        { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
                        {
                          src: "images/img_weddingbouquet.png",
                          alt: "weddingbouquet",
                        },
                        {
                          src: "images/img_jaysonhinrichs.png",
                          alt: "jaysonhinrichs",
                        },
                        { src: "images/img_vitormonthayj.png", alt: "vitormonthayj" },
                        {
                          src: "images/img_weddingbouquet.png",
                          alt: "weddingbouquet",
                        },
                      ].map((image, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img
                              className={`h-[60] md:h-auto object-cover rounded-br-7px w-full `}
                              src={image.src}
                              alt={image.alt}
                            ></img>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </LayoutHome>      
        </LayoutNavbar>
);
};

export default ScreenFive;
