import * as React from 'react';
import Drawer from '@mui/material/Drawer';


import { Link, useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import { SearchQuerry, User } from "../../utils/recoil/atoms";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Box } from '@mui/material';
import dayjs, { Dayjs } from "dayjs";

import styles from './style.module.css';
import { Button, Img, Input, Line, SeekBar, Text } from 'components';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { useGet, useGetUser } from 'utils/functions';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import Width from 'components/width/width';
import Flex from 'components/Flex/flex';

import down from '../../assets/images/down.svg'


const NestedList = ({ shareData }) => {

    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(User);
    const [search, setSearchQuerry] = useRecoilState(SearchQuerry);

    const handleSearchQueryChange = (value) => {
        console.log(value);
        setSearchQuerry(value);
    };

    const searchClick = () => {
        window.location.href = "/category?searchQuery="+search;
        
    }


    const [priceRange, setPriceRange] = useState([50, 9999]);
    const [selectedSubcategory, setSelectedSubcategory] = React.useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const Get = useGet();
    const [token] = useRecoilState(User);

    const [searchQuery, setSearchQuery] = useState(""); // State for search query

    const [subcategories, setSubcategories] = useState([]);
    const getUser = useGetUser();
    const [date, setDate] = useState();

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

    function serialize(obj) {
      return Object.keys(obj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&');
    }
      
    function handleData(){

        let data_var = {
            dateRange:date, priceRange, category:selectedCategory, subcategories:selectedSubcategory, searchQuery
        }

        const queryParams = data_var ? `?${serialize(data_var)}` : '';
        
        window.location.href = '/category'+queryParams

    }

    React.useEffect(() => {
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
    React.useEffect(() => {
        console.log(search);
    }, [search]);

    const filterProducts = (products) => {
        console.log(products);
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const [value, setValue] = useState(9999)

    const handlePriceChange = (newValue) => {
        console.log(newValue);
        setValue(parseInt(newValue[1]))
        setPriceRange(newValue);
    };
    return (
        <Box sx={{ width: "90vw", marginTop: "1.5rem" }}>

            <div className='mb-10 flex justify-start mx-2'>
                <Img
                className="h-[100%] w-[70%] object-cover"
                src="../images/img_sanstitre11.svg"
                alt="sanstitreEleven"
                onClick={() => navigate(`/homepage`)}
                />
            </div>

            <div
                className="flex flex-row gap-2 items-center justify-center mt-5 md:w-[100%] relative"
            >

           
                <Input
                    style={{
                        border: "1px solid #C3937C", borderRadius: "8px",
                        width: "95%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "calc(100% - 10px) center",
                        paddingRight: "35px",
                        margin: "0 auto",
                        display: "flex"
                    }}
                    type="text"
                    onChange={(e) => handleSearchQueryChange(e)}
                    value={search}
                    className="w-[400px]"
                    placeholder="Search products..."
                />
                <Img
                    className="h-[24px] absolute right-[5%] z-999"
                    src="../images/search-normal.svg"
                    alt="sanstitreEleven"
                    onClick={searchClick} />

            </div>

            <div className="border border-red-300 border-solid flex flex-col gap-6 md:h-auto items-start justify-start pt-5 sm:px-2 px-6 rounded-[7px] w-[95%] mx-auto my-3">
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
                

                <div className="flex flex-col font-montserrat gap-5 items-start justify-start w-full">
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

                <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                    <Text
                        className="text-black-900 text-sm w-[100%]"
                        size="txtCormorantRegular14"
                    >
                        SELECT YOUR WEEDING DATE :
                    </Text>
                    <div className="flex flex-col font-montserrat items-center justify-start w-[100%] md:w-full">
                        <div className="h-[100%] md:h-[100%] mt-1 relative w-[100%]">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar
                                    value={dayjs(date)}
                                    onChange={(e) => {
                                        const dateObject = new Date(
                                            e.$d
                                        ).toISOString();
                                        setDate(dateObject);
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
                <Line className="bg-red-300_47 h-px w-full" />
                <div className="flex flex-col w-[95%] mx-auto font-cormorant gap-5 items-start justify-start w-full">
                    <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <Text
                            className="text-red-300 text-xl w-auto"
                            size="txtCormorantBold20Red300"
                        >
                            PRICE
                        </Text>

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
                    className="cursor-pointer font-montserrat w-[100%] rounded-[5px] text-center text-sm mb-3"
                    color="red_300"
                    size="md"
                    variant="fill"
                    onClick={handleData}
                >
                    Chercher
                </Button>
            </div>

        </Box>
    );
};

export default function SidebarDrawer({ onchange, opens }) {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    React.useEffect(() => {
        setOpenDrawer(opens);

    }, [opens]);

    const toggleDrawer = (newOpen) => () => {

        setOpenDrawer(newOpen);
        onchange(newOpen);

    };


    const toggleDrawerNow = (newOpen) => {

        setOpenDrawer(newOpen.isOpen);
        onchange(newOpen.isOpen);

    };

    const navigate = useNavigate();


    return (
        <Drawer sx={{ width: "100%" }} anchor='left' open={openDrawer} onClose={toggleDrawer(false)}>
            <NestedList shareData={toggleDrawerNow} />
        </Drawer>

    );
}
