import React, { useEffect, useState } from "react";
import "./style.css";
import { Button, Img, Line, RatingBar, Text } from "components";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";
import { Rating } from "components/rating";

const CartItem = ({ item, onRemove, index }) => {
  const [cart, setCart] = useRecoilState(Cart);

  const [count, setCount] = useState(item.count);
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };
  const handleRemoveClick = () => {
    onRemove();
  };
  useEffect(() => {
    if (item.count !== count) {
      const updatedCart = cart.map((cartItem, i) => {
        if (i === index) {
          return { ...cartItem, count: count };
        }
        return cartItem;
      });
      setCart(updatedCart);
    }
  }, [count]);

  const isMobile = useMediaQuery({
    query: '(max-width: 992px)'
  })

  return (
    <>
      {isMobile ? 
     <>
     <div className="flex flex-1  flex-col md:gap-5 items-start justify-start my-0 w-full marginTop">
       <Img
         className="h-[135px] object-fill rounded-[14px] w-[100%]"
         src={process.env.REACT_APP_API_BACK + "/uploads/" + item.image[0]}
         alt="imageSeven"
       />

       <div className="flex md:flex-1 flex-col md:gap-[12px] gap-[21px] w-[100%] items-start justify-start ml-7 md:ml-[0] md:mt-0 mt-[5px] w-[30%] md:w-full">
         <div className="flex justify-between w-[100%]">
         <Text className="text-black-900 text-lg md:text-[20px]"  size="txtCormorantBold18">
           {item.title}
         </Text>
         <Img
           className="h-6 w-6 cursor-pointer"
           src="../images/img_frame.svg"
           alt="frame"
           onClick={handleRemoveClick}
         />
         </div>
         <div className="flex flex-col  md:gap-[10px] font-montserrat items-start justify-between w-full">
           <Text
             className="text-black-900 text-sm  md:text-[14px] tracking-[0.60px]"
             size="txtMontserratRegular12"
           >
             {item?.owner?.businessName}
           </Text>
           <div className="flex gap-[8px] w-[100%] items-center">

            <div className="flex mt-0.5 relative items-center">
              <Rating val={5} />
 
            
            </div>
            <Text
              className="text-black-900 text-sm"
              size="txtMontserratRegular12"
            >
              <span className="text-black-900 font-calistoga text-left font-normal">
                4.5/{" "}
              </span>
              <span className="text-red-300 font-calistoga text-left font-normal">
                5
              </span>
            </Text>
           </div>
         </div>
         <div className="flex  gap-[58px] items-center justify-between md:ml-[0] w-full">
         <Text className="text-black-900 text-lg w-[50%]" size="txtCalistogaRegular18">
           {item.price} TND
         </Text>
         <div className="bg-gray-100 flex flex-row items-center justify-between mr-[3px] p-2 rounded-[5px] w-[35%] ">
           <Img
             className="h-3.5 ml-2 w-[13px]"
             src="../images/img_frame_black_900.svg"
             alt="frame_One"
             onClick={decreaseCount}
           />
           <Text
             className="text-base text-black-900"
             size="txtMontserratMedium16"
           >
             {count}
           </Text>
           <Img
             className="h-3 mr-[9px] w-3"
             src="../images/img_frame_black_900_12x12.svg"
             alt="frame_Two"
             onClick={increaseCount}
           />
         </div>
       </div>
        
     
        
       </div>
   
     </div>
     <Line className="self-center h-px bg-black-900_19 w-full" />
   
   </>
      : 
      <>
      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full marginTop">
        <Img
          className="h-[124px] md:h-auto object-cover rounded-[14px] w-[124px]"
          src={process.env.REACT_APP_API_BACK + "/uploads/" + item.image[0]}
          alt="imageSeven"
        />
        <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start ml-7 md:ml-[0] md:mt-0 mt-[5px] w-[30%] md:w-full">
          <Text className="text-black-900 text-lg md:text-[16px]"  size="txtCormorantBold18">
            {item.title}
          </Text>
          <div className="flex flex-col md:flex-col md:gap-[5px] font-montserrat items-start justify-between w-full">
            <Text
              className="text-black-900 text-sm  md:text-[14px] tracking-[0.60px]"
              size="txtMontserratRegular12"
            >
              {item?.owner?.businessName}
            </Text>
            <div className="flex mt-0.5 items-center gap-4 relative w-[100%]">
              <Rating val={5} />
            <Text
              className="text-black-900 text-sm"
              size="txtMontserratRegular12"
            >
              <span className="text-black-900 font-calistoga text-left font-normal">
                4.5/{" "}
              </span>
              <span className="text-red-300 font-calistoga text-left font-normal">
                5
              </span>
            </Text>
            </div>
          </div>
          <Text className="text-black-900 text-lg" size="txtCalistogaRegular18">
            ${item.price}
          </Text>
        </div>
        <div className="flex md:flex-1 flex-col gap-[58px] items-end justify-start md:ml-[0] ml-[188px] w-1/5 md:w-full">
          <Img
            className="h-6 w-6 cursor-pointer"
            src="../images/img_frame.svg"
            alt="frame"
            onClick={handleRemoveClick}
          />

          <div className="bg-gray-100 flex flex-row items-center justify-between mr-[3px] p-2 rounded-[5px] w-[98%] md:w-full">
            <Img
              className="h-3.5 ml-2 w-[13px]"
              src="../images/img_frame_black_900.svg"
              alt="frame_One"
              onClick={decreaseCount}
            />
            <Text
              className="text-base text-black-900"
              size="txtMontserratMedium16"
            >
              {count}
            </Text>
            <Img
              className="h-3 mr-[9px] w-3"
              src="../images/img_frame_black_900_12x12.svg"
              alt="frame_Two"
              onClick={increaseCount}
            />
          </div>
        </div>
      </div>
      <Line className="self-center h-px bg-black-900_19 w-full" />
    
    </>
      }
     
    </>
  );
};

export default CartItem;
