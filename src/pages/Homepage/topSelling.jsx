import React, { useEffect, useState } from "react";
import { Button, Img, Line, Text, RatingBar } from "components";
import { ProductListState } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { Rating } from "components/rating";
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { SwiperSlide,Swiper } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { CardItems } from "components/card-items/items";
import { Search } from "service/api";
import Width from "components/width/width";
import Flex from "components/Flex/flex";
import empty from '../../assets/images/emp.svg';
import { H24, P16 } from "components/TXT/TXT";

const TopSelling = ({category,index}) => {

  const [productList,setproductList] = useState([])
  useEffect(() => {
        
    const fetchUser = async () => {
        try {
            let userData = await Search("Product",{category:category._id});
            setproductList(userData)
            console.log(userData);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    fetchUser();

  }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })

  return (
    <div className="my-4 w-[100] pb-6" style={{borderBottom:"1px solid #c3937c9e"}}>
      <div className="flex justify-between items-center mb-5">
      <Text
        className="text-5xl sm:text-[30px] md:text-[38px] text-red-300"
        size="txtCormorantBold48Red300"
      >
        {category.title}
      </Text>
      <Link to={"/category?category="+category._id}>
        <Text className="text-[24px] sm:text-[18px] md:text-[24px] text-red-300 underline" size="txtCormorantBold48Red300">Voir Plus</Text>
      </Link>
      </div>
        {
          productList.length > 0 ?
          <Swiper
          slidesPerView={isTabletOrMobile ? 1.1 : 3.5}
          spaceBetween={isTabletOrMobile   ? 10 : 30}
          key={index}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          style={{height:"410px"}}
          className={"mySwiper-"+index}
        >
          { productList.slice(0, 6).map((product, index) => (
            <SwiperSlide>
              <CardItems product={product}></CardItems>
            </SwiperSlide>
          ))}
          </Swiper>
          : 
          <Width width={"100%"}>
            <Flex flex="center">
              <div className="flex center my-4">
                <div className="text-center">
                  <H24>Pas de produits disponible</H24>
                  <img src={empty} alt={empty} width={64} height={64} style={{margin:"1.5rem auto"}}/>
                </div>
              </div>
            </Flex>
          </Width>
        }
     

      </div>
   
  );
};

export default TopSelling;
