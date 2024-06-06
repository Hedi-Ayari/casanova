import React, { useState, useEffect } from "react";

import Footer from "components/Footer";
import {
  Button,
  List,
  Line,
  Text,
} from "components";
import { useNavigate } from "react-router-dom";

import { Cart } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import NavBar from "components/NavBar";
import Cartitem from "./cartItem";
import { User } from "../../utils/recoil/atoms";
import "./style.css"
import { Alert, Box, Modal } from "@mui/material";
import { useSearch } from "utils/functions";
import { Get } from "service/api";
import { H32, P16, P20, P21 } from "components/TXT/TXT";
import Width from "components/width/width";
import { CardItems } from "components/card-items/items";
import { useMediaQuery } from "react-responsive";
import { SwiperSlide,Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoTriangle } from "react-icons/io5";

const CartPage = () => {
  const navigate = useNavigate();

  const [user, setProductList] = useRecoilState(User);
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useRecoilState(Cart);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [deliveryType, setDeliveryType] = useState("casanova");
  const [paymentType, setPaymentCash] = useState("Cash");


  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(updatedCart);
  };
  const handleChangeState = (value) => {
    console.log(open);
    setOpen(value)
  }
  const handleDeliveryOptionChange = (event) => {

    setDeliveryType(event.target.value)

    if (event.target.value == "casanova") {
      setDeliveryFee(1000)
    } else{
      
      setDeliveryFee(0)
    }

  };

  const handlePayOptionChange = (event) => {

    setPaymentCash(event.target.value)


  };
  const [error,setError] = useState(false)
  useEffect(() => {
    console.log(open);
  }, [open])

  const calculateTotalPrice = (item) => {
    return item.price * item.count;
  };
  const handleSubmit = async () => {
    if(cart.length > 0 ){
      navigate(`/Checkout/`, { state: { cart: cart, deliveryType: deliveryType,paymentType:paymentType } });
      setError(false)
    }else{
      setError(true)
    }
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
            <div className="flex md:flex-col flex-row font-montserrat md:gap-11 items-start justify-between ml-6 md:ml-[0] mt-10 md:mt-5 w-[99%] md:w-full">

              <div className="flex flex-col items-center justify-start w-[55%] md:w-full">
              {error && <Alert severity="error" icon={<IoTriangle></IoTriangle>}>Vous ne pouvez pas passer au checkout. Panier vide!</Alert>}

                <List
                  className="flex flex-col gap-[12.5px] items-center w-full"
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
                      {totalCartPrice - deliveryFee} TND
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
                  <Text
                      className="text-black-900_99 text-lg mt-4 mb-2"
                      size="txtMontserratRegular18"
                    >
                     Type de Livraison
                     
                    </Text>
                  <div className="flex flex-row sm:gap-5 items-center justify-between ml-2 md:ml-[0] mt-3.5 w-[99%] md:w-full">
                    <input
                      type="radio"
                      id="prestatire"
                      name="deliveryOption"
                      value="casanova"
                      checked={deliveryType === "casanova"}
                      onChange={handleDeliveryOptionChange}
                    />
                    <label htmlFor="prestatire" className="radioButton"></label>
                    <div className="flex gap-3 w-[100%] justify-between">
                      <Text
                        className="sm:ml-[0] ml-[13px] text-black-900_99 text-sm"
                        size="txtMontserratRegular14Black90099"
                      >
                        Livraison Casanova
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[6px] text-black-900 text-right text-sm"
                        size="txtCalistogaRegular14"
                      >
                        1000 TND
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:gap-5 items-center justify-between ml-2 md:ml-[0] mt-3.5 w-[99%] md:w-full">
                    <input
                      type="radio"
                      id="solo"
                      name="deliveryOption"
                      value="solo"
                      checked={deliveryType === "solo"}
                      onChange={handleDeliveryOptionChange}
                    />
                    <label htmlFor="prestatire" className="radioButton"></label>
                    <div className="flex gap-3 w-[100%] justify-between">
                      <Text
                        className="sm:ml-[0] ml-[13px] text-black-900_99 text-sm"
                        size="txtMontserratRegular14Black90099"
                      >
                        Pas de livraion
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[6px] text-black-900 text-right text-sm"
                        size="txtCalistogaRegular14"
                      >
                        0 TND
                      </Text>
                    </div>
                  </div>
                  <ModalTrigger isOpen={open} onchange={handleChangeState} />
                  <Line className="bg-black-900_19 h-px ml-1 md:ml-[0] mt-[17px] w-[99%]" />

                  <Text
                      className="text-black-900_99 text-lg mt-4 mb-2"
                      size="txtMontserratRegular18"
                    >
                     Type de Payment 
                     
                    </Text>
                    <div className="flex flex-row sm:gap-5 items-center justify-between ml-2 md:ml-[0] mt-3.5 w-[99%] md:w-full">
                    <input
                      type="radio"
                      id="payment"
                      name="paymentOption"
                      value="MoneyGram ou Western Union"
                     
                      checked={paymentType === "MoneyGram ou Western Union"}
                      onChange={handlePayOptionChange}
                    />
                    <label htmlFor="payment" className="radioButton"></label>
                    <div className="flex gap-3 w-[100%] justify-between">
                      <Text
                        className="sm:ml-[0] ml-[13px] text-black-900_99 text-sm"
                        size="txtMontserratRegular14Black90099"
                      >
                        MoneyGram ou Western Union
                      </Text>
                    </div>
                  
                  </div>
                  <div className="flex flex-row sm:gap-5 items-center justify-between ml-2 md:ml-[0] mt-3.5 w-[99%] md:w-full">

                  <input
                      type="radio"
                      id="payment"
                      name="paymentOption"
                      value="Cash"
                     
                      checked={paymentType === "Cash"}
                      onChange={handlePayOptionChange}
                    />
                    <label htmlFor="payment" className="radioButton"></label>
                    <div className="flex gap-3 w-[100%] justify-between">
                      <Text
                        className="sm:ml-[0] ml-[13px] text-black-900_99 text-sm"
                        size="txtMontserratRegular14Black90099"
                      >
                        Cash
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


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 4,
  pb: 3,
};

const ModalTrigger = ({ isOpen, onchange }) => {

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])


  const handleClose = () => {
    setOpen(false);

  };

  useEffect(() => {
    onchange(open)
  }, [open])

  const [filteredProducts,setFilteredProducts] = useState([])
  const [cate,setCategories] = useState([])
  const Gets = useSearch();
  
  const fetchData = async (id) => {
    try {
      const data = await Gets("Product", {category:id});
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const categories = await Get("Categorie");
      setCategories(categories);
      console.log(categories);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  useEffect(()=>{

    fetchCategories()
  },[])

  useEffect(()=>{
    if(cate.length> 0){
      const ca = cate.find(x=> x.title.toLowerCase() === "weeding planner")
      if(ca)
      fetchData(ca._id)
    }
  },[cate])
 
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: isTabletOrMobile ? "95%": 1000,height:"550px",px: isTabletOrMobile? 1: 4 }}>
        {isTabletOrMobile ? 
        <P20 className={"font-montserrat md:mt-5"}>
        Tous nos weeding planner
        </P20> 
        : 
        <P21 className={"font-montserrat"}>
        Tous nos weeding planner
        </P21>
        }
        
        <Width width={"100%"} className="my-5">
        <Swiper
 
        slidesPerView={isTabletOrMobile ? 1.1 : 2}
        spaceBetween={isTabletOrMobile   ? 10 : 30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        style={{width:"100%"}}
        >
            {filteredProducts && filteredProducts.map(x=>{
              return(
                <SwiperSlide style={{width:"100%"}}>
                  <CardItems product={x} isPlanner={true} />
                </SwiperSlide>
              )
            })}

        </Swiper>
         
        </Width>
      </Box>
    </Modal>
  )
}

export default CartPage;
