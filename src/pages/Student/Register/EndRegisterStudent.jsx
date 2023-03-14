import React from "react";
import background from "../../../assets/bgLogin1.png";
import { Link } from "react-router-dom";

const EndRegisterStudent = () => {
  return (
    <div>
      <div className="flex justify-center bg-TealBlue">
        <h1 className="absolute text-White text-5xl font-bold mr-[1170px] mt-[400px]">
          Kami sangat 
        </h1>
        <h1 className="absolute text-White text-5xl font-bold mr-[1000px] mt-[470px]">
          berterimakasih atas
        </h1>
        <h1 className="absolute text-White text-5xl font-bold mr-[1030px] mt-[540px]">
          pendaftaran kamu
        </h1>
        <img src={background} alt="" className="rounded-r-[220px]" />
        <div className="w-full bg-TealBlue">
          
          <h1 className="absolute text-White text-5xl font-bold mt-[440px] ml-[100px]">Silahkan melakukan login</h1>
          <Link
            to="/login"
            onClick={() => window.scrollTo(0, 0)}
          >
            <button className="absolute w-[100px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[570px] ml-[330px] hover:scale-105 duration-400">
              Login
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default EndRegisterStudent;
