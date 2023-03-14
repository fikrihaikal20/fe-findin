import React from "react";
import AppLayoutRecruiter from "../../components/partials/layout/layout/AppLayoutRecruiter";
import Trending from "../../assets/trending.png";
import TrendingDua from "../../assets/trendingdua.png";
import Viral from "../../assets/viral.png";
import ViralDua from "../../assets/viraldua.png";

const InsightRecruiter = () => {
  return (
    <div>
      <AppLayoutRecruiter>
        
        <br /><br /><br />
        <div className="w-full h-[2900px] bg-BeauBlue">
          <div className="flex justify-center items-center">
            <h1 className="absolute text-Black text-4xl font-bold mt-[300px]">
              Dapetin banyak tips & info seputar rekruitmen disini
            </h1>
          </div>
          <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[300px] ml-[70px] flex justify-center items-center">
            <p className="absolute text-xl text-White font-bold">
              Recruiting Interns
            </p>
          </div>
          <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[300px] ml-[570px] flex justify-center items-center">
            <p className="absolute text-xl text-White font-bold">
              Business Tips
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
                Apa itu Recruiter
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[90px]">
                Seorang rekruter membantu perusahaan mengisi lowongan dengan
                mengecek dan memilih resume kandidat atau membujuk individu yang
                qualified untuk mengisi posisi tersebut
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[230px] font-bold">
                Post October, 2021
              </p>
              <img src={Trending} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[1300px] ml-[130px]">
              <img src={TrendingDua} alt="" />
              <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
                Tanggung jawab recruiter
              </p>
              <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
                Post October, 2021
              </p>
            </div>
            <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[1300px] ml-[630px]">
              <img src={TrendingDua} alt="" />
              <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
                Skills-skills seorang Recruiter
              </p>
              <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
                Post October, 2021
              </p>
            </div>
            <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[1300px] ml-[1080px]">
              <img src={TrendingDua} alt="" />
              <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
                Trik jitu merekruit talent
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
                Membangun sistem rekrutmen
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[90px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem harum maiores, voluptas voluptate dolore magni
                eius voluptatum veritatis nemo, itaque doloribus ex
                reprehenderit libero ad ea sint reiciendis amet quis?
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[230px] font-bold">
                Post October, 2021
              </p>
              <img src={Viral} alt="" />
            </div>
          </div>
          <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[2300px] ml-[130px]">
            <img src={ViralDua} alt="" />
            <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
              Pentungnya analisa jabatan
            </p>
            <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
              Post October, 2021
            </p>
          </div>
          <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[2300px] ml-[630px]">
            <img src={ViralDua} alt="" />
            <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
              Pentingnya portofolio talent
            </p>
            <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
              Post October, 2021
            </p>
          </div>
          <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[2300px] ml-[1080px]">
            <img src={ViralDua} alt="" />
            <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
              Manfaat job analysis
            </p>
            <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
              Post October, 2021
            </p>
          </div>
        </div>
      </AppLayoutRecruiter>
    </div>
  );
};

export default InsightRecruiter;
