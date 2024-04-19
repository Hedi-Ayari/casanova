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
import img from "../../assets/images/cas.png";
import LayoutNavbar from "layout/layout-navbar";
import LayoutHome from "layout/layout-home";

const ScreenSix = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <LayoutNavbar>
      <LayoutHome>

        <div
          className="flex flex-col items-start w-[92%] justify-start h-[100%]"

        >
          <div className="absolute" style={{right:"0%",bottom:"15px"}}>
            <img src={img} alt="ddddd" />
          </div>
          <div className="font-cormorant gap-[33px] items-start justify-start  h-[100%]">
              <div className="h-[50%] pl-[2%] py-5">
                <Text
                  className=" text-[50px]  text-red-300 uppercase "
                  size="txtCormorantRegular60"
                >
                  Là où tout commence
                </Text>
                <div className="lg:pb-[16%] flex flex-col font-montserrat gap-[13px] h-[162px] md:h-auto items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-gray-800 w-[85px]"
                    size="txtMontserratRegular16Gray800"
                  >
                    Imaginez...
                  </Text>
                  <Text
                    className="leading-[25.00px] max-w-[658px] md:max-w-full text-base text-black-900 text-[14px] "
                    size="txtMontserratRegular16"
                  >
                    <>
                      Un événement magique et sur mesure. Des décors
                      féériques, une ambiance envoûtante, tout est pensé pour
                      créer une expérience extraordinaire.
                      Laissez-nous réaliser vos rêves, de la conception
                      à la coordination. Écrivez ensemble une histoire
                      inoubliable, une parenthèse enchantée qui renforcera vos
                      liens. Embarquez pour un voyage inoubliable dès
                      maintenant !
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-red-300 h-[50%]">


                <div className="py-5">
                  <Text
                    className="text-base pl-[2%] text-black-900 tracking-[5.00px] text-[16px] uppercase w-[100vw]"
                    size="txtCormorantRegular60"
                  >
                    A propos de nous
                  </Text>
                  <Text
                    className="max-w-[702px]  pl-[2%] md:text-5xl text-[38px] text-black-900 uppercase w-full"
                    size="txtCormorantRegular60"
                  >
                    <>
                      Un événementréussi en un clin d&#39;œil? C&#39;est
                      possible avec Casanova !
                    </>
                  </Text>

                  <Text
                    className="leading-[25.00px] pl-[2%] max-w-[590px] text-[14px] text-base text-black-900"
                    size="txtMontserratRegular16"
                  >
                    <>
                      Casanova révolutionne le monde de l&#39;événementiel en
                      rassemblant tous les prestatairesdont vous avez
                      en un seul et même endroit.
                    </>
                  </Text>
                </div>



              </div>
            </div>
        </div>
      </LayoutHome>
    </LayoutNavbar>
  );
};

export default ScreenSix;
