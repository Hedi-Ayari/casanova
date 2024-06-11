import React from "react";

import { Button, Img, Input, Line, Radio, Text } from "components";
import { useNavigate, useLocation } from 'react-router-dom';

const PreslandingpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-cormorant h-[3565px] mx-auto relative w-full">
        <div className="md:h-[3513px] h-[3565px] m-auto md:px-5 w-full">
          <div className="md:h-[3513px] h-[3565px] m-auto w-full">
            <div className="md:h-[3513px] h-[3565px] m-auto w-full">
              <div className="md:h-[3513px] h-[3565px] m-auto w-full">
                <div className="md:h-[3513px] h-[3565px] m-auto w-full">
                  <div className="md:h-[3513px] h-[3565px] m-auto w-full">
                    <div className="md:h-[3513px] h-[3565px] m-auto w-full">
                      <div className="md:h-[3513px] h-[3565px] m-auto w-full">
                        <div className="md:h-[3513px] h-[3565px] m-auto w-full">
                          <div className="absolute h-[3513px] inset-[0] justify-center m-auto w-full">
                            <Img
                              className="h-[3513px] m-auto object-cover w-full"
                              src="images/img_asset12048x2.png"
                              alt="asset12048xTwo"
                            />
                            <div className="absolute bottom-[20%] flex flex-col md:gap-10 gap-[1138px] inset-x-[0] justify-start mx-auto w-[87%]">
                              <Img
                                className="h-[290px] md:ml-[0] ml-[524px]"
                                src="images/img_maskgroup_red_300.svg"
                                alt="maskgroup"
                              />
                              <div className="flex flex-col items-start justify-start mr-[458px] w-[64%] md:w-full">
                                <div className="flex flex-row font-montserrat sm:gap-10 items-center justify-between w-full">
                                  <Text
                                    className="text-base text-gray-600 tracking-[5.00px] uppercase"
                                    size="txtMontserratRegular16Gray600"
                                  >
                                    Life is an event
                                  </Text>
                                  <Img
                                    className="h-[103px] w-[102px]"
                                    src="images/img_layer1.svg"
                                    alt="layerOne"
                                  />
                                </div>
                                <Text
                                  className="sm:text-[32px] md:text-[38px] text-[42px] text-red-300 uppercase w-[63%] sm:w-full"
                                  size="txtCormorantRegular42Red300"
                                >
                                  ARe you ready to join us{" "}
                                </Text>
                                <Text
                                  className="leading-[25.00px] mt-[38px] text-base text-gray-600 w-[54%] sm:w-full"
                                  size="txtMontserratRegular16Gray600"
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Cras aliquam mi id augue
                                  ultrices, in tempus elit tristique. Aliquam
                                  ultrices sem non.
                                </Text>
                                <div className="flex flex-row font-cormorant gap-2 items-center justify-start mt-[31px] w-[43%] md:w-full">
                                  <div className="h-14 relative w-[17%]">
                                    <div className="bg-red-300 h-[9px] ml-auto mr-[21px] my-auto rounded w-[9px]"></div>
                                    <Img
                                      className="absolute h-14 inset-[0] justify-center m-auto"
                                      src="images/img_contrast_red_300.svg"
                                      alt="contrast"
                                    />
                                  </div>
                                  <Text
                                    className="text-2xl md:text-[22px] text-red-300 sm:text-xl tracking-[4.80px]"
                                    size="txtCormorantMedium24"
                                  >
                                    CONTACT US NOW
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-lime-50 bottom-[35%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[73px] md:px-10 sm:px-5 w-full">
                            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[52px] w-[96%] md:w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[405px] items-center justify-start w-[41%] md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_maskgroup_red_300.svg')",
                                }}
                              >
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Img
                                    className="h-[402px] md:h-auto object-cover rounded-bl-[169px] w-full"
                                    src="images/img_romantictable.png"
                                    alt="romantictable"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start md:mt-0 mt-1 w-[46%] md:w-full">
                                <Text
                                  className="text-base text-gray-600 tracking-[5.00px] uppercase"
                                  size="txtMontserratRegular16Gray600"
                                >
                                  ELLITE CATERING
                                </Text>
                                <Text
                                  className="mt-2.5 sm:text-[32px] md:text-[38px] text-[42px] text-red-300 uppercase"
                                  size="txtCormorantRegular42Red300"
                                >
                                  We plan the prfect day
                                </Text>
                                <Text
                                  className="leading-[25.00px] mt-1 text-base text-gray-600 w-[74%] sm:w-full"
                                  size="txtMontserratRegular16Gray600"
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Cras aliquam mi id augue
                                  ultrices, in tempus elit tristique. Aliquam
                                  ultrices sem non.
                                </Text>
                                <div className="flex sm:flex-col flex-row font-montserrat gap-9 items-start justify-between mt-[23px] w-full">
                                  <div className="h-[50px] md:h-[53px] sm:mt-0 mt-[3px] relative w-[89%] sm:w-full">
                                    <Text
                                      className="absolute h-full inset-y-[0] leading-[25.00px] left-[0] my-auto text-base text-gray-600"
                                      size="txtMontserratRegular16Gray600"
                                    >
                                      <span className="text-gray-600 font-cormorant uppercase text-left font-normal leading-[normal]">
                                        <>
                                          Pulled jackfruit
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-600 font-montserrat text-left text-sm font-normal">
                                        (cumin seeds, paprika, tomato,
                                        jackfruit)
                                      </span>
                                    </Text>
                                    <Line className="absolute bg-gray-600 h-px right-[0] top-[22%] w-[59%]" />
                                  </div>
                                  <Text
                                    className="text-gray-600 text-sm"
                                    size="txtMontserratRegular14Gray600"
                                  >
                                    $50
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row font-montserrat gap-[35px] items-start justify-between mt-[15px] w-full">
                                  <div className="flex sm:flex-1 flex-col items-start justify-start w-[90%] sm:w-full">
                                    <div className="h-[75px] relative w-full">
                                      <Text
                                        className="absolute h-full inset-y-[0] leading-[25.00px] left-[0] my-auto text-base text-gray-600"
                                        size="txtMontserratRegular16Gray600"
                                      >
                                        <span className="text-gray-600 font-cormorant uppercase text-left font-normal leading-[normal]">
                                          <>
                                            Wedding wreath
                                            <br />
                                          </>
                                        </span>
                                        <span className="text-gray-600 font-montserrat text-left text-sm font-normal">
                                          (spinach, tofu, nutmeg, cherries)
                                        </span>
                                      </Text>
                                      <Line className="absolute bg-gray-600 h-px right-[0] top-[15%] w-[59%]" />
                                    </div>
                                    <div className="h-[47px] relative w-full">
                                      <Text
                                        className="absolute h-full inset-y-[0] leading-[25.00px] left-[0] my-auto text-base text-gray-600"
                                        size="txtMontserratRegular16Gray600"
                                      >
                                        <span className="text-gray-600 font-cormorant uppercase text-left font-normal leading-[normal]">
                                          <>
                                            Macaroons
                                            <br />
                                          </>
                                        </span>
                                        <span className="text-gray-600 font-montserrat text-left text-sm font-normal">
                                          (almond, milk, sugar, vanilla)
                                        </span>
                                      </Text>
                                      <Line className="absolute bg-gray-600 h-px right-[0] top-[6%] w-[59%]" />
                                    </div>
                                    <div className="font-cormorant h-[55px] md:h-[83px] mt-7 relative w-[32%]">
                                      <Radio
                                        value="EXPLORE"
                                        className="font-medium my-auto sm:pl-5 text-left text-lg text-red-300 tracking-[3.60px]"
                                        inputClassName="absolute bg-red-300 h-2.5 mr-[5px] w-2.5"
                                        checked={false}
                                        name="explore"
                                        label="EXPLORE"
                                        id="EXPLORE"
                                      ></Radio>
                                      <Img
                                        className="absolute h-[55px] inset-y-[0] left-[0] my-auto"
                                        src="images/img_contrast_red_300.svg"
                                        alt="contrast_One"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[52px] items-start justify-start">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtMontserratRegular14Gray600"
                                    >
                                      $68
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] text-gray-600 text-sm"
                                      size="txtMontserratRegular14Gray600"
                                    >
                                      $23
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute md:h-[1086px] sm:h-[1263px] h-[1414px] inset-x-[0] mx-auto top-[0] w-full">
                            <div className="md:h-[1086px] sm:h-[1263px] h-[1414px] m-auto w-full">
                              <div className="md:h-[1086px] sm:h-[1263px] h-[1414px] m-auto w-full">
                                <div className="md:h-[1086px] sm:h-[1263px] h-[1414px] m-auto w-full">
                                  <div className="flex flex-col md:gap-10 gap-[367px] h-full items-start justify-start m-auto w-full">
                                    <div className="h-[1046px] md:h-[895px] relative w-full">
                                      <div className="absolute bg-red-300 h-[879px] inset-x-[0] mx-auto top-[0] w-full"></div>
                                      <Line className="absolute bg-red-300 bottom-[0] h-[895px] right-[18%] w-px" />
                                    </div>
                                    <Line className="bg-red-300 h-px rotate-[180deg] w-[41%]" />
                                  </div>
                                  <div className="absolute md:h-[1086px] h-[876px] inset-x-[0] mx-auto top-[0] w-full">
                                    <div className="absolute md:h-[1086px] h-[876px] inset-[0] justify-center m-auto w-full">
                                      <div className="font-cormorant md:h-[1086px] h-[876px] m-auto w-full">
                                        <Img
                                          className="absolute h-[876px] inset-[0] justify-center m-auto object-cover w-full"
                                          src="images/img_yourimagehere.png"
                                          alt="yourimagehere"
                                        />
                                        <div className="absolute flex flex-col gap-[45px] items-center justify-start left-[7%] top-[4%] w-[76%]">
                                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                                            <Img
                                              className="h-[25px]"
                                              src="images/img_sanstitre11_white_a700.svg"
                                              alt="sanstitreEleven"
                                            />
                                          
                                          </div>
                                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                            <Text
                                              className="md:mt-0 mt-[60px] md:text-5xl text-7xl text-white-A700"
                                              size="txtCormorantRegular72"
                                            >
                                              <>
                                                YOUR THIRD
                                                <br />
                                                WEDDING PARTNER
                                              </>
                                            </Text>
                                            <Img
                                              className="h-[104px] ml-14 md:ml-[0] md:mt-0 mt-[361px] w-[104px]"
                                              src="images/img_layer1.svg"
                                              alt="layerOne_One"
                                            />
                                            <Line className="bg-white-A700 h-[616px] md:h-px md:ml-[0] ml-[262px] md:w-full w-px" />
                                          </div>
                                        </div>
                                       
                                        <div className="absolute border border-solid border-white-A700 h-[41px] right-[7%] rounded-[3px] top-[4%] w-[11%]" onClick = {(e)=>{navigate("/presSignup")}}
>
                                           <Text
                                          className="  text-[17px] text-center text-white-A700 pt-[5%]"
                                          size="txtCormorantMedium17"
                                        >
                                          JOIN US
                                        </Text>
                                        </div>
                                      </div>
                                      <Text
                                        className="absolute bottom-[36%] leading-[36.00px] left-[26%] text-white-A700 text-xl w-[23%] sm:w-full"
                                        size="txtRalewayRomanRegular20"
                                      >
                                        Risus scelerisque a non turpis vitae
                                        malesuada sed venenatis. In fringilla
                                        sollicitudin euismod sed.
                                      </Text>
                                      <Text
                                        className="absolute bottom-[16%] left-[12%] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 tracking-[4.20px]"
                                        size="txtCormorantMedium21"
                                      >
                                        DISCOVER
                                      </Text>
                                    </div>
                                    <Img
                                      className="absolute bottom-[17%] h-3.5 left-[9%] w-3.5"
                                      src="images/img_mobile.svg"
                                      alt="mobile"
                                    />
                                    <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[21%] w-[86%]">
                                      <Line className="bg-white-A700 h-px mb-[102px] sm:mt-0 mt-72 w-1/5" />
                                      <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-center justify-start rounded-tl-[1000px] rounded-tr-[1000px]">
                                        <Img
                                          className="h-[391px] md:h-auto object-cover rounded-tl-[1000px] rounded-tr-[1000px] w-full"
                                          src="images/img_vadimparipate.png"
                                          alt="vadimparipate"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute bottom-[13%] h-20 left-[7%]"
                                      src="images/img_contrast_white_a700.svg"
                                      alt="contrast_Two"
                                    />
                                  </div>
                                </div>
                                <Line className="absolute bg-white-A700 h-px inset-x-[0] mx-auto top-[7%] w-full" />
                                <div className="absolute border-l border-red-300 border-solid border-t bottom-[0] h-[183px] inset-x-[0] mx-auto rounded-tl-[349px] w-[43%]"></div>
                              </div>
                              <div className="absolute bottom-[6%] flex md:flex-col flex-row gap-10 inset-x-[0] items-start justify-start mx-auto w-[87%]">
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="text-base text-gray-600 tracking-[5.00px] uppercase"
                                    size="txtMontserratRegular16Gray600"
                                  >
                                    Life is an event
                                  </Text>
                                  <Text
                                    className="mt-[13px] sm:text-[32px] md:text-[38px] text-[42px] text-red-300 uppercase w-full"
                                    size="txtCormorantRegular42Red300"
                                  >
                                    Creating the Best Day Ever
                                  </Text>
                                  <Text
                                    className="leading-[25.00px] ml-0.5 md:ml-[0] mt-[18px] text-base text-gray-600 w-[86%] sm:w-full"
                                    size="txtMontserratRegular16Gray600"
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Cras aliquam mi id augue
                                    ultrices, in tempus elit tristique. Aliquam
                                    ultrices sem non.
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start md:mt-0 mt-0.5 w-[58%] md:w-full">
                                  <Img
                                    className="h-72 md:h-auto object-cover w-full"
                                    src="images/img_placeweddingc_288x714.png"
                                    alt="placeweddingc"
                                  />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute bottom-[24%] h-[70px] right-[5%] w-[70px]"
                              src="images/img_thumbsup_red_300.svg"
                              alt="thumbsup"
                            />
                            <div className="absolute bottom-[6%] flex flex-row gap-1.5 items-center justify-center left-[7%] w-[11%]">
                              <div className="h-[55px] relative w-[34%]">
                                <div className="bg-red-300 h-2.5 m-auto rounded-[50%] w-2.5"></div>
                                <Img
                                  className="absolute h-[55px] inset-[0] justify-center m-auto"
                                  src="images/img_contrast_red_300.svg"
                                  alt="contrast_Three"
                                />
                              </div>
                              <Text
                                className="text-lg text-red-300 tracking-[3.60px]"
                                size="txtCormorantMedium18"
                              >
                                EXPLORE
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[155px] object-cover right-[0] rounded-bl-none rounded-br-none rounded-tl-[349px] rounded-tr-none top-[20%] w-[53%]"
                          src="images/img_rectangle72.png"
                          alt="rectangleSeventyTwo"
                        />
                      </div>
                      <div className="absolute bg-blue_gray-50 border border-solid border-white-A700 flex flex-col items-center justify-start right-[15%] rounded-[12px] top-[14%] w-1/4">
                        <Img
                          className="h-[252px] md:h-auto object-cover rounded-[12px] w-full"
                          src="images/img_sinittaleunen.png"
                          alt="sinittaleunen"
                        />
                      </div>
                      <Img
                        className="absolute h-[252px] object-cover right-[0] top-[33%] w-[251px]"
                        src="images/img_037.png"
                        alt="ThirtySeven"
                      />
                      <Line className="absolute bg-red-300 h-[727px] inset-y-[0] left-[42%] my-auto w-px" />
                    </div>
                    <Img
                      className="absolute bottom-[34%] h-[348px] left-[22%] object-cover w-1/4"
                      src="images/img_033.png"
                      alt="ThirtyThree"
                    />
                  </div>
                  <div className="absolute h-[447px] inset-y-[0] left-[0] my-auto w-[23%]">
                    <Img
                      className="h-[447px] m-auto object-cover w-full"
                      src="images/img_034.png"
                      alt="ThirtyFour"
                    />
                    <Img
                      className="absolute h-[132px] inset-y-[0] top-[109px] left-[18%] my-auto w-[132px]"
                      src="images/img_vector_red_300_132x132.svg"
                      alt="vector_Two"
                    />
                  </div>
                  <div className="absolute bg-red-300_01 bottom-[37%] flex flex-col items-center justify-start left-[35%] shadow-bs5 w-[13%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[235px] md:h-auto object-cover w-full"
                        src="images/img_peoplehavings.png"
                        alt="peoplehavings"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[700px] h-max inset-y-[0] justify-start left-[35%] my-auto w-[14%]">
                  <Img
                    className="h-32 md:h-auto md:ml-[0] ml-[22px] object-cover w-[89%] sm:w-full"
                    src="images/img_sinittaleunen_128x177.png"
                    alt="sinittaleunen_One"
                  />
                  <Img
                    className="h-[116px]"
                    src="images/img_vector_red_300_116x126.svg"
                    alt="vector_Three"
                  />
                </div>
                <Line className="absolute bg-red-300 bottom-[21%] h-px right-[0] w-[69%]" />
              </div>
              <Img
                className="absolute bottom-[5%] h-[1206px] object-cover right-[0] rotate-[90deg] rounded-bl-none rounded-br-none rounded-tl-[349px] rounded-tr-none w-[15%]"
                src="images/img_rectangle72_1206x205.png"
                alt="rectangleSeventyTwo_One"
              />
            </div>
            <div className="absolute bg-red-300 border border-red-300 border-solid bottom-[17%] h-[427px] right-[7%] rounded-bl-[1000px] rounded-br-[1000px] w-[35%] sm:w-full">
              <Img
                className="h-[427px] m-auto object-cover rounded-bl-[1000px] rounded-br-[1000px] w-full"
                src="images/img_jakobowensmli.png"
                alt="jakobowensmli"
              />
              <Img
                className="absolute h-[427px] inset-[0] justify-center m-auto object-cover rounded-bl-[1000px] rounded-br-[1000px] w-full"
                src="images/img_karolinagrabow.png"
                alt="karolinagrabow"
              />
            </div>
            <footer className="absolute bg-gray-100 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="flex flex-col items-center justify-center mb-[34px] mt-[138px] mx-[99px] w-[87%]">
                <ul className="flex flex-col items-center justify-center w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row sm:gap-10 items-start justify-between">
                        <Img
                          className="h-8 md:h-auto object-cover"
                          src="images/img_logo23.png"
                          alt="logoTwentyThree"
                        />
                      
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-start justify-start mt-[13px]">
                        <Button
                          className="flex h-[25px] items-center justify-center md:mt-0 mt-2.5 rounded-[5px] w-[25px]"
                          color="red_300"
                          size="xs"
                          variant="fill"
                        >
                          <Img src="images/img_trash.svg" alt="trash" />
                        </Button>
                        <div className="bg-red-300 flex flex-col h-[25px] items-center justify-end md:ml-[0] ml-[17px] md:mt-0 mt-2.5 p-[5px] rounded-[5px] w-[25px]">
                          <div className="flex flex-col h-3.5 items-center justify-start w-3.5">
                            <div className="flex flex-col h-3.5 items-center justify-start w-3.5">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_facebook_white_a700.svg"
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
                            src="images/img_info.svg"
                            alt="info"
                          />
                        </Button>
                        <div className="bg-red-300 flex flex-col h-[25px] items-center justify-end md:ml-[0] ml-[17px] md:mt-0 mt-2.5 p-1 rounded-[5px] w-[25px]">
                          <div className="flex flex-col h-4 items-center justify-start w-4">
                            <div className="flex flex-col h-4 items-center justify-start w-4">
                              <Img
                                className="h-4 w-4"
                                src="images/img_user_white_a700_16x16.svg"
                                alt="user"
                              />
                            </div>
                          </div>
                        </div>
                      
                      
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <Line className="bg-black-900_19 h-px mt-9" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-end justify-between ml-1.5 md:ml-[0] mt-[19px]">
                        <Text
                          className="md:mt-0 mt-3.5 text-black-900_99 text-right text-sm"
                          size="txtMontserratRegular14Black90099"
                        >
                          Cazanova © 2024 All Rights Reserved | Released with
                          xsustain.
                        </Text>
                      
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
          <Img
            className="absolute bottom-[6%] h-[373px] left-[0] object-cover w-[22%]"
            src="images/img_035_373x305.png"
            alt="ThirtyFive"
          />
          <Img
            className="absolute bottom-[4%] h-[373px] object-cover right-[0] w-[22%]"
            src="images/img_036.png"
            alt="ThirtySix"
          />
        </div>
        <div className="absolute bottom-[4%] flex flex-col md:gap-10 gap-[102px] inset-x-[0] items-end justify-start max-w-[1240px] mx-auto md:px-5 w-full">
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
                  name="groupThirtyFive"
                  placeholder="Enter your email address"
                  className="leading-[normal] text-center p-0 placeholder:text-black-900 text-base text-left w-full"
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
          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default PreslandingpagePage;
