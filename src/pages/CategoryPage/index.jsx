import React, { useState, useEffect } from "react";

import { Button, Img, Input, Line, SeekBar, SelectBox, Text } from "components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useGet, useGetUser, useSearch } from "../../utils/functions";
import { useMediaQuery } from "react-responsive";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Products from "./Products";
import { User } from "utils/recoil/atoms";
import dayjs, { Dayjs } from "dayjs";
import { SearchQuerry } from "../../utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Width from "components/width/width";
import Flex from "components/Flex/flex";
import down from '../../assets/images/down.svg'

const CategoryPagePage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [priceRange, setPriceRange] = useState([50, 9999]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const Get = useGet();
  const [token] = useRecoilState(User);
  const [search, setSearchQuerry] = useRecoilState(SearchQuerry);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const [subcategories, setSubcategories] = useState([]);
  const getUser = useGetUser();
  const [date, setDate] = useState(

  );
  const urlParams = new URLSearchParams(window.location.search);


  const category = urlParams.get('category') ||"";
  const query = urlParams.get('searchQuery')  || "";

  const [selectedQuery, setselectedQuery] = useState("")


  useEffect(() => {
    if (category) setSelectedCategory(category);
  }, [category]);
  
  useEffect(() => {
    if (query) setselectedQuery(query);
  }, [ query]);
  
  const handleCategorySelection = async (category) => {
    const selectedCategory = category;
    setSelectedCategory(selectedCategory);
    try {
      const subCategories = await Get("SubCategorie", {
        categorieId: selectedCategory,
      });
      setSubcategories(subCategories);
    } catch (error) {
      console.error("Error fetching subcategories:", error.message);
    }
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await Get("Categorie");
        setCategories(categories);
        console.log(categories);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };
    const fetchUser = async () => {
      try {
        const response = await getUser(token);
        //console.log(dateObject);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
    fetchCategories();
  }, []);

  const [value, setValue] = useState(9999)

  const handlePriceChange = (newValue) => {
    console.log(newValue);
    setValue(parseInt(newValue[1]))
    setPriceRange(newValue);
  };

  const [filteredProducts, setFilteredProducts] = useState([])
  const Gets = useSearch();

  const fetchData = async (date) => {
    try {
      const data = await Gets("Product", date);
      console.log(date);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {

    let data_var = {
      dateRange: date, priceRange, category: selectedCategory, subcategories: selectedSubcategory, searchQuery
    }

    fetchData(data_var);
  };

  useEffect(() => {
    if(selectedCategory.length > 0 || selectedQuery.length > 0){
      if (selectedCategory.length === 0 && selectedQuery.length === 0) {
        let data_var = {
          category: "all"
        };
        console.log("all");
        fetchData(data_var);
      } else if (selectedCategory.length === 0 && selectedQuery.length > 0) {
        let data_var = {
          searchQuery: query
        };
        fetchData(data_var);
      } else if (selectedCategory.length > 0 && selectedQuery.length === 0) {
        let data_var = {
          category: category
        };
  
        fetchData(data_var);
      } else if (selectedCategory.length > 0 && selectedQuery.length > 0) {
        let data_var = {
          category: category,
          searchQuery: query
        };
        fetchData(data_var);
      }
    
    }
    console.log(selectedCategory, selectedQuery);
  }, [selectedCategory, selectedQuery]);

  if (priceRange) {
    return (
      <>
        <NavBar></NavBar>

        <div className="bg-white-A700 flex flex-col font-cormorant items-center justify-end mx-auto pt-[37px] w-full">
          <div className="flex flex-col gap-[33px] items-center justify-start w-full">
            <div className="flex flex-col font-montserrat items-center justify-start w-full">
              <Img
                className="h-[451px] sm:h-auto object-cover w-full"
                src="images/img_rectangle273.png"
                alt="rectangle273"
              />
              <div className="flex sm:flex-row flex-row sm:gap-5 relative   items-center justify-start w-[90%] md:w-[100%] mt-12 mx-auto md:px-5 w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-red-300"
                  size="txtCormorantBold32"
                >
                  CATEGORY
                </Text>
            
              </div>
              <div className="flex flex-row gap-5 relative  items-start justify-start w-[90%] md:w-[95%] mt-7 w-full">
                {!isTabletOrMobile && (
                  
                  <div className="border border-red-300 border-solid flex flex-col gap-6 md:h-auto items-start justify-start pt-5 sm:px-5 px-6 rounded-[7px] w-[25%]">
                    <div className="flex flex-row font-cormorant gap-5 items-center justify-between w-full">
                      <Text
                        className="text-red-300 text-xl w-auto"
                        size="txtCormorantBold20Red300"
                      >
                        FILTERS
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_frame_red_300.svg"
                        alt="frame"
                      />
                    </div>
                    <Line className="bg-red-300_47 h-px w-full" />
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                      <Text
                        className="text-black-900 text-sm w-[100%]"
                        size="txtCormorantRegular14"
                      >
                        SELECT YOUR WEEDING DATE :
                      </Text>
                      <div className="flex flex-col font-montserrat items-center justify-start w-[98%] md:w-full">
                        <div className="h-[100%] md:h-[100%] mt-1 relative w-[100%%]">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                              value={dayjs(date)}
                              onChange={(e) => {
                                const dateObject = new Date(
                                  e.$d
                                ).toISOString();
                                setDate(dateObject);
                                console.log(dateObject);
                              }}
                              className="w-full"
                              sx={{width:"100%"}}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-red-300_47 h-px w-full" />

                    <div className="mt-4 flex flex-col font-montserrat gap-5 items-start justify-start w-full">
                      <Text
                        className="text-red-300 text-xl w-auto"
                        size="txtCormorantBold20Red300"
                      >
                        CATEGORIES
                      </Text>
                      {categories?.map((category, index) => (
                        <div
                        key={category._id}
                        className={`flex flex-col gap-2  justify-between w-full cursor-pointer ${selectedCategory === category._id
                            ? "text-red-300"
                            : "text-black-900"
                            }`}
                        onClick={() =>
                            handleCategorySelection(category._id)
                        }
                    >
                        <Width width={"100%"}>
                            <Flex flex='between'>
                                <Text
                                    className="text-base w-auto"
                                    size="txtMontserratRegular16"
                                >
                                    {category.title}
                                </Text>
                                <img src={down} alt="dowp" style={selectedCategory === category._id ? {transform : "rotate(180deg)"}:{transform : "rotate(0deg)"}}/>
                            </Flex>
                        </Width>
                        {selectedCategory === category._id &&
                            subcategories && (
                                <div className="pl-5">
                                    {subcategories.map(
                                        (subcategory, subIndex) =>
                                            subcategory.categorieId ===
                                            selectedCategory && (
                                                <div
                                                    onClick={(e) =>
                                                        setSelectedSubcategory(
                                                            subcategory._id
                                                        )
                                                    }
                                                    key={subIndex}
                                                    className={`flex flex-row gap-3 items-center justify-between w-full cursor-pointer ${selectedSubcategory ===
                                                        subcategory._id
                                                        ? "text-red-300"
                                                        : "text-black-900"
                                                        }`}
                                                >
                                                    <Text
                                                        className="text-base w-auto my-3"
                                                        size="txtMontserratRegular16"
                                                    >
                                                        {subcategory.title}
                                                    </Text>
                                                </div>
                                            )
                                    )}
                                </div>
                            )}
                    </div>
                      ))}
                    </div>

                    <Line className="bg-red-300_47 h-px w-full" />
                    <div className="flex flex-col font-cormorant gap-5 items-start justify-start w-full">
                      <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <Text
                          className="text-red-300 text-xl w-auto"
                          size="txtCormorantBold20Red300"
                        >
                          PRICE
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowup.svg"
                          alt="arrowup"
                        />
                      </div>
                      <div className="flex flex-col font-calistoga items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <SeekBar
                            min={50}
                            max={9999}
                            inputValue={priceRange}
                            onChange={handlePriceChange}
                            trackColors={["#f0f0f0", "#c3937c", "#f0f0f0"]}
                            thumbClassName="h-5 bg-red-300 w-5 flex justify-center items-center rounded-[50%] outline-none"
                            className="flex h-5 rounded-[3px] w-full"
                            trackClassName="h-[5px] flex rounded-[3px] w-full"
                          />{" "}
                          <div className="flex flex-row items-center justify-between mt-[3px] w-[100%] md:w-full">
                            <Text
                              className="text-red-300 text-sm"
                              size="txtCalistogaRegular14Red300"
                            >
                              50 TND
                            </Text>
                            <Text
                              className="text-center text-red-300 text-sm"
                              size="txtCalistogaRegular14Red300"
                            >
                              {value}TND
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-red-300_47 h-px w-full" />
                    <Button
                      className="cursor-pointer font-montserrat min-w-[247px] rounded-[5px] text-center text-sm"
                      color="red_300"
                      size="md"
                      variant="fill"
                      onClick={handleSubmit}
                    >
                      Chercher
                    </Button>
                    <br></br>
                  </div>

                ) }

                <Products
                  filteredProducts={filteredProducts}

                />
              </div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CategoryPagePage;