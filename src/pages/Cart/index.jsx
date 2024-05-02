import React, { useState, useEffect } from "react";

import Footer from "components/Footer";
import {
  Button,
  Img,
  List,
  RatingBar,
  Input,
  Line,
  Text,
  TextArea,
} from "components";
import { useNavigate } from "react-router-dom";

import { Cart } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import NavBar from "components/NavBar";
import Cartitem from "./cartItem";
import { User } from "../../utils/recoil/atoms";
import "./style.css"
const CartPage = () => {
  const navigate = useNavigate();

  const [user, setProductList] = useRecoilState(User);

  const [cart, setCart] = useRecoilState(Cart);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [deliveryType, setDeliveryType] = useState("Prestatire");

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(updatedCart);
  };
  const handleDeliveryOptionChange = (event) => {
    const selectedOption = event.target.value;
    setDeliveryType(event.target.value)
    if (selectedOption === "Prestatire") {
      setDeliveryFee(0);
    } else if (selectedOption === "Cazanova") {
      setDeliveryFee(15);
    }
  };
  

  const calculateTotalPrice = (item) => {
    return item.price * item.count;
  };
  const handleSubmit = async () => {
    navigate(`/Checkout/`,{ state: { cart: cart , deliveryType:deliveryType } });

    /**/
  };
  
  const totalCartPrice = cart.reduce(
    (total, item) => total + calculateTotalPrice(item),
    0
  ) + deliveryFee;

  return (
    <>
               
               <NavBar></NavBar>
      <div className="bg-white-A700 flex flex-col font-cormorant items-center justify-end mx-auto pt-[37px] w-full">
        
        <div className="flex flex-col md:gap-10 items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[1241px] md:max-w-[95%] md:w-[95%] mx-auto  w-full">
            <Line className="bg-black-900_19 h-px mt-16 w-full md:hidden" />
            <Text
              className="mt-10 sm:text-4xl md:text-[38px] text-[40px] text-red-300"
              size="txtCormorantBold40"
            >
              YOUR CART
            </Text>
            <div className="flex md:flex-col flex-row font-montserrat md:gap-11 items-center justify-between ml-6 md:ml-[0] mt-5 w-[99%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[55%] md:w-full">
                <List
                  className="flex flex-col gap-[22.5px] items-center w-full"
                  orientation="vertical"
                >
                  {cart.map((item, index) => (
                    <Cartitem
                      key={index}
                      index={index}
                      item={item}
                      onRemove={() => removeFromCart(index)}
                    />
                  ))}
                </List>
              </div>
              <div className="border border-black-900_14 border-solid flex flex-col items-center justify-start p-5 rounded-[29px] w-[42%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[29px] mt-6 w-full">
                  <Text
                    className="ml-1 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCormorantBold24"
                  >
                    ORDER SUMMARY
                  </Text>
                  <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-[23px] w-full">
                    <Text
                      className="text-black-900_99 text-lg"
                      size="txtMontserratRegular18"
                    >
                      Subtotal
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900 text-lg text-right"
                      size="txtCalistogaRegular18"
                    >
                      {totalCartPrice-deliveryFee} TND
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-[19px] w-full">
                    <Text
                      className="text-black-900_99 text-lg"
                      size="txtMontserratRegular18"
                    >
                      Discount (-0%) TND
                    </Text>
                    <Text
                      className="text-lg text-red-300 text-right"
                      size="txtCalistogaRegular18Red300"
                    >
                      -0 TND
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-[19px] w-full">
                    <Text
                      className="text-black-900_99 text-lg"
                      size="txtMontserratRegular18"
                    >
                      Delivery Fee
                    </Text>
                    <Text
                      className="text-black-900 text-lg text-right"
                      size="txtCalistogaRegular18"
                    >
                      {deliveryFee} TND
                    </Text>
                  </div>
                  <Line className="bg-black-900_19 h-px ml-1 md:ml-[0] mt-[17px] w-[99%]" />
                  <div className="flex flex-row sm:gap-5 items-center justify-between ml-2 md:ml-[0] mt-3.5 w-[99%] md:w-full">
                  <input checked  type="radio" id="prestatire" name="deliveryOption"  value="Prestatire" onChange={handleDeliveryOptionChange} />

                    <label htmlFor="customRadio" className="radioButton">
                     
                    </label>
                    <div className="flex gap-3">

                      <Text
                        className="sm:ml-[0] ml-[13px] text-black-900_99 text-sm"
                        size="txtMontserratRegular14Black90099"
                      >
                        Livraison Prestatire
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[266px] text-black-900 text-right text-sm"
                        size="txtCalistogaRegular14"
                      >
                        0 TND
                      </Text>
                    </div>
                  </div>
                  <div className="flex  flex-row sm:gap-5 items-center justify-between ml-2 md:ml-[0] mt-3.5 w-[99%] md:w-full">
                  <input type="radio" id="cazanova" name="deliveryOption" value="Cazanova" onChange={handleDeliveryOptionChange} />

                    <label htmlFor="customRadio" className="radioButton">
                     
                    </label>
                    <div className="flex gap-3">

                      <Text
                        className="sm:ml-[0] ml-[13px] text-black-900_99 text-sm"
                        size="txtMontserratRegular14Black90099"
                      >
                        Livraison Cazanova
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[260px] text-black-900 text-right text-sm"
                        size="txtCalistogaRegular14"
                      >
                        15 TND
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-black-900_19 h-px ml-1 md:ml-[0] mt-[13px] w-[99%]" />
                  <div className="flex flex-row items-center justify-between ml-1 md:ml-[0] mt-[21px] w-full">
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                      size="txtCormorantBold21"
                    >
                      TOTAL
                    </Text>
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900 text-right"
                      size="txtCalistogaRegular21"
                    >
                      {totalCartPrice} TND
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium font-montserrat min-w-[461px] sm:min-w-full mt-6 rounded-[5px] text-center text-sm"
                    color="red_300"
                    size="lg"
                    variant="fill"
                    onClick={() => handleSubmit()}
                  >
                    GO TO CHECKOUT
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default CartPage;
