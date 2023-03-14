import React from "react";
import background from "../../../assets/bgLogin1.png";
import { Link } from "react-router-dom";

const FormVerif = () => {
  return (
    <div>
      <div className="flex justify-center bg-TealBlue">
        <h1 className="absolute text-White text-5xl font-bold mr-[910px] mt-[400px]">
          Bantu rekruiter agar
        </h1>
        <h1 className="absolute text-White text-5xl font-bold mr-[950px] mt-[470px]">
          dapat lebih mudah
        </h1>
        <h1 className="absolute text-White text-5xl font-bold mr-[1060px] mt-[540px]">
          mencari kamu
        </h1>
        <img src={background} alt="" className="rounded-r-[220px]" />
        <div className="w-full bg-TealBlue">
        <h1 className="absolute text-2xl text-White font-semibold ml-[200px] mt-[30px]">
            Domisili
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[90px]"
          />
          <h1 className="absolute text-2xl text-White font-semibold ml-[200px] mt-[150px]">
            Perguruan Tinggi
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[200px]"
          />
          <h1 className="absolute text-2xl text-White font-semibold ml-[200px]  mt-[260px]">
            Tahun Masuk
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[320px]"
          />
          <h1 className="absolute text-2xl text-White ml-[200px] font-semibold mt-[390px]">
            Program Studi
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[450px] "
          />
          <h1 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[530px]">
            NIM
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[590px]"
          />
          <h1 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[670px]">
            NIK
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[740px]"
          />
          <h1 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[800px]">
            No HP
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[860px]"
          />
          <Link to="/formkeahlianmahasiswa" onClick={() => window.scrollTo(0,0)}>
            <button className="absolute w-[350px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[970px] ml-[200px] hover:scale-105 duration-400">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormVerif;
