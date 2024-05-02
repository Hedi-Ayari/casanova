import React from "react";
import NavBar from "components/NavBar";
import Header from "./header";
import TopSelling from "./topSelling";
import WeDoTheBest from "./whatWeDoTheBest";
import HappyClients from "./happyClients";
import Footer from "components/Footer";
import './style.css'
import { useMediaQuery } from "react-responsive";
const HomepagePage = () => {



  return (
    <>
              <NavBar></NavBar>

      <div className="bg-white-A700 flex flex-col font-cormorant items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header></Header>
          <div className="flex flex-col font-montserrat items-center justify-start pl-[8%] max-w-[1241px] max-w-[95%] w-[95%] md:mx-auto mt-[42px]  md:p-0 w-full">
            <TopSelling></TopSelling>
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
