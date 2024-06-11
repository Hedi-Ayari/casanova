import React from "react";

import { Button, Img, Line, Text ,Input} from "components";
import "./style.css"
const Footer = (props) => {
  return (
    <>
       <div className="font-cormorant sm:h-[427px] h-[599px] md:h-[659px] md:px-5 relative w-full">
            <div className="sm:h-[373px] h-[599px] md:h-[605px] m-auto w-full">
              <div className="absolute bg-gray-100 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[34px] sm:px-5 w-[100%]">
                <div className="flex flex-col items-start justify-start md:mt-[9%] mt-[103px] w-[91%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-[59%] md:w-full">
                    <Img
                      className="h-8 md:h-auto object-cover md:ml-[14%] md:w-[75%]"
                      src="../images/img_logo23.png"
                      alt="logoTwentyThree"
                    />
                   
                  </div>
                  <div className="flex md:flex-row flex-row font-montserrat md:mt-[10%] md:gap-5 md:items-center md:justify-center items-start justify-start mt-[13px] w-[68%] md:w-full">
                    <Button
                      className="flex h-[25px] items-center justify-center md:mt-0 mt-2.5 rounded-[5px] w-[25px]"
                      color="red_300"
                      size="xs"
                      variant="fill"
                    >
                      <Img src="../images/img_trash.svg" alt="trash" />
                    </Button>
                    <div className="bg-red-300 flex flex-col h-[25px] items-center justify-end md:ml-[0] ml-[17px] md:mt-0 mt-2.5 p-[5px] rounded-[5px] w-[25px]">
                      <div className="flex flex-col h-3.5 items-center justify-start w-3.5">
                        <div className="flex flex-col h-3.5 items-center justify-start w-3.5">
                          <Img
                            className="h-3.5 w-3.5"
                            src="../images/img_facebook_white_a700.svg"
                            alt="facebook"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      className="flex h-[25px] items-center justify-center md:ml-[0] ml-[17px] md:mt-0 mt-2.5 rounded-[5px] w-[25px]"
                      color="red_300"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[13px]"
                        src="../images/img_info.svg"
                        alt="info"
                      />
                    </Button>
                    <div className="bg-red-300 flex flex-col h-[25px] items-center justify-end md:ml-[0] ml-[17px] md:mt-0 mt-2.5 p-1 rounded-[5px] w-[25px]">
                      <div className="flex flex-col h-4 items-center justify-start w-4">
                        <div className="flex flex-col h-4 items-center justify-start w-4">
                          <Img
                            className="h-4 w-4"
                            src="../images/img_user_white_a700_16x16.svg"
                            alt="user"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      className="flex h-[25px] items-center justify-center md:ml-[0] ml-[17px] md:mt-0 mt-2.5 rounded-[5px] w-[25px]"
                      color="red_300"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-3.5"
                        src="../images/img_cibtiktok_white_a700.svg"
                        alt="cibtiktok"
                      />
                    </Button>
                    
                   
                  </div>
                  <Line className="bg-black-900_19 h-px mt-9 w-full" />
                  <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-end justify-between ml-1.5 md:ml-[0] mt-[19px] w-full">
                    <Text
                      className="md:mt-0 md:text-center mt-3.5 text-black-900_99 text-right text-sm"
                      size="txtMontserratRegular14Black90099"
                    >
                      Cazanova © 2024 All Rights Reserved | Released with
                      xsustain.
                    </Text>
                    
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[373px] left-[0] object-cover top-[0] w-[24%]"
                src="../images/img_035_373x366.png"
                alt="ThirtyFive_One"
              />
              <Img
                className="absolute h-[373px] object-cover right-[0] top-[13%] w-[24%]"
                src="../images/img_035_373x366.png"
                alt="ThirtySix"
              />
            </div>
            <div className=" removeLetter absolute flex flex-col md:gap-10 gap-[102px] h-max inset-[0] items-end justify-center m-auto w-4/5">
              <div className="bg-red-300 flex flex-col items-center justify-start p-10 sm:px-5 rounded-[20px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-0.5 w-[96%] md:w-full">
                  <Text
                    className="leading-[45.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-100"
                    size="txtCormorantBold40Gray100"
                  >
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                  </Text>
                  <div className="flex flex-col gap-1.5 items-center justify-start">
                    <Input
                      name="groupSeventyFour"
                      placeholder="Enter your email address"
                      className="leading-[normal] p-0 placeholder:text-black-900 text-base text-center w-full"
                      wrapClassName="border border-black-900_11 border-solid w-full"
                      type="email"
                      shape="round"
                      color="gray_100"
                      size="xl"
                    ></Input>
                    <Button
                      className="border border-black-900_11 border-solid cursor-pointer leading-[normal] min-w-[349px] rounded-[7px] text-base text-center"
                      color="gray_100"
                      size="md"
                      variant="fill"
                    >
                      Subscribe to Newsletter
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-montserrat gap-[83px] items-center justify-end w-[26%] md:w-full">
                <a href="javascript:" className="text-base text-black-900_99">
                  <Text size="txtMontserratRegular16Black90099">
                    Privacy Policy
                  </Text>
                </a>
                <Text
                  className="text-base text-black-900_99"
                  size="txtMontserratRegular16Black90099"
                >
                  Delivery Details
                </Text>
              </div>
            </div>
          </div>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
