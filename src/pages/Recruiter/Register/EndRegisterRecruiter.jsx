import React from "react";
import background from "../../../assets/bgLogin2.png";
import { Link } from "react-router-dom";

const EndRegisterRecruiter = () => {
  return (
    <div>
      <div className="flex justify-center bg-YankeesBlue">
        <div className="bg-YankeesBlue w-full h-[1080px]">
          <div className="flex justify-center">
            <h1 className="absolute text-White text-5xl font-bold mt-[440px]">Silahkan melakukan login</h1>
          </div>
          <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
            <button className="absolute w-[100px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[550px] ml-[330px] hover:scale-105 duration-400">
              Login
            </button>
          </Link>
        </div>
        <h1 className="absolute text-Black  text-5xl font-bold mt-[400px] ml-[910px]">
          Kami sangat
        </h1>
        <h1 className="absolute text-Black  text-5xl font-bold mt-[470px] ml-[750px]">
          berterimakasih atas
        </h1>
        <h1 className="absolute text-Black text-5xl font-bold mt-[540px] ml-[750px]">
          pendaftaran anda
        </h1>
        <img
          src={background}
          alt=""
          className="w-full h-[1080px] rounded-l-[220px]"
        />
      </div>
    </div>
  );
};

export default EndRegisterRecruiter;
