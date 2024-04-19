import React, { useEffect, useRef, useState } from "react";
import NavBar from "./navBar.jsx";
import ScreenOne from "./screenOne";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css"
import ScreenTwo from "./screenTwo";
import ScreenFour from "./screenFour";
import ScreenFive from "./screenFive";
import ScreenSix from "./screenSix.jsx";
import ScreenSeven from "./screenSeven.jsx";
import ScreenZero from "./screenZero.jsx";
import ContactMain from "./contactMain.jsx";
import JoinUs from "./JoinUs.jsx";

const LandingPage = () => {
  const landingPageRef = useRef(null);
  const landingPageThreeRef = useRef(null);

  useEffect(() => {
    gsap.to(".textCercle", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none"
    });
    gsap.registerPlugin(ScrollTrigger);

    const landingPageElement = landingPageRef.current;

    if (landingPageElement) {
      gsap.to(landingPageElement, {
        opacity: 1,
        duration: 3.5,
        ease: "power1.out"
      });
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const landingPageElement = landingPageRef.current;

    if (landingPageElement) {
      const sections = gsap.utils.toArray(".panel");

      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: landingPageElement,
          pin: true,
          scrub: 0.1,
          start: "top top",
          end: () => `+=${landingPageRef.current.offsetWidth}`,
        snap: 1 / (sections.length - 1),
        }
      });

      return () => {
        scrollTween.kill();
      };
    }
  }, []);
  
  return (
    <>
    <div className="bg-gray-100 font-montserrat mx-auto w-full noScroll">
        <div style={{ opacity: 0 }} className="bg-gray-100 flex w-full " ref={landingPageRef}>
          <ScreenZero/>
          <ScreenOne />
          <ScreenFour />
          <ScreenTwo />
          <ScreenSix/>
          <ScreenFive/>
          <JoinUs/>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
