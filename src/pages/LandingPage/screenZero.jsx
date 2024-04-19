import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import   Shab  from "../../assets/images/cloud.png";
import { Text, Img } from "components";
import "./style.css";
import NavBar from "./navBar";
import { ReactComponent as Tiktok } from "../../assets/images/Tiktok.svg";
import { ReactComponent as Facebook } from "../../assets/images/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";
import { ReactComponent as ScrollVector } from "../../assets/images/scrollVector.svg";


const ScreenZero = () => {
  const divRef = useRef(null);
  const elementsRef = useRef([]);
  const navBar = useRef([]);

  
  useEffect(() => {
    const divEle = divRef.current;
    const elements = elementsRef.current;
    const navbar = navBar.current;

    
    if (divEle && elements && navbar) {
      gsap.fromTo(
        divEle,
        { y: "0%", scaleX: "200%", scaleY: "200%" }, // Starting position
        { duration: 10,scaleY:"250%",scaleX:"550%", y: "-28%", ease: "power3.out" }
      );
     
      gsap.fromTo(
        elements,
        { opacity: -10 },
        { duration: 4, opacity: 1, ease: "power3.out" }
      );
    
    }
  }, []);

  return (
    <>
      <NavBar  />

      
      <div className="flex panel flex-col items-start justify-start relative fullSize" style={{backgroundImage: 'url("images/aaaaaaaaaaaaaaaa.png")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
        <div className="flex items-center justify-center fullSize" >
          <div style={{height:"80%",display:"flex",flexDirection:"column"}}>
          <div  ref={(el) => elementsRef.current.push(el)} className="flex-col h-[40%] item-center z-[999]  justify-center pt-[14%] ">
          <Text
            className="sm:text-[32px] text-center md:text-[38px] text-[42px] z-[999] text-red-300 uppercase w-full"
            size="txtCormorantRegular42Red300"
          >
            discover
          </Text>
          <br></br>
          <Text                

            className="text-black-900 text-center text-6xl uppercase"
            size="txtCormorantRegular60Black900"
          >
            Embark on a journey of love, where <br /> dreams come true on
            your special day.
          </Text>
      
        </div>  
            <div className=" h-[60%] sm:mt-0 mt-[19.5rem] relative w-[100%]  sm:w-full">
              
              <Text className="text-center mt-3 mb-5 w-[100%]">Scroll</Text>
   
            </div>

          </div>
        </div>
        <div className=" flex gap-x-2 absolute bottom-[2%]  left-[1%] z-[999] ">

                <Tiktok
                  ref={(el) => elementsRef.current.push(el)}
                  className="  w-[100%]"
                />
                <Facebook
                  ref={(el) => elementsRef.current.push(el)}
                  className="  w-[100%]"
                />
                <Instagram
                  ref={(el) => elementsRef.current.push(el)}
                  className=" w-[100%]"
                />
        </div>
        <div className="absolute bottom-[0%] right-[50%]">
        <ScrollVector   ref={(el) => elementsRef.current.push(el)} />
        </div>
        <div className="absolute z-[-1] h-[100%] w-[100%]" ref={divRef} > 
          <img style={{width:"100%",height:"100%"}} src={Shab} />
        </div>
      </div>

    </>
  );
};

export default ScreenZero;
