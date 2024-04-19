import React, { useEffect, useRef } from "react";

import { Button, Img, Line, Text, Input } from "components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomToast from "../../components/toast";
import toast from "react-hot-toast";
import { contact } from "service/api";
import LayoutNavbar from "layout/layout-navbar";
import LayoutHome from "layout/layout-home";
import NavBar from "./navBar";

const ContactMain = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (!data || !data.Nom || !data.tel || !data.email || !data.Description) {
      toast.custom(
        (t) => (
          <CustomToast
            data={t}
            message="Data missing"
            title="Error"
          ></CustomToast>
        ),
        {
          duration: 3000,
        }
      );
    } else {
      try {
        const resposne = await contact(data);
        console.log(resposne);
        toast.custom(
          (t) => (
            <CustomToast
              data={t}
              message={resposne?.message}
              title="Info"
            ></CustomToast>
          ),
          {
            duration: 3000,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (  

    <>
    <NavBar/>
    <LayoutNavbar>
      <LayoutHome>
        
        <div
          className={`flex h-[100%] w-[100%] items-center justify-center`}
          style={{ borderLeft: "1px black solid" }}
        >
          <div style={{height:"90%",width:"80%"}}>
            <div className="flex justify-between items-center" style={{height:"100%",width:"100%"}} >
              <div className="w-[25%] h-[100%]">
                <Img
                  className={` rounded-br-7px w-full`}
                  src="images/3rouss.svg"
                  alt={"images/img_weddingbouquet.png"}
                  style={{height:"100%",width:"100%",objectFit:"cover"}}
                />
              </div>


              <div className="w-[70%]">
                <div className="">
                <Text
                className="text-base text-gray-600 tracking-[5.00px] uppercase"
                size="txtMontserratRegular16Gray600"
              >
                Prêt à entrer en contact ?
              </Text>
              <Text
                className="mt-[15px] sm:text-[32px] md:text-[38px] text-[42px] text-red-300 uppercase w-full"
                size="txtCormorantRegular42Red300"
              >
                Nous planifierons votre journée selon vos préférences.
              </Text>
                </div>
                <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>

                  <div className="flex flex-col items-start justify-start  w-[87%] mt-[25px] gap-[100%]">
                    <Input
                      register={register}
                      name="Nom"
                      placeholder="Nom complet"
                      className="font-medium p-0 placeholder:text-gray-600_03 text-[13px] text-left w-full"
                      color="gray_100"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  <div className="flex flex-col items-start justify-start  w-[87%] mt-[25px] gap-[100%]">
                    <Input
                      register={register}
                      name="tel"
                      color="gray_100"
                      placeholder="Téléphone"
                      className="font-medium p-0 placeholder:text-gray-600_03 text-[13px] text-left w-full"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  <div className="flex flex-col items-start justify-start  w-[87%] mt-[25px] gap-[100%]">
                    <Input
                      register={register}
                      name="email"
                      color="gray_100"
                      placeholder="email"
                      className="font-medium p-0 placeholder:text-gray-600_03 text-[13px] text-left w-full"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  <div className="flex flex-col items-start justify-start  w-[87%] mt-[25px] gap-[100%]">
                    <Input
                      register={register}
                      name="Description"
                      color="gray_100"
                      placeholder="Description"
                      className="font-medium p-0 placeholder:text-gray-600_03 text-[13px] text-left w-full"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  <Button
                    className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-w-[10%] min-h-[5%] mt-[5%] rounded-[5px] text-center text-[10px] uppercase"
                    color="red_300"
                    size="md"
                    variant="fill"
                  >
                    Envoyer
                  </Button>
                </form>


              </div>
            </div>
          </div>


        </div>
      </LayoutHome>
    </LayoutNavbar>
    </>

  );
};

export default ContactMain;
