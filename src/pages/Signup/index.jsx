import React, { useState } from "react";
import { useRegisterUser } from "../../utils/functions";
import { Button, Img, Input, Line, SelectBox, Text } from "components";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import "./style.css";
import { useMediaQuery } from "react-responsive";
import toast from "react-hot-toast";
import CustomToast from "components/toast";
const categoryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Signup = () => {
  
  const [selectedOption, setSelectedOption] = useState("Client");

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [adresse, setAdresse] = useState();
  const[date,setDate]=useState()
  const [businessName, setBusniessName] = useState();
  const [category, setCategory] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [error, setError] = useState();
  const registerUser = useRegisterUser();
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;
  const phoneRegex = /^\d{8}$/;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Email Invalide");
      return;
    }
    if (!phoneRegex.test(phone)) {
      setError("Phone Number invalide");
      return;
    }
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    if (!adresse  || !selectedOption ) {
      console.log(date,adresse,selectedOption);
      setError("missing informations");
      return;
    }
    const user = {
      email: { primary: email },
      password,
      date,
      phone:{primary:phone},
      adresse,
      businessName,
      category,
      type: selectedOption,
    };
    try {

      const err = await registerUser(user);
      setError(err.data.error);

      if (err.status==200) {
        toast.custom(
          (t) => (
              <CustomToast
                  data={t}
                  message="Votre compte a été créer avec succés !"
                  title="Info"
              ></CustomToast>
          ),
          {
              duration: 2500,
          }
      );

      setTimeout(() => {
        navigate("/signIn");
      }, 3000);
      }

    } catch (error) {
        
      return;
    }
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 992px)'
  })

  return (
    <>
        {isMobile ?
        <div className="h-[100%]">
        <div className="flex justify-center items-center h-full">
          <div className="w-[100%] h-[100%] box-shadow-card rounded-lg relative">
            <div className="flex flex-col h-full w-full">
              <div className="py-10 px-3 bg-red-300 relative">
                <div className="w-[112px] h-[100px]">
                  <Img
                    className="object-cover w-[100%] h-[100%]"
                    src="../images/img_logo4white1.png"
                    alt="logo4whiteOne"
                    onClick={() => navigate('/homePage')}
                  />
                </div>

              </div>

              <div className="h-[70%] flex items-center justify-center h-full h-full">
                <div className="w-[90%] h-full">
                  <div className="bg-white-A700 h-full py-4">
                    <div className="mt-5 mb-3">
                    <Text
                      className=" sm:text-3xl md:text-[32px] text-[34px] font-black text-red-300 tracking-[2.72px]"
                      size="txtCormorantBold34"
                    >
                      CREATE VOTRE COMPTE 
                    </Text>
                    </div>
                    <br></br>
                    {error && (
                      <Stack sx={{ width: "100%" }} spacing={2}>
                        <Alert variant="outlined" severity="error">
                          {error}
                        </Alert>
                      </Stack>
                    )}
                    <div className="w-[100%] mt-5">
                    <Input
                      name="businessName"
                      onChange={(e) => setBusniessName(e)}
                      placeholder={
                        selectedOption === "Client" ? "Nom" : "Business name"
                      }
                      className="font-montserrat p-0 placeholder:text-gray-500 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                      wrapClassName=" mt-[35px] pr-[35px] w-[100%]"
                      color="gray_100_01"
                      size="xl"
                      variant="underline"
                    ></Input>
                    <Input
                      name="group427320494"
                      onChange={(e) => setEmail(e)}
                      placeholder="Email"
                      className="font-montserrat p-0 placeholder:text-gray-500 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                      wrapClassName=" mt-[35px] pr-[35px] w-[100%]"
                      color="gray_100_01"
                      size="xl"
                      variant="underline"
                    ></Input>
                    <Input
                      name="group427320494"
                      onChange={(e) => setAdresse(e)}
                      placeholder="Adresse"
                      className="font-montserrat p-0 placeholder:text-gray-500 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                      wrapClassName=" mt-[35px] pr-[35px] w-[100%]"
                      color="gray_100_01"
                      size="xl"
                      variant="underline"
                    ></Input>
                    <div className="flex sm:flex-col flex-row font-montserrat gap-5 items-end justify-center  mt-[27px] w-[100%] md:w-full">
                      <Input
                        onChange={(e) => setPhone(e)}
                        name="group427320495"
                        placeholder="+216"
                        className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                        wrapClassName="sm:mt-0 mt-2.5 pr-[35px] w-[100%] sm:w-full"
                        color="gray_100_01"
                        size="xl"
                        variant="underline"
                      ></Input>
                  
                    </div>
                    <Input
                      name="passsword"
                      placeholder="Password"
                      className="font-montserrat p-0 placeholder:text-gray-500 text-left text-sm tracking-[1.12px] w-full"
                      wrapClassName="flex  mt-[35px]  w-[100%]"
                      type="password"
                      color="gray_100_01"
                      size="sm"
                      onChange={(e) => setPassword(e)}
                      variant="underline"
                    ></Input>
                    <Input
                      name="group427320497"
                      placeholder="Confirm Password"
                      className="font-montserrat p-0 placeholder:text-gray-500 text-left text-sm tracking-[1.12px] w-full"
                      wrapClassName="flex  mt-[35px]  w-[100%]"
                      type="password"
                      color="gray_100_01"
                      onChange={(e) => setPasswordConfirm(e)}
                      size="sm"
                      variant="underline"
                    ></Input>
                    
                    <Button
                      className="cursor-pointer font-montserrat font-semibold min-w-[510px] sm:min-w-full md:ml-[0] mt-7 rounded-[5px] text-base text-center tracking-[1.28px]"
                      color="red_300"
                      size="md"
                      variant="fill"
                      onClick={handleSubmit}
                    >
                      Create Account
                    </Button>
                    <Text
                      className="mb-1 md:ml-[0]  mt-9 text-gray-500 text-align-center text-center text-sm tracking-[1.12px]"
                      size="txtPoppinsMedium14Gray400"
                    >
                      <span className="text-gray-500 font-montserrat  font-normal">
                        Already have an account?{" "}
                      </span>
                      <span
                        onClick={(e) => {
                          navigate("/SignIn");
                        }}
                        className="text-red-300 font-montserrat text-left font-normal"
                      >
                        Log In
                      </span>
                    </Text>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        : 
        <div className="h-[100vh]">
        <div className="flex justify-center items-center h-full">
          <div className="w-[75%] h-[100%] box-shadow-card rounded-lg relative">
            <div className="flex h-full">
              <div className="w-[30%] h-full bg-red-300 relative">
                <div className="w-[112px] h-[100px] absolute top-[5%] left-[10%]">
                  <Img
                    className="object-cover w-[100%] h-[100%]"
                    src="../images/img_logo4white1.png"
                    alt="logo4whiteOne"
                    onClick={() => navigate('/homePage')}
                  />
                </div>
                <div className="flex justify-center items-center h-[100%]">
                  <Text
                    className="text-white-A700 ml-5 sm:text-3xl md:text-[32px] text-[34px] tracking-[2.72px]"
                    size="txtCormorantBold34"
                  >Nous planifierons votre journée, à votre façon.</Text>
                </div>

              </div>

              <div className="w-[70%] flex items-center justify-center h-full h-full">
                <div className="bg-white-A700 w-[65%] ">
                  <div className="mb-5">
                  <Text
                    className=" sm:text-3xl md:text-[32px] text-[34px] font-black text-red-300 tracking-[2.72px]"
                    size="txtCormorantBold34"
                  >
                    CREER VOTRE COMPTE 
                  </Text>
                  </div>
                  <br></br>
                  {error && (
                    <Stack sx={{ width: "100%" }} spacing={2}>
                      <Alert variant="outlined" severity="error">
                        {error}
                      </Alert>
                    </Stack>
                  )}
                  <div className="w-[100%] mt-5">
                  <Input
                    name="businessName"
                    onChange={(e) => setBusniessName(e)}
                    placeholder={
                      selectedOption === "Client" ? "Nom" : "Business name"
                    }
                    className="font-montserrat p-0 placeholder:text-gray-500 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                    wrapClassName=" mt-[35px] pr-[35px] w-[100%]"
                    color="gray_100_01"
                    size="xl"
                    variant="underline"
                  ></Input>
                  <Input
                    name="group427320494"
                    onChange={(e) => setEmail(e)}
                    placeholder="Email"
                    className="font-montserrat p-0 placeholder:text-gray-500 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                    wrapClassName=" mt-[35px] pr-[35px] w-[100%]"
                    color="gray_100_01"
                    size="xl"
                    variant="underline"
                  ></Input>
                  <Input
                    name="group427320494"
                    onChange={(e) => setAdresse(e)}
                    placeholder="Adresse"
                    className="font-montserrat p-0 placeholder:text-gray-500 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                    wrapClassName=" mt-[35px] pr-[35px] w-[100%]"
                    color="gray_100_01"
                    size="xl"
                    variant="underline"
                  ></Input>
                  <div className="flex sm:flex-col flex-row font-montserrat gap-5 items-end justify-center  mt-[27px] w-[100%] md:w-full">
                    <Input
                      onChange={(e) => setPhone(e)}
                      name="group427320495"
                      placeholder="+216"
                      className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-sm tracking-[1.12px] w-full"
                      wrapClassName="sm:mt-0 mt-2.5 pr-[35px] w-[100%] sm:w-full"
                      color="gray_100_01"
                      size="xl"
                      variant="underline"
                    ></Input>
                 
                  </div>
                  <Input
                    name="passsword"
                    placeholder="Password"
                    className="font-montserrat p-0 placeholder:text-gray-500 text-left text-sm tracking-[1.12px] w-full"
                    wrapClassName="flex  mt-[35px]  w-[100%]"
                    type="password"
                    color="gray_100_01"
                    size="sm"
                    onChange={(e) => setPassword(e)}
                    variant="underline"
                  ></Input>
                  <Input
                    name="group427320497"
                    placeholder="Confirm Password"
                    className="font-montserrat p-0 placeholder:text-gray-500 text-left text-sm tracking-[1.12px] w-full"
                    wrapClassName="flex  mt-[35px]  w-[100%]"
                    type="password"
                    color="gray_100_01"
                    onChange={(e) => setPasswordConfirm(e)}
                    size="sm"
                    variant="underline"
                  ></Input>
                  
                  <Button
                    className="cursor-pointer font-montserrat font-semibold min-w-[510px] sm:min-w-full md:ml-[0] mt-7 rounded-[5px] text-base text-center tracking-[1.28px]"
                    color="red_300"
                    size="md"
                    variant="fill"
                    onClick={handleSubmit}
                  >
                    Create Account
                  </Button>
                  <Text
                    className="mb-1 md:ml-[0]  mt-9 text-gray-500 text-align-center text-center text-sm tracking-[1.12px]"
                    size="txtPoppinsMedium14Gray400"
                  >
                    <span className="text-gray-500 font-montserrat  font-normal">
                      Already have an account?{" "}
                    </span>
                    <span
                      onClick={(e) => {
                        navigate("/SignIn");
                      }}
                      className="text-red-300 font-montserrat text-left font-normal"
                    >
                      Log In
                    </span>
                  </Text>
                  </div>

                </div>
              </div>
            </div>
            <div className="w-[289px] absolute bottom-[2%] left-[15%]">

              <Img
                className="object-contain w-[100%] h-[100%]"
                src="../images/img_91231converti_289x355.png"
                alt="91231converti_Eight"
              />
            </div>
          </div>
        </div>
      </div>
        }
        
    </>
  );
};

export default Signup;
