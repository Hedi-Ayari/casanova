import React, { useEffect, useState } from "react";
import NavBar from "components/NavBar";
import Header from "./header";
import TopSelling from "./topSelling";
import WeDoTheBest from "./whatWeDoTheBest";
import HappyClients from "./happyClients";
import Footer from "components/Footer";
import './style.css'
  import { Get } from "service/api";


const HomepagePage = () => {
  const [data,setData] = useState([])
  useEffect(() => {
        
    const fetchUser = async () => {
        try {
            let userData = await Get("Categorie");
            userData.map(x=>{
              if(x.title == "Décorations" ||x.title == "Gateaux sucre" ||x.title == "Bands" || x.title == "Salles des fetes" ){
                setData(old => [...old,x])
              }
            })
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    fetchUser();
  }, []);
  

  return (
    <>
              <NavBar></NavBar>

      <div className="bg-white-A700 flex flex-col font-cormorant items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header></Header>
          <div className="flex flex-col font-montserrat justify-start pl-[8%] max-w-[1241px] max-w-[95%] w-[95%] md:mx-auto mt-[42px]  md:p-0 w-full">
            {data && data.length > 0 && data.map((x,index)=>{
              return(
                <TopSelling category={x} index={index}></TopSelling>

              )
            })}
          </div>
          <WeDoTheBest></WeDoTheBest>
          <HappyClients></HappyClients>
          <Footer />

         
        
          
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
