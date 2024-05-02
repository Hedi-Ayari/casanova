import React, { useState, useRef, useEffect } from "react";
import { Img, Line, Text, Input } from "components";
import "./style.css";
import { IoLogOut } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { User } from "../../utils/recoil/atoms";
import { useNavigate, useLocation } from 'react-router-dom';
import { RiDashboardLine } from "react-icons/ri";
import { SearchQuerry } from "../../utils/recoil/atoms";
import backgroundMusic from "./music.mp3";
import { RiPauseCircleLine } from "react-icons/ri";
import { useMediaQuery } from 'react-responsive'

import { useRecoilState } from "recoil";
import { useGetUser } from "utils/functions";
import { Link } from "react-router-dom";
const NavBar = () => {
  const getUser = useGetUser();
  const [user, setUser] = useRecoilState(User);
  const [userData, setUserData] = useState();
  const [search, setSearchQuerry] = useRecoilState(SearchQuerry);
  const [showSelectListNotification, setShowSelectListNotification] = useState(false);
  const [playing,setPlaying]=useState(false)
  const navigate = useNavigate();
  const [showSelectList, setShowSelectList] = useState(false);
  const selectRef = useRef(null);
  const location = useLocation();
  const [backgroundAudio, setBackgroundAudio] = useState(null);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const handleImageClick = () => {
    setShowSelectList(!showSelectList);
  };
  const searchClick = () => {
   console.log(location.pathname);
   if(location.pathname!="/category"){
    navigate("/category")
   }

  }
  const handleSearchQueryChange = (value) => {
    setSearchQuerry(value); 
     };
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userData = await getUser(user);
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    if (user.length !== 0) {
      fetchUser();
    }
    const audio = new Audio(backgroundMusic);
    setBackgroundAudio(audio);
    return () => {
      audio.pause();
    };


  }, []);

    const [loggedIn,setLoggedIn] = useState(null)
  const checkvalidUser= useGetUser()
  const [token,setToken] = useRecoilState(User);
  React.useEffect(() => {
    const fetchUserFromToken = async () => {
     if(!token){
      setLoggedIn(false)
      return
     }
     const user =  await checkvalidUser(token)
     if(user.status!=401){
     await setLoggedIn(true)
     }else{
      setLoggedIn(false)
      return
     }
    };

    fetchUserFromToken();
  }, [token]);

  const handlePlayAudio = () => {
    if (backgroundAudio) {
      if(playing){
       setPlaying(!playing)
       backgroundAudio.pause()
      }else{
             setPlaying(!playing)
              backgroundAudio.play();


      }
    }
  };
  
  if(isTabletOrMobile ){
    return (
    <> 
    <div>
        <div className={"flex justify-between items-center mt-5 mx-3"}>
          <div >
          <Img
                src="../images/img_sanstitre11.svg"
                alt="sanstitreEleven"
                onClick={() => navigate(`/homepage`)}
              />
          </div>
          {userData?.user ?
          <div className="flex gap-[11%]  ">
            
          <Img
          className="h-[30px] md:h-auto md:ml-[0]  rounded-[50%] w-[30px]"
          src="../images/box.svg"
          alt="bag"
          onClick={() => navigate(`/category`)}
        />
          <Img
          className="h-[30px] md:h-auto md:ml-[0]  rounded-[50%] w-[30px]"
          src="../images/cart.svg"
          alt="bag"
          onClick={() => navigate(`/cart`)}
        />
          <Img
          className="h-[30px] md:h-auto md:ml-[0]  rounded-[50%] w-[30px]"
          onClick={handleImageClick}
          src={
            userData?.user?.picture
              ? process.env.REACT_APP_API_BACK_IMG +
                "/uploads/" +
                userData?.user?.picture
              : "../images/defaultProfilePicCopy.jpg"
          }            alt="bag"
        />
    </div>
          : 
          <Link to='/signIn' style={{width:'35%',height:'38px',fontSize:"14px",color:'white',borderRadius:"8px",background:"rgb(195 147 124)",border:"1px solid rgb(195 147 124)"}} className="flex items-center justify-center" >Login</Link>
          }
          
        
        
        </div> 
        <div>
          {userData?.user ? (
                  <div className="flex w-[100%] " hidden={!showSelectList}>
                    <ul
                      ref={selectRef}
                      className="SelectSettingsProfilePhone"
                      style={{ display: showSelectList ? "block" : "none" }}
                    >
                      <li
                        onClick={() => navigate(`/usersetting`)}
                        className="text-base  py-3 text-red-300 lg font-cormorant font-normal flex items-center"
                      >
                        <Img
                          className="mr-2"
                          src="../images/Settings.svg"
                          alt="sanstitreEleven"
                        />{" "}
                        User Settings
                      </li>
                      {userData?.user?.type == "Prestataire" ? (
                        <>
                          {" "}
                          <li
                            onClick={() => navigate(`/Dashboard`)}
                            className="text-base  py-3 text-red-300 lg font-cormorant font-normal flex items-center"
                          >
                            <Img
                              className="mr-2"
                              src="../images/Settings.svg"
                              alt="sanstitreEleven"
                            />{" "}
                            Dashboard
                          </li>
                        </>
                      ) : (
                        <></>
                      )}
    
                      <li
                        onClick={() => {
                          setUser({});
                          window.location.reload();
                        }}
                        className="text-base  py-3 text-red-300 lg font-cormorant font-normal flex items-center"
                      >
                        <Img
                          className="mr-2"
                          src="../images/disconnect.svg"
                          alt="sanstitreEleven"
                        />{" "}
                        Logout
                      </li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <div className="flex ml-[22%]" hidden={!showSelectList}>
                      <ul
                        ref={selectRef}
                        className="SelectSettingsProfile"
                        style={{ display: showSelectList ? "block" : "none"  }}
                      >
                        <li
                          onClick={() => navigate(`/SignIn`)}
                          className="text-base  py-3 text-red-300 lg font-cormorant font-normal flex items-center"
                        >
                          <CiSettings className="mr-2" /> Login
                        </li>
                      </ul>
                    </div>
                  </>
                )}
          </div>
    </div>
      <div
           className="flex flex-row gap-2 items-center justify-center mt-5 md:w-[100%] relative"
         >
           <Input
             style={{ border: "1px solid #C3937C", borderRadius: "8px" ,
             width:"95%",
             backgroundRepeat: "no-repeat",
             backgroundPosition: "calc(100% - 10px) center",
             paddingRight: "35px" ,
             margin:"0 auto",
             display:"flex"
      }}
             type="text"
             onChange={(e) => handleSearchQueryChange(e)}
             value={search }
             className="w-[400px]"
             placeholder="Search products..."
           />
            <Img
           className="h-[24px] absolute right-[5%]"
           src="../images/search-normal.svg"
           alt="sanstitreEleven"
           onClick={searchClick}          />

         </div>
     
     </>)
  }else{
    return (
      <>
        <br />
        <div className=" flex items-center pl-[6%] pr-[6%] justify-between ">
          {/* <div className="nav-item"> */}
          <div className=" md:gap-5    md:px-5 ">
            <Img
              className="h-[21px]"
              src="../images/img_sanstitre11.svg"
              alt="sanstitreEleven"
              onClick={() => navigate(`/homepage`)}
            />
          </div>
  
          <div
              className="sm:hidden flex flex-row gap-2 items-center  mr-7 w-1/4 md:w-full"
            >
              <Input
                style={{ border: "1px solid #C3937C", borderRadius: "8px" ,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 10px) center",
                paddingRight: "35px" ,
         }}
                type="text"
                onChange={(e) => handleSearchQueryChange(e)}
                value={search }
                className="w-[400px]"
                placeholder="Search products..."
              />
               <Img
              className="h-[24px]"
              src="../images/search-normal.svg"
              alt="sanstitreEleven"
              onClick={searchClick}          />
  
  
  
  
  
              <Line className="bg-red-300 h-[21px] w-px" />
            </div> 
          <div className="flex items-center gap-[4%] justify-center">
  
  
  
  
  
          <div className="pr-[2%]"></div>
          <Img
              className="h-[24px]"
              src={
                playing 
                  ? 
                    "../images/volume-cross.svg"
                  : "../images/volume-high.svg"
              } 
              alt="sanstitreEleven"
              onClick={handlePlayAudio}          />
            <Img
              className="h-6 w-6 md:ml-0 ml-3"
              src="../images/box.svg"
              alt="bag"
              onClick={() => navigate(`/category`)}
            />
            
            
            <Img
              className="h-6 w-6 md:ml-0 ml-3"
              src="../images/notification-bing.svg"
              alt="bag"
              onClick={() => setShowSelectListNotification(!showSelectListNotification)}
            />
             <Img
              className="h-6 w-6 md:ml-0 ml-3"
              src="../images/cart.svg"
              alt="bag"
              onClick={() => navigate(`/cart`)}
            />
            <div className="flex gap-2">
            <Img
              className="h-[40px] md:h-auto md:ml-[0]  rounded-[50%] w-[40px]"
              src={
                userData?.user?.picture
                  ? process.env.REACT_APP_API_BACK_IMG +
                    "/uploads/" +
                    userData?.user?.picture
                  : "../images/defaultProfilePicCopy.jpg"
              }            alt="bag"
            />
            <div>
              
              <Text className="pt-[2%]" style={{ color: '#151924', fontSize: '14px', fontFamily: 'Montserrat'    , fontWeight: "bold" }} >{userData?.user?.name}</Text>
              <Text style={{ color: '#444750', fontSize: '12px', fontFamily: 'Montserrat, sans-serif' }}>  {userData?.user?.email?.primary}</Text>
            </div>
            <Img
              className="pb-[2%] h-[40px] md:h-auto md:ml-[0]  rounded-[50%] w-[10%]"
              src="../images/arrow-down.svg"
              alt="bag"
              onClick={handleImageClick}
            />
            </div>
          
          
            <div className=" " onClick={handleImageClick}>
             
              {userData?.user ? (
                <div className="flex w-[100%] " hidden={!showSelectList}>
                  <ul
                    ref={selectRef}
                    className="SelectSettingsProfile"
                    style={{ display: showSelectList ? "block" : "none" }}
                  >
                    <li
                      onClick={() => navigate(`/usersetting`)}
                      className="text-base  py-3 text-red-300 lg font-cormorant font-normal flex items-center"
                    >
                      <Img
                        className="mr-2"
                        src="../images/Settings.svg"
                        alt="sanstitreEleven"
                      />{" "}
                      User Settings
                    </li>
                    {userData?.user?.type == "Prestataire" ? (
                      <>
                        {" "}
                        <li
                          onClick={() => navigate(`/Dashboard`)}
                          className="text-base  py-3 text-red-300 lg font-cormorant font-normal flex items-center"
                        >
                          <Img
                            className="mr-2"
                            src="../images/Settings.svg"
                            alt="sanstitreEleven"
                          />{" "}
                          Dashboard
                        </li>
                      </>
                    ) : (
                      <></>
                    )}
  
                    <li
                      onClick={() => {
                        setUser({});
                        window.location.reload();
                      }}
                      className="text-base  py-3 text-red-300 lg font-cormorant font-normal flex items-center"
                    >
                      <Img
                        className="mr-2"
                        src="../images/disconnect.svg"
                        alt="sanstitreEleven"
                      />{" "}
                      Logout
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <div className="flex ml-[22%]" hidden={!showSelectList}>
                    <ul
                      ref={selectRef}
                      className="SelectSettingsProfile"
                      style={{ display: showSelectList ? "block" : "none"  }}
                    >
                      <li
                        onClick={() => navigate(`/SignIn`)}
                        className="text-base  py-3 text-red-300 lg font-cormorant font-normal flex items-center"
                      >
                        <CiSettings className="mr-2" /> Login
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div className=" " onClick={handleImageClick}>
         
               <>
                 <div className="flex ml-[22%]" hidden={!showSelectList}>
                   <ul
                     className="SelectSettingsProfile"
                     style={{ right: "18%", display: showSelectListNotification ? "block" : "none" }}
                     >
                     <li
                       onClick={() => navigate(`/SignIn`)}
                       className="text-base  font-cormorant font-normal flex items-center"
                     >
                       Notifications
                     </li>
                   </ul>
                 </div>
               </>
        
           </div>
          </div>
        </div>
  
        {/* </div> */}
      </>
    );
  }
  
};

export default NavBar;
