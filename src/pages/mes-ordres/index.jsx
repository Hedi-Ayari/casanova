import React, { useEffect, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { useGetUser, useGetById } from "../../utils/functions";
import { useRecoilState } from "recoil";
import { User } from "../../utils/recoil/atoms";
import { ReactTable, Text } from "components";
import { useGet } from "utils/functions";
import { format } from "date-fns";
import md5 from "md5";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import moment from 'moment'
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { useMediaQuery } from "react-responsive";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { OrderItems } from "components/order-items/order";
import { CreateFeedBack, GetMyOder } from "service/api";
import Width from "components/width/width";
import Flex from "components/Flex/flex";
import { useNavigate } from "react-router-dom";
import { P16 } from "components/TXT/TXT";
import { Rating } from "components/rating";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaExpandAlt } from "react-icons/fa";
import CustomToast from "components/toast";
import toast from "react-hot-toast";


const OrderPage = () => {
  const GetUser = useGetUser();
  const get = useGet();
  const getById = useGetById();

  const [order, setOrder] = useState([]);
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState();
  const onOpenModal = (x) => { setProduct(x); setOpen(true) };
  const onCloseModal = () => setOpen(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [user] = useRecoilState(User);
  const fetchUser = async () => {
    try {
      const users = await GetUser(user);
      const data = await GetMyOder("Order", users.user._id);

      setOrder(data);
      return users

    } catch (e) {
      console.log(e);
    }
  }
 
  useEffect(() => {
    fetchUser()

  }, [])

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })

  const fetchCustomerName = async (customerId) => {
    try {
      const data = await getById("User", { _id: customerId });
      return data;
    } catch (error) {
      console.error("Error fetching customer name:", error);
      return "Error";
    }
  };

  const shortenOrderId = (orderId) => {
    const hashedId = orderId;
    return hashedId.substring(0, 8);
  };
  /**   
    const handleSubmit = () =>{
  
      const feedback = {
          owner:users.user._id,
          receiver:orders._id,
          text,
          note:rating,
          //prod_id:id_prod,
          order_id:id_order
      }
  
      hnadleSubmits(feedback);
  
  }
  */


  const [text, setTextArea] = useState('')
  const [rating, setRating] = useState(null)
  const hnadleSubmits = async (data) => {
    try {
       const res = await CreateFeedBack(data);
        if(res){
         // Assuming you have a state variable `product` with a setter `setProduct`

const updatedProducts = product.products.map(x => {
  console.log(x, data.prod_id);
  if (x.id_product._id === data.prod_id) {
    return { ...x, is_evaluated: true,note:rating };
  }
  return x;
});

// Update the state with the new products array
setProduct(prevState => ({
  ...prevState,
  products: updatedProducts
}));

        }
      toast.custom(
        (t) => (
          <CustomToast
            data={t}
            message="Feedback créer avec succées"
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
  const hnadleRating = (data) => {
    console.log("rating", data);
    setRating(data)
  }
  const handleSubmit = async (x) => {
    const users = await GetUser(user);

    const feedback = {
      owner: users.user._id,
      receiver: x.owner._id,
      text,
      note: rating,
      prod_id: x.id_product._id,
      order_id: product._id
    }

    hnadleSubmits(feedback);

  }
  return (
    <>
      <NavBar></NavBar>
      {isTabletOrMobile ?
        <div className="flex justify-center font-cormorant">
          <div className="w-[90%] mt-5">
            <Text
              className="text-left mt-16 md:hideden text-[21px]  text-red-300 font-cormorant font-semibold"
              style={{ textAlign: "center", justifyContent: "center" }}
              size="txtInterSemiBold24"
            >
              Orders
            </Text>
            {order && order.map((x, index) => {
              return (
                <OrderItems item={x} index={index}></OrderItems>
              )
            })
            }
          </div>
        </div>
        :
        <div className="bg-white-A700 flex flex-col font-cormorant items-center justify-end mx-auto pt-[37px] w-full">
          <div className="flex flex-col md:gap-10 md:gap-[20px] gap-[20px] items-center justify-start w-full ">
            <div className="flex flex-col items-start justify-start max-w-[1241px] md:w-[95%] md:max-w-[95%] mx-auto md:p-0 w-full ">
              <div className="flex m-auto w-full">
                <div>
                  {product &&
                    <Modal styles={{ width: "35%", height: "80% " }} open={open} onClose={onCloseModal} center >
                      <h2 className="text-[16px] text-gray-900_02 my-3"><b>Orders Details :</b>  </h2>
                      <hr />
                      <div className="">
                        <h2 className="text-[16px] text-gray-900_02 my-3"><b>ID commande :</b> #{product._id} </h2>
                        <h2 className="text-[16px] text-gray-900_02 my-3"><b>ID Du client :</b> {product.client} </h2>
                      </div>

                      <div className="flex justify-between font-cormorant gap-[10px] py-3" style={{ borderBottom: '1px solid #000' }}>
                        <div className="w-[22.5%]">
                          <p className="text-left  text-[16px] text-gray-900_02">Image</p>
                        </div>
                        <div className="w-[40%]">
                          <p className="text-left  text-[16px] text-gray-900_02">Titre</p>
                        </div>
                        <div className="w-[22.5%]">
                          <p className="text-center  text-[16px] text-gray-900_02">Prix</p>
                        </div>
                        <div className="w-[15%]">
                          <p className="text-center  text-[16px] text-gray-900_02">Evalué</p>
                        </div>
                      </div>
                      <div style={{ maxHeight: "300px", overflowY: "scroll", width: "100%" }} className="font-cormorant">
                        {
                          product.products?.map(x => {
                            return (
                              <>
                                {x.is_evaluated == false ?
                                  <Accordion sx={{ width: "100%" }}>
                                    <AccordionSummary
                                      sx={{ width: "100%" }}
                                    >
                                      <div className="flex justify-between items-center gap-[10px] font-montserrat w-full" >
                                        <div className="w-[22.5%]">
                                          <img src={'https://www.casanova-event.com/uploads/' + x.id_product?.image[0]} alt="" width={'80%'} style={{ borderRadius: "11px" }} />
                                        </div>
                                        <div className="w-[40%]">
                                          <p style={{fontWeight:'600'}}> {x.id_product?.title}</p>
                                          <p>{x.id_product?.price} TND * {x.quantity}</p>
                                        </div>
                                        <div className="w-[22.5%]">
                                          <p className="text-center">{x.id_product?.price} TND</p>
                                        </div>
                                        <div className="w-[15%]">



                                          <button className="button-brown">Noter</button>

                                        </div>
                                      </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <div className="flex justify-center text-[18px] font-montserrat">
                                        <p>Noter le service du prestataire </p>

                                      </div>

                                      <div className="w-[100%] mb-3 font-montserrat flex justify-center items-center gap-[10px]">
                                        <Rating edit={true} onChange={hnadleRating}></Rating>
                                      </div>
                                      <div className="mb-3">
                                        <textarea style={{ width: "100%", resize: "none", }} placeholder="Votre Avis est trés importante..." className="input-brown" rows="3" onChange={e => setTextArea(e.target.value)}></textarea>
                                      </div>
                                      <div className="my-3">
                                        <button style={{ width: "100%", resize: "none", }} onClick={e => handleSubmit(x)} className="button-brown">Envoyer</button>
                                      </div>
                                    </AccordionDetails>
                                  </Accordion>
                                  :
                                  <div className="flex justify-between items-center gap-[10px] py-3 font-montserrat w-full" style={{ borderBottom: '1px solid #000' }}>
                                    <div className="w-[22.5%]">
                                      <img src={'https://www.casanova-event.com/uploads/' + x.id_product?.image[0]} alt="" width={'80%'} style={{ borderRadius: "11px" }} />
                                    </div>
                                    <div className="w-[40%]">
                                      <p className=""> {x.id_product?.title}</p>
                                      <p>{x.id_product?.price} * {x.quantity}</p>
                                    </div>
                                    <div className="w-[22.5%]">
                                      <p className="text-center">{x.id_product?.price} TND</p>
                                    </div>
                                    <div className="w-[15%]">

                                      <Flex>
                                        <P16>{x.note}</P16>
                                        <Rating val={x.note} count={1}></Rating>
                                      </Flex>



                                    </div>
                                  </div>
                                }
                              </>




                            )
                          })
                        }
                      </div>
                      <Width width={"100%"} className="my-3 font-cormorant">
                        <Flex flex="between">
                          <p style={{ fontWeight: "600" }}>Sous Total:</p>
                          <p  className="font-montserrat text-[18px]">{product.totalPrice}TND</p>
                        </Flex>
                      </Width>
                      <hr className="my-3"></hr>
                      <Width width={"100%"} className="font-cormorant">
                        <Flex flex="between">
                          <p style={{ fontWeight: "600" }}>Livraison:</p>
                          <p  className="font-montserrat text-[18px]">{0}TND</p>
                        </Flex>
                      </Width>
                      <hr className="my-3"></hr>
                      <Width width={"100%"} className="font-cormorant">
                        <Flex flex="between">
                          <p style={{ fontWeight: "600" }}>Sub Total:</p>
                          <p  className="font-montserrat text-[18px]">{product.totalPrice}TND</p>
                        </Flex>
                      </Width>

                    </Modal>
                  }

                </div>
                <div className="w-[100%] flex m-auto w-full justify-end">
                  <div className="bg-white-A700 w-[100%]  border-solid flex flex-col items-start justify-end ">
                    <Text
                      className="text-left mt-16 md:hideden sm:text-[23.38px] md:hidden md:text-[25.38px] text-[27.38px] text-red-300 font-cormorant font-semibold"
                      style={{ textAlign: "center", justifyContent: "center" }}
                      size="txtInterSemiBold24"
                    >
                      Orders
                    </Text>

                    <table>
                      <thead>
                        <tr>
                          <th style={{ width: "20%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Order</th>
                          <th style={{ width: "30%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Date / Time</th>
                          <th style={{ width: "15%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Livraision</th>
                          <th style={{ width: "20%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Total Price</th>
                          <th style={{ width: "15%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">Détails</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order && order.map(x => (
                          <tr key={x?._id} className="font-montserrat">
                            <td style={{ width: "20%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">#{shortenOrderId(x?._id)}</td>
                            <td style={{ width: "30%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">{moment(x?.date).format('YYYY/MM/DD')}</td>
                            <td style={{ width: "15%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">{x?.livraision}</td>
                            <td style={{ width: "20%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">{x?.totalPrice} TND</td>
                            <td style={{ width: "15%", borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">
                              <span className="more-details underline cursor-pointer" onClick={() => onOpenModal(x)}>Plus de détails</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>


                  </div>
                </div>
              </div>
            </div>

            <Footer></Footer>
          </div>
        </div>
      }

      <Footer></Footer>
    </>

  );
};


export default OrderPage;
