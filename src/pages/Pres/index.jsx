import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Footer from "components/Footer";

const PresPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cormorant items-center justify-end mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[122px] items-center justify-start mt-9 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1241px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="h-[21px]"
                src="images/img_sanstitre11.svg"
                alt="sanstitreEleven"
              />
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[33px] items-end justify-start md:ml-[0] ml-[575px] p-1.5 w-[34%] md:w-full"
                style={{ backgroundImage: "url('images/img_group175.svg')" }}
              >
                <div className="flex flex-row gap-[17px] items-center justify-end mr-7 w-1/4 md:w-full">
                  <Text
                    className="text-base text-red-300"
                    size="txtCormorantRegular16"
                  >
                    CATEGORY
                  </Text>
                  <Line className="bg-red-300 h-[21px] w-px" />
                </div>
              </div>
              <Img
                className="h-4 md:ml-[0] ml-[17px]"
                src="images/img_bag.svg"
                alt="bag"
              />
              <Img
                className="h-[33px] md:h-auto md:ml-[0] ml-[17px] rounded-[50%] w-[34px]"
                src="images/img_female16.png"
                alt="femaleSixteen"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-[75px] w-full">
              <div className="bg-white-A700 border md:w-[100%] w-[30%] border-gray-300 border-solid flex flex-col items-center justify-end p-[19px] rounded-[12px]">
                <div className="flex flex-col gap-[37px] items-end justify-start mb-6 mt-10 w-[100%] md:w-full">
                  <div className="flex flex-row gap-[27px] items-center justify-between w-full">
                    <Img
                      className="h-[97px] md:h-auto rounded-[50%] w-[97px]"
                      src="images/img_ellipse23.png"
                      alt="ellipseTwentyThree"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row font-cormorant gap-[11px] items-center justify-start w-4/5 md:w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtCormorantBold20"
                        >
                          GOURMANDISE
                        </Text>
                        <Img
                          className="h-3.5 md:h-auto object-cover w-[12%]"
                          src="images/img_rectangle301.png"
                          alt="rectangle301"
                        />
                      </div>
                  
                      <div className="flex flex-row font-calistoga items-start justify-start mt-[9px] w-[88%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-3.5 ml-1 w-3.5"
                          src="images/img_signal.svg"
                          alt="signal_One"
                        />
                        <Img
                          className="h-3.5 ml-1 w-3.5"
                          src="images/img_signal.svg"
                          alt="signal_Two"
                        />
                        <Img
                          className="h-3.5 ml-1 w-3.5"
                          src="images/img_signal.svg"
                          alt="signal_Three"
                        />
                        <Img
                          className="h-3.5 ml-1 w-3.5"
                          src="images/img_signal.svg"
                          alt="signal_Four"
                        />
                        <Text
                          className="ml-1 text-[13px] text-black-900"
                          size="txtCalistogaRegular13"
                        >
                          4.8
                        </Text>
                        <Text
                          className="ml-1 text-[13px] text-black-900"
                          size="txtCalistogaRegular13"
                        >
                          (47 avis)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                    <Line className="bg-gray-300 h-px w-full" />
                    <div className="flex flex-row items-start justify-start mt-[21px] w-full">
                      <Img
                        className="h-[15px]"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                      <Text
                        className="ml-3 mt-0.5 text-[13px] text-gray-500"
                        size="txtGothamBook13"
                      >
                        From
                      </Text>
                      <Text
                        className="ml-[215px] text-black-900 text-right text-sm"
                        size="txtMontserratRomanMedium14Black900"
                      >
                        TUNISIE
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-4 w-full">
                      <Img
                        className="h-[18px]"
                        src="images/img_lock_red_300.svg"
                        alt="lock"
                      />
                      <Text
                        className="ml-3 text-gray-500 text-sm"
                        size="txtGothamBook14"
                      >
                        Member since
                      </Text>
                      <Text
                        className="ml-[154px] text-[13px] text-black-900 text-right"
                        size="txtMontserratRomanMedium13"
                      >
                        Feb 2017
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                      <div className="flex flex-row font-gotham gap-[13px] items-start justify-start">
                        <Img
                          className="h-3 w-[13px]"
                          src="images/img_save_red_300.svg"
                          alt="save"
                        />
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtGothamBook14"
                        >
                          Last Delivery
                        </Text>
                      </div>
                      <Text
                        className="text-[13px] text-black-900 text-right"
                        size="txtMontserratRomanMedium13"
                      >
                        1 DAY
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-[352px] w-[68%] md:h-auto object-cover rounded-[12px]"
                src="images/img_rectangle302.png"
                alt="rectangle302"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-[22px] w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[74px] items-start justify-start w-[33%] md:w-full">
                <div className="border border-gray-300 border-solid flex flex-col gap-[13px] items-start justify-center p-[33px] sm:px-5 rounded-[14px] w-full">
                  <Text
                    className="mt-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                    size="txtCormorantBold21"
                  >
                    DESCRIPTION
                  </Text>
                  <Text
                    className="leading-[150.00%] mb-[15px] text-gray-500 text-xs w-full"
                    size="txtMontserratRegular12Gray500"
                  >
                    <>
                      I cumulate missions at French and French-Canadian
                      agencies, arrived at a Some degree of mastery and
                      experience, I continued as a consultant by chaining
                      consultations to companies, working on projects overseas
                      requiring digital mockups and a BIM process. I worked with
                      various teams with experience, other experts, and I
                      interact also with professionals as a certified Autodesk
                      Trainer in Revit Architecture, Revit Structure, and other
                      tools. I made Interventions with many types of projects
                      and models (existing models, clash detection, point cloud,
                      4d, and 5d....)
                      <br />I cumulate missions at French and French-Canadian
                      agencies, arrived at a Some degree of mastery and
                      experience, I continued as a consultant by chaining
                      consultations to companies, working on projects overseas
                      requiring digital mockups and a BIM process. I worked with
                      various teams with experience, other experts, and I
                      interact also with professionals as a certified Autodesk
                      Trainer in Revit Architecture, Revit Structure, and other
                      tools. I made Interventions with many types of projects
                      and models (existing models, clash detection, point cloud,
                      4d, and 5d....)
                      <br />I cumulate missions at French and French-Canadian
                      agencies, arrived at a Some degree of mastery and
                      experience, I continued as a consultant by chaining
                      consultations to companies, working on projects overseas
                      requiring digital mockups and a BIM process. I worked with
                      various teams with experience, other experts, and I
                      interact also with professionals as a certified Autodesk
                      Trainer in Revit Architecture, Revit Structure, and other
                      tools. I made Interventions with many types of projects
                      and models (existing models, clash detection, point cloud,
                      4d, and 5d....)
                    </>
                  </Text>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-red-300"
                  size="txtCormorantBold28"
                >
                  CLIENT FEED BACK
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[49px] items-center justify-start md:mt-0 mt-[26px] w-[67%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-full">
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[3px]">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <div className="flex flex-row gap-[23px] items-center justify-start w-[53%] md:w-full">
                        <Text
                          className="text-center text-lg text-red-300"
                          size="txtCormorantBold18Red300"
                        >
                          OUR SERVICES
                        </Text>
                        <Text
                          className="text-center text-gray-400_02 text-lg"
                          size="txtCormorantBold18Gray40002"
                        >
                          PHOTOS
                        </Text>
                        <Text
                          className="text-center text-gray-400_02 text-lg"
                          size="txtCormorantBold18Gray40002"
                        >
                          VIDEOS
                        </Text>
                      </div>
                     
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[209px] rounded-md text-center text-sm"
                    color="black_900_38"
                    size="sm"
                    variant="outline"
                  >
                    CATÉGORIE
                  </Button>
                </div>
                <div className="font-montserrat md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="h-72 relative w-full">
                    <Img
                      className="h-72 m-auto object-cover rounded-[14px] w-full"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                    <Button
                      className="absolute cursor-pointer font-medium leading-[normal] right-[7%] rounded-[13px] text-center text-xs top-[9%] w-[58px]"
                      shape="round"
                      color="red_300"
                      size="xs"
                      variant="fill"
                    >
                      -20%
                    </Button>
                    <div className="absolute bg-gray-100_e5 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-5 rounded-bl-[13px] rounded-br-[11px] rounded-tr-[45px] w-full">
                      <div className="flex flex-col items-start justify-start mb-[7px] w-[86%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtCormorantBold14"
                        >
                          GATEAU DE MARIAGE
                        </Text>
                        <div className="flex flex-row font-montserrat items-start justify-evenly mt-[5px] w-full">
                          <Text
                            className="text-[10px] text-black-900 tracking-[0.50px]"
                            size="txtMontserratRegular10"
                          >
                            GOURMANDISE
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-14"
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
                            <span className="text-black-900 font-calistoga text-left font-normal">
                              4.5/{" "}
                            </span>
                            <span className="text-red-300 font-calistoga text-left font-normal">
                              5
                            </span>
                          </Text>
                        </div>
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtCalistogaRegular15"
                        >
                          $120
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-72 relative w-full">
                    <Img
                      className="h-72 m-auto object-cover rounded-[14px] w-full"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                    <Button
                      className="absolute cursor-pointer font-medium leading-[normal] right-[7%] rounded-[13px] text-center text-xs top-[9%] w-[58px]"
                      shape="round"
                      color="red_300"
                      size="xs"
                      variant="fill"
                    >
                      -20%
                    </Button>
                    <div className="absolute bg-gray-100_e5 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-5 rounded-bl-[13px] rounded-br-[11px] rounded-tr-[45px] w-full">
                      <div className="flex flex-col items-start justify-start mb-[7px] w-[86%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtCormorantBold14"
                        >
                          GATEAU DE MARIAGE
                        </Text>
                        <div className="flex flex-row font-montserrat items-start justify-evenly mt-[5px] w-full">
                          <Text
                            className="text-[10px] text-black-900 tracking-[0.50px]"
                            size="txtMontserratRegular10"
                          >
                            GOURMANDISE
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-14"
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
                            <span className="text-black-900 font-calistoga text-left font-normal">
                              4.5/{" "}
                            </span>
                            <span className="text-red-300 font-calistoga text-left font-normal">
                              5
                            </span>
                          </Text>
                        </div>
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtCalistogaRegular15"
                        >
                          $120
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-72 relative w-full">
                    <Img
                      className="h-72 m-auto object-cover rounded-[14px] w-full"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                    <Button
                      className="absolute cursor-pointer font-medium leading-[normal] right-[7%] rounded-[13px] text-center text-xs top-[9%] w-[58px]"
                      shape="round"
                      color="red_300"
                      size="xs"
                      variant="fill"
                    >
                      -20%
                    </Button>
                    <div className="absolute bg-gray-100_e5 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-5 rounded-bl-[13px] rounded-br-[11px] rounded-tr-[45px] w-full">
                      <div className="flex flex-col items-start justify-start mb-[7px] w-[86%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtCormorantBold14"
                        >
                          GATEAU DE MARIAGE
                        </Text>
                        <div className="flex flex-row font-montserrat items-start justify-evenly mt-[5px] w-full">
                          <Text
                            className="text-[10px] text-black-900 tracking-[0.50px]"
                            size="txtMontserratRegular10"
                          >
                            GOURMANDISE
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-14"
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
                            <span className="text-black-900 font-calistoga text-left font-normal">
                              4.5/{" "}
                            </span>
                            <span className="text-red-300 font-calistoga text-left font-normal">
                              5
                            </span>
                          </Text>
                        </div>
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtCalistogaRegular15"
                        >
                          $120
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-72 relative w-full">
                    <Img
                      className="h-72 m-auto object-cover rounded-[14px] w-full"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                    <Button
                      className="absolute cursor-pointer font-medium leading-[normal] right-[7%] rounded-[13px] text-center text-xs top-[9%] w-[58px]"
                      shape="round"
                      color="red_300"
                      size="xs"
                      variant="fill"
                    >
                      -20%
                    </Button>
                    <div className="absolute bg-gray-100_e5 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-5 rounded-bl-[13px] rounded-br-[11px] rounded-tr-[45px] w-full">
                      <div className="flex flex-col items-start justify-start mb-[7px] w-[86%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtCormorantBold14"
                        >
                          GATEAU DE MARIAGE
                        </Text>
                        <div className="flex flex-row font-montserrat items-start justify-evenly mt-[5px] w-full">
                          <Text
                            className="text-[10px] text-black-900 tracking-[0.50px]"
                            size="txtMontserratRegular10"
                          >
                            GOURMANDISE
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-14"
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
                            <span className="text-black-900 font-calistoga text-left font-normal">
                              4.5/{" "}
                            </span>
                            <span className="text-red-300 font-calistoga text-left font-normal">
                              5
                            </span>
                          </Text>
                        </div>
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtCalistogaRegular15"
                        >
                          $120
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-72 relative w-full">
                    <Img
                      className="h-72 m-auto object-cover rounded-[14px] w-full"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                    <Button
                      className="absolute cursor-pointer font-medium leading-[normal] right-[7%] rounded-[13px] text-center text-xs top-[9%] w-[58px]"
                      shape="round"
                      color="red_300"
                      size="xs"
                      variant="fill"
                    >
                      -20%
                    </Button>
                    <div className="absolute bg-gray-100_e5 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-5 rounded-bl-[13px] rounded-br-[11px] rounded-tr-[45px] w-full">
                      <div className="flex flex-col items-start justify-start mb-[7px] w-[86%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtCormorantBold14"
                        >
                          GATEAU DE MARIAGE
                        </Text>
                        <div className="flex flex-row font-montserrat items-start justify-evenly mt-[5px] w-full">
                          <Text
                            className="text-[10px] text-black-900 tracking-[0.50px]"
                            size="txtMontserratRegular10"
                          >
                            GOURMANDISE
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-14"
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
                            <span className="text-black-900 font-calistoga text-left font-normal">
                              4.5/{" "}
                            </span>
                            <span className="text-red-300 font-calistoga text-left font-normal">
                              5
                            </span>
                          </Text>
                        </div>
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtCalistogaRegular15"
                        >
                          $120
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-72 relative w-full">
                    <Img
                      className="h-72 m-auto object-cover rounded-[14px] w-full"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                    <Button
                      className="absolute cursor-pointer font-medium leading-[normal] right-[7%] rounded-[13px] text-center text-xs top-[9%] w-[58px]"
                      shape="round"
                      color="red_300"
                      size="xs"
                      variant="fill"
                    >
                      -20%
                    </Button>
                    <div className="absolute bg-gray-100_e5 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-5 rounded-bl-[13px] rounded-br-[11px] rounded-tr-[45px] w-full">
                      <div className="flex flex-col items-start justify-start mb-[7px] w-[86%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtCormorantBold14"
                        >
                          GATEAU DE MARIAGE
                        </Text>
                        <div className="flex flex-row font-montserrat items-start justify-evenly mt-[5px] w-full">
                          <Text
                            className="text-[10px] text-black-900 tracking-[0.50px]"
                            size="txtMontserratRegular10"
                          >
                            GOURMANDISE
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-14"
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
                            <span className="text-black-900 font-calistoga text-left font-normal">
                              4.5/{" "}
                            </span>
                            <span className="text-red-300 font-calistoga text-left font-normal">
                              5
                            </span>
                          </Text>
                        </div>
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtCalistogaRegular15"
                        >
                          $120
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[55px] w-full"
              orientation="horizontal"
            >
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
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
                    className="leading-[22.00px] text-base text-black-900 w-full"
                    size="txtMontserratRegular16"
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
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
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
                    className="leading-[22.00px] text-base text-black-900 w-full"
                    size="txtMontserratRegular16"
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
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[10px] w-full">
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
                    className="leading-[22.00px] text-base text-black-900 w-full"
                    size="txtMontserratRegular16"
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
          <div className="h-[432px] md:px-5 relative w-full">
            <div className="bg-red-300 flex flex-col items-center justify-start mb-[-88px] mx-auto p-10 sm:px-5 rounded-[20px] w-[87%] z-[1]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-0.5 w-[96%] md:w-full">
                <Text
                  className="leading-[45.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-100"
                  size="txtCormorantBold40Gray100"
                >
                  STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </Text>
                <div className="flex flex-col gap-1.5 items-center justify-start">
                  <Input
                    name="group102"
                    placeholder="Enter your email address"
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="border border-black-900_11 border-solid w-full"
                    type="email"
                    shape="round"
                    color="gray_100"
                    size="xl"
                  ></Input>
                  <Button
                    className="border border-black-900_11 border-solid cursor-pointer leading-[normal] min-w-[349px] rounded-[7px] text-base text-center"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    Subscribe to Newsdddddddddletter
                  </Button>
                </div>
              </div>
            </div>
            <Footer className="bg-gray-100 flex items-center justify-center mt-auto mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PresPage;
