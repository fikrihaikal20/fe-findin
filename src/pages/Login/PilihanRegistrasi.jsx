import React from "react";
import bg1 from "../../assets/bgLogin1.png";
import bg2 from "../../assets/bgLogin2.png";
import { NavLink } from "react-router-dom";

const PilihanRegistrasi = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="absolute text-White text-6xl font-bold mt-[150px] mr-[70px]">
          Pilih Role Sesuai Kebutuhan
        </h1>
        <h1 className="absolute text-White text-6xl font-bold mt-[230px] mr-[60px]">
          Anda
        </h1>
      </div>
      <div>
        <div className="absolute w-[350px] h-[350px] border-2 border-White bg-transparent rounded-3xl flex justify-center items-center mt-[500px] ml-[200px]">
          <nav>
            <NavLink to="/studentregister" onClick={() => window.scrollTo(0,0)}>
              <h1 className="absolute text-6xl font-bold text-White">
                <span className="absolute -ml-[100px] -mt-[25px] cursor-pointer">Student</span>
              </h1>
            </NavLink>
          </nav>
        </div>
        <div className="absolute w-[350px] h-[350px] border-2 border-White bg-transparent rounded-3xl flex justify-center items-center mt-[500px] ml-[1000px]">
          <nav>
            <NavLink to="/recruiterregister" onClick={() => window.scrollTo(0,0)}>
              <h1 className="absolute text-6xl font-bold text-White">
                <span className="absolute -ml-[100px] -mt-[25px] cursor-pointer">Recruiter</span>
              </h1>
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={bg1} alt="" className="" />
        <img src={bg2} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default PilihanRegistrasi;
