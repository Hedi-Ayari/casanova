import React, { useState, useRef, useEffect } from "react";
import { useCreateImage, useUpdate } from "../../utils/functions";
import { useGetUser } from "../../utils/functions";
import { User } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomToast from "../../components/toast";
import toast from "react-hot-toast";
import ProgressBar from "@ramonak/react-progress-bar";
import "./style.css"
import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const USERSETTINGPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user] = useRecoilState(User);
  const [userData, setUser] = useState();
  const GetUser = useGetUser();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userData = await GetUser(user);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchUser();
  }, []);
  const CreateIamge = useCreateImage();

  const fileInputRef = useRef(null);
  const [imageProgress, setImageProgress] = useState(0)
  const [image, setImage] = useState(userData?.user?.picture || null);
  const [newImage, setImageChanged] = useState(null);

  const update = useUpdate();
  const handleUploadProgress = (progressEvent) => {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    setImageProgress(percentCompleted)
    console.log(`Upload Progress: ${percentCompleted}%`);
    // You can update progress UI here if needed
  };

  const handleFileChange = async (e) => {
    const formData = new FormData();
    const fileList = e.target.files;
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const newFiles = Array.from(fileList).filter((file) =>
      allowedTypes.includes(file.type)
    );

    await formData.append("userId", userData.user._id);
    await formData.append("type", "images");
    await formData.append("utility", "profilePic");
    await formData.append("file", newFiles[0]);

    try {
      const response = await CreateIamge(formData, handleUploadProgress);
      setImageChanged(response.file.filename);
      window.location.reload();
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {

      toast.custom(
        (t) => (
          <CustomToast
            data={t}
            message="Confirm password invalide"
            title="Error"
          ></CustomToast>
        ),
        {
          duration: 3000,
        }
      );
      if (data.password.length < 8) {
        toast.custom(
          (t) => (
            <CustomToast
              data={t}
              message="password 8 caractères ou plus"
              title="Error"
            ></CustomToast>
          ),
          {
            duration: 3000,
          }
        );
      }
    } else {
      if (data.name == "") {
        data.name = userData?.user?.name
      }
      if (data.email == "") {
        data.email = {
          primary: userData?.user?.email?.primary,
        };
      } else {
        data.email = {
          primary: data.email,
        };
      }

      console.log(data)
      const response = await update(userData.user._id, data);
      if (response.status === 200) {
        window.location.reload();
      } else {
        toast.custom(
          (t) => (
            <CustomToast data={t} message="Error" title="Error"></CustomToast>
          ),
          {
            duration: 3000,
          }
        );
      }
    }
  };

  if (userData) {
    return (
      <>
        <NavBar></NavBar>

        <div className="bg-white-A700 flex flex-col font-cormorant items-center justify-end mx-auto pt-[37px] w-full">
          <div className="flex flex-col md:gap-10 md:gap-[20px] gap-[20px] items-center justify-start w-full ">
            <form className="w-[75%] md:w-[100%] md:mt-6 " onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-start justify-start max-w-[1241px] md:w-[95%] md:max-w-[95%] mx-auto md:p-0 w-full ">
                <Text
                  className="mt-16 md:hideden sm:text-[23.38px] md:hidden md:text-[25.38px] text-[27.38px] text-red-300"
                  size="txtCormorantSemiBold2738"
                >
                  PARAMÈTRES
                </Text>
                <div className="bg-gray-600_01 flex md:flex-col md:hidden flex-row md:gap-5 h-[50px] items-center justify-start mt-8 sm:px-5 px-[30px] w-full">
                  <Text
                    className="text-lg text-white-A700 w-[35%]"
                    size="txtCormorantBold18WhiteA700"
                  >
                    IMAGE DE PROFILE{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[42px] text-lg text-white-A700  w-[65%]"
                    size="txtCormorantBold18WhiteA700"
                  >
                    INFORMATIONS DE BASE
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full  border-solid-grey">

                  <div className="flex flex-col gap-[19px] items-center justify-start w-[35%] md:w-[100%] md:w-full">
                    <div className="flex flex-col gap-8 items-center justify-start md:gap-3 w-[30%] md:w-full py-6 md:py-3 md:py-2">
                      <div className="h-[151px] relative w-[151px]">
                        <Img
                          className="absolute h-[151px] inset-[0] justify-center m-auto rounded-[70%] w-[151px]"
                          style={{ border: "2px solid #a57761" }}
                          src={
                            userData?.user?.picture && !newImage
                              ? `${process.env.REACT_APP_API_BACK}/uploads/${userData?.user?.picture}`
                              : newImage
                                ? `${process.env.REACT_APP_API_BACK}/uploads/${newImage}`
                                : "../images/img_httpswwwpex.png"
                          }
                          alt="profile_picture"
                        />
                      </div>
                      <Text
                        className="sm:text-[27px] md:text-[29px] text-[31px] text-black-900"
                        size="txtCormorantBold31"
                      >
                        {userData.user.name ? (
                          <><p>{userData.user.name} {userData?.user?.famillyName}</p></>
                        ) : (
                          <>{userData.user.name}</>
                        )}
                      </Text>
                      <div className="w-[100%]">
                        {imageProgress != 0 ?
                          (<> <ProgressBar
                            bgColor={"#a57761d9"}
                            completed={imageProgress} />
                          </>) :
                          (<></>)

                        }

                      </div>


                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Button
                        type="button"
                        className="cursor-pointer leading-[normal] min-w-[298px] rounded-[9px] text-center text-lg"
                        color="red_300"
                        size="sm"
                        variant="fill"
                        onClick={handleBrowseClick}
                      >
                        CHANGER L’IMAGE
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
                  </div>
                  <div className="flex flex-col md:pl-[0%] w-[65%] md:w-[100%] px-4 py-5 md:py-0 md:px-0 border-solid-grey-2 py-9">
                    <div className="relative w-[100%] md:w-full">
                      <div className=" mx-auto top-[4%] w-[100%]">
                          <div className=" md:hidden block w-[100%] py-3 md:py-2 md:w-full flex justify-between">
                            <div className="w-[48%]">
                              <Text className=" mb-2 text-black-900 text-sm" size="txtCormorantRegular14">PRÉNOM</Text>
                              <Input
                                name="name"
                                defaultValue={userData?.user?.name}
                                register={register}
                                placeholder=""
                                className="px-3 w-full"
                                wrapClassName="flex h-[35px]  w-full"
                                shape="round"
                                color="gray_300_01"
                                variant="outline"
                              />
                            </div>
                            <div className="w-[48%]">
                              <Text className=" mb-2 text-black-900 text-sm pl-[2%]" size="txtCormorantRegular14">NOM DE FAMILLE</Text>
                              <Input
                                name="famillyName"
                                defaultValue={userData?.user?.famillyName}
                                register={register}
                                placeholder=""
                                className="px-3 w-full"
                                wrapClassName="flex h-[35px]  w-full"
                                shape="round"
                                color="gray_300_01"
                                variant="outline"
                              />
                            </div>
                          </div>
            
                            <div className="w-[100%] md:block hidden py-3 md:py-2">
                              <Text className=" mb-2 text-black-900 text-sm" size="txtCormorantRegular14">PRÉNOM</Text>
                              <Input
                                name="name"
                                defaultValue={userData?.user?.name}
                                register={register}
                                placeholder=""
                                className="px-3 w-full"
                                wrapClassName="flex h-[35px]  w-full"
                                shape="round"
                                color="gray_300_01"
                                variant="outline"
                              />
                            </div>
                          <div className="w-[100%] w-[100%] md:block hidden py-3 md:py-2">
                              <Text className=" mb-2 text-black-900 text-sm pl-[2%]" size="txtCormorantRegular14">NOM DE FAMILLE</Text>
                              <Input
                                name="famillyName"
                                defaultValue={userData?.user?.famillyName}
                                register={register}
                                placeholder=""
                                className="px-3 w-full"
                                wrapClassName="flex h-[35px]  w-full"
                                shape="round"
                                color="gray_300_01"
                                variant="outline"
                              />
                            </div>
                        <div className="w-[100%] py-3 md:py-2">
                          
                          <Text className=" mb-2 text-black-900 text-sm" size="txtCormorantRegular14">EMAIL</Text>
                          <Input
                            defaultValue={userData?.user?.email?.primary}
                            name="email"
                            register={register}
                            placeholder=""
                            className="px-3 w-full"
                            wrapClassName="flex h-[35px]  w-full"
                            shape="round"
                            color="gray_300_01"
                            variant="outline"
                          />
                        </div>
                          <div className="w-[100%] py-3 md:py-2">

                      <Text className=" mb-2 text-black-900 text-sm" size="txtCormorantRegular14">NOUVEAU MOT DE PASSE</Text>
                      <Input
                        register={register}
                        name="password"
                        placeholder=""
                        className="px-3 w-full"
                        wrapClassName="flex h-[35px] w-full"
                        shape="round"
                        color="gray_300_01"
                        type="password"
                        variant="outline"
                      />
                          </div>
                        <div className=" mx-auto w-[100%] py-3 md:py-2">
                        <Text className="mb-2 text-black-900 text-sm" size="txtCormorantRegular14">CONFIRMER LE MOT DE PASSE</Text>
                      <Input
                        register={register}
                        type="password"
                        name="confirmPassword"
                        placeholder=""
                        className="px-3 w-full"
                        wrapClassName="flex h-[35px] w-full"
                        shape="round"
                        color="gray_300_01"
                        variant="outline"
                      />
                      <Text className="mt-[13px] text-gray-500 text-xs" size="txtPoppinsLight12">8 caractères ou plus. Combinez des lettres majuscules et minuscules ainsi que des chiffres.</Text>
                        </div>
                      <div className="flex flex-row gap-[9px] items-center justify-end md:ml-[0]  mt-[37px] md:w-full">
                        <Button
                          type="button"
                          className="cursor-pointer font-poppins leading-[normal] min-w-[137px] md:w-[49%] rounded-md text-center text-xs"
                          color="black_900_3d"
                          size="sm"
                          variant="outline"
                          onClick={(e) => navigate("/category")}
                        >
                          ANNULER
                        </Button>
                        <Button
                          className="bg-red-300 h-10 justify-center pl-[34px] pr-[22px] sm:px-5 py-3 md:py-2 rounded-md text-white-A700 text-xs w-[137px]  md:w-[49%]"
                          type="submit"
                          size="sm"
                          variant="outline"
                        >
                          ENREGISTRER
                        </Button>
                      </div>
                    </div>
                      </div>
                    </div>
                    
            
                </div>

              </div>
            </form>
            <Footer></Footer>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default USERSETTINGPage;
