import React, { useEffect, useState,useRef } from "react";
import { Button, Img, Line,Text } from "components";
import CategorieItems from "components/CategorieItems";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";

import "./style.css"
import { useMediaQuery } from "react-responsive";
const Header = () => {
    const navigate = useNavigate(); 
   const isMobile = useMediaQuery({
    query: '(min-width: 1224px)'
  })
return (
    <>
     {isMobile ? <DesktopHeader /> : <MobileHeader /> }
    </>
  );
};

export default Header;

const DesktopHeader = () =>{
  const navigate = useNavigate()
  return(
    <div className="sm:h-[1215px] h-[1428px] md:h-[1837px] max-w-[100%]  mt-[23px] mx-auto md:px-5 relative w-full">
        <div className="absolute sm:h-[1192px] h-[1428px] md:h-[1814px] inset-[0] justify-center m-auto w-full">
          <div className="sm:h-[1192px] h-[1428px] md:h-[1814px] m-auto w-full">
            <div className="absolute sm:h-[1192px] md:h-[74%] h-[1317px] md:h-[1814px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="sm:h-[1192px] h-[1317px] md:h-[70%] m-auto w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-24 justify-start w-full">
                    <div className="bg-gray-100 flex flex-col items-center justify-start ml-4 removeMargin md:ml-[0] p-[18px] w-[100%] md:w-full">
                      <div className="flex flex-col items-start justify-start mb-[66px] md:mb-[2%] w-[90%] md:w-full">
                        <div className="flex md:flex-col flex-row font-cormorant md:gap-10 items-start justify-between w-full">
                          <Text
                            className=" responsive leading-[64.00px] pt-[2%] md:mt-0 mt-[52px] md:text-5xl text-[64px] text-red-300"
                            size="txtCormorantBold64"
                          >
                            WE BUILD YOUR DREAM <br></br> AROUND YOU
                          </Text>
                          <div className="bg-red-300 hiddenPhone h-[104px] mb-[140px] rounded-[50%] w-[104px]"></div>
                        </div>
                        <div className="flex md:flex-col flex-row font-montserrat md:gap-10 gap-[115px] items-start justify-start mt-[47px] w-[57%] md:w-full">
                          <Text
                            className="leading-[22.00px] md:items-center md:justify-center mb:text-center mb:text-center mb-[39px] text-base text-black-900_99 w-[78%] sm:w-full"
                            size="txtMontserratRegular16Black90099"
                          >
                            Browse through our diverse range of meticulously
                            crafted garments, designed to bring out your
                            individuality and cater to your sense of style.
                          </Text>
                          <div className="bg-red-300 h-[47px] md:mt-0 mt-[47px] rounded-[23px] w-[47px]"></div>
                        </div>
                        <Button
                          className="cursor-pointer fullWidthPhone font-montserrat leading-[normal] min-w-[203px] mt-2 rounded-[5px] text-center text-sm uppercase"
                          color="red_300"
                          size="md"
                          variant="fill"
                          onClick={()=>navigate("/category")}
                        >
                          Shop now{" "}
                        </Button>
                        <div className="flex flex-col font-montserrat items-center justify-start mt-[47px] w-[48%] md:w-full">
                          <div className="flex md:flex-col md:items-center md:justify-center flex-row md:gap-5 items-start justify-start w-full">
                            <div className="flex flex-col md:items-center md:justify-center items-start justify-start md:mt-0 mt-[3px]">
                              <Text
                                className="sm:text-4xl md:text-[38px] text-[40px] text-red-300"
                                size="txtMontserratMedium40"
                              >
                                200+
                              </Text>
                              <Text
                                className="mt-0.5 text-base text-black-900_99"
                                size="txtMontserratRegular16Black90099"
                              >
                                Wedding Done
                              </Text>
                            </div>
                            <Line className="bg-black-900_19 h-[74px] md:h-px md:ml-[0] ml-[50px] md:w-full w-px" />
                            <div className="flex flex-col items-start justify-start md:items-center md:justify-center md:ml-[0] ml-[31px] md:mt-0 mt-1.5">
                              <Text
                                className="sm:text-4xl md:text-[38px] text-[40px] text-red-300"
                                size="txtMontserratMedium40"
                              >
                                2,000+
                              </Text>
                              <Text
                                className="text-base text-black-900_99"
                                size="txtMontserratRegular16Black90099"
                              >
                                High-Quality Products
                              </Text>
                            </div>
                            <Line className="bg-black-900_19 h-[74px] md:h-px ml-6 md:ml-[0] md:w-full w-px" />
                            <div className="flex flex-col items-start md:items-center md:justify-center justify-start md:ml-[0] ml-[31px] md:mt-0 mt-1.5">
                              <Text
                                className="sm:text-4xl md:text-[38px] text-[40px] text-red-300"
                                size="txtMontserratMedium40"
                              >
                                30,000+
                              </Text>
                              <Text
                                className="text-base text-black-900_99"
                                size="txtMontserratRegular16Black90099"
                              >
                                Happy Customers
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[434px] md:hidden  h-[558px] relative w-[94%] md:w-full">
                      <Img
                        className="absolute h-[395px] left-[0] object-cover top-[0] w-[27%]"
                        src="images/img_035_395x366.png"
                        alt="ThirtyFive"
                      />
                      <div className=" responsiveCat absolute bg-light_green-100 bottom-[0] flex flex-col items-start justify-start sm:px-5 px-[35px] right-[0] rounded-[14px] w-[92%]">
                        <div className="flex flex-row gap-[29px] items-start justify-start w-1/5 md:w-full">
                          <div className="flex flex-col items-start justify-start mt-[140px] w-[88%]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[0.56px]"
                              size="txtCormorantBold28Black900"
                            >
                              CATÉGORIE
                            </Text>
                            <Text
                              className="mt-3.5 text-base text-black-900 tracking-[0.32px]"
                              size="txtMontserratLight16"
                            >
                              Check all services !
                            </Text>
                            <Button
                              className="cursor-pointer font-montserrat leading-[normal] min-w-[203px] mt-5 rounded-[5px] text-center text-sm uppercase"
                              color="red_300"
                              size="sm"
                              variant="fill"
                              onClick={(e)=>navigate("/category")}
                            >
                              see all
                            </Button>
                          </div>
                          <Line className="bg-black-900_23 h-[434px] w-px" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute hiddenPhone h-[563px] object-cover right-[11%] top-[14%] w-[38%]"
                  src="images/img_041_563x551.png"
                  alt="FortyOne"
                />
              </div>
              <Img
                className=" responsiveCat absolute h-[303px] right-[6%] top-[19%]"
                src="images/img_vector_red_300_303x163.svg"
                alt="vector_Two"
              />
            </div>
           
            <Text
              className="absolute bottom-[0] left-[8%] text-5xl sm:text-[38px] md:text-[44px] text-center text-red-300"
              size="txtCormorantBold48Red300"
            >
              TOP SELLING
            </Text>
            <Img
              className="absolute md:hidden bottom-[4%] h-[166px] right-[3%]"
              src="images/img_vector_red_300_166x157.svg"
              alt="vector_Three"
            />
          </div>
          <div className="absolute hiddenPhone responsiveAd bottom-[28%] flex flex-col gap-3.5 inset-x-[0] justify-start mx-auto w-[100%]">
            <div  className="bg-red-300 ">
            <Marquee>

             <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[21px] sm:px-5 w-full" >

             <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-4 object-cover w-[15%] sm:w-full"
                src="images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              />
               <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-4 object-cover w-[15%] sm:w-full"
                src=" images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              />
              
             <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-4 object-cover w-[15%] sm:w-full"
                src="images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              />
               <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-4 object-cover w-[15%] sm:w-full"
                src=" images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              /><Img
              className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-4 object-cover w-[15%] sm:w-full"
              src="images/img_gourmandiselogo1441280585.png"
              alt="gourmandiselogo_Four"
            />
             <Img
              className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-4 object-cover w-[15%] sm:w-full"
              src=" images/img_gourmandiselogo1441280585.png"
              alt="gourmandiselogo_Four"
            />
            
           <Img
              className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-4 object-cover w-[15%] sm:w-full"
              src="images/img_gourmandiselogo1441280585.png"
              alt="gourmandiselogo_Four"
            />
             <Img
              className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-4 object-cover w-[15%] sm:w-full"
              src=" images/img_gourmandiselogo1441280585.png"
              alt="gourmandiselogo_Four"
            />
               <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-4 object-cover w-[15%] sm:w-full"
                src=" images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              />
             </div>

             </Marquee>

              
            </div>
            <Img
              className="h-56 md:ml-[0]  w-56 flowerStyle"
              src="images/img_vector_red_300.svg"
              alt="vector_Four"
            />
          </div>
        </div>
       
        <CategorieItems className=" responsiveCat absolute bottom-[2%] flex flex-row items-center justify-start py-[123px] right-[10%] w-[62%]" />


      </div>
  )
}

const MobileHeader = () =>{
  const navigate = useNavigate()
  return(
    <div className="max-w-[100%]  mt-[23px] mx-auto relative w-full">
        <div className=" inset-[0] justify-center m-auto w-full">
          <div className=" m-auto w-full">
            <div className=" inset-x-[0] mx-auto top-[0] w-full">
              <div className="md:h-[70%] m-auto w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col md:gap-5 gap-8 items-center justify-center w-full bg-gray-100">
                    <div className=" flex flex-col items-center justify-start ml-4 removeMargin md:ml-[0] mx-auto w-[95%] ">
                      <div className="flex flex-col items-start justify-start mb-[66px] md:mb-[2%] w-[90%] md:w-full">
                        <div className="flex md:flex-col flex-row font-cormorant md:gap-10 items-start justify-between w-full">
                          <Text
                            className=" responsive leading-[64.00px] py-5 md:mt-0 mt-[60px] md:text-5xl text-[64px] text-red-300"
                            size="txtCormorantBold64"
                          >
                            WE BUILD YOUR DREAM <br></br> AROUND YOU
                          </Text>
                          <div className="bg-red-300 hiddenPhone h-[104px] mb-[140px] rounded-[50%] w-[104px]"></div>
                        </div>
                        <div className="flex md:flex-col flex-row font-montserrat md:gap-10 gap-[115px] items-start justify-start mt-[47px] w-[57%] md:w-full">
                          <Text
                            className="leading-[22.00px] md:items-center md:justify-center mb:text-center mb:text-center text-base text-black-900_99 w-[78%] sm:w-full"
                            size="txtMontserratRegular16Black90099"
                          >
                            Browse through our diverse range of meticulously
                            crafted garments, designed to bring out your
                            individuality and cater to your sense of style.
                          </Text>
                          <div className="bg-red-300 h-[47px] md:mt-0 mt-[47px] rounded-[23px] w-[47px]"></div>
                        </div>
                        <Button
                          className="cursor-pointer fullWidthPhone font-montserrat leading-[normal] min-w-[203px] mt-5 rounded-[5px] text-center text-sm uppercase"
                          color="red_300"
                          size="md"
                          variant="fill"
                          onClick={()=>navigate("/category")}
                        >
                          Shop now{" "}
                        </Button>
                        <div className="flex flex-col font-montserrat items-center justify-start mt-[47px] w-[48%] md:w-full">
                          <div className="flex md:flex-col md:items-center md:justify-center flex-row md:gap-5 items-start justify-start w-full">
                            <div className="flex flex-col md:items-center md:justify-center items-start justify-start md:mt-0 mt-[3px]">
                              <Text
                                className="sm:text-4xl md:text-[38px] text-[40px] text-red-300"
                                size="txtMontserratMedium40"
                              >
                                200+
                              </Text>
                              <Text
                                className="mt-0.5 text-base text-black-900_99"
                                size="txtMontserratRegular16Black90099"
                              >
                                Wedding Done
                              </Text>
                            </div>
                            <Line className="bg-black-900_19 h-[74px] md:h-px md:ml-[0] ml-[50px] md:w-full w-px" />
                            <div className="flex flex-col items-start justify-start md:items-center md:justify-center md:ml-[0] ml-[31px] md:mt-0 mt-1.5">
                              <Text
                                className="sm:text-4xl md:text-[38px] text-[40px] text-red-300"
                                size="txtMontserratMedium40"
                              >
                                2,000+
                              </Text>
                              <Text
                                className="text-base text-black-900_99"
                                size="txtMontserratRegular16Black90099"
                              >
                                High-Quality Products
                              </Text>
                            </div>
                            <Line className="bg-black-900_19 h-[74px] md:h-px ml-6 md:ml-[0] md:w-full w-px" />
                            <div className="flex flex-col items-start md:items-center md:justify-center justify-start md:ml-[0] ml-[31px] md:mt-0 mt-1.5">
                              <Text
                                className="sm:text-4xl md:text-[38px] text-[40px] text-red-300"
                                size="txtMontserratMedium40"
                              >
                                30,000+
                              </Text>
                              <Text
                                className="text-base text-black-900_99"
                                size="txtMontserratRegular16Black90099"
                              >
                                Happy Customers
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                          className="h-[720px] object-cover w-[100%]"
                          src="images/img_beautifulcoupl_615x485.png"
                          alt="beautifulcoupl"
                        />
                 
                  </div>
                </div>
                <Img
                  className="absolute hiddenPhone h-[563px] object-cover right-[11%] top-[14%] w-[38%]"
                  src="images/img_041_563x551.png"
                  alt="FortyOne"
                />
              </div>
              <Img
                className=" responsiveCat absolute h-[303px] right-[6%] top-[19%]"
                src="images/img_vector_red_300_303x163.svg"
                alt="vector_Two"
              />
            </div>
          
          
            <Img
              className="absolute md:hidden bottom-[4%] h-[166px] right-[3%]"
              src="images/img_vector_red_300_166x157.svg"
              alt="vector_Three"
            />
          </div>
          <div className="flex flex-col gap-3.5 inset-x-[0] justify-start mx-auto w-[100%]">
            <div  className="bg-red-300 mt-5">
            <Marquee>

             <div className="flex flex-row sm:gap-5 items-center justify-start p-[21px] sm:px-5 w-full" >

             <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-5 object-cover w-[250px]"
                src="images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              />
               <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-5 object-cover w-[250px]"
                src=" images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              />
              
             <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-5 object-cover w-[250px]"
                src="images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              />
               <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-5 object-cover w-[250px]"
                src=" images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              /><Img
              className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-5 object-cover w-[250px]"
              src="images/img_gourmandiselogo1441280585.png"
              alt="gourmandiselogo_Four"
            />
             <Img
              className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-5 object-cover w-[250px]"
              src=" images/img_gourmandiselogo1441280585.png"
              alt="gourmandiselogo_Four"
            />
            
           <Img
              className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-5 object-cover w-[250px]"
              src="images/img_gourmandiselogo1441280585.png"
              alt="gourmandiselogo_Four"
            />
             <Img
              className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-5 object-cover w-[250px]"
              src=" images/img_gourmandiselogo1441280585.png"
              alt="gourmandiselogo_Four"
            />
               <Img
                className="slide-left sm:flex-1 h-12 md:h-auto sm:ml-[0] ml-[30px] sm:mt-0 my-5 object-cover w-[250px]"
                src=" images/img_gourmandiselogo1441280585.png"
                alt="gourmandiselogo_Four"
              />
             </div>

             </Marquee>

              
            </div>
          
          </div>
        </div>
        <div className="w-[100%]">
        <Text
              className="p-5 text-5xl mt-6 sm:text-[38px] md:text-[44px] text-red-300 text-center"
              size="txtCormorantBold48Red300"
            >
              TOP SELLING
            </Text>
        <CategorieItems className=" responsiveCat absolute bottom-[2%] flex flex-row items-center justify-start py-[123px] right-[10%] w-[62%]" />
        </div>


      </div>
  )
}