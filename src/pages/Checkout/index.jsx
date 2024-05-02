import React, { useState, useEffect } from "react";
import { Img, Button, Text, Heading, Input } from "../../components";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreate, useGetUser } from "../../utils/functions";
import { User } from "../../utils/recoil/atoms";
import { useNavigate } from "react-router-dom";
import CustomToast from "../../components/toast";
import toast from "react-hot-toast";
import { Cart } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { style } from "motion";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

export default function ChekoutsurplacePage() {
  const [cart, setCart] = useRecoilState(Cart);

  const Create = useCreate();
  const GetUser = useGetUser();
  const [user] = useRecoilState(User);
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("surPlace");
  const [startDate, setStartDate] = useState(new Date());
  const location = useLocation();
  const [hasGift, setHasGift] = useState(false);
  const { deliveryType } = location.state;
  const [date, setDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data = { ...data, date: date };
    console.log(cart);
    const response = await GetUser(user);
    const body = {
      modelName: "Order",
      cart,
      user: response.user,
      livraision: deliveryType,
      adresse: data?.adresse,
      phone: data.phone,
      date: data.date,
    };
    try {
      const response = await Create(body);
      navigate(`/category`);
      toast.custom(
        (t) => (
          <CustomToast
            data={t}
            message="Order Created"
            title="Info"
          ></CustomToast>
        ),
        {
          duration: 3000,
        }
      );

      setCart([]);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  useEffect(() => {
    const x = cart.some((product) => product.type === "gift");
    
    setHasGift(x);
  }, []);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    
    return selectedOption== "surPlace" ? totalPrice : 15 + totalPrice;
  };

  return (
    <>
    <NavBar></NavBar>
      <div className=" mt-7 md:mt-5 py-7 md:py-5 w-[100vw] h-[100%] md:h-[100%]  flex items-center justify-center">
        <div
          className="w-[60vw] h-[100%] md:w-[95%] md:mx-auto shadow-box"
          style={{ border: "1px solide black", backgroundColor: "white",height:"100%",borderRadius:"8px" }}
        >
          <div className="pt-[2%] md:py-6 flex flex-col align-center w-[100%] gap-y-15px">
            <div className="flex items-center  justify-center  mx-4">
              {hasGift ? (
                <>
                  {" "}
                  <Heading
                    size="s"
                    as="h2"
                    className="!text-red-300 tracking-[2.72px]"
                  >
                    ENVOYER UN CADEAUX
                  </Heading>
                </>
              ) : (
                <>
                  {" "}
                  <Heading
                    size="s"
                    as="h2"
                    className="!text-red-300 tracking-[2.72px] mb-4"
                  >
                    CHECK OUT
                  </Heading>
                </>
              )}
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex flex-row  md:flex-col items-center justify-center pt-[2%] gap-[2em] md:gap-[10px]">
                {" "}
                <Button
                  className={`gap-[11px] tracking-[0.96px] min-w-[260px] md:w-[100%] flex items-center justify-center text-center cursor-pointer rounded-sm h-[33px] px-[35px] text-xs ${
                    selectedOption === "surPlace"
                      ? "text-white-A700 bg-red-300"
                      : "text-gray-600_01 bg-gray-100"
                  }`}
                  onClick={() => setSelectedOption("surPlace")}
                >
                  <Img
                    className="mr-2"
                    src="../images/img_icon.svg"
                    alt="Icon"
                  />
                  Paiement sur place
                </Button>
                <Button
                  className={`gap-[7px] tracking-[0.96px] min-w-[260px] md:w-[100%] flex items-center justify-center text-center cursor-pointer rounded-sm h-[33px] px-[35px] text-xs ${
                    selectedOption === "livraison"
                      ? "text-white-A700 bg-red-300"
                      : "text-gray-600_01 bg-gray-100"
                  }`}
                  onClick={() => setSelectedOption("livraison")}
                >
                  <Img
                    className={`mr-2 ${
                      selectedOption === "livraison" ? "white-svg" : ""
                    }`}
                    src="../images/img_delivery.svg"
                    alt="delivery"
                  />{" "}
                  Paiement à la livraison
                </Button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] md:w-[95%]">
                <div className="flex flex-col  justify-center w-[100%]">
                  <div className="flex flex-col items-start justify-start mt-[0%] w-[99%] gap-[100%] ">
                    <Input
                      register={register}
                      name="email"
                      placeholder="Email"
                      className="w-[100%]"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>{" "}
                  <div className="flex flex-col items-start justify-start  w-[99%] mt-[51px] md:mt-[30px] gap-[100%]">
                    <Input
                      register={register}
                      name="nom"
                      placeholder="Nom & Prenom"
                      className="w-full"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  <div className="flex flex-col items-start justify-start  w-[99%] mt-[51px] md:mt-[30px] gap-[100%]">
                    <Input
                      register={register}
                      name="phone"
                      placeholder="Phone Number"
                      type="Number"
                      className="w-full"
                    />
                    <div className="h-px w-full bg-gray-300" />
                  </div>
                  {selectedOption === "livraison" && (
                    <>
                      <div className="flex flex-col items-start justify-start  w-[99%] mt-[51px] md:mt-[30px] gap-[100%]">
                        <Input
                          register={register}
                          name="adresse"
                          placeholder="Adresse"
                          className="w-full"
                        />
                        <div className="h-px w-full bg-gray-300" />
                      </div>
                    </>
                  )}
                  <Text as="p" className="mt-[53px] md:mt-[30px] tracking-[1.12px]">
                    <span>
                      {selectedOption === "livraison" ? "Date" : "Pick up Date"}
                    </span>
                  </Text>
                  <DatePicker
                    value={new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    selected={startDate}
                    onChange={(date) => {
                      setDate(date.toISOString());
                    }}
                    dateFormat="dd/MM/yyyy"
                    placeholderText={
                      selectedOption === "livraison" ? "Date" : "Pick up Date"
                    }
                  />
                  <div className="h-px w-[99%] mt-[11px] bg-gray-300" />
                  <div className="flex flex-row gap-[2em] justify-center items-center pb-[2%] w-[99%] mt-10">
                    <Heading as="h2">TOTAL</Heading>
                    <Text
                      size="s"
                      as="p"
                      className="!text-black-900 !font-calistoga text-right"
                    >
                      {
                        //to make the price dynamic 
                      }
                       {calculateTotalPrice()}DT   
                    </Text>
                  </div>
                  <div className="flex justify-center md:justify-between gap-[2em] md:gap-[10px] py-[2%] ">
                   <Button
                          type="button"
                          className="cursor-pointer font-poppins leading-[normal] min-w-[137px] md:w-[49%] rounded-md text-center text-xs"
                          color="black_900_3d"
                          size="sm"
                          variant="outline"
                          onClick={(e) => navigate("/category")}
                    >
                      Back
                    </Button>
                    <Button
                          className="bg-red-300 h-10 justify-center pl-[34px] pr-[22px] sm:px-5 py-3 md:py-2 rounded-md text-white-A700 text-xs w-[137px]  md:w-[49%]"
                          type="submit"
                          size="sm"
                    >
                      Envoyer
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
