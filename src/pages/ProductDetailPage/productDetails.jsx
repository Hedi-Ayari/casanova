import React, { useEffect, useState } from "react";
import { Button, Img, Line, Text } from "components";
import { useGetById } from "utils/functions";
import { useParams, useNavigate } from "react-router-dom";
import { Cart, drawerState } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { Rating } from "components/rating";
import CartToggle from "components/drawer-card";
import { useMediaQuery } from "react-responsive";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Flex from "components/Flex/flex";
import Width from "components/width/width";
import { Navigation } from "swiper/modules";

import { SwiperSlide,Swiper } from "swiper/react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(Cart);
  const [openDrawer, setopenDrawer] = useState(false);

  const [count, setCount] = useState(1);
  const [product, setProduct] = useState();
  const getById = useGetById();
  function getData(data) {
    setopenDrawer(data);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getById("Product", id);
        console.log(response);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (cart.length > 0 && product) {
      let arr = cart.find(x => x._id == product._id)
      if (arr)
        setCount(arr.count)
    }
  }, [cart, product])
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })


  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [img, setImg] = useState("");

  useEffect(() => {

    if (product)
      setImg(product.image[0])

  }, [product])
  const addToCart = (type) => {
    const productWithCount = { ...product, count, type };
    setProduct(productWithCount)
    console.log(productWithCount);

    if (!cart) {
      setCart([productWithCount]);
    } else {
      const findFilter = cart.find(x => x._id === productWithCount._id);
      console.log("findFilter", findFilter);

      if (findFilter) {
        const updatedCart = cart.map(x => {
          if (x._id === productWithCount._id) {
            return { ...x, count: x.count + 1 };
          }
          return x;
        });
        setCart(updatedCart);
      } else {
        setCart([...cart, productWithCount]);
      }
    }
    setDrawer(true);
  };

  if (product) {
    return (
      <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-start justify-start mt-[46px] w-full">
        <CartToggle onchange={getData} opens={openDrawer} />





        <div className="md:h-[300px] h-[530px] ml-3.5 md:ml-[0] relative w-[48%] md:w-full">
          <div className="h-[100%] inset-[0] justify-center m-auto w-full">
              {isTabletOrMobile ?
              <Swiper navigation={true} modules={[Navigation]} className="mySwipe h-[100%]">
              {product.image.map(x => {
                  return (
                      <SwiperSlide className=" h-[100%]">
                          <img src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + x} alt="ddd" className="rounded-lg w-[100%] h-[100%] object-cover" />
                      </SwiperSlide>
                  )
              })}

          </Swiper>
              : 
              <Flex  className="w-[100%] h-[100%] md:gap-[8px]" flex="between">
              <Width width={"25%"} className="h-[100%]">
                <Flex flex="start" className="flex-col h-full" gap="1.5%">

                  {product.image.map(x => {
                    return (
                      <div className="h-[22%] w-[100%] cursor-pointer rounded-md" onClick={e => setImg(x)}>
                        <img src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + x} alt=""  className="w-[100%] h-[100%] rounded-md"/>
                      </div>
                    )
                  })}
                </Flex>
                </Width>
                <Width width={"73%"} className="h-[100%] rounded-md">
                  <div className="h-full w-[100%]">
                    <img src={process.env.REACT_APP_API_BACK_IMG + "/uploads/"+img} alt="" className="w-[100%] h-[100%] object-cover rounded-md"/>
                  </div>
                </Width>
              
            </Flex>
              }

           

          </div>
        </div>
        <div className="flex md:flex-1 flex-col items-start justify-center ml-10 md:ml-[0] w-[51%] md:w-full ">

          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900  md:text-[18px]"
            size="txtCormorantBold40Black900"
          >
            {product.title}
          </Text>

          <div onClick={(e) => navigate(`/presphoto/${product.owner._id}`)} className="flex flex-col font-montserrat items-start justify-start mt-[9px] w-[70%] md:w-full gap-[10px]">
            <div className="flex gap-[5px] items-center w-[100%]">

              <Img
                className="h-[64px]  md:h-[56px] md:ml-[0] mr-[3%] rounded md:w-[56px] w-[64px] object-cover"
                src={
                  product.owner?.picture
                    ? process.env.REACT_APP_API_BACK_IMG +
                    "/uploads/" +
                    product.owner?.picture
                    : "../images/defaultProfilePic.jpg"
                }
                alt="femaleSixteen"
              />
              <div>
                <Text
                  className="sm:text-[17px] pt-[2%] md:text-[19px] text-[20px] text-black-900 tracking-[1.05px] underline cursor-pointer uppercase"
                  size="txtMontserratRegular21"
                >
                  {product.owner.businessName}
                </Text>
                <div className="flex gap-[2px]  items-center w-[100%]">
                  <Rating val={product.note}></Rating>
                  <Text
                    className="text-base text-black-900"
                    size="txtMontserratRegular16"
                  >
                    <span className="text-black-900 font-calistoga text-left font-normal">
                      {product.note}/
                    </span>
                    <span className="text-red-300_d3 font-calistoga text-left font-normal">
                      5
                    </span>
                  </Text>
                </div>
              </div>
            </div>


          </div>
          <div className="flex flex-row font-calistoga gap-2.5 items-center justify-start mt-4 w-[19%] md:w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtCalistogaRegular20"
            >
              {product.price} TND
            </Text>
          </div>
          <Text
            className="leading-[22.00px] mt-[30px] text-base text-black-900_99 w-full"
            size="txtMontserratRegular16Black90099"
          >
            {product.description}
          </Text>
          <Line className="bg-red-300_23 h-px mt-[22px] w-full" />
          <div className="flex sm:flex-col flex-row font-montserrat gap-5 items-center  mt-[22px] w-full">
            <div className="bg-gray-100 flex sm:flex-1 flex-row items-center justify-between p-[15px] rounded-[5px] w-[29%] sm:w-full">
              <Img
                className="h-[18px] ml-[7px] w-[18px] cursor-pointer"
                src="../images/img_frame_black_900.svg"
                alt="frame"
                onClick={decreaseCount}
              />
              <Text
                className="text-base text-black-900"
                size="txtMontserratMedium16"
              >
                {count || 1}
              </Text>
              <Img
                className="h-4 mr-2 w-4 cursor-pointer"
                src="../images/img_frame_black_900_12x12.svg"
                alt="frame_One"
                onClick={increaseCount}
              />
            </div>
            <div className="md:h-[50px] h-[52px] md:px-10 sm:px-5 px-[54px] py-4 relative rounded-[26px] w-[100%] sm:w-full">

              <div className="absolute bg-gray-100 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[5px] w-full">
                <Button
                  onClick={(e) => addToCart("normal")}
                  className="m-auto text-base  w-auto"
                  size="txtMontserratMedium16WhiteA700"
                  color="black"
                  
                >
                                  Add to Cart

                </Button>
              </div>
            </div>
          </div>
          <div className="bg-red-300 flex flex-col h-[52px] mt-4  inset-[0] items-center justify-center m-auto p-[15px] rounded-[5px] w-[100%]">

            <Button
                onClick={(e) => addToCart("gift")}
                className="m-auto text-base  w-auto"
                size="txtMontserratMedium16WhiteA700"
                color="white"
                
            >
              Add as a gift
            </Button>
          </div>

         
        </div>

      </div>
    );
  } else {
    return <></>;
  }
};

export default ProductDetails;
