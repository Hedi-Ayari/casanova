import React from "react";

import { Img, Input, Line, Text } from "components";

const LandingpagesNinePage = () => {
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-cormorant sm:gap-10 md:gap-10 gap-[69px] items-center justify-end mx-auto  w-full">
        <div className="h-[976px] md:px-5 relative rotate-[180deg] w-full">
          <div className="h-[976px] m-auto w-full">
            <div className="absolute bottom-[0] h-[922px] inset-x-[0] mx-auto w-full">
              <div className="h-[922px] m-auto w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                  <div className="overflow-x-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-full">
                      <Img
                        className="md:flex-1 h-[922px] sm:h-auto object-cover w-[71%] md:w-full"
                        src="images/img_91231converti_922x1770.png"
                        alt="91231converti"
                      />
                      <Img
                        className="md:flex-1 h-[922px] sm:h-auto object-cover w-[28%] md:w-full"
                        src="images/img_91231converti_922x685.png"
                        alt="91231converti_One"
                      />
                      <div className="h-[922px] md:ml-[0] ml-[58px] overflow-auto relative w-[28%] md:w-full">
                        <Img
                          className="h-[922px] ml-auto my-auto object-cover w-full"
                          src="images/img_91231converti_922x1770.png"
                          alt="91231converti_Two"
                        />
                        <Img
                          className="absolute h-[899px] inset-y-[0] my-auto object-cover right-[0] w-[78%]"
                          src="images/img_91231converti_899x537.png"
                          alt="91231converti_Three"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[854px] inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_91231converti_854x1440.png"
                  alt="91231converti_Four"
                />
                <Img
                  className="absolute bottom-[0] h-[762px] left-[0] object-cover w-[86%]"
                  src="images/img_91231converti_762x1225.png"
                  alt="91231converti_Five"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[732px] inset-x-[0] mx-auto object-cover w-full"
                src="images/img_91231converti_732x1440.png"
                alt="91231converti_Six"
              />
            </div>
            <Img
              className="absolute h-[976px] inset-y-[0] left-[0] my-auto object-cover w-[27%]"
              src="images/img_91231converti_976x384.png"
              alt="91231converti_Seven"
            />
          </div>
          <div className="absolute bg-red-300 h-[758px] md:h-[933px] inset-x-[0] mx-auto sm:pl-5 pl-[34px] rounded-[5px] shadow-bs3 top-[8%] w-[81%] md:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-[98%]">
              <div className="flex md:flex-col flex-row gap-[34px] items-center justify-between w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 uppercase"
                  size="txtCormorantRegular42WhiteA700"
                >
                  We will plan your day, your way.
                </Text>
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[51px] md:px-10 sm:px-5 rounded-sm">
                  <Text
                    className="ml-16 md:ml-[0] sm:text-3xl md:text-[32px] text-[34px] text-red-300 tracking-[2.72px]"
                    size="txtCormorantBold34"
                  >
                    CRÉER UN COMPTE
                  </Text>
                  <div className="flex flex-col font-montserrat gap-[11px] items-start justify-start ml-16 md:ml-[0] mt-[34px] w-[82%] md:w-full">
                    <Text
                      className="text-gray-400 text-sm tracking-[1.12px]"
                      size="txtMontserratRomanRegular14"
                    >
                      Nom complet
                    </Text>
                    <Line className="bg-gray-100_01 h-px w-full" />
                  </div>
                  <Input
                    name="groupSixtyFour"
                    placeholder="Email"
                    className="font-montserrat p-0 placeholder:text-gray-400 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                    wrapClassName="ml-16 md:ml-[0] mt-8 pr-[35px] w-[82%]"
                    type="email"
                    color="gray_100_01"
                    size="xl"
                    variant="underline"
                  ></Input>
                  <div className="font-montserrat h-[35px] md:h-[60px] ml-16 md:ml-[0] mt-[30px] relative w-[82%] sm:w-full">
                    <div className="absolute bottom-[0] flex flex-col gap-[11px] inset-x-[0] items-start justify-start mx-auto w-full">
                      <Text
                        className="text-gray-400 text-sm tracking-[1.12px]"
                        size="txtMontserratRomanRegular14"
                      >
                        Mot de passe
                      </Text>
                      <Line className="bg-gray-100_01 h-px w-full" />
                    </div>
                    <Img
                      className="absolute h-6 right-[1%] top-[0] w-6"
                      src="images/img_eyeclosed.svg"
                      alt="eyeclosed"
                    />
                  </div>
                  <Input
                    name="groupSixtyTwo"
                    placeholder="Confirmer le mot de passe"
                    className="font-montserrat p-0 placeholder:text-gray-400 text-left text-sm tracking-[1.12px] w-full"
                    wrapClassName="flex ml-16 md:ml-[0] mt-[30px] pr-[3px] w-[82%]"
                    suffix={
                      <Img
                        className="h-6 ml-[35px] my-auto"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    }
                    color="gray_100_01"
                    size="lg"
                    variant="underline"
                  ></Input>
                  <div className="flex flex-col font-montserrat gap-2.5 items-center justify-start ml-16 md:ml-[0] mt-[30px] w-[82%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-gray-400 text-sm tracking-[1.12px]"
                        size="txtMontserratRomanRegular14"
                      >
                        Date
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_calendarcalendar.svg"
                        alt="calendarcalenda"
                      />
                    </div>
                    <Line className="bg-gray-100_01 h-px w-full" />
                  </div>
                  <div className="flex sm:flex-col flex-row font-montserrat gap-[25px] items-center justify-center ml-16 md:ml-[0] mt-6 w-[82%] md:w-full">
                    <div className="border border-gray-400_01 border-solid h-5 w-5"></div>
                    <Text
                      className="leading-[19.00px] text-black-900_54 text-sm tracking-[1.12px] w-[92%] sm:w-full"
                      size="txtMontserratRomanMedium14"
                    >
                      <>
                        J&#39;ai lu et accepté les Conditions d&#39;utilisation
                        et la Politique de confidentialité.
                      </>
                    </Text>
                  </div>
                  <div className="bg-red-300 flex flex-col font-montserrat items-center justify-end ml-16 md:ml-[0] mt-[25px] p-3 rounded-[5px]">
                    <Text
                      className="mt-0.5 text-base text-white-A700 tracking-[1.28px]"
                      size="txtMontserratRomanSemiBold16"
                    >
                      Créer un compte
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[312px] mt-[22px] text-black-900_01 text-sm tracking-[1.12px]"
                    size="txtPoppinsMedium14"
                  >
                    Or
                  </Text>
                  <div className="flex flex-row font-montserrat gap-[15px] items-end justify-end md:ml-[0] ml-[230px] mt-2.5 w-[34%] md:w-full">
                    <Img
                      className="h-[27px] md:h-auto object-cover w-[11%]"
                      src="images/img_8c030bd6bd7ee87.png"
                      alt="8c030bd6bd7eeEightySeven"
                    />
                    <Text
                      className="my-[5px] text-[13px] text-black-900 tracking-[1.04px]"
                      size="txtMontserratRomanLight13"
                    >
                      Inscription avec Google
                    </Text>
                  </div>
                  <Text
                    className="mb-[5px] md:ml-[0] ml-[133px] mt-[41px] text-base text-gray-400 tracking-[1.28px]"
                    size="txtPoppinsMedium16"
                  >
                    <span className="text-gray-400 font-poppins text-left font-medium">
                      Vous avez déjà un compte ?
                    </span>
                    <span className="text-red-300 font-poppins text-left font-bold">
                      {" "}
                      Se connecter
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[100px] left-[3%] object-cover top-[4%] w-[10%]"
              src="images/img_logo4white1.png"
              alt="logo4whiteOne"
            />
            <Img
              className="absolute bottom-[4%] h-[289px] left-[17%] object-cover w-[31%]"
              src="images/img_91231converti_289x355.png"
              alt="91231converti_Eight"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[65px] items-start justify-end rotate-[180deg] w-full">
          <Img
            className="md:h-auto h-px object-cover w-[26%]"
            src="images/img_91231converti_1x373.png"
            alt="91231converti_Nine"
          />
          <div className="h-[1149px] md:px-5 relative w-full">
            <div className="absolute inset-y-[0] my-auto overflow-x-auto right-[0] w-[49%]">
              <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between w-full">
                <Img
                  className="flex-1 h-[1149px] sm:h-auto object-cover w-full"
                  src="images/img_91231converti_1149x1828.png"
                  alt="91231converti_Ten"
                />
                <div className="h-[1149px] overflow-auto relative w-full">
                  <Img
                    className="h-[1149px] ml-auto my-auto object-cover w-full"
                    src="images/img_91231converti_1149x1828.png"
                    alt="91231converti_Eleven"
                  />
                  <Img
                    className="absolute h-px object-cover right-[0] top-[2%] w-[77%]"
                    src="images/img_91231converti_1x531.png"
                    alt="91231converti_Twelve"
                  />
                </div>
              </div>
            </div>
            <Img
              className="absolute h-px left-[0] object-cover top-[0] w-[48%]"
              src="images/img_91231converti_1x684.png"
              alt="91231converti_Thirteen"
            />
            <Img
              className="absolute h-px inset-x-[0] mx-auto object-cover top-[7%] w-full"
              src="images/img_91231converti_2.png"
              alt="91231converti_Fourteen"
            />
            <Img
              className="absolute h-px left-[0] object-cover top-[17%] w-[87%]"
              src="images/img_91231converti_1x1242.png"
              alt="91231converti_Fifteen"
            />
            <Img
              className="absolute h-px inset-x-[0] mx-auto object-cover top-[21%] w-full"
              src="images/img_91231converti_3.png"
              alt="91231converti_Sixteen"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagesNinePage;
