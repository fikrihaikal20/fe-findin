import React from "react";
import { useParams } from "react-router-dom";
import AppLayoutStudent from "../../../components/partials/layout/layout/AppLayoutStudent";
import { Link } from "react-router-dom";
import gojek from "../../../assets/student/gojekinternfair.png";
import locationlogo from "../../../assets/student/location.png";
import jamlogo from "../../../assets/student/waktu.png";
import jobtypelogo from "../../../assets/student/tipejob.png";
import deadlinelogo from "../../../assets/student/deadline.png";
import logo2 from "../../../assets/student/marshallinternfair.png";
import role from "../../../assets/student/role.png";
import location from "../../../assets/student/location.png";

const InternDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <AppLayoutStudent>
        <br />
        <br />
        <br />
        <div className="w-full h-[1200px] bg-BeauBlue">
          <div className="absolute w-[741px] h-[1015px] bg-PaleCerulean rounded-3xl mt-[50px] ml-[130px]">
            <img
              src={gojek}
              alt=""
              className="absolute w-[90px] ml-[60px] mt-[50px]"
            />
            <img
              src={locationlogo}
              alt=""
              className="absolute ml-[40px] mt-[190px] w-[20px]"
            />
            <img
              src={jamlogo}
              alt=""
              className="absolute ml-[40px] mt-[240px]"
            />
            <img
              src={jobtypelogo}
              alt=""
              className="absolute ml-[40px] mt-[290px]"
            />
            <img
              src={deadlinelogo}
              alt=""
              className="absolute ml-[43px] mt-[340px] w-[20px]"
            />
            <h2 className="absolute text-4xl font-sans font-bold ml-[200px] mt-[60px]">
              Front end
            </h2>
            <h2 className="absolute text-4xl font-sans font-bold ml-[200px] mt-[60px]">
              Front end
            </h2>
            <h2 className="absolute  text-md font-sans text-xl ml-[205px] mt-[110px]">
              Gojek
            </h2>
            <h3 className="absolute font-sans ml-[90px] mt-[190px]">Malang</h3>
            <h3 className="absolute font-sans ml-[90px] mt-[238px]">
              Part time
            </h3>
            <h3 className="absolute font-sans ml-[90px] mt-[290px]">
              Remote job
            </h3>
            <h3 className="absolute font-sans ml-[90px] mt-[340px]">
              Closed on 20 Maret 2023
            </h3>
            <h3 className="absolute font-sans font-semibold text-xl ml-[40px] mt-[410px]">
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
            <h3 className="absolute font-sans font-semibold text-xl mt-[525px] ml-[40px]">Gojek Frontend Job Description</h3>
            <h3 className="absolute font-sans mt-[580px] ml-[40px]">Job Description :</h3>
            <ol className="absolute flex-row mt-[630px] ml-[40px]">
                <li className=" ">1. Bertanggung jawab atas semua hal yang berhubungan UI/UX Shoppee</li>
                <li className=" ">2. Merancang design system shoppee</li>
                <li className=" ">3. Bekerja secara on site di Malang</li>
            </ol>
            <h3 className="absolute font-sans mt-[740px] ml-[40px]">Minimal Requirements :</h3>
            <ol className="absolute flex-row mt-[770px] ml-[40px]">
                <li>1. Minimal pendidikan S1 Semua Jurusan</li>
                <li>2. Menguasai Figma</li>
                <li>3. Merupakan mahasiswa minimal semester 3</li>
            </ol>
            <h3 className="absolute text-2xl font-bold mt-[890px] ml-[40px]">Panduan Intern</h3>
            <button className="absolute text-xl font-bold mt-[940px] ml-[40px] bg-ChineseBlue text-White rounded-2xl py-1 px-2 hover:scale-105 duration-400">Click Here</button>
            <button className="absolute bg-Zomp font-bold text-xl rounded-xl px-3 py-1 ml-[550px] mt-[80px] hover:scale-105 duration-400">
              Apply now
            </button>

            <div className="flex justify-center absolute w-[328px] h-[749px] bg-YankeesBlue ml-[900px] rounded-3xl">
                <h2 className="absolute text-2xl font-bold text-White mt-[40px]">Other Internships</h2>
                <div className="absolute w-[307px] h-[176px] bg-BeauBlue rounded-2xl mt-[90px]">
                <img
                  src={logo2}
                  alt=""
                  className="absolute mt-[30px] ml-[20px]"
                />
                <h1 className="absolute text-xl font-bold mt-[30px] ml-[95px]">
                  Back-End
                </h1>
                <h1 className="absolute text-md mt-[60px] ml-[95px]">
                  Marshall
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
                <p className="font-semibold mt-[95px] ml-[45px]">Programming</p>
                <p className="font-semibold mt-[10px] ml-[45px]">Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </AppLayoutStudent>
    </div>
  );
};
export default InternDetails;
