import React, { useState } from "react";
import { useLoginUser } from "../../utils/functions";
import { Button, Img, Input, Line, SelectBox, Text } from "components";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./style.css"
const categoryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PresSignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const LogginUser = useLoginUser();
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;
  const [error, setError] = useState();

  const handleSubmit = async () => {
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Email Invalide");
      return;
    }
    const user = {
      email: { primary: email },
      password,
    };
    try {
      const err = await LogginUser(user);
      setError(err);
      if (!err) {
        
        navigate("/Dashboard");
      }
    } catch (error) {
      return;
    }
  };

  return (
    <>
   <div className=" flex flex-col font-cormorant sm:gap-10 md:gap-10 gap-[69px] items-center justify-end mx-auto md:pt-[0%] pt-[55px] w-full">
        <div className=" h-[100%] relative w-full">
        <div className="bg-red-300  md:h-[100vh] inset-x-[0] mx-auto rounded-[2px] shadow-bs3 top-[0%] w-[81%] md:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full md:h-[100%]">
              <div className="flex md:flex-col  md:h-[100%] flex-row md:gap-5 md:items-center items-start justify-evenly w-full">
              <div className="md:h-[20%] relative w-[37%] md:w-full py-4">
                
                  <div className="flex flex-col md:gap-10 gap-[116px] inset-x-[0] items-start justify-start mx-auto  w-3/4">
                    <Img
                      className="h-[100px] md:h-[50px] md:h-auto object-cover md:w-[50px] w-[36%]"
                      src="../images/img_logo4white1.png"
                      alt="logo4whiteOne"
                      onClick={() => navigate('/homePage')}
                    />
                    <Text
                      className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 uppercase w-full"
                      size="txtCormorantRegular42WhiteA700"
                    >
                      
                      Se connecter 
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 h-[80%] flex md:flex-1 flex-col md:p-[3%] items-start md:justify-center justify-start p-[190px] md:px-10 sm:px-5 rounded-sm w-[70%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[62px] sm:text-3xl md:text-[32px] text-[34px] text-red-300 tracking-[2.72px]"
                    size="txtCormorantBold34"
                  >
                   Vous avez un compte ? Connectez vous.
                  </Text>
                  <br></br>
                  {error && (
                    <Stack sx={{ width: "100%" }} spacing={2}>
                      <Alert variant="outlined" severity="error">
                        {error}
                      </Alert>
                    </Stack>
                  )}
                  <Input
                    name="group427320494"
                    onChange={(e) => setEmail(e)}
                    placeholder="Email"
                    className="font-montserrat p-0 placeholder:text-gray-500 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                    wrapClassName="md:ml-[0] ml-[65px] mt-[35px] pr-[35px] w-[82%]"
                    color="gray_100_01"
                    size="xl"
                    variant="underline"
                  ></Input>

                  <Input
                    name="passsword"
                    placeholder="Password"
                    className="font-montserrat p-0 placeholder:text-gray-500 text-left text-sm tracking-[1.12px] w-full"
                    wrapClassName="flex md:ml-[0] ml-[65px] mt-[35px] pr-[5px] w-[82%]"
                    type="password"
                    color="gray_100_01"
                    size="sm"
                    onChange={(e) => setPassword(e)}
                    variant="underline"
                  ></Input>

                  <Button
                    className="cursor-pointer font-montserrat font-semibold min-w-[510px] sm:min-w-full md:ml-[0] ml-[65px] mt-7 rounded-[5px] text-base text-center tracking-[1.28px]"
                    color="red_300"
                    size="md"
                    variant="fill"
                    onClick={handleSubmit}
                  >
                    Sign In
                  </Button>
                  
                  <Text
                    className="mt-9 text-gray-500 text-sm mx-auto tracking-[1.12px]"
                    size="txtPoppinsMedium14Gray400"
                    
                  >
                    <span className="text-gray-500 font-montserrat text-left font-normal">
                      You don't have account?{" "}
                    </span>
                    <span
                      onClick={(e)=>{navigate("/Pressignup")}}
                      className="text-red-300 font-montserrat text-left font-normal"
                    >
                      Register
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="responsiveIm absolute bottom-[3%] h-[35%] left-[22%]  w-[25%]"
              src="../images/img_91231converti_289x355.png"
              alt="91231converti_Eight"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PresSignIn;
