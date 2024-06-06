import React, { useEffect, useState } from "react";

import { List, RatingBar, Text } from "components";
import { useGet } from "utils/functions";
import { GetByIdBackByUser } from "service/api";
import { CardFeedback } from "components/items-feedback/feedback";
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { SwiperSlide,Swiper } from "swiper/react";
import { useMediaQuery } from "react-responsive";
const ClientsFeedBacks = ({ user }) => {

  const Get = useGet();

  const [data,setData] = useState([])
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })

  useEffect(async ()=>{
    const fetchOrders = async () => {
      try {
        const {data} = await GetByIdBackByUser(user._id );
        console.log(data.feedback);
        setData(data.feedback)
      } catch (error) {
        console.error("Error prefetching product data:", error);
      }
    };

    fetchOrders();
  },[])

  return (
    <>
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-left text-red-300 mt-[65px] mb-[40px] w-[100%]"
        size="txtCormorantBold28"
      >
        CLIENT FEED BACK
      </Text>
      <List
        className=" w-full"
      > 
       <Swiper
        slidesPerView={isTabletOrMobile ? 1.1 : 3}
        spaceBetween={isTabletOrMobile   ? 15 : 30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={"mySwiper- w-[100%] h-[280px]"}
      >

      {data && data.length > 0 && data.map(x=>{
        return(
        
            <SwiperSlide>
              <CardFeedback feedback={x} />
            </SwiperSlide>
          
        )
      })}
      </Swiper>
      </List>
    </>
  );
};

export default ClientsFeedBacks;
