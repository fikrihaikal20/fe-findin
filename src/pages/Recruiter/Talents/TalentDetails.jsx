import React from "react";
import { useParams } from "react-router-dom";
import AppLayoutRecruiter from "../../../components/partials/layout/layout/AppLayoutRecruiter";
import { Link } from "react-router-dom";
import locationlogo from "../../../assets/student/location.png";
import jobtypelogo from "../../../assets/student/tipejob.png";
import role from "../../../assets/student/role.png";
import location from "../../../assets/student/location.png";
import foto from "../../../assets/newuser/foto3.png";
import foto2 from "../../../assets/newuser/foto4.png";
import poststudent from "../../../assets/student/poststudent.jpg"


const TalentDetails = () => {
  const { id } = useParams();
  return (
    <div>
        <AppLayoutRecruiter>

        <br />
        <br />
        <br />
        <div className="w-full h-[1200px] bg-BeauBlue">
          <div className="absolute w-[741px] h-[1015px] bg-BlueDark rounded-3xl mt-[50px] ml-[130px]">
            <img
              src={foto}
              alt=""
              className="absolute w-[100px] ml-[60px] mt-[50px] rounded-full"
              />
            <img
              src={locationlogo}
              alt=""
              className="absolute ml-[40px] mt-[290px] w-[20px]"
              />
            <img
              src={jobtypelogo}
              alt=""
              className="absolute ml-[40px] mt-[340px]"
              />
            <h2 className="absolute mt-[200px] ml-[40px] text-White">
              Suka banget sama ngoding, bisa semua bahasa ngoding,
            </h2>
            <h2 className="absolute mt-[230px] ml-[40px] text-White">eat sleep code 24/7</h2>
            <h2 className="absolute text-4xl text-White font-sans font-bold ml-[200px] mt-[60px]">
              Muhammad Yusuf
            </h2>
            <h2 className="absolute  text-md text-White font-sans text-xl ml-[205px] mt-[110px]">
              Universitas Brawijaya
            </h2>
            <h3 className="absolute font-sans ml-[90px] mt-[290px] text-White">Malang</h3>
            <h3 className="absolute font-sans ml-[90px] mt-[340px] text-White">
              Informatics Engineering
            </h3>

            <h3 className="absolute font-sans font-semibold text-xl ml-[40px] mt-[410px] text-White">
              Skills & Expertise
            </h3>
            <div className="absolute flex mt-[450px] ml-[30px] gap-[10px]">
              <h3 className="p-2 h-[39px] bg-BeauBlue rounded-xl font-sans font-semibold">
                Front end
              </h3>
              <h3 className="p-2 h-[39px] bg-BeauBlue rounded-xl font-sans font-semibold">
                Programming
              </h3>
            </div>
            <div>
                <h3 className="absolute font-bold text-xl mt-[540px] ml-[40px] text-White">Muhammad Yusuf Posts</h3>
                <img src={poststudent} alt="" className="absolute mt-[580px] ml-[30px] rounded-2xl"/>
                <h3 className="absolute mt-[790px] ml-[40px] text-xl font-bold text-White">Aku bisa bikin tampilan gojek pake tailwind!!!</h3>
            </div>
            <div className="flex justify-center absolute w-[328px] h-[749px] bg-BlueLight ml-[900px] rounded-3xl">
              <h2 className="absolute text-2xl font-bold text-White mt-[40px]">
                Other Students
              </h2>
              <div className="absolute w-[307px] h-[176px] bg-BlueDark rounded-2xl mt-[90px]">
                <img
                  src={foto2}
                  alt=""
                  className="absolute mt-[30px] ml-[20px] rounded-full w-[55px]"
                  />
                <h1 className="absolute text-xl font-bold mt-[30px] ml-[95px] text-White">
                  Fikri Haikal
                </h1>
                <h1 className="absolute text-md mt-[60px] ml-[95px] text-White">
                  Backend
                </h1>
                <img
                  src={role}
                  alt=""
                  className="absolute mt-[100px] ml-[13px]"
                  />
                <img
                  src={location}
                  alt=""
                  className="absolute mt-[135px] ml-[15px]"
                  />
                <p className="font-semibold mt-[95px] ml-[45px] text-White">Programming</p>
                <p className="font-semibold mt-[10px] ml-[45px] text-White">Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </AppLayoutRecruiter>
    </div>
  );
};
export default TalentDetails;
