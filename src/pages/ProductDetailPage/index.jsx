import React from "react";

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

const latestOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductDetailPagePage = () => {
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
                Rating & avis
              </Text>
            </div>
            <div className="flex flex-col mt-4 relative w-full">
              <Line className="bg-red-300_1c h-px mx-auto w-full" />
              <Line className="bg-red-300 h-0.5 mb-auto ml-[0px] mt-[-1px] w-[12%] z-[1]" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[22px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtCormorantBold24"
              >
                All avis
              </Text>
              <Text
                className="ml-2 md:ml-[0] text-base text-red-300_93"
                size="txtCalistogaRegular16"
              >
                (451)
              </Text>
             
             
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[68px] w-full"
              orientation="horizontal"
            >
              <div className="border border-black-900_49 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-[95%] md:w-full">
                  <div className="flex flex-row font-cormorant gap-[7px] items-end justify-start w-[47%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtCormorantBold20"
                    >
                      Sarah M.
                    </Text>
                    <RatingBar
                      className="flex justify-between mb-[3px] mt-2 w-[78px]"
                      value={5}
                      starCount={5}
                      activeColor="#a57761"
                      size={13}
                    ></RatingBar>
                  </div>
                  <Text
                    className="leading-[22.00px] text-base text-black-900_99 w-full"
                    size="txtMontserratRegular16Black90099"
                  >
                    <>
                      &quot;I&#39;m blown away by the quality and style of the
                      clothes I received from Shop.co. From casual wear to
                      elegant dresses, every piece I&#39;ve bought has exceeded
                      my expectations.”
                    </>
                  </Text>
                </div>
              </div>
              <div className="border border-black-900_49 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-[95%] md:w-full">
                  <div className="flex flex-row font-cormorant gap-[7px] items-end justify-start w-[47%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtCormorantBold20"
                    >
                      Sarah M.
                    </Text>
                    <RatingBar
                      className="flex justify-between mb-[3px] mt-2 w-[78px]"
                      value={5}
                      starCount={5}
                      activeColor="#a57761"
                      size={13}
                    ></RatingBar>
                  </div>
                  <Text
                    className="leading-[22.00px] text-base text-black-900_99 w-full"
                    size="txtMontserratRegular16Black90099"
                  >
                    <>
                      &quot;I&#39;m blown away by the quality and style of the
                      clothes I received from Shop.co. From casual wear to
                      elegant dresses, every piece I&#39;ve bought has exceeded
                      my expectations.”
                    </>
                  </Text>
                </div>
              </div>
              <div className="border border-black-900_49 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-[95%] md:w-full">
                  <div className="flex flex-row font-cormorant gap-[7px] items-end justify-start w-[47%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtCormorantBold20"
                    >
                      Sarah M.
                    </Text>
                    <RatingBar
                      className="flex justify-between mb-[3px] mt-2 w-[78px]"
                      value={5}
                      starCount={5}
                      activeColor="#a57761"
                      size={13}
                    ></RatingBar>
                  </div>
                  <Text
                    className="leading-[22.00px] text-base text-black-900_99 w-full"
                    size="txtMontserratRegular16Black90099"
                  >
                    <>
                      &quot;I&#39;m blown away by the quality and style of the
                      clothes I received from Shop.co. From casual wear to
                      elegant dresses, every piece I&#39;ve bought has exceeded
                      my expectations.”
                    </>
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
            <div className="bg-gray-100 flex flex-col gap-[31px] items-start justify-start p-[42px] md:px-10 sm:px-5 w-full">
              <Text
                className="md:ml-[0] ml-[57px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                size="txtCormorantBold48"
              >
                YOU MIGHT ALSO LIKE
              </Text>
              <div className="font-montserrat md:h-[1060px] h-[336px] sm:h-[626px] max-w-[1243px] mb-[13px] ml-[3.5%] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div className="h-[336px] relative w-[24%] md:w-full">
                      <Img
                        className="h-[336px] m-auto object-cover rounded-[14px] w-full"
                        src="../images/img_image7.png"
                        alt="imageNineteen"
                      />
                      <Button
                        className="absolute cursor-pointer font-medium leading-[normal] right-[6%] rounded-[13px] text-center text-xs top-[7%] w-[58px]"
                        shape="round"
                        color="red_300"
                        size="xs"
                        variant="fill"
                      >
                        -20%
                      </Button>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                      orientation="horizontal"
                    >
                      
                    </List>
                  </div>
                </div>
                <List
                  className="absolute bottom-[0] sm:flex-col flex-row gap-[47px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 left-[0] w-[94%]"
                  orientation="horizontal"
                >
                  <div className="bg-gray-100_e5 hover:cursor-pointer flex flex-col items-start justify-end sm:ml-[0] hover:mx-0 p-[17px] rounded-bl-[13px] rounded-br-[11px] rounded-tr-[57px] hover:w-full w-full">
                    <div className="flex flex-col gap-[11px] items-start justify-start ml-1.5 md:ml-[0] w-[76%] md:w-full">
                      <div className="flex flex-col font-cormorant items-center justify-start">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtCormorantBold18"
                        >
                          GATEAU DE MARIAGE
                        </Text>
                      </div>
                      <div className="flex flex-col font-montserrat items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Text
                            className="text-black-900 text-xs tracking-[0.60px]"
                            size="txtMontserratRegular12"
                          >
                            GOURMANDISE
                          </Text>
                          <RatingBar
                            className="flex justify-between my-0.5 rounded-[1px] w-14"
                            value={5}
                            starCount={5}
                            color="#c3937c"
                            activeColor="#c3937c"
                            size={12}
                          ></RatingBar>
                          <Text
                            className="text-black-900 text-xs"
                            size="txtMontserratRegular12"
                          >
                            
                           
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-black-900 text-lg"
                        size="txtCalistogaRegular18"
                      >
                        $120
                      </Text>
                    </div>
                  </div>
                  
                
                 
                </List>
              </div>
            </div>
          <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPagePage;
