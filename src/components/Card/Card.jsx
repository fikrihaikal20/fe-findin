import React from "react";
import fotoContainer from "../../assets/newuser/insight3.png";
import jam from "../../assets/jam.png";
import lokasi from "../../assets/lokasi.png";

const Card = () => {
  return (
    <div>
      <div className="absolute w-[250px] h-[317px] rounded-2xl  bg-TealBlue">
        <img src={fotoContainer} alt="" className="w-[250px] h-[150px] "/>
        <p className="absolute text-White text-xl font-semibold ml-[28px] mt-[17px]">Gojek Internfair</p>
        <img src={jam} alt="" className="absolute mt-[60px] ml-[30px]"/>
        <p className="absolute text-White font-bold mt-[57px] ml-[60px]">13:00 - selesai</p>
        <img src={lokasi} alt="" className="absolute mt-[110px] ml-[30px]"/>
        <p className="absolute text-White text-xl font-semibold ml-[66px] mt-[104px]">Zoom</p>
      </div>
    </div>
  );
};

export default Card;
