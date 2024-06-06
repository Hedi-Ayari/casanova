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
import { Get, GetId, GetMyOder } from "service/api";
import { OneOrderItems } from "components/one-order-item/order";
import { useParams } from "react-router-dom";


const OrderPage = () => {
  const GetUser = useGetUser();
  const get = useGet();
  const getById = useGetById();

  const [order, setOrder] = useState(null);
  const [orders, ] = useState([]);
  const [open, setOpen] = useState(false);
  const [product,setProduct] = useState()
  const onOpenModal = (x) => {setProduct(x); setOpen(true)};
  const onCloseModal = () => setOpen(false);


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })



  const shortenOrderId = (orderId) => {
    const hashedId = orderId;
    return hashedId.substring(0, 8);
  };

  console.log(order);
  /**********/ 
  const {id} = useParams();


  useEffect(()=>{
    const fetchOrders = async () => {
      try{
        const subCategories = await GetId("Order", {
          _id: id,
      });

      setOrder(subCategories);

      }catch(err){
        console.log(err);
      }
    }

    fetchOrders()
  },[id])

  useEffect(()=>{
    console.log(order);
  },[order])

  return (
    <>
    <NavBar></NavBar>
    {isTabletOrMobile ?
    <div className="flex justify-center">
      
      <div className="w-[90%] mt-5">
      {order && order.products.map(x =>{
              return(
                <OneOrderItems product={x} id={order._id} ></OneOrderItems>
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
          {product &&  <Modal  open={open} onClose={onCloseModal} center >
            <h2 className="text-[16px] text-gray-900_02 my-3"><b>Référence de la commande :</b> {product._id} </h2>
            <h2 className="text-[16px] text-gray-900_02 my-3"><b>Date de livraison :</b> {moment(product.date).format('YYYY/MM/DD')} </h2>
            <h2 className="text-[16px] text-gray-900_02 my-3"><b>ID Du client :</b> {product.client} </h2>
            <div className="flex justify-between gap-[10px] my-3 py-3" style={{borderBottom:'1px solid #000'}}>
                  <div className="w-[22.5%]">
                      <p className="text-center  text-[16px] text-gray-900_02">Image</p>
                  </div>
                  <div className="w-[22.5%]">
                    <p className="text-center  text-[16px] text-gray-900_02">Titre</p>
                  </div>
                  <div className="w-[22.5%]">
                    <p className="text-center  text-[16px] text-gray-900_02">Prix</p>
                  </div>
                  <div className="w-[22.5%]">
                      <p className="text-center  text-[16px] text-gray-900_02">Quantité</p>
                  </div>
                </div>
              {
                product.products?.map(x=>{
                  return(
                <div className="flex justify-between items-center gap-[10px] my-4 py-2" style={{borderBottom:'1px solid #000'}}>
                  <div className="w-[22.5%]">
                      <img src={'https://www.casanova-event.com/uploads/'+x.id_product?.image[0]} alt="" width={'100%'} />
                  </div>
                  <div className="w-[22.5%]">
                    <p className="text-center"> {x.id_product?.title}</p>
                   
                  </div>
                  <div className="w-[22.5%]">
                  <p className="text-center">{x.id_product?.price} TND</p>
                  </div>
                  <div className="w-[22.5%]">
                  <p className="text-center">{x.quantity}</p>
                  </div>
                </div>
                  )
                })
              }
              
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
              <th style={{ width: "15%", height: "50px" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">More Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(x => (
              <tr key={x?._id}>
                <td style={{ width: "20%",borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">#{shortenOrderId(x?._id)}</td>
                <td style={{ width: "30%",borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">{moment(x?.date).format('YYYY/MM/DD')}</td>
                <td style={{ width: "15%",borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">{x?.livraision}</td>
                <td style={{ width: "20%",borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">{x?.totalPrice} TND</td>
                <td style={{ width: "15%",borderBottom: "1px solid black" }} className="text-center h-[55px]  text-[15px] text-gray-900_02">
                  <span className="more-details" onClick={() => onOpenModal(x)}>More</span>
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




/**     */