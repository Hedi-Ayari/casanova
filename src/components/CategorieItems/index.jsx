import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules';

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";
import { Get } from "service/api";
import { useMediaQuery } from "react-responsive";

const CategorieItems = (props) => {

  const navigate = useNavigate();
  const [categories,setCategories] = useState()
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await Get("Categorie");
        setCategories(categories);
        console.log(categories);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };
    fetchCategories();
  }, []);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })


  return (
    <div className={props.className}>
       <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        centeredSlides={isTabletOrMobile ? true : false}
        slidesPerView={isTabletOrMobile ? 1.1 : 2.5}
        spaceBetween={isTabletOrMobile   ? 10 : 30}
        pagination={{
          clickable: true,
        }}
   
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
       
        className="swiper-container"
      >
        {categories&&categories.length > 0 && categories.map((category, index) => (
          <SwiperSlide key={index} className="relative cursor-pointer"  onClick={e => navigate("/category?category=" + category._id) }>
            <div key={index} >
              <Img
                className="h-[318px] m-auto object-cover rounded-[10px] w-full"
                src={process.env.REACT_APP_API_BACK_IMG+"/uploads/"+category.imageUrl}
                alt={`image_${index}`}
              />
              <div className="absolute bg-light_green-100_ba bottom-[0] flex flex-row inset-x-[0] items-start justify-start mx-auto p-[19px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-row items-center justify-center mb-1 ml-2 md:ml-0 md:w-[100%]">
                  <Text
                    className="md:text-[28px] text-[21px] text-black-900_c9 text-center"
                    size="txtCormorantBold21Black900c9"
                  >
                    {category.title}
                  </Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default CategorieItems;
