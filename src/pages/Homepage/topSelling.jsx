import React, { useEffect } from "react";
import { Button, Img, Line, Text, RatingBar } from "components";
import { ProductListState } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { Rating } from "components/rating";

const TopSelling = () => {
  const [productList, setProductList] = useRecoilState(ProductListState);
  useEffect(()=>{
    console.log(productList);
  },[])
  // Define an array of top-selling items
  const topSellingItems = [
    {
      id: 1,
      imageSrc: "images/img_image7.png",
      name: "GATEAU DE MARIAGE",
      category: "GOURMANDISE",
      rating: 4.5,
      price: "$120",
    },
    {
        id: 2,
        imageSrc: "images/img_image7.png",
        name: "GATEAU DE MARIAGE",
        category: "GOURMANDISE",
        rating: 4.5,
        price: "$120",
      },
      {
        id: 4,
        imageSrc: "images/img_image7.png",
        name: "GATEAU DE MARIAGE",
        category: "GOURMANDISE",
        rating: 4.5,
        price: "$120",
      },
    // Add more items here...
  ];

  return (
    <>
      <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-6 justify-center min-h-[auto] w-full">
      {productList.slice(0,6).map((product, index) => (
                   <div key={index} className="h-[336px] relative w-full" >
                   <div className="absolute h-[336px] inset-[0] justify-center m-auto w-full">
                     <Img
                       className="h-[336px] m-auto object-cover rounded-[14px] w-full"
                       src={process.env.REACT_APP_API_BACK_IMG+"/uploads/"+product.image[0]}
                       alt="product Image"
                     />
                     <Button
                       className="absolute cursor-pointer font-medium leading-[normal] right-[6%] rounded-[13px] text-center text-xs top-[7%] w-[58px]"
                       shape="round"
                       color="red_300"
                       size="xs"
                       variant="fill"
                     >
                       -20%
                     </Button>
                   </div>
                   <div className="absolute bg-gray-100_e5 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[17px] rounded-bl-[13px] rounded-br-[11px] rounded-tr-[57px] w-full">
                     <div className="flex flex-col gap-[11px] items-start justify-start ml-1.5 md:ml-[0] w-[76%] md:w-full">
                       <div className="flex flex-col font-cormorant items-center justify-start">
                         <Text
                           className="text-black-900 text-lg  md:text-[20px]"
                           size="txtCormorantBold18"
                         >
                           {product.title}
                         </Text>
                       </div>
                       <div className="flex flex-col font-montserrat items-start justify-start w-full">
                       <Text
                             className="text-black-900 text-sm tracking-[0.60px]"
                             size="txtMontserratRegular12"
                           >
                             {product.category} 
                           </Text>
                         <div className="flex flex-row items-center gap-[5px] w-full">
                           
                           <Rating
                             value={5}
                             
                           />
                           <Text
                             className="text-black-900 text-sm"
                             size="txtMontserratRegular12"
                           >
                             <span className="text-black-900 font-calistoga text-left font-normal">
                               {0}/{" "}
                             </span>
                             <span className="text-red-300 font-calistoga text-left font-normal">
                               5
                             </span>
                           </Text>
                         </div>
                       </div>
                       <Text
                         className="text-black-900 text-lg"
                         size="txtCalistogaRegular18"
                       >
                         {product.price} TND
                       </Text>
                     </div>
                   </div>
                 </div>
               
              ))}
      </div>
    </>
  );
};

export default TopSelling;
