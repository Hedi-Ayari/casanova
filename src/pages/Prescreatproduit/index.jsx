import React, { useState, useEffect } from "react";
import { useCreate, useGet } from "../../utils/functions";
import "./style.css";
import toast from "react-hot-toast";
import { Button, Input, Text } from "components";
import CustomToast from "../../components/toast";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Media from "./media";
import { useNavigate } from "react-router-dom";

const PrescreatproduitPage = ({ userData ,onItemClick }) => {
  const navigate=useNavigate()
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [availability, setAvailability] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const[productSubCat,setProductSubCat] = useState();
  const Create = useCreate();
  const Get = useGet();
  const [filesList, setFilesList] = useState([]);

  const updateFilesList = (newFilesList) => {
    setFilesList(newFilesList);
  };

  const handleSubmit = async () => {
    const data = {
      modelName: "Product",
      title,
      price,
      categorie:selectedCategory,
      subCategorie:productSubCat,
      availibity:availability,
      owner: userData.user._id,
      description: Description,
      image: filesList,
    };
    console.log("ddata",data);
    try {
      const response = await Create(data);
      toast.custom(
        (t) => (
          <CustomToast
            data={t}
            message="Product Created"
            title="Info"
          ></CustomToast>
        ),
        {
          duration: 3000,
        }
      );
      onItemClick("PresProduitPage")

    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const handleDateChanger = (e) => {
  
    setAvailability({
      endDate: e[1].toISOString(),
      startDate: e[0].toISOString(),
    });
  };

  const handleCategoryChange = async (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    // Fetch subcategories based on the selected category
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
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="flex m-auto w-full">
        <div className="flex m-auto w-full justify-center  w-[100%]">
          <div className="bg-white-A700 border-solid flex flex-col items-start justify-end my-auto p-2 py-5 z-[1]">
            <Text
              className="text-2xl md:text-[0px] text-gray-900_02 sm:text-xl"
              size="txtMontserratRomanSemiBold24"
            >
              Create new product
            </Text>
            <div className="flex flex-col font-montserrat items-start justify-start mt-3 pr-1 py-1 w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900_02 w-auto"
                  size="txtMontserratRomanSemiBold16Gray90002"
                >
                  General information
                </Text>
              </div>
            </div>
            <Text
              className="mt-4 text-gray-600_03 text-sm"
              size="txtMontserratRomanRegular14Gray60003"
            >
              To start selling, all you need is a name and a price.
            </Text>
            <Text
              className="mt-[35px] text-gray-600_03 text-xs"
              size="txtInterSemiBold12"
            >
              <span className="text-gray-600_03 font-montserrat text-left font-semibold">
                Title
              </span>
              <span className="text-red-400 font-montserrat text-left font-semibold">
                *
              </span>
            </Text>
            <Input
              onChange={(e) => setTitle(e)}
              name="input"
              placeholder="Gateau"
              className="font-inter p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
              wrapClassName="border border-gray-200_01 border-solid mt-[11px] rounded-lg w-full"
              shape="round"
              color="gray_50"
              size="lg"
            ></Input>
            <Text
              className="leading-[24.00px] mt-3 text-gray-600_03 text-sm"
              size="txtMontserratRomanRegular14Gray60003"
            >
              <>
                Give your product a short and clear title. <br />
                50-60 characters is the recommended length for search engines.
              </>
            </Text>
            <div id="cssportal-grid">
              <div id="div1">
                <Text
                  className="text-gray-600_03  text-xs w-auto"
                  size="txtMontserratRomanSemiBold12"
                >
                  Prix :
                </Text>
              </div>

              <div id="div2">
                {" "}
                <Text
                  className="text-gray-600_03 text-xs w-auto"
                  size="txtMontserratRomanSemiBold12"
                >
                  Disponibility :
                </Text>
              </div>
              <div id="div3">
                {" "}
                <Input
                  onChange={(e) => setPrice(e)}
                  name="dtCounter"
                  type="Number"
                  placeholder="2000 DT"
                  className="p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                  wrapClassName="border border-gray-200_01 border-solid sm:flex-1 rounded-lg sm:w-full"
                  shape="round"
                  color="gray_50"
                  size="lg"
                ></Input>
              </div>
              <div id="div4">
                {" "}
                <Calendar
                  onChange={(e) => handleDateChanger(e)}
                  selectRange={true}
                />
              </div>
            </div>

         
            <div className="flex sm:flex-col flex-row font-inter gap-6 items-center justify-between mt-2 w-full"></div>
            <Text
              className="mt-[35px] text-gray-600_03 text-xs"
              size="txtInterSemiBold12"
            >
              <span className="text-gray-600_03 font-montserrat text-left font-semibold">
                Description
              </span>
              <span className="text-red-400 font-montserrat text-left font-semibold">
                *
              </span>
            </Text>
            <textarea
              name="input_One"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Gateaux"
              rows={4}
              style={{resize:"none",background:"rgb(249 250 251 / var(--tw-bg-opacity))",padding:"11px"}}
              className="round round font-inter border border-gray-200_01 border-solid mt-[9px] rounded-lg w-full p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
            ></textarea>
            <Text
              className="leading-[24.00px] mt-3 text-gray-600_03 text-sm"
              size="txtMontserratRomanRegular14Gray60003"
            >
              <>
                Give your product a short and clear description.
                <br />
                120-160 characters is the recommended length for search engines.
              </>
            </Text>
            <div className="w-[100%] flex justify-between pt-5">
              <div className="w-[48%]">
                <Text
                  className="text-gray-600_03  text-xs w-auto"
                  size="txtMontserratRomanSemiBold12"
                >
                  Categories :
                </Text>
                <div className="pt-4" >
                {" "}
                <select
                  onChange={handleCategoryChange}
                  placeholder="Categories"
                  value={selectedCategory}
                  style={{width:"100%",resize:"none",background:"rgb(249 250 251 / var(--tw-bg-opacity))",padding:"11px"}}
              className="round round font-inter border border-gray-200_01 border-solid mt-[9px] rounded-lg w-full p-0 placeholder:text-gray-900_02 text-left text-sm w-full"
                >
                  <option disabled value="">
                    Select Category
                  </option>
                  {categories.map((cat) => ( 
                    <option  key={cat._id} value={cat._id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>
              </div>

              <div className="w-[48%]">
                
                <Text
                  className="text-gray-600_03 text-xs w-auto"
                  size="txtMontserratRomanSemiBold12"
                >
                  SubCategorie :
                </Text>
                <div className="pt-4" >
                
                <select 
                style={{width:"100%",resize:"none",background:"rgb(249 250 251 / var(--tw-bg-opacity))",padding:"11px"}}
                className="round round font-inter border border-gray-200_01 border-solid mt-[9px] rounded-lg w-full p-0 placeholder:text-gray-900_02 text-left text-sm w-full"

                onChange={(e) => setProductSubCat(e.target.value)} placeholder="Subcategories">
                  <option selected disabled>Select sub Categorie</option>
                  {subcategories.map((subcat) => (
                    <option value={subcat._id} key={subcat._id} >
                      {subcat.title}
                    </option>
                  ))}
                </select>
              </div>
              </div>

              
             
            </div>

            <br></br>
            <div id="cssportal-grid">
              <div id="div1"> </div>
              <div id="div2"></div>
            </div>

            <Media
              userData={userData}
              filesList={filesList}
              setFilesList={updateFilesList}
            />
            <Button
              onClick={() => handleSubmit()}
              class="border border-gray-200_01 border-solid cursor-pointer flex items-center justify-center font-medium min-w-[115px] rounded-lg text-[13px] text-center p-[9px]"
              color="black"
              size="sm"
              variant="fill"
            >
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescreatproduitPage;
