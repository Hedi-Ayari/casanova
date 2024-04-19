import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";
import LandingPageSEightColumnlogothirtyone from "components/archive To delete before build/LandingPageSEightColumnlogothirtyone";
import LayoutHome from "layout/layout-home";
import LayoutNavbar from "layout/layout-navbar";

const ContactPage = () => {
  return (
    <LayoutHome>
      <LayoutNavbar>
        <div className="absolute bottom-[17%] flex flex-col items-center justify-start left-[12%] w-[27%]">
          <Img
            className="h-[542px] md:h-auto object-cover rounded-br-[15px] w-full"
            src="images/img_patricklangwal_542x385.png"
            alt="patricklangwal"
          />
        </div>
        <div className="absolute bottom-[8%] flex flex-row sm:gap-10 items-start justify-between md:px-5 right-[6%] w-full">
          <div className="h-[181px] md:h-[207px] mb-[26px] relative w-1/5">
            <Img
              className="h-[181px] m-auto object-cover w-full"
              src="images/img_031_181x177.png"
              alt="ThirtyOne"
            />
            <Img
              className="absolute h-[117px] inset-y-[0] my-auto right-[14%]"
              src="images/img_vector_red_300_117x111.svg"
              alt="vector_One"
            />
          </div>
          <LandingPageSEightColumnlogothirtyone className="flex flex-col items-center justify-start mt-[87px] w-[12%]" />
        </div>
      </LayoutNavbar>
    </LayoutHome>


  );
};

export default ContactPage;
