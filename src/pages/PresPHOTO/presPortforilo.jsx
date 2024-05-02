import React, { useState } from "react";
import { Img, Text, Line,Button,RatingBar } from "components";
import { useNavigate } from "react-router-dom";

const PresPortfolio = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState("PHOTOS");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate()
  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(process.env.REACT_APP_API_BACK + "/uploads/" + videoUrl);
  };
  const handleProductClick = (product) => {
    navigate(`/productdetailpage/${product._id}`);
  };
  
  return (
    <div className="flex flex-col items-center justify-start mt-3.5 w-[65%] md:w-full">
    <div className="flex pl-[2%] flex-row md:gap-5 items-center justify-start w-full">
      <Text
        className={`text-center pr-[3%] text-lg ${
          selectedTab === "PHOTOS" ? "text-red-300" : "text-gray-400_02"
        }`}
        size="txtCormorantBold18Gray40002"
        onClick={() => setSelectedTab("PHOTOS")}
      >
        PHOTOS
      </Text>
      <Text
        className={`md:ml-[23px] pr-[3%] text-center text-lg ${
          selectedTab === "VIDEOS" ? "text-red-300" : "text-gray-400_02"
        }`}
        size="txtCormorantBold18Gray40002"
        onClick={() => setSelectedTab("VIDEOS")}
      >
        VIDEOS
      </Text>
      <Text
        className={`text-center text-lg ${
          selectedTab === "Products" ? "text-red-300" : "text-gray-400_02"
        }`}
        size="txtCormorantBold18Gray40002"
        onClick={() => setSelectedTab("Products")}
      >
        PRODUCTS
      </Text>
    </div>
    <div className="flex flex-col mt-3 relative w-full">
      <Line className="bg-red-300_1c h-px mx-auto w-full" />
    </div>
    <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center ml-[2%] mt-[3%] min-h-[auto] w-full">
      {selectedTab === "PHOTOS" ? (
        <>
          {user.files.images.map((imageName, index) => (
            <Img
              key={index}
              className="flex-1 h-72 md:h-auto object-cover rounded-[14px] w-full"
              src={process.env.REACT_APP_API_BACK + "/uploads/" + imageName}
              alt={imageName}
            />
          ))}
        </>
      ) : selectedTab === "VIDEOS" ? (
        <>
          {user.files.videos.map((videoUrl, index) => (
            <div
              key={index}
              className="flex-1 h-50 w-80 md:h-auto object-cover rounded-[14px] w-full cursor-pointer relative"
              onClick={() => handleVideoClick(videoUrl)}
            >
              <Img
                className="h-full w-full"
                src="../images/image7.png"
                alt="video thumbnail"
              />
              <div className="absolute top-1/2 pl-[2%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Img
                  className="h-12 w-12"
                  src="../images/Play_Circle.png"
                  alt="play button"
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
           {user.products.map((product, index) => (
               <div key={index} className="h-[336px] relative w-full" onClick={() => handleProductClick(product)}>
               <div className="absolute h-[336px] inset-[0] justify-center m-auto w-full">
                 <Img
                   className="h-[336px] m-auto object-cover rounded-[14px] w-full"
                   src={process.env.REACT_APP_API_BACK+"/uploads/"+product.image[0]}
                   alt="product Image"
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
               <div className="absolute bg-gray-100_e5 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[17px] rounded-bl-[13px] rounded-br-[11px] rounded-tr-[57px] w-full">
                 <div className="flex flex-col gap-[11px] items-start justify-start ml-1.5 md:ml-[0] w-[76%] md:w-full">
                   <div className="flex flex-col font-cormorant items-center justify-start">
                     <Text
                       className="text-black-900 text-lg  md:text-[18px]"
                       size="txtCormorantBold18"
                     >
                       {product.title}
                     </Text>
                   </div>
                   <div className="flex flex-col font-montserrat items-center justify-start w-full">
                     <div className="flex flex-row items-start  w-full">
                       <Text
                         className="text-black-900 text-xs tracking-[0.60px]"
                         size="txtMontserratRegular12"
                       >
                         {product.category}
                       </Text>
                       <RatingBar
                         className="flex justify-between my-0.5 rounded-[1px] w-14"
                         value={0}
                         starCount={5}
                         color="#c3937c"
                         activeColor="#c3937c"
                         size={12}
                       />
                       <Text
                         className="text-black-900 text-xs"
                         size="txtMontserratRegular12"
                       >
                         <span className="text-black-900 font-calistoga text-left font-normal">
                           {0}/{" "}
                         </span>
                         <span className="text-red-300 font-calistoga text-left font-normal">
                           5
                         </span>
                       </Text>
                     </div>
                   </div>
                   <Text
                     className="text-black-900 text-lg"
                     size="txtCalistogaRegular18"
                   >
                     {product.price}
                   </Text>
                 </div>
               </div>
             </div>
           
          ))}
            </>
      )}
    </div>
    {selectedVideo && (
      <video className="mt-4" controls>
        <source src={selectedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
  );
};

export default PresPortfolio;
