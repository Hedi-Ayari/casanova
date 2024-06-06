import React, { useState, useRef, useEffect } from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import { useForm } from "react-hook-form";
import { useCreateImage, useUpdate } from "../../utils/functions";

const PresSettingsPage = ({ userData }) => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const CreateIamge = useCreateImage();
  const update = useUpdate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleBrowseClick = () => {

    fileInputRef.current.click();
  };
  const handleFileChange = async (e) => {
    const formData = new FormData();
    const fileList = e.target.files;
    const allowedTypes = ["image/jpeg", "image/png"];
    const newFiles = Array.from(fileList).filter((file) =>
      allowedTypes.includes(file.type)
    );

    await formData.append("userId", userData.user._id);
    await formData.append("type", "images");
    await formData.append("utility", "profilePic");
    await formData.append("file", newFiles[0]);

    try {
      const response = await CreateIamge(formData);
      setImage(response.file.filename);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
  const onSubmit =async (data) => {
    if(data.confimr_password!==data.password){
      alert("Confirm password invalide")
    }else{
      const response = await update(userData.user._id,data)
      if(response.status==200){
       }else{
        alert("Error")
      }
    }
  };
  return (
    <>
      <div className="flex m-auto w-full">
        <div className="flex m-auto w-full justify-center  w-[100%]">
          <div className="bg-white-A700   border-solid flex flex-col items-start justify-end my-auto p-2 py-5 z-[1]">
            <Text
              className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
              size="txtInterSemiBold24"
            >
              Store information
            </Text>
            <div className="flex flex-row gap-3.5 items-center justify-start mt-[35px] w-[26%] md:w-full">
              <div className="md:h-[53px] h-[60px] relative w-[30%]">
                <div className="absolute bg-white-A700 flex flex-col gray_600_01_blue_gray_900_63_border2 h-[53px] inset-x-[0] items-center justify-start mx-auto outline outline-[1px] rounded-[26px] top-[0] w-[53px]">
                  {image ? (
                    <Img
                      className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
                      src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + image}
                      alt={image}
                    />
                  ) : (
                    userData.user.picture && (
                      <Img
                        className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
                        src={`${process.env.REACT_APP_API_BACK_IMG}/uploads/${userData.user.picture}`}

                        alt={userData.user.picture}
                      />
                    )
                  )}
                </div>
                <Button
                  className="absolute bottom-[0] flex items-center justify-center right-[0] rounded shadow-bs6 w-[21px]"
                  color="white_A700"
                  onClick={handleBrowseClick}
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="../images/img_edit_gray_600_03.svg"
                    alt="edit"
                  />
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  name="input_One"
                  className="hidden"
                  size="lg"
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                ></input>
              </div>
              <Text
                className="text-gray-900_02 text-xl"
                size="txtInterMedium20"
              >
                {userData.user.titel}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mt-[18px] pr-1 py-1 w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900_02 w-auto"
                  size="txtInterSemiBold16"
                >
                  <span className="text-gray-900_02 font-inter text-left font-semibold">
                    Details
                  </span>
                  <span className=" font-inter text-left font-semibold">*</span>
                </Text>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

            <Text
              className="mt-1 text-gray-600_03 text-sm"
              size="txtInterRegular14"
            >
              Change your details
            </Text>
            <Text className="mt-7  text-xs" size="txtInterSemiBold12Red400">
              Store title*
            </Text>
            <Input
                          register={register}
                          name="titel"
              placeholder="Store name"
              className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
              wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-[99%]"
              type="text"
              shape="round"
              color="gray_50"
              size="lg"
            ></Input>
            <div className="flex flex-row items-start justify-between mt-[33px] w-[100%] md:w-full">
              <Text
                className="text-gray-600_03 text-xs w-[45%]"
                size="txtInterSemiBold12"
              >
                Email
              </Text>
              <Text
                className="text-gray-600_03 text-xs w-[45%]"
                size="txtInterSemiBold12"
              >
                Numéro de téléphone
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-[9px] w-[99%] md:w-full">
              <Input
                name="email.primary"
                placeholder="Goure@gmail.com"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full w-[100%]"
                wrapClassName="border border-gray-200_01 border-solid rounded-lg md:w-full"
                type="email"
                register={register}
                width={"45%"}    
                shape="round"
                color="gray_50"
                size="lg"
              ></Input>
              <Input
                name="phone.primary"
                register={register}
                width={"45%"} 
                placeholder="+21635358"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full w-[100%]"
                wrapClassName="border border-gray-200_01 border-solid flex rounded-lg md:w-full"
                suffix={
                  <Img
                    className="h-4 ml-[0] my-px"
                    src="../images/img_arrowdown_gray_600_03.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="gray_50"
                size="lg"
              ></Input>
            </div>
            <Text
              className="mt-[27px]  text-xs"
              size="txtInterSemiBold12Red400"
            >
              Store Description*
            </Text>
            <TextArea
            register={register}

              className="bg-gray-50 border border-gray-200_01 border-solid mt-[9px] pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-3 rounded-lg placeholder:text-blue_gray-300 text-blue_gray-300 text-left text-sm w-[99%] sm:w-full"
              name="description"
              placeholder="Store description"
            ></TextArea>
            <div className="flex flex-row sm:gap-10 items-center justify-between ml-1 md:ml-[0] mt-[38px] w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900_02 w-auto"
                  size="txtInterSemiBold16"
                >
                  <span className="text-gray-900_02 font-inter text-left font-semibold">
                    Mot de passe
                  </span>
                  <span className=" font-inter text-left font-semibold">*</span>
                </Text>
              </div>
              <Button
                className="flex h-[45px] items-center justify-center rotate-[-45deg] rounded-lg w-[45px]"
                size="sm"
              >
                <Img
                  className="h-7"
                  src="../images/img_20pxplus.svg"
                  alt="20pxplus"
                />
              </Button>
            </div>
            <Line className="bg-gray-200_01 h-px ml-1 md:ml-[0] mt-[9px] w-[99%]" />
            <Text
              className="ml-1 md:ml-[0] mt-[42px] text-gray-600_03 text-xs"
              size="txtInterSemiBold12"
            >
              Mot de passe
            </Text>
            <Input
              name="password"
              register={register}
              type="password"


              placeholder="********"
              className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
              wrapClassName="border border-gray-200_01 border-solid ml-1 md:ml-[0] mt-[9px] rounded-lg w-[99%]"
              shape="round"
              color="gray_50"
              size="lg"
            ></Input>
            <Text
              className="ml-1 md:ml-[0] mt-[27px] text-gray-600_03 text-xs"
              size="txtInterSemiBold12"
            >
              Confirmer Mot de passe
            </Text>
            <Input
              name="confimr_password"
              register={register}
                type="password"
              placeholder="********"
              className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
              wrapClassName="border border-gray-200_01 border-solid ml-1 md:ml-[0] mt-[9px] rounded-lg w-[99%]"
              shape="round"
              color="gray_50"
              size="lg"
            ></Input>
            <div className="flex flex-row gap-2 items-center justify-end md:ml-[0] ml-[532px] mt-[52px] w-auto">
              <Button
                className="border border-gray-200_01 border-solid cursor-pointer font-medium min-w-[90px] rounded-lg text-[13px] text-center"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                No, cancel
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[87px] rounded-lg text-[13px] text-center"
                color="gray_600_01"
                type="submit"

                size="sm"
                variant="fill"
              >
                Confirmer
              </Button>

            </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default PresSettingsPage;
