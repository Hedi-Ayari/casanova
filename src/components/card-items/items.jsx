import { Rating } from "components/rating";
import React, { useEffect, useState } from "react";
import './style.css';
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Width from "components/width/width";
import Flex from "components/Flex/flex";
import { Button } from "components";
import { Cart } from "utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";

export const CardItems = ({ product, isPlanner = false }) => {

    const navigate = useNavigate()
    const [cart, setCart] = useRecoilState(Cart);

    const addToCart = (type) => {
        const productWithCount = { ...product, count: 1, type };

        if (!cart) {
            setCart([productWithCount]);
        } else {
            const findFilter = cart.find(x => x._id === productWithCount._id);
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

    };
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })

    return (

        <div className={isPlanner ? ` card w-[100%] h-[410px] md:h-[380px] relative rounded-lg box-shadow my-5` : `w-[100%] h-[360px] md:h-[300px] relative rounded-lg box-shadow my-5`}  >
            {product &&
                <div className="flex flex-col justify-between h-[100%]">
                    <div className="pos-rate bg-red-300" >
                        <div className="flex items-center gap-[5px]">
                            <Rating val={1} count={1} activeColor="white" size={isTabletOrMobile ? 12 : 16}></Rating>
                            <p className="text-rating-b font-montserrat">{product.note}</p>
                        </div>
                    </div>
                    <div className="pos-price bg-red-300">
                        <p className="capitalize cursor-pointer text-title-prices">{product.price} TND</p>
                    </div>
                    <div className="w-[100%] h-[75%] md:h-[70%] rounded-lg">
                    <Swiper navigation={false} modules={[Navigation]} className="mySwiper h-[100%]">
                                {product.image.map(x => {
                                    return (
                                        <SwiperSlide className=" h-[100%]">
                                            <img src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + x} alt="ddd" className="rounded-lg w-[100%] h-[100%] object-cover" />
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>

                    </div>

                    <div className="h-[25%] md:h-[30%] flex-col justify-center flex px-3 gap-[10px] " >
                        <Flex flex="between">
                            <Width width={"15%"}>
                                <img src={process.env.REACT_APP_API_BACK_IMG +"/uploads/"+product.owner.picture} alt="dsds" className="w-full h-full object-cover" />
                            </Width>
                            <Width width={"83%"}>
                            <Flex flex="between" align="start">
                                <Width width={"75%"}>
                                    <div className="flex justify-between">
                                        <p onClick={e => navigate('/productdetailpage/' + product._id)} className="text-title-teims capitalize  cursor-pointer w-[98%]">{product.owner.businessName}</p>

                                    </div>
                                    <div className="flex justify-between ">
                                        <p className="capitalize cursor-pointer text-title-fab" onClick={e => navigate('/presphoto/' + product.owner._id)}> {product.title}</p>
                                    </div>
                                </Width>
                                <Width width={"25%"}  className="flex justify-end">
                                    <p className="text-title-fab">{product.categorie?.title}</p>
                                </Width>
                            </Flex>
                            </Width>
                           
                        </Flex>
                    </div>
                  
                </div>
            }

        </div>
    )
}