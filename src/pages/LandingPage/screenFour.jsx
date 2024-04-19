import React, { useEffect, useRef } from "react";

import { Button, Img, Line, Text } from "components";
import { useNavigate } from "react-router-dom";

import "./style.css";
import LayoutNavbar from "layout/layout-navbar";
import LayoutHome from "layout/layout-home";
const ScreenFour = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <LayoutNavbar>
      <LayoutHome>

        <div className="flex items-center h-[100%] justify-center ">
          <div className="flex h-[90%] w-[90%] justify-between">
            <div className={`flex md:flex-1 h-[100%] w-[45.4%] flex-col items-center justify-between gap-5`} >

              <Img
                className={`md:h-auto object-cover h-[48%] w-[100%] rounded-br-7px w-full`}
                src={"images/img_weddingbouquet.png"}
                alt={"images/img_weddingbouquet.png"}
              />
              <Img
                className={`md:h-auto h-[48%] w-[100%] object-cover rounded-br-7px w-full`}
                src={"images/img_vitormonthayj.png"}
                alt={"images/img_vitormonthayj.png"}
              />
              <br />
              <br />


            </div>
            <div className="flex flex-col items-start w-[50%] justify-start">
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] mb-6 text-red-300 uppercase w-full"
                size="txtCormorantRegular42Red300"
              >
                nous construisons votre rève autour de vous
              </Text>
              
              <Text
                className="leading-[25.00px] my-3 w-[80%] md:ml-[0] mt-5 ml-[5px] text-[13px] text-black-900"
                size="txtMontserratRegular16"
              >
                <>
                  Simplifiezl&#39;organisation de vos événements, du rêve à la réalité
                  Votre événement, un succès clés en main où l&#39;union parfaite des prestataires pour un événement inoubliable sans stress.
                </>
              </Text>
              
              <Text
                className="leading-[25.00px] my-3 w-[80%] md:ml-[0] ml-[5px] text-[13px] text-black-900 w-[95%] sm:w-full"
                size="txtMontserratRegular16"
              >
                Trouvez en quelques clics le prestataire idéal pour votre événement : espaces, band, traiteur, photographe, décorateur, etc…
              </Text>
              
              <Text
                className="leading-[25.00px] my-3 w-[80%] md:ml-[0] ml-[5px] text-[13px] text-black-900 w-[95%] sm:w-full"
                size="txtMontserratRegular16"
              >
                <>
                  Comparez facilement les services et les tarifs en toute transparence pour choisir l&#39;offre qui correspond à vos besoins et à votre budget
                </>
              </Text>
              
              <Text
                className="md:ml-[0] my-3 ml-[5px] text-[13px] text-black-900"
                size="txtMontserratRegular16"
              >
                <>Gagnez du temps et de l&#39;énergie.</>
              </Text>
              
              <Button
                onClick={(e) => navigate("/homepage")}
                className="border border-red-300 border-solid cursor-pointer font-montserrat leading-[normal] min-h-[5%] min-w-[5%] rounded-[5px] text-center text-[12px] uppercase"
                color="red_300"
                size="sm"
                variant="fill"
              >
                Rejoignez-nous
              </Button>
            </div>
          </div>
        </div>

      </LayoutHome>
    </LayoutNavbar>
  );
};

export default ScreenFour;
