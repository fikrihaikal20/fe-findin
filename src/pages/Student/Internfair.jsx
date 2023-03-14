import React from "react";
import AppLayoutStudent from "../../components/partials/layout/layout/AppLayoutStudent";
import JumboInternfair from "../../assets/JumboInternfair.png";
import Card from "../../components/Card/Card";
import gojeklogo from "../../assets/gojek.png";
import shopeelogo from "../../assets/shopee.png";
import lazadalogo from "../../assets/lazada.png";
import tokopedialogo from "../../assets/tokopedia.png";

const Internfair = () => {
  return (
    <div>
      <AppLayoutStudent>
        <div className="flex justify-center items-center">
          <img src={JumboInternfair} alt="" className="w-full h-[834px]" />
          <h1 className="absolute text-5xl font-bold text-White">
            Ikuti internfair dan jangkau koneksi nyata seluas mungkin
          </h1>
        </div>

        <div className="w-full h-[550px] bg-BeauBlue">
          <h1 className="absolute text-5xl font-bold mt-[50px] ml-[100px]">
            Events Today
          </h1>

          <div className="absolute flex justify-center items-center mt-[150px] ml-[120px]">
            <Card/>
          </div>
        </div>
        <div className="w-full h-[606px] bg-JellybeanBlue">
          <div className="flex justify-center items-center">
            <h1 className="absolute text-4xl font-bold text-White mt-[180px]">Perusahaan Pemberi Internship</h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="absolute w-[1300px] h-[200px] bg-White rounded-2xl mt-[600px]">
              <img src={gojeklogo} alt="" className="absolute  -mt-[20px] ml-[30px]"/>
              <img src={shopeelogo} alt="" className="absolute mt-[53px] ml-[350px]"/>
              <img src={lazadalogo} alt="" className="absolute mt-[23px] ml-[650px]"/>
              <img src={tokopedialogo} alt="" className="absolute mt-[73px] ml-[980px]"/>
            </div>
          </div>
          <button className="bg-BeauBlue rounded-2xl text-Black text-2xl font-bold  py-1 px-5 hover:scale-105 duration-400 absolute mt-[500px] ml-[655px]">
            Contact us now
          </button>
        </div>
      </AppLayoutStudent>
    </div>
  );
};

export default Internfair;
