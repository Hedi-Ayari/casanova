import React, { useEffect, useState } from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import ProductDetails from "./productDetails";
import { GetByIdBackByUser, GetCategory, getFeedbackByProd } from "service/api";
import { useRecoilState } from "recoil";
import { User } from "utils/recoil/atoms";
import { useGetById } from "utils/functions";
import { useParams } from "react-router-dom";
import { CardFeedback } from "components/items-feedback/feedback";
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { SwiperSlide,Swiper } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { P21 } from "components/TXT/TXT";
import Width from "components/width/width";
import Flex from "components/Flex/flex";
import { CardItems } from "components/card-items/items";

const ProductDetailPagePage = () => {
  
  const [data,setData] = useState([])
  const [user] = useRecoilState(User);
  const [product, setProduct] = useState();
  const [cateProd, setCateProd] = useState();
  const getById = useGetById();

  const {id} = useParams()
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getById("Product", id);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(()=>{

    const fetchCate = async () => {
      if(product){
        try {
          const response = await GetCategory("Product", product.categorie?._id);
          setCateProd(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchCate()
  },[product])

  useEffect(async ()=>{
    const fetchOrders = async () => {
      try {
        console.log(product);
        const {data} = await getFeedbackByProd(product._id );
        console.log(data.feedback);
        setData(data.feedback)
      } catch (error) {
        console.error("Error prefetching product data:", error);
      }
    };
    
    if(product)
      fetchOrders();

  },[product])


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })


  return (
    <>
                <NavBar></NavBar>
      <div className="bg-white-A700 flex flex-col font-cormorant items-start justify-end  pt-[37px] w-full">
        <div className="flex flex-col md:gap-10 gap-[124px] items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[100%] pr-[6%] pl-[6%]  md:p-0 w-[95%] mx-auto w-full">
            <Line className="bg-red-300_3d h-px mt-[33px] w-full" />
            <ProductDetails></ProductDetails>
            <div className="flex flex-row font-cormorant gap-[68px] items-start justify-start mt-[62px] w-[27%] md:w-full">
             
              <Text
                className="mt-[3px] text-black-900 text-center text-xl"
                size="txtCormorantBold20"
              >
                Rating & Avis
              </Text>
            </div>
            <div className="flex flex-col mt-4 relative w-full">
              <Line className="bg-red-300_1c h-px mx-auto w-full" />
              <Line className="bg-red-300 h-0.5 mb-auto ml-[0px] mt-[-1px] w-[32%] z-[1]" />
            </div>
            <div className="flex flex-row md:gap-5 items-center justify-start mt-[22px] md:mt-[15px] md:mb-[15px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtCormorantBold24"
              >
                Tous Avis
              </Text>
              <Text
                className="ml-2 md:ml-[0] text-base text-red-300_93"
                size="txtCalistogaRegular16"
              >
                ({data.length})
              </Text>
             
             
            </div>
       
            <List
        className=" w-full"
      > 
       <Swiper
        slidesPerView={isTabletOrMobile ? 1.5 : 3}
        spaceBetween={isTabletOrMobile   ? 15 : 30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={"mySwiper w-[100%] h-[300px]" }
      
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
          </div>
          <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
            <div className="bg-gray-100 flex flex-col gap-[31px] items-start justify-start p-[42px] md:px-10 sm:px-5 w-full">
              <Text
                className="md:ml-[0] ml-[57px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center md:text-left"
                size="txtCormorantBold48"
              >
                Vous pouvez aussi aimer
              </Text>

              {cateProd && cateProd.length > 0 ?
              <Flex flex="center"  className="w-full">

                <Width width={isTabletOrMobile ? "100%" : "85%"}>
                  <Flex flex={isTabletOrMobile  ? "center" : "between"} className="w-full">
                    { 
                      cateProd.slice().map(prod=>{
                        return(
                          <Width width={isTabletOrMobile ? "100%" : "32%" } >

                          <CardItems product={prod} />
                          </Width>
                        )
                      })
                    }
                  </Flex>
                </Width>
              </Flex>
              : 
              <Width width={"100%"}>
                <Flex flex="center">
                  <P21>Pas de produit dans le meme categorie</P21>

                </Flex>
              </Width>
              }
            </div>
          <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPagePage;
