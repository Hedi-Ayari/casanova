import React,{useEffect, useState} from "react";
import { Text } from "components";
import ImageList from "./ImageList";
import {useGetUser } from "../../utils/functions";
import { User } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";

import VideoList from "./VideoList";
const PresMediaPage = () => {
  const [user] = useRecoilState(User);
  const[userData,setUser]= useState()
  const GetUser = useGetUser();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userData = await GetUser(user);
        setUser(userData);
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchUser();
  }, []);
  if(userData){
    return (
      <>
        <div className="flex m-auto w-full">
          <div className="flex m-auto w-full justify-center  w-[100%]">
            <div className="bg-white-A700   border-solid flex flex-col items-start justify-end w-[100%]  my-auto p-2 py-5 z-[1]">
              <Text
                className="md:ml-[0] ml-[102px] mt-[30px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                size="txtMontserratRomanSemiBold24"
              >
                Telecharger votre media
              </Text>
              <div className="flex flex-row font-inter sm:gap-10  justify-between md:ml-[0] ml-[102px] mt-7 w-[78%] md:w-full">
                <div className="flex flex-col  justify-start w-auto">
                  <Text
                    className="text-base text-gray-900_02 w-auto"
                    size="txtInterSemiBold16"
                  >
                    Photo
                  </Text>
                  <ImageList userData={userData}></ImageList>
                </div>
              </div>
              <br></br>
              <div className="h-px w-[50%]bg-gray-300" />
              <div className="flex flex-row font-inter sm:gap-10 items-center justify-between md:ml-[0] ml-[102px] mt-[37px] w-[78%] md:w-full">
                <div className="flex flex-col  justify-start w-auto">
                  <Text
                    className="text-base text-gray-900_02 w-auto"
                    size="txtInterSemiBold16"
                  >
                    Video
                  </Text>
                  <VideoList userData={userData}></VideoList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }else{
    return(
      <></>
    )
  }
 
};

export default PresMediaPage;
