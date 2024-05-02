import React from "react";

import { Img, Line, Text } from "components";
import moment from "moment"
const PresCard = ({user}) => {
  return (
    <>
      <div className="bg-white-A700 border md:w-[100%] w-[30%] border-gray-300 border-solid flex flex-col items-center justify-end p-[19px] rounded-[12px]">
        <div className="flex flex-col gap-[37px] items-end justify-start mb-6 mt-10 w-[100%] md:w-full">
          <div className="flex flex-row gap-[27px] items-center justify-between w-full">
            <div className="w-[25%]">

            <Img
              className="h-[100%] md:h-auto rounded-[50%] w-[100%]"
              src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + user.picture}
              alt="ellipseTwentyThree"
            />
            </div>
            <div className="flex flex-col items-end justify-end w-[70%]">
              <div className="flex flex-row font-cormorant gap-[11px] items-center justify-end w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtCormorantBold20"
                >
                  {user.businessName}
                </Text>
                <Img
                  className="h-3.5 md:h-auto object-cover w-[12%]"
                  src="../images/img_rectangle301.png"
                  alt="rectangle301"
                />
              </div>
        
              <div className="flex flex-row font-calistoga items-start justify-end mt-[9px] w-[100%] md:w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="../images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-3.5 ml-1 w-3.5"
                  src="../images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-3.5 ml-1 w-3.5"
                  src="../images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-3.5 ml-1 w-3.5"
                  src="../images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-3.5 ml-1 w-3.5"
                  src="../images/img_signal.svg"
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
            <div className="flex flex-row items-center justify-start mt-[21px] w-full">
              <div className="flex gap-2 w-[50%]">

                <Img
                  className="h-[15px]"
                  src="../images/img_linkedin.svg"
                  alt="linkedin"
                />
                <Text
                  className="ml-3 mt-0.5 text-[13px] text-gray-500"
                  size="txtGothamBook13"
                >
                  From
                </Text>
              </div>
              <div className="w-[50%]">
              <Text
                className="text-black-900  text-left text-sm text-right"
                size="txtMontserratRomanMedium14Black900"
              >
                TUNISIE
              </Text>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start mt-4 w-full">
            <div className="flex gap-2 w-[50%]">
              <Img
                className="h-[18px]"
                src="../images/img_lock_red_300.svg"
                alt="lock"
              />
              <Text
                className="ml-3 text-gray-500 text-sm"
                size="txtGothamBook14"
              >
                Member since
              </Text>
              </div>
              <div className="w-[50%]">

                <Text
                  className="text-[13px] text-black-900 text-right"
                  size="txtMontserratRomanMedium13"
                >
                  {user.createdAt && moment().format(user.createdAt ) || moment().format('YYYY-MM')}
                </Text>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default PresCard;
