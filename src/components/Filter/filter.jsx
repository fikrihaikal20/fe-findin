import searchlogo from "../../assets/student/search.png";
import closelogo from "../../assets/student/close.png";

const filter = () => {
  return (
    <div className="absolute w-[328px] h-[1049px] bg-YankeesBlue ml-[910px] rounded-3xl">
      <h1 className="absolute text-White font-bold font-sans text-4xl mt-[40px] ml-[45px]">
        Filter
      </h1>
      <h1 className="absolute text-White font-bold font-sans text-xl mt-[110px] ml-[40px]">
        Tampilkan berdasarkan
      </h1>
      <ul className="flex mt-[170px] ">
        <li>
          <button className="bg-BeauBlue rounded-2xl p-2 mx-3 ml-[40px] font-bold hover:scale-105 duration-400">
            Paling cocok
          </button>
        </li>
        <li>
          <button className="bg-BeauBlue rounded-2xl p-2 mx-3 font-bold px-3 hover:scale-105 duration-400">
            Terbaru
          </button>
        </li>
      </ul>
      <div>
        <h3 className="text-White font-sans font-semibold text-xl mt-[30px] ml-[34px]">
          Tipe internship
        </h3>
        <div className="mt-[30px] ml-[30px]">
          <input
            type="checkbox"
            id="full-time"
            className="h-4 w-4 text-White  rounded"
          />
          <label
            htmlFor="full-time"
            className="text-White font-sans ml-2 font-semibold text-xl mt-[30px]"
          >
            Full-time
          </label>
        </div>
        <div className="mt-[30px] ml-[30px]">
          <input
            type="checkbox"
            id="part-time"
            className="h-4 w-4 text-Whiterounded"
          />
          <label
            htmlFor="part-time"
            className="text-White font-sans ml-2 font-semibold text-xl mt-[30px]"
          >
            Part-time
          </label>
        </div>
        <div className="mt-[30px] ml-[30px]">
          <input
            type="checkbox"
            id="remote"
            className="h-4 w-4 text-White rounded"
          />
          <label
            htmlFor="remote"
            className="text-White font-sans ml-2 font-semibold text-xl mt-[30px]"
          >
            Bisa kerja remote
          </label>
          <h3 className="absolute text-White font-sans mt-[25px] text-xl">
            Expertise
          </h3>
          <div className="overflow-x-hidden">
            <select className="absolute w-[234px] py-2 border rounded-xl mt-[70px] mr-[25px] text-Black hover:border-YankeesBlue focus:outline-none">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div>
            <div>
              <h3 className="text-White text-xl mt-[130px] ml-[5px] font-sans">
                Skill
              </h3>
              <img
                src={searchlogo}
                alt=""
                className="absolute mt-[23px] ml-[5px]"
              />
              <input
                type="text"
                className="mt-[15px] rounded-2xl py-1"
              />
              <div className="w-[125px] h-[39px] bg-BeauBlue rounded-xl mt-[15px] flex justify-center items-center">
                <h3 className="absolute text-Black font-semibold font-sans w-[100px]">
                  Front-End
                </h3>
                <img
                  src={closelogo}
                  alt=""
                  className="absolute ml-[90px] cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h3 className="text-White text-xl mt-[30px] ml-[5px] font-sans">
                Kota
              </h3>
              <img
                src={searchlogo}
                alt=""
                className="absolute mt-[23px] ml-[5px]"
              />
              <input
                type="text"
                className="mt-[15px] rounded-2xl py-1"
              />
              <div className="w-[125px] h-[39px] bg-BeauBlue rounded-xl mt-[15px] flex justify-center items-center">
                <h3 className="absolute text-Black font-semibold font-sans w-[100px]">
                  Malang
                </h3>
                <img
                  src={closelogo}
                  alt=""
                  className="absolute ml-[90px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default filter;