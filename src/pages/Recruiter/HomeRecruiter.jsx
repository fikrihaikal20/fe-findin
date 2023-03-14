import React from "react";
import AppLayoutRecruiter from "../../components/partials/layout/layout/AppLayoutRecruiter";
import jumborecruiter from "../../assets/recruiter/jumbotronrecruiter.png";
import gojeklogo from "../../assets/gojek.png";
import shopeelogo from "../../assets/shopee.png";
import lazadalogo from "../../assets/lazada.png";
import tokopedialogo from "../../assets/tokopedia.png";
import foto1 from "../../assets/trending.png";
import foto2 from "../../assets/viraldua.png";
import foto3 from "../../assets/newuser/insight3.png";
import foto4 from "../../assets/recruiter/bgPost.png";
import pic1 from "../../assets/recruiter/pic1.png";
import pic2 from "../../assets/recruiter/pic2.png";
import pic3 from "../../assets/recruiter/pic3.png";
import pic4 from "../../assets/recruiter/pic4.png";
import { Link } from "react-router-dom";


const HomeRecruiter = () => {
  return (
    <div>
      <AppLayoutRecruiter>
        <div>
          <img src={jumborecruiter} alt="" className="w-full" />
          <div className="flex justify-center items-center">
            <h1 className="absolute text-5xl font-bold text-White -mt-[1100px]">
              Terhubung dengan mahasiswa manapun
            </h1>
            <h1 className="absolute text-5xl font-bold text-White -mt-[900px]">
              di kampus mana pun
            </h1>
          </div>
          <div className="w-full h-[1400px] bg-BeauBlue">
            <div>
              <img src={pic1} alt="" className="absolute ml-[900px] mt-[210px] z-10" />
              <img src={pic2} alt="" className="absolute ml-[1100px] mt-[110px]" />
              <img src={pic3} alt="" className="absolute ml-[1100px] mt-[340px] z-20" />
              <img src={pic4} alt="" className="absolute ml-[900px] mt-[440px] z-30" />
              
              <h1 className="absolute text-5xl font-semibold text-Black mt-[70px] ml-[150px]">
                Temukan talent mahasiswa
              </h1>
              <p className="absolute text-5xl font-semibold text-Black mt-[120px] ml-[150px]">
                yang anda butuhkan
              </p>
              <p className="absolute text-5xl font-semibold text-Black mt-[170px] ml-[150px]">
                dengan cepat
              </p>
            </div>

            <div className="flex justify-center">
              <h1 className="absolute text-Black font-bold text-3xl mt-[700px]">
                Jangkau jaringan mahasiswa berbakat yang beragam
              </h1>
            </div>
            <div>
              <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[800px] ml-[70px] flex justify-center items-center">
                <p className="absolute text-xl text-White font-bold">
                  1M+ Mahasiswa Aktif
                </p>
              </div>
              <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[800px] ml-[570px] flex justify-center items-center">
                <p className="absolute text-xl text-White font-bold">
                  10+ PTN di Indonesia
                </p>
              </div>
              <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[800px] ml-[1080px] flex justify-center items-center">
                <p className="absolute text-xl text-White font-bold">
                  50+ Kategori Skill
                </p>
              </div>
              <div className="flex justify-center">
                <button className="absolute text-Black font-bold text-2xl bg-Zomp mt-[1250px] rounded-2xl px-7 py-1 hover:scale-105 duration-400">
                  Find talents
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[606px] bg-JellybeanBlue">
            <div className="flex justify-center items-center">
              <h1 className="absolute text-4xl font-bold text-White mt-[180px]">
                Dipercaya oleh beberapa startup dan perusahaan di Indonesia
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <div className="absolute w-[1300px] h-[200px] bg-White rounded-2xl mt-[600px]">
                <img
                  src={gojeklogo}
                  alt="gojeklogo"
                  className="absolute  -mt-[20px] ml-[30px]"
                />
                <img
                  src={shopeelogo}
                  alt="shopeelogo"
                  className="absolute mt-[53px] ml-[350px]"
                />
                <img
                  src={lazadalogo}
                  alt="lazadalogo"
                  className="absolute mt-[23px] ml-[650px]"
                />
                <img
                  src={tokopedialogo}
                  alt="tokopedialogo"
                  className="absolute mt-[73px] ml-[980px]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-[1131px] bg-PoliceBlue">
              <h1 className="absolute text-White text-5xl font-bold mt-[100px] ml-[188px]">
                Dapatkan tips rahasia dari
              </h1>
              <h1 className="absolute text-White text-5xl font-bold mt-[188px] ml-[430px]">
                artikel yang ada di Insights.
              </h1>
              <div className="absolute w-[362px] h-[512px] bg-DarkSkyBlue rounded-2xl mt-[400px] ml-[50px]">
                <img
                  src={foto1}
                  alt=""
                  className="absolute mt-[30px] ml-[30px] w-[300px] rounded-xl"
                />
                <h1 className="absolute text-Black text-2xl font-bold mt-[260px] ml-[39px]">
                  Apa itu rekruiter
                </h1>
                <p className="absolute text-Black text-xl font-semibold ml-[39px] mt-[330px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita laudantium distinctio culpa id ea exercitationem
                  eaque. Omnis officia minima placeat{" "}
                </p>
              </div>
              <div className="absolute w-[362px] h-[512px] bg-DarkSkyBlue rounded-2xl mt-[400px] ml-[595px]">
                <img
                  src={foto2}
                  alt=""
                  className="absolute mt-[30px] ml-[20px] rounded-xl"
                />
                <h1 className="absolute text-Black text-2xl font-bold mt-[250px] ml-[29px]">
                  Skill - skill seorang rekruiter
                </h1>
                <p className="absolute text-Black text-xl font-semibold ml-[39px] mt-[330px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita laudantium distinctio culpa id ea exercitationem
                  eaque. Omnis officia minima placeat
                </p>
              </div>
              <div className="absolute w-[362px] h-[512px] bg-DarkSkyBlue rounded-2xl mt-[400px] ml-[1100px]">
                <img
                  src={foto3}
                  alt=""
                  className="absolute mt-[30px] ml-[40px]"
                />
                <h1 className="absolute text-Black text-2xl font-bold mt-[250px] ml-[39px]">
                  Gabut dirumah? Lakuin 10 hal ini
                </h1>
                <p className="absolute text-Black text-xl font-semibold ml-[39px] mt-[330px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita laudantium distinctio culpa id ea exercitationem
                  eaque. Omnis officia minima placeat{" "}
                </p>
              </div>
              <div className="flex justify-center">
                <Link to="/insightrecruiter" onClick={() => window.scrollTo(0, 0)}><button className="-ml-[50px] absolute bg-DarkSkyBlue rounded-2xl font-bold text-2xl px-5 hover:scale-105 duration-400 mt-[990px]">
                  See more
                </button>
                </Link>
              </div>
            </div>
            <div className="w-full h-[836px] bg-BeauBlue">
              <h1 className="absolute ml-[850px] mt-[200px] text-5xl font-bold">Lihat apa yang dapat dilakukan FindIn untuk</h1>
              <h1 className="absolute ml-[850px] mt-[300px] text-5xl font-bold">perekrutan bakat awal Anda</h1>
              <img src={foto4} alt="" className="absolute w-1/2 h-[836px] rounded-none"/>
              <Link to="/post" onClick={() => window.scrollTo(0, 0)}><button className="absolute rounded-2xl text-Black  px-5 py-3 font-bold text-3xl hover:scale-105 duration-400 bg-Zomp ml-[860px] mt-[400px]">
                Post Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </AppLayoutRecruiter>
    </div>
  );
};

export default HomeRecruiter;
