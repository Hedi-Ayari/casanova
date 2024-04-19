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
import LayoutHome from "layout/layout-home";
import LayoutNavbar from "layout/layout-navbar";
const JoinUs = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <LayoutNavbar>
    <LayoutHome>
      <div className="flex justify-center">
        <div className="w-[90%]">
            <div className="flex justify-between items-center h-[100%]">

                <div
                  className={`flex h-[100%] w-[30%] flex-col items-center justify-center `}            
                >
      
                  <Img
                    className={`md:h-auto object-cover h-[75%] w-[100%] rounded-br-7px w-full`}
                    src="images/3rouss.svg"
                    alt={"images/img_weddingbouquet.png"}
                  />

                </div>
                <div className="w-[60%]">
                  
                  <Text className="sm:text-[32px] pb-4 md:text-[38px] text-[15px] text-gray-500 uppercase w-full">
                    Prêt à entrer en contact ?{" "}
                  </Text>
                  <Text
                    className="sm:text-[32px] md:text-[38px] w-[73%] text-[30px] text-red-300 uppercase w-full"
                    size="txtCormorantRegular42Red300"
                  >
                    Offrez-vous une parenthèse enchantée hors du temps. We plan
                    yourday your way
                  </Text>

                  <Button
                    className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-w-[203px] mt-12 rounded-[5px] text-center text-sm uppercase"
                    color="red_300"
                    size="md"
                    variant="fill"
                    onClick={(e) => navigate("/signup")}
                  >
                    Rejoignez-nousmaintenant
                  </Button>
                </div>
            </div>
        </div>
      </div>
          
          </LayoutHome>
        </LayoutNavbar>
        
  );
};

export default JoinUs;
