import React from "react";
import { Button, Img, Line, Text, RatingBar } from "components";
import { useMediaQuery } from "react-responsive";

const WeDoTheBest = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 992px)'
  })

  return (
    <div className={isMobile ? "bg-gray-100 w-[100%]" : " w-[100%]"}>
      <div className={isMobile ? "flex flex-col font-cormorant items-center justify-start max-w-[95%] w-[95%] mt-[138px] mx-auto pb-3.5 w-full" : "bg-gray-100 flex flex-col font-cormorant items-center justify-start max-w-[100%] mt-[138px] mx-auto pb-3.5 px-3.5 md:px-5 w-full"}>
        <div className="flex flex-col gap-5 justify-start w-[85%] md:w-full">
          <div className="md:h-[420px] h-[481px] relative w-[95%] md:w-full">
            <Img
              className="absolute h-[420px] left-[0] top-[0]"
              src="images/img_group_black_900.svg"
              alt="group"
            />
            <Text
              className="absolute inset-x-[0] mx-auto text-5xl sm:text-[200%] md:text-[44px] text-center text-red-300 top-[14%] w-max"
              size="txtCormorantBold48Red300"
            >
              WHAT WE DO BEST !
            </Text>
            <div className="absolute bg-white-A700 bottom-[0] h-[289px] left-[2%] rounded-[20px] w-[36%] sm:w-full">
              <Img
                className="h-[289px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_image11_289x407.png"
                alt="imageEleven"
              />
              <Text
                className="absolute left-[9%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 top-[9%]"
                size="txtCormorantBold36"
              >
                
              </Text>
            </div>
            <div className="sm:hidden absolute bg-white-A700 bottom-[0] h-[289px] right-[0] rounded-[20px] w-[61%] md:w-full">
              <Img
                className="h-[289px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_image13_289x684.png"
                alt="imageThirteen"
              />
              <Text
                className="absolute left-[5%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 top-[9%]"
                size="txtCormorantBold36"
              >
                
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between md:ml-[0] ml-[25px] w-[98%] md:w-full">
            <div className="sm:hidden bg-white-A700 h-[289px] md:h-[350px] mb-[61px] relative rounded-[20px] w-[59%] md:w-full">
              <Img
                className="h-[289px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_image12_289x684.png"
                alt="imageTwelve"
              />
              <Text
                className="absolute left-[5%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 top-[9%]"
                size="txtCormorantBold36"
              >
                
              </Text>
            </div>
            <div className="md:h-[289px] h-[350px] relative w-[41%] md:w-full">
              <div className="absolute bg-white-A700 h-[289px] left-[0] rounded-[20px] top-[0] w-[87%] sm:w-full">
                <Img
                  className="h-[289px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_image14_289x407.png"
                  alt="imageFourteen"
                />
                <Text
                  className="absolute left-[9%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 top-[9%]"
                  size="txtCormorantBold36"
                >
                  
                </Text>
              </div>
              <Img
                className="absolute md:hidden bottom-[0] h-[166px] right-[0]"
                src="images/img_vector_black_900_166x181.svg"
                alt="vector_Five"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDoTheBest;
