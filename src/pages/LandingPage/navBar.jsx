import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Img, Line, Text } from "components";
import "./style.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navBar = useRef([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const path = window.location.pathname


  useEffect(() => {
    const navbar = navBar.current;


    if (navbar) {
      gsap.fromTo(
        navbar,
        { y: "-200%" },
        { duration: path == "/contact" ? 3 : 10, y: "20%", ease: "power3.out" }
      );



    }
  }, [path]);
  const navigate = useNavigate()
  const handleContactClick = () => {

    navigate('/contact')

  };
  const handleHomeClick = () => {
    if (window.location.pathname != "/"){
      navigate('/')
    }
    const windowHeight = window.innerHeight;
    const targetScroll = windowHeight * 0;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
    setScrollPercentage(targetScroll / document.body.scrollHeight * 100);
  };

  const handlePlanClick = () => {
    if (window.location.pathname != "/"){
      navigate('/')
    }
    
    const windowHeight = window.innerHeight;
    const targetScroll = windowHeight * 1;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
    
    setScrollPercentage(targetScroll / document.body.scrollHeight * 100);
  };
  return (
    <div className="navbar-position-top transformToY" ref={navBar}>
      <div className="flex justify-center">
        <div className="w-[90%]">
          <div className="flex  items-center justify-between w-full">
            <div className="flex flex-col ">

              <Text
                onClick={handleHomeClick}
                className="underline cursor-pointer text-base text-black-900"
                size="txtMontserratRegular16"
              >
                ACCUEIL
              </Text>
              <Text
                onClick={handlePlanClick}

                className="underline cursor-pointer mt-[11px] text-base text-black-900"
                size="txtMontserratRegular16"
              >
                A PROPOS
              </Text>
              <Text
                className="underline cursor-pointer mt-[11px] text-base text-black-900"
                size="txtMontserratRegular16"
                onClick={handleContactClick}


              >
                CONTACT
              </Text>
              <Text
                onClick={handlePlanClick}

                className="underline cursor-pointer mt-[11px] text-base text-black-900"
                size="txtMontserratRegular16"
              >
                WEDDING PLANNER
              </Text>
            </div>
            <>

              <Img
                className="  h-7  md:h-auto object-cover"
                src="images/img_logo22.png"
                alt="logoTwentyTwo"
              />
            </>
          </div>
        </div>
      </div>


    </div>

  );
};
export default NavBar;
