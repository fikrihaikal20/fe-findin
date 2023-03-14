import React from "react";
import background from "../../../assets/bgLogin1.png";
import { Link } from "react-router-dom";

const FormRegisterStudent = () => {
  return (
    <div>
      <div className="flex justify-center bg-TealBlue">
        <h1 className="absolute text-White text-5xl font-bold mr-[800px] mt-[400px]">
          Segera Registrasi dan
        </h1>
        <h1 className="absolute text-White text-5xl font-bold mr-[930px] mt-[470px]">
          ambil internship
        </h1>
        <h1 className="absolute text-White text-5xl font-bold mr-[1070px] mt-[540px]">
          impianmu
        </h1>
        <img src={background} alt="" className="rounded-r-[220px]" />
        <div className="w-full bg-TealBlue">
          <h1 className="absolute text-2xl text-White font-semibold ml-[200px] mt-[130px]">
            Create Username
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[190px]"
          />
          <h1 className="absolute text-2xl text-White font-semibold ml-[200px]  mt-[280px]">
            Email
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[340px]"
          />
          <h1 className="absolute text-2xl text-White ml-[200px] font-semibold mt-[430px]">
            Create Password
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[490px] "
          />
          <h1 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[580px]">
            Confirm Password
          </h1>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[640px]"
          />
          <Link to="/formverifmahasiswa" onClick={() => window.scrollTo(0,0)}>
            <button className="absolute w-[350px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[770px] ml-[200px] hover:scale-105 duration-400">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormRegisterStudent;
