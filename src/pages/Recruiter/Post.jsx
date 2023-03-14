import React from "react";
import AppLayoutRecruiter from "../../components/partials/layout/layout/AppLayoutRecruiter";
import background from "../../assets/recruiter/bgPost.png";

const Post = () => {
  return (
    <div>
      <AppLayoutRecruiter>
        <br /><br /><br />
        <div className="w-full h-[1700px] bg-BeauBlue">
          <img
            src={background}
            alt=""
            className="absolute ml-[700px] mt-[70px] h-[1350px]"
          />
          <div className="absolute w-[816px] h-[1397px] bg-PoliceBlue ml-[150px] mt-[110px] rounded-3xl">
            <div className="flex justify-center">
              <div>
                <div className="absolute w-[241px] h-[320px] bg-Zomp ml-[120px] mt-[140px] flex justify-center hover:border-4 hover:border-Black cursor-pointer">
                  <h1 className="absolute text-Black font-semibold text-xl mt-[15px]">
                    Standar Post
                  </h1>
                  <p className="absolute text-Black font-bold text-xl mt-[45px]">
                    Free
                  </p>
                  <p className="absolute text-Black font-semibold text-xl mt-[90px] ml-[20px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit beatae tempore, aliquam soluta quam delectus hic
                    eveniet, suscipit rerum alias
                  </p>
                </div>
                <div className="absolute w-[241px] h-[320px] bg-Zomp ml-[120px] mt-[500px] flex justify-center hover:border-4 hover:border-Black cursor-pointer">
                  <h1 className="absolute text-Black font-semibold text-xl mt-[15px]">
                    Professional Post
                  </h1>
                  <p className="absolute text-Black font-bold text-xl mt-[45px]">
                    Paid
                  </p>
                  <p className="absolute text-Black font-semibold text-xl mt-[90px] ml-[20px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit beatae tempore, aliquam soluta quam delectus hic
                    eveniet, suscipit rerum alias
                  </p>
                </div>
              </div>
              <h1 className="absolute text-3xl text-White font-bold mt-[30px]">
                Buat lowongan baru anda
              </h1>
              <h1 className="absolute text-3xl text-White font-semibold mr-[590px] mt-[130px]">
                Jabatan
              </h1>
              <input
                type="text"
                className="absolute rounded-2xl w-[350px] py-3 mt-[190px] mr-[370px]"
              />
              <h1 className="absolute text-3xl text-White font-semibold mr-[550px] mt-[280px]">
                Perusahaan
              </h1>
              <input
                type="text"
                className="absolute rounded-2xl w-[350px] py-3 mt-[340px] mr-[370px]"
              />
              <h1 className="absolute text-3xl text-White font-semibold mr-[450px] mt-[430px]">
                Jenis tempat kerja
              </h1>
              <input
                type="text"
                className="absolute rounded-2xl w-[350px] py-3 mt-[490px] mr-[370px]"
              />
              <h1 className="absolute text-3xl text-White font-semibold mr-[480px] mt-[580px]">
                Lokasi pekerjaan
              </h1>
              <input
                type="text"
                className="absolute rounded-2xl w-[350px] py-3 mt-[640px] mr-[370px]"
              />
              <h1 className="absolute text-3xl text-White font-semibold mr-[490px] mt-[730px]">
                Jenis Pekerjaan
              </h1>
              <input
                type="text"
                className="absolute rounded-2xl w-[350px] py-3 mr-[370px] mt-[790px]"
              />
              <h1 className="absolute text-3xl text-White font-semibold mr-[570px] mt-[880px]">
                Deskripsi
              </h1>
              <input
                type="text"
                className="absolute rounded-2xl w-[350px] py-3 mr-[370px] mt-[940px]"
              />
              <h1 className="absolute text-3xl text-White font-semibold mr-[570px] mt-[1030px]">
                Deadline
              </h1>
              <input
                type="text"
                className="absolute rounded-2xl w-[350px] py-3 mr-[370px] mt-[1090px]"
              />
              <p className="absolute text-2xl text-White font-semibold mr-[410px] mt-[1180px]">Lampiran file panduan intern</p>
              <button className="absolute text-xl text-Black font-semibold bg-BeauBlue px-7 hover:scale-105 duration-400 rounded-xl py-1 mt-[1230px] mr-[600px]">Upload</button>
              <button className="absolute text-xl text-Black font-bold bg-BeauBlue px-7 hover:scale-105 duration-400 rounded-xl py-1 mt-[1310px] w-[400px]">Post</button>
            </div>
          </div>
        </div>
      </AppLayoutRecruiter>
    </div>
  );
};

export default Post;
