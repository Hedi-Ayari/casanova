import React, { useEffect, useState } from "react";
import { ProductListState } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { Button, Img, Line, RatingBar, Text } from "components";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { useGet, useSearch } from "utils/functions";
import { CardItems } from "components/card-items/items";
import Width from "components/width/width";
import Flex from "components/Flex/flex";

const Products = ({ filteredProducts}) => {
  const navigate = useNavigate();
  const [productList, setProductList] = useRecoilState(ProductListState);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleProductClick = (product) => {
    navigate(`/productdetailpage/${product._id}`);
  };


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex md:flex-1 flex-col items-center justify-start w-[73.5%] md:w-full">
        {paginatedProducts.length == 0 ?
        <Width width={"100%"}>
          <Flex flex="center">
            <p className="text-[24px] font-montserrat text-center">  Pas de produit dans cette recherche. </p>
          </Flex>
        </Width>
        :
          <div className="gap-[20px] md:gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            {paginatedProducts && paginatedProducts?.map((product, index) => (
              <CardItems product={product} />
          
            ))}
          </div>
        }
       
        <Line className="bg-black-900_19 h-px mt-[38px] w-full" />
        <Pagination totalPages={Math.ceil(filteredProducts.length / itemsPerPage)} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default Products;
