import React, { useState } from "react";
import { useRegisterUser } from "../../utils/functions";
import { Button, Img, Input, Line, SelectBox, Text } from "components";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import "./style.css";
const categoryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PresSignup = () => {
  const [selectedOption, setSelectedOption] = useState("Prestataire");

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
      console.log(err);
      if (err.status==200) {
        navigate("/PresSignIn");
      }
    } catch (error) {
        
      return;
    }
  };

  return (
    <>
      <div className="">
  
        <div className="md:h-[100%] h-[890px] relative w-full">
          <div className="bg-red-300  h-[100%] inset-x-[0] mx-auto rounded-[2px] shadow-bs3 top-[0%] w-[81%] md:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <div className="h-[940px] md:h-[100%] relative w-[37%] md:w-full">
                  <div className="flex py-5 flex-col md:gap-10 gap-[116px] inset-x-[0] items-start justify-start mx-auto top-[5%] w-3/4">
                    <Img
                      className="h-[100px] md:h-auto object-cover w-[36%]"
                      src="images/img_logo4white1.png"
                      alt="logo4whiteOne"
                      onClick={() => navigate('/homePage')}
                    />
                    <Text
                      className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 uppercase w-full"
                      size="txtCormorantRegular42WhiteA700"
                    >
                      Are you ready to join us ?
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center h-[100%] justify-start p-[53px] md:px-10 sm:px-5 rounded-sm w-[100%] md:w-full">
                  <Text
                    className=" sm:text-3xl md:text-[32px] text-[34px] text-red-300 tracking-[2.72px]"
                    size="txtCormorantBold34"
                  >
                    CREATE ACCOUNT
                  </Text>
               
                  {error && (
                    <Stack sx={{ width: "100%" }} spacing={2}>
                      <Alert variant="outlined" severity="error">
                        {error}
                      </Alert>
                    </Stack>
                  )}
                  <div className="w-[90%] mt-5">
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
                    <div className="flex flex-col items-center justify-start w-[102%] border-none sm:w-full">
                      {selectedOption != "Client" && (
                        <>
                          <SelectBox
                            className="text-gray-500 text-left text-sm tracking-[1.12px] w-full"
                            placeholderClassName="text-gray-500"
                            indicator={
                              <Img
                                className="h-[38px] mr-[0] w-[38px]"
                                src="images/img_arrowdown_black_900.svg"
                                alt="arrow_down"
                              />
                            }
                            onChange={(e) => setCategory(e)}
                            isMulti={false}
                            name="group253"
                            options={categoryOptionsList}
                            isSearchable={false}
                            placeholder="Catégory"
                            styles={{
                              border: "none",

                              option: (provided, state) => ({
                                ...provided,
                                color: state.isFocused ? "black" : "black",
                              }),
                            }}
                          />
                          <Line className="bg-gray-100_01 h-px mt-[3px] w-[99%]" />
                        </>
                      )}
                       {selectedOption != "Prestataire" && (
                        <>
                         <input type="date" style={{  border:"none"}} className="w-[100%] text-gray-500" onChange={(e)=>{setDate(e.target.value)}}></input>
                         <Line className="bg-gray-100_01 h-px mt-[3px] w-[99%]" />
                        </>
                      )}
                    </div>
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
                        navigate("/PresSignIn");
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
            <Img
              className="responsiveIm absolute bottom-[3%] h-[35%] left-[13%]  w-[25%]"
              src="../images/img_91231converti_289x355.png"
              alt="91231converti_Eight"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PresSignup;
