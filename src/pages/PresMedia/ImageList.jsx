import React, { useState, useRef,useEffect } from "react";
import { Button, Img, List, Text } from "components";
import { useCreateImage,useDeleteFile } from "../../utils/functions";
import ProgressBar from "@ramonak/react-progress-bar";

const ImageList = ({userData}) => {
  const [imageProgress,setImageProgress] = useState(0)
  const handleUploadProgress = (progressEvent) => {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    setImageProgress(percentCompleted)
    console.log(`Upload Progress: ${percentCompleted}%`);
    // You can update progress UI here if needed
  };
  const [filesList, setFilesList] = useState([]);
  const fileInputRef = useRef(null);
  const CreateIamge = useCreateImage();
  const DeleteImage =useDeleteFile()
  const [files, setFiles] = useState([]);
  useEffect(() => {
    if (userData.user && userData.user.files) {
      setFiles([...userData.user.files.images, ...files]);
    }
  }, [userData.user]);
  const handleFileChange = async (e) => {
    const formData = new FormData();
    const fileList = e.target.files;
    const allowedTypes = ["image/jpeg", "image/png"];
    const newFiles = Array.from(fileList).filter((file) =>
      allowedTypes.includes(file.type)
    );
   
    
    await formData.append("userId", userData.user._id);
    await formData.append("type", "images");
    await formData.append("file", newFiles[0]);

    //setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    try {
      const response = await CreateIamge(formData,handleUploadProgress);
      if (response && response.file && response.file.filename) {
        setFiles((prevFiles) => [...prevFiles, response.file.filename]);
      }
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  const handleRemoveFile = async (indexToRemove, fileName) => {
    try {
      const response = await DeleteImage(fileName,userData.user._id,"image");
      if (response.status==200) {
        setFiles((prevFiles) =>
          prevFiles.filter((file, index) => index !== indexToRemove)
        );
      } else {
        console.error('Error deleting file:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting file:', error.message);
    }
  };


  return (
    <>
      <Text
        className="md:ml-[0] ml-[102px] mt-1 text-gray-600_03 text-sm"
        size="txtMontserratRomanRegular14Gray60003"
      >
        Used to represent your product during checkout, social sharing and more.
      </Text>
      <div className="w-[10%] pt-[5%]">
                      {imageProgress!=0 &&  imageProgress!=100 ? 
                      (<> <ProgressBar  
                        bgColor={"#a57761d9"}
                      completed={imageProgress} />
                      </>):
                      (<></>)

                      }

                      </div>
      <div className="border border-blue_gray-100_01 border-dashed flex flex-col font-inter gap-[5px] items-center justify-end md:ml-[0] ml-[102px] mt-[25px] p-[19px] rounded-lg">
        <Text
          className="text-center text-gray-600_03 text-sm"
          size="txtInterRegular14"
        >
          <span className="text-gray-600_03 font-inter font-normal">
            Drop your file here, or{" "}
          </span>
          <span
            onClick={handleBrowseClick}
            className="text-red-300 font-inter font-medium"
          >
            click to browse
          </span>
        </Text>
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
        <Text
          className="text-center text-gray-600_03 text-sm"
          size="txtInterRegular14"
        >
          1200 x 1600 (3:4) recommended
        </Text>
      </div>
      <Text
        className="md:ml-[0] ml-[102px] mt-[60px] text-gray-600_03 text-sm"
        size="txtMontserratRomanRegular14Gray60003"
      >
        You can have as many files as you want. We even support GIF and video.
      </Text>
      <List
        className="flex flex-col font-inter gap-6 items-start mt-[25px] w-auto"
        orientation="vertical"
      >
        {files.map((fileName, index) => (
          <div
            key={index}
            className="bg-white-A700 flex flex-col items-center justify-start px-2 rounded-lg w-full"
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
              <Button
                className="flex h-8 items-center justify-center rounded-lg w-8"
                size="xs"
              >
                <Img
                  className="h-5"
                  src="../images/img_20pxgrip.svg"
                  alt="20pxgrip"
                />
              </Button>
              <div className="flex flex-col h-16 items-center justify-start ml-2 md:ml-[0] px-2 w-16">
              <Img className="h-16 md:h-auto object-cover rounded-lg w-full" src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + fileName} alt={fileName} />

              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start ml-6 md:ml-[0]">
                <Text
                  className="text-gray-900_02 text-sm"
                  size="txtInterRegular14Gray90002"
                >
                  {fileName}
                </Text>
              
              </div>
              <Button
                className="flex h-8 items-center justify-center md:ml-[0] ml-[150px] rounded-lg w-8"
                size="xs"
                onClick={() => handleRemoveFile(index,fileName)}
              >
                <Img
                  className="h-5"
                  src="../images/img_arrowright_gray_600_03.svg"
                  alt="arrowright"
                />
              </Button>
            </div>
          </div>
        ))}
      </List>
    </>
  );
};

export default ImageList;
