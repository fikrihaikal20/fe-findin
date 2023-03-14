import React from "react";
import AppLayoutStudent from "../../components/partials/layout/layout/AppLayoutStudent";
import img1 from "../../assets/student/trendingstudent.png";
import img2 from "../../assets/student/trendingstudent1.png";
import img3 from "../../assets/student/trendingstudent2.png";
import img4 from "../../assets/student/trendingstudent3.png";
import img5 from "../../assets/student/viralstudent.png";
import img6 from "../../assets/student/viralstudent1.png";
import img7 from "../../assets/student/viralstudent2.png";
import img8 from "../../assets/student/viralstudent3.png";


const Insight = () => {
  return (
    <div>
      <AppLayoutStudent>
        <br /><br /><br />
        <div className="w-full h-[2900px] bg-BeauBlue">
          <div className="flex justify-center items-center">
            <h1 className="absolute text-Black text-4xl font-bold mt-[300px]">
              Dapetin banyak tips tentang internship disini
            </h1>
          </div>
          <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[300px] ml-[70px] flex justify-center items-center">
            <p className="absolute text-xl text-White font-bold">Job Hunting</p>
          </div>
          <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[300px] ml-[570px] flex justify-center items-center">
            <p className="absolute text-xl text-White font-bold">
              Planning for internships
            </p>
          </div>
          <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[300px] ml-[1080px] flex justify-center items-center">
            <p className="absolute text-xl text-White font-bold">
              Career life balance
            </p>
          </div>
          <h1 className="absolute text-Black font-bold text-5xl mt-[800px] ml-[130px] ">
            Trending Hari ini
          </h1>
          <div className="flex justify-center items-center">
            <div className="absolute bg-TealBlue w-[1276px] h-[284px]  mt-[2100px] rounded-3xl">
              <p className="absolute text-White text-xl font-semibold ml-[500px] mt-[20px]">
                The Benefits of Interning
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[90px]">
                Why Internships are Crucial for Your Career" by Forbes -
                highlights the benefits of internships such as gaining
                experience, developing skills, and building connections.
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[230px] font-bold">
                Post October, 2021
              </p>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[1300px] ml-[130px]">
              <img src={img2} alt="" />
              <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
                The Top 10 Internship Programs
              </p>
              <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
                Post October, 2021
              </p>
            </div>
            <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[1300px] ml-[630px]">
              <img src={img3} alt="" />
              <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
                The Do's and Don'ts of Interning
              </p>
              <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
                Post October, 2021
              </p>
            </div>
            <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[1300px] ml-[1080px]">
              <img src={img4} alt="" />
              <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
                Keuntungan Virtual Internships
              </p>
              <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
                Post October, 2021
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="absolute text-Black font-bold text-5xl mt-[3600px] -ml-[950px] ">
              Viral Banget
            </h1>
            <div className="absolute bg-TealBlue w-[1276px] h-[284px]  mt-[4100px] rounded-3xl">
              <p className="absolute text-White text-xl font-semibold ml-[500px] mt-[20px]">
                The Dark Side of Internships
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[90px]">
                What You Need to Know" by U.S. News & World Report - explores
                potential downsides of internships, such as unpaid work and
                exploitaition.
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[230px] font-bold">
                Post October, 2021
              </p>
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[2300px] ml-[130px]">
            <img src={img6} alt="" />
            <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
              Magang, Mengapa Penting?
            </p>
            <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
              Post October, 2021
            </p>
          </div>
          <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[2300px] ml-[630px]">
            <img src={img7} alt="" />
            <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
              Unpaid Internship, Perbudakan?
            </p>
            <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
              Post October, 2021
            </p>
          </div>
          <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[2300px] ml-[1080px]">
            <img src={img8} alt="" />
            <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
              Internship Experience
            </p>
            <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
              Post October, 2021
            </p>
          </div>
        </div>
      </AppLayoutStudent>
    </div>
  );
};

export default Insight;
