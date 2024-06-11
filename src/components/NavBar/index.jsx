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
import bars from '../../assets/images/bars.svg'
import { useRecoilState } from "recoil";
import { useGetUser } from "utils/functions";
import { Link } from "react-router-dom";
import SidebarDrawer from "components/drawer";
import check from '../../assets/images/note-2.svg'

const NavBar = () => {
  const getUser = useGetUser();
  const [user, setUser] = useRecoilState(User);
  const [userData, setUserData] = useState();
  const [search, setSearchQuerry] = useRecoilState(SearchQuerry);
  const [showSelectListNotification, setShowSelectListNotification] = useState(false);
  const [playing, setPlaying] = useState(false)
  const navigate = useNavigate();
  const [showSelectList, setShowSelectList] = useState(false);
  const selectRef = useRef(null);
  const location = useLocation();
  const [backgroundAudio, setBackgroundAudio] = useState(null);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const handleImageClick = () => {
    setShowSelectList(!showSelectList);
  };
  const searchClick = () => {

    window.location.href = "/category?searchQuery=" + search


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

  const [loggedIn, setLoggedIn] = useState(null)
  const checkvalidUser = useGetUser()
  const [token, setToken] = useRecoilState(User);
  React.useEffect(() => {
    const fetchUserFromToken = async () => {
      if (!token) {
        setLoggedIn(false)
        return
      }
      const user = await checkvalidUser(token)
      if (user.status != 401) {
        await setLoggedIn(true)
      } else {
        setLoggedIn(false)
        return
      }
    };

    fetchUserFromToken();
  }, [token]);

  const handlePlayAudio = () => {
    if (backgroundAudio) {
      if (playing) {
        setPlaying(!playing)
        backgroundAudio.pause()
      } else {
        setPlaying(!playing)
        backgroundAudio.play();


      }
    }
  };

  const [openSide, setopenSide] = useState(false)

  function handleSide(data) {
    console.log(data);
    setopenSide(!openSide);
  }


  if (isTabletOrMobile) {
    return (
      <>
        <div>
          <div className={"flex justify-between items-center mt-5 mx-3"}>
            <div className="h-[24px]  w-[24px]">
              <img
                src={bars}
                alt="sanstitreEleven"
                className="h-[100%]  w-[100%]"
                onClick={() => handleSide()}

              />
            </div>




            {userData?.user ?
              <div className="flex items-center gap-[10px]">
                <Img
                  className="h-[24px] md:h-auto md:ml-[0]  rounded w-[24px]"
                  src="../images/cart.svg"
                  alt="bag"
                  onClick={() => navigate(`/cart`)}
                />
                <Img
                  className="h-6 w-6 md:ml-0"
                  src="../images/box.svg"
                  alt="bag"
                  onClick={() => navigate(`/category?category=all`)}
                />
                <Img
                  className="h-7 w-7 md:ml-0"
                  src={check}
                  alt="sanstitreEleven"
                  onClick={() => navigate(`/mes-ordres`)}

                />
                <div className="h-[38px] w-[38px]">
                  <img
                    className=" md:h-full md:ml-[0]  object-cover   rounded-lg"
                    onClick={() => navigate(`/usersetting`)}
                    src={
                      userData?.user?.picture
                        ? process.env.REACT_APP_API_BACK_IMG +
                        "/uploads/" +
                        userData?.user?.picture
                        : "../images/defaultProfilePicCopy.jpg"
                    } alt="bag"
                    style={{ height: "100%!important", width: "100%" }}
                  />
                </div>

              </div>
              :
              <div className="flex justify-between w-[70%]">
                <Link to='/signIn' style={{ width: '48%', height: '38px', fontSize: "14px", color: 'white', borderRadius: "8px", background: "rgb(195 147 124)", border: "1px solid rgb(195 147 124)" }} className="flex items-center justify-center" >Se connecter</Link>
                <Link to='/signUp' style={{ width: '48%', height: '38px', fontSize: "14px", color: 'rgb(195 147 124)', borderRadius: "8px", background: "white", border: "1px solid rgb(195 147 124)" }} className="flex items-center justify-center" >Registre</Link>
              </div>
            }
            <SidebarDrawer onchange={handleSide} opens={openSide}> </SidebarDrawer>
          </div>
        </div>
      </>)
  } else {
    return (
      <>
        <br />
        <div className="flex items-center px-[6%] justify-between">
  <div className="md:px-5">
    <Img
      className="h-[21px]"
      src="../images/img_sanstitre11.svg"
      alt="sanstitreEleven"
      onClick={() => navigate(`/homepage`)}
    />
  </div>

  <div className="flex flex-row gap-2 items-center relative w-1/4 md:w-full ml-5 sm:hidden">
    <Input
      style={{
        border: "1px solid #C3937C",
        borderRadius: "8px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "calc(100% - 10px) center",
        paddingRight: "35px",
      }}
      type="text"
      onChange={(e) => handleSearchQueryChange(e)}
      value={search}
      className="w-full"
      placeholder="Search products..."
    />
    <Img
      className="h-[20px] absolute right-5 cursor-pointer"
      src="../images/search-normal.svg"
      alt="sanstitreEleven"
      onClick={searchClick}
    />
  </div>

  {userData?.user ? (
    <div className="flex items-center gap-4 justify-end w-[32%] md:w-full relative">
      <Img
        className="h-[24px] cursor-pointer"
        src={playing ? "../images/volume-cross.svg" : "../images/volume-high.svg"}
        alt="Audio Toggle"
        onClick={handlePlayAudio}
      />
      <Img
        className="h-6 w-6 cursor-pointer"
        src="../images/box.svg"
        alt="Category"
        onClick={() => navigate(`/category?category=all`)}
      />
      <Img
        className="h-6 w-6 cursor-pointer"
        src="../images/notification-bing.svg"
        alt="Notifications"
        onClick={() => setShowSelectListNotification(!showSelectListNotification)}
      />
      <Img
        className="h-[27px] w-[25px] cursor-pointer"
        src="../images/cart.svg"
        alt="Cart"
        onClick={() => navigate(`/cart`)}
      />

      <div className="flex gap-2 items-center">
        <div className="h-[40px] w-[40px]">
          <img
            className="h-full w-full rounded"
            src={
              userData?.user?.picture
                ? process.env.REACT_APP_API_BACK_IMG + "/uploads/" + userData?.user?.picture
                : "../images/defaultProfilePicCopy.jpg"
            }
            alt="Profile"
          />
        </div>
        <div>
          <Text className="font-bold" style={{ color: '#151924', fontSize: '14px', fontFamily: 'Montserrat' }}>
            {userData?.user?.name}
          </Text>
          <Text style={{ color: '#444750', fontSize: '12px', fontFamily: 'Montserrat, sans-serif' }}>
            {userData?.user?.email?.primary}
          </Text>
        </div>
        <Img
          className="h-[24px] cursor-pointer"
          src="../images/arrow-down.svg"
          alt="Dropdown"
          onClick={handleImageClick}
        />
      </div>

      {showSelectList && (
        <div className="absolute right-0 top-[110%] mt-2 py-3 w-[250px] bg-white shadow-md rounded-md" style={{background:'#fff',zIndex:"99999999"}}>
          <ul ref={selectRef}>
            <li onClick={() => navigate(`/usersetting`)} className="py-3 px-4 hover:bg-gray-100  flex cursor-pointer">
              <Img className="mr-2" src="../images/Settings.svg" alt="Settings" /> Paramètres
            </li>
            <li onClick={() => navigate(`/mes-ordres`)} className="py-3 px-4 hover:bg-gray-100  flex cursor-pointer">
              <Img className="mr-2" src={check} alt="Orders" /> Mes ordres
            </li>
            {userData?.user?.type === "Prestataire" && (
              <li onClick={() => navigate(`/Dashboard`)} className="py-3 px-4 hover:bg-gray-100  flex cursor-pointer">
                <Img className="mr-2" src="../images/Settings.svg" alt="Dashboard" /> Dashboard
              </li>
            )}
            <li
              onClick={() => {
                setUser({});
                window.location.reload();
              }}
              className="py-2 px-4 hover:bg-gray-100  flex cursor-pointer"
            >
              <Img className="mr-2" src="../images/disconnect.svg" alt="Logout" /> Logout
            </li>
          </ul>
        </div>
      )}

      {showSelectListNotification && (
        <div className="absolute right-0 mt-2 w-[200px] bg-white shadow-md rounded-md">
          <ul>
            <li onClick={() => navigate(`/SignIn`)} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Notifications
            </li>
          </ul>
        </div>
      )}
    </div>
  ) : (
    <div className="w-1/4 flex justify-end">
      <Link
        to="/signIn"
        className="w-[48%] h-[38px] text-center flex items-center justify-center text-white rounded-md"
        style={{ background: "rgb(195 147 124)", border: "1px solid rgb(195 147 124)",color:"white" }}
      >
        Login
      </Link>
      <Link
        to="/signUp"
        className="w-[48%] h-[38px] text-center flex items-center justify-center text-[#C3937C] rounded-md ml-2"
        style={{ background: "#fff", border: "1px solid rgb(195 147 124)" }}
      >
        Register
      </Link>
    </div>
  )}
</div>

      </>
    );
  }

};

export default NavBar;

/**     <div>
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
                    style={{ display: showSelectList ? "block" : "none" }}
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
          </div> */