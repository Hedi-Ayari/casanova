import React, { useEffect, useState } from "react";
import { Img, Text, Line,Button,RatingBar } from "components";
import { useNavigate } from "react-router-dom";
import { CardItems } from "components/card-items/items";
import Width from "components/width/width";
import Flex from "components/Flex/flex";
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useMediaQuery } from "react-responsive";
const PresPortfolio = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState("PHOTOS");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate()
  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(process.env.REACT_APP_API_BACK_IMG + "/uploads/" + videoUrl);
  };
  const handleProductClick = (product) => {
    navigate(`/productdetailpage/${product._id}`);
  };

  const [open, setOpen] = React.useState(false);

  function handleChange(data){
    setOpen(data)
  }
  
  const handleOpen = (video) => {
    setOpen(true);
    setSelectedVideo(video)
  };
  
  return (
    <div className="flex flex-col items-center justify-start mt-3.5 w-[65%] md:w-full">
      <BasicModal videoUrl={selectedVideo} isOpen={open} handleChange={handleChange}/>
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
    <div className={"gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center ml-[2%] mt-[3%] min-h-[auto] w-full"}>
      {selectedTab === "PHOTOS" ? (
        <>
          {user.files?.images.length == 0 ?
          <div className="h-[100px] absolute  flex mx-auto w-[100%]">
            <Text className="text-[24px]"  size="txtCormorantBold18Gray40002">Pas de photo disponible pour ce vendeur</Text>
          </div>
          : user.files?.images?.map((imageName, index) => (
            <Img
              key={index}
              className="flex-1 h-72 md:h-auto object-cover rounded-[14px] w-full"
              src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + imageName}
              alt={imageName}
            />
          ))}
        </>
      ) : selectedTab === "VIDEOS" ? (
        <>
          { user.files?.videos.length == 0 ?
             <div className="h-[100px] absolute  flex mx-auto w-[100%]">
             <Text className="text-[24px]"  size="txtCormorantBold18Gray40002">Pas de video disponible pour ce vendeur</Text>
           </div>
          : user.files?.videos?.map((videoUrl, index) => (
            <Flex flex="between" className="h-[280px] w-full">
              <Width width={"100%"} className="h-[280px]"  onclick={e => handleOpen(videoUrl)}>

                <video className="mt-4" controls={false} width={"100%"} height={280} style={{background:"black",height:"280px"}}>
                  <source src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Width>
            </Flex>
          ))}
        </>
      ) : (
        <>
           { user.products.length == 0 ?
             <div className="h-[100px] absolute  flex mx-auto w-[100%]">
             <Text className="text-[24px]"  size="txtCormorantBold18Gray40002">Pas de produits disponible pour ce vendeur</Text>
           </div>
          :user.products.map((product, index) => (
              <CardItems product={product} />
           
          ))}
            </>
      )}
    </div>
 
  </div>
  );
};

export default PresPortfolio;


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000',
  boxShadow: 24,
};
function BasicModal({videoUrl,isOpen,handleChange}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);handleChange(false)};

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })


  useEffect(()=>{
    setOpen(isOpen)
  },[isOpen])
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,width:isTabletOrMobile? "90%" : "800px",height:isTabletOrMobile ? "80%" : "600px"}}>
          
          
          <video className="mt-4" controls={true} autoPlay={true} width={"100%"}  style={{background:"black",height:"100%"}}>
              <source src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </Box>
      </Modal>
  );
}