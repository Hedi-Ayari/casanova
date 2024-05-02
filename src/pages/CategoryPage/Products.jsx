import React,{useState} from "react";
import { ProductListState } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { Button, Img, Line, RatingBar, Text } from "components";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const Products = ({ dateRange, priceRange, category, subCategory, searchQuery }) => {
  const navigate = useNavigate();
  const [productList, setProductList] = useRecoilState(ProductListState);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate start and end index for pagination
  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;

  // Filtered products based on search, price range, category, and subcategory
  const filteredProducts = productList.filter(product => {
    const productPrice = parseFloat(product.price);
    const isPriceInRange = productPrice ? (productPrice >= priceRange[0] && productPrice <= priceRange[1]) : null;
    const productNameMatches = !searchQuery || product.title.toLowerCase().includes(searchQuery.toLowerCase());

    dateRange = new Date(dateRange);
    const startDate = new Date(product.availibity.startDate);
    const endDate = new Date(product.availibity.endDate);
    const isDateInRange = startDate <= dateRange && dateRange <= endDate;
    const hasCategory = category ? product.categorie === category : true;
    const hasSubcategory = subCategory ? product.subCategorie === subCategory : true;

    return isPriceInRange && isDateInRange && product.status === "available" && hasCategory && hasSubcategory && productNameMatches;
  });

  // Paginated products based on current page
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleProductClick = (product) => {
    navigate(`/productdetailpage/${product._id}`);
  };

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <>
      <div className="flex md:flex-1 flex-col items-center justify-start w-3/4 md:w-full">
        <div className="gap-[20px] md:gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
        {paginatedProducts.map((product, index) => (
            <div key={index} className="h-[336px] relative w-[full]" onClick={() => handleProductClick(product)}>
              <div className="absolute h-[336px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[336px] m-auto object-cover rounded-[14px] w-full"
                  src={process.env.REACT_APP_API_BACK+"/uploads/"+product.image[0]}
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
                      className="text-black-900 text-lg md:text-[18px]"
                      size="txtCormorantBold18"
                    >
                      {product.title}
                    </Text>
                  </div>
                  <div className="flex flex-col font-montserrat items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
  <Text
    className="text-black-900 text-xs tracking-[0.60px] mr-2" // Added mr-2 class
    size="txtMontserratRegular12"
  >
    {product.owner.businessName}
  </Text>
  <div className="ml-[50%] md:ml-[0%]"> <RatingBar
    className="flex justify-between my-0.5  rounded-[1px] w-14"
    value={0}
    starCount={5}
    color="#c3937c"
    activeColor="#c3937c"
    size={12}
  /> </div>
 
 
</div>

                  </div>
                  <Text
                    className="text-black-900 text-lg"
                    size="txtCalistogaRegular18"
                  >
                    {product.price} DT
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Line className="bg-black-900_19 h-px mt-[38px] w-full" />
        <Pagination totalPages={Math.ceil(filteredProducts.length / 4)} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default Products;
