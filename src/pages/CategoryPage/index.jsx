import React, { useState, useEffect } from "react";

import { Button, Img, Input, Line, SeekBar, SelectBox, Text } from "components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useGet, useGetUser } from "../../utils/functions";
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

const sortByMostPopularOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CategoryPagePage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const Get = useGet();
  const [token] = useRecoilState(User);
  const [search, setSearchQuerry] = useRecoilState(SearchQuerry);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const [subcategories, setSubcategories] = useState([]);
  const getUser = useGetUser();
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );

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
        console.log(response.user.date);
        const dateObject = new Date(response.user.date);
        setDate(
          new Date(response.user.date).toLocaleDateString("en", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
        );
        //console.log(dateObject);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
    fetchCategories();
  }, []);
  useEffect(() => {
    console.log(search);
  }, [search]);

  const filterProducts = (products) => {
    console.log(products);
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const handlePriceChange = (newValue) => {
    console.log(newValue);
    setPriceRange(newValue);
  };
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
              <div className="flex sm:flex-row flex-row sm:gap-5 relative   items-center justify-start w-[80%] md:w-[100%] mt-12 mx-auto md:px-5 w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-red-300"
                  size="txtCormorantBold32"
                >
                  CATEGORY
                </Text>
                {isTabletOrMobile && (
                <Img
                  className="h-6 w-6"
                  src="images/img_frame_red_300.svg"
                  alt="frame"
                  onClick={onOpenModal}
                />
                )}
              </div>
              <div className="flex flex-row gap-5 relative  items-start justify-start w-[80%] md:w-[95%] mt-7 w-full">
                {!isTabletOrMobile ? (
                  
                    <div className="border border-red-300 border-solid flex flex-col gap-6 md:h-auto items-start justify-start pt-5 sm:px-5 px-6 rounded-[7px] w-[295px]">
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
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[251px]">
                        <Text
                          className="text-black-900 text-sm w-[100%]"
                          size="txtCormorantRegular14"
                        >
                          SELECT YOUR WEEDING DATE :
                        </Text>
                        <div className="flex flex-col font-montserrat items-center justify-start w-[98%] md:w-full">
                          <div className="h-[244px] md:h-[248px] mt-1 relative w-[125%]">
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
                              />
                            </LocalizationProvider>
                          </div>
                        </div>
                      </div>
         
                      <div className="mt-10 flex flex-col font-montserrat gap-5 items-start justify-start w-full">
                        <Text
                          className="text-red-300 text-xl w-auto"
                          size="txtCormorantBold20Red300"
                        >
                          CATEGORIES
                        </Text>
                        {categories?.map((category, index) => (
                          <div
                            key={category._id}
                            className={`flex flex-col gap-5  justify-between w-full cursor-pointer ${
                              selectedCategory === category._id
                                ? "text-red-300"
                                : "text-black-900"
                            }`}
                            onClick={() =>
                              handleCategorySelection(category._id)
                            }
                          >
                            <Text
                              className="text-base w-auto"
                              size="txtMontserratRegular16"
                            >
                              {category.title}
                            </Text>
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
                                          className={`flex flex-row gap-5 items-center justify-between w-full cursor-pointer ${
                                            selectedSubcategory ===
                                            subcategory._id
                                              ? "text-red-300"
                                              : "text-black-900"
                                          }`}
                                        >
                                          <Text
                                            className="text-base w-auto"
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
                              max={200}
                              inputValue={priceRange}
                              onChange={handlePriceChange}
                              trackColors={["#f0f0f0", "#c3937c", "#f0f0f0"]}
                              thumbClassName="h-5 bg-red-300 w-5 flex justify-center items-center rounded-[50%] outline-none"
                              className="flex h-5 rounded-[3px] w-full"
                              trackClassName="h-[5px] flex rounded-[3px] w-full"
                            />{" "}
                            <div className="flex flex-row items-center justify-between mt-[3px] w-[87%] md:w-full">
                              <Text
                                className="text-red-300 text-sm"
                                size="txtCalistogaRegular14Red300"
                              >
                                $50
                              </Text>
                              <Text
                                className="text-center text-red-300 text-sm"
                                size="txtCalistogaRegular14Red300"
                              >
                                $200
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
                      >
                        Apply Filter
                      </Button>
                      <br></br>
                    </div>
                  
                ) : (
                 
                  <Modal open={open} onClose={onCloseModal} center>
                  <br></br><br></br>

                  <div className="border border-red-300 border-solid flex flex-col gap-6 md:h-auto items-start justify-start pt-5 sm:px-5 px-6 rounded-[7px] w-[295px]">
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
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[251px]">
                      <Text
                        className="text-black-900 text-sm w-[100%]"
                        size="txtCormorantRegular14"
                      >
                        SELECT YOUR WEEDING DATE :
                      </Text>
                      <div className="flex flex-col font-montserrat items-center justify-start w-[98%] md:w-full">
                        <div className="h-[244px] md:h-[100%] mt-1 relative w-[125%]">
                          <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                          >
                            <DateCalendar
                              value={dayjs(date)}
                              onChange={(e) => {
                                const dateObject = new Date(
                                  e.$d
                                ).toISOString();
                                setDate(dateObject);
                                console.log(dateObject);
                              }}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="mt-10  flex flex-col font-montserrat gap-5 items-start justify-start w-full">
                      <Text
                        className="text-red-300 text-xl w-auto"
                        size="txtCormorantBold20Red300"
                      >
                        CATEGORIES
                      </Text>
                      {categories?.map((category, index) => (
                        <div
                          key={category._id}
                          className={`flex flex-col gap-5  justify-between w-full cursor-pointer ${
                            selectedCategory === category._id
                              ? "text-red-300"
                              : "text-black-900"
                          }`}
                          onClick={() =>
                            handleCategorySelection(category._id)
                          }
                        >
                          <Text
                            className="text-base w-auto"
                            size="txtMontserratRegular16"
                          >
                            {category.title}
                          </Text>
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
                                        className={`flex flex-row gap-5 items-center justify-between w-full cursor-pointer ${
                                          selectedSubcategory ===
                                          subcategory._id
                                            ? "text-red-300"
                                            : "text-black-900"
                                        }`}
                                      >
                                        <Text
                                          className="text-base w-auto"
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
                            trackColors={[
                              "#f0f0f0",
                              "#c3937c",
                              "#f0f0f0",
                            ]}
                            thumbClassName="h-5 bg-red-300 w-5 flex justify-center items-center rounded-[50%] outline-none"
                            className="flex h-5 rounded-[3px] w-full"
                            trackClassName="h-[5px] flex rounded-[3px] w-full"
                          />{" "}
                          <div className="flex flex-row items-center justify-between mt-[3px] w-[87%] md:w-full">
                            <Text
                              className="text-red-300 text-sm"
                              size="txtCalistogaRegular14Red300"
                            >
                              50TND
                            </Text>
                            <Text
                              className="text-center text-red-300 text-sm"
                              size="txtCalistogaRegular14Red300"
                            >
                              9999TND
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
                    >
                      Apply Filter
                    </Button>
                    <br></br>
                  </div>
                </Modal>
                  
                )}

                <Products
                  selectedCategory={selectedCategory}
                  selectedSubcategory={selectedSubcategory}
                  priceRange={priceRange}
                  dateRange={date}
                  category={selectedCategory}
                  subCategory={selectedSubcategory}
                  searchQuery={search}
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
