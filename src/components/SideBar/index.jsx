import React from "react";
import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import { CloseSVG } from "../../assets/images";

const Sidebar = ({ userData, onItemClick }) => {
  const [itemvalue, setItemvalue] = React.useState("");
  const handleItemClick = (item) => {
    setItemvalue(item);
    onItemClick(item);
  };
    return (
    <>
      <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-center justify-start p-9 sm:px-5 w-[24%]">
        <div className="flex flex-col items-center justify-start mt-[67px] w-full">
          <div className="flex flex-col gap-[19px] justify-start w-full">
            <div className="flex flex-row gap-[11px] items-center justify-start ml-2 md:ml-[0] w-[72%] md:w-full">
              <div className="border border-blue_gray-100_01 border-solid flex flex-col h-[45px] items-center justify-end p-[3px] rounded-[22px] w-[45px]">
                <Img
                 className="h-[38px] md:h-auto object-cover rounded-[19px] w-[37px] sm:w-full"
                 src={userData?.user?.picture ? process.env.REACT_APP_API_BACK_IMG + "/uploads/" + userData?.user?.picture : "../images/defaultProfilePic.jpg"}
                 alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-[10px] text-gray-900_02"
                  size="txtMontserratRomanMedium10"
                >
                  Store
                </Text>
                <Text
                  className="text-gray-600_01 text-sm"
                  size="txtMontserratRomanSemiBold14"
                >
                  {userData.user.businessName}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-56">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <div  
                  onClick={() => handleItemClick("Homepage")}
                  className={` flex flex-row gap-[19px] items-center justify-start p-1.5 rounded-lg w-full ${
                    itemvalue === "Homepage" ? "bg-red-300_2b" : ""
                  }`}
                >
                  <Img
                    className="h-3.5 ml-1 w-3.5"
                    src="../images/img_home_gray_600_03.svg"
                    alt="home"
                  />
                  <Text
                    className="mt-[3px] text-[13px] text-gray-900_02"
                    size="txtMontserratRomanMedium13Gray60003"
                  >
                    Homepage
                  </Text>
                </div>
                <div
                  onClick={() => handleItemClick("PresProduitPage")}
                  className={` flex flex-row gap-[19px] items-center justify-start p-1.5 rounded-lg w-full ${
                    itemvalue === "PresProduitPage" ? "bg-red-300_2b" : ""
                  }`}
                >
                  <Img
                    className="h-5 w-5"
                    src="../images/img_20pxtag.svg"
                    alt="20pxtag"
                  />
                  <Text
                    className="text-[13px] text-gray-900_02 w-auto"
                    size="txtMontserratRomanMedium13Gray90002"
                  >
                    Products
                  </Text>
                </div>
                <div
                  onClick={() => handleItemClick("PresorderPage")}
                  className={` flex flex-row gap-[19px] items-center justify-start p-1.5 rounded-lg w-full ${
                    itemvalue === "PresorderPage" ? "bg-red-300_2b" : ""
                  }`}
                >
                  <Img
                    className="h-5 w-5"
                    src="../images/img_20pxcart.svg"
                    alt="20pxcart"
                  />
                  <Text
                    className="text-[13px] text-gray-900_02 w-auto"
                    size="txtMontserratRomanMedium13Gray60003"
                  >
                    Orders
                  </Text>
                </div>
                <div onClick={() => handleItemClick("PresMediaPage")} className={` flex flex-row gap-[19px] items-center justify-start p-1.5 rounded-lg w-full ${
                    itemvalue === "PresMediaPage" ? "bg-red-300_2b" : ""
                  }`}>
                  <Img
                    className="h-[19px] w-[19px]"
                    src="../images/img_grid.svg"
                    alt="grid"
                  />
                  <Text
                    className="text-[13px] text-gray-900_02 w-auto"
                    size="txtMontserratRomanMedium13Gray60003"
                  >
                    Media
                  </Text>
                </div>
                <div onClick={() => handleItemClick("Balence")}  className={` flex flex-row gap-[19px] items-center justify-start p-1.5 rounded-lg w-full ${
                    itemvalue === "Balence" ? "bg-red-300_2b" : ""
                  }`}>
                  <Img
                    className="h-[17px] w-[17px]"
                    src="../images/img_thumbsup_gray_600_03.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-[13px] text-gray-900_02 w-auto"
                    size="txtMontserratRomanMedium13Gray60003"
                  >
                    Balance
                  </Text>
                </div>
                <div onClick={() => handleItemClick("Settings")} className={` flex flex-row gap-[19px] items-center justify-start p-1.5 rounded-lg w-full ${
                    itemvalue === "Settings" ? "bg-red-300_2b" : ""
                  }`}>
                <Img
                      className="cursor-pointer h-5  my-auto"
                      src="../images/img_search.svg"
                      alt="search"
                    />
                  <Text
                    className="text-[13px] pl-[0%] text-gray-900_02 w-auto"
                    size="txtMontserratRomanMedium13Gray60003"
                  >
                    Settings
                  </Text>
                </div>
              
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
