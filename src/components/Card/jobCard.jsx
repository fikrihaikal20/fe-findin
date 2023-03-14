import { Link } from 'react-router-dom';
import logo1 from "../../assets/student/gojekinternfair.png";
import role from "../../assets/student/role.png";
import location from "../../assets/student/location.png";

const JobCard = ({ id, posisi, perusahaan, jenis, lokasi }) => {
  return (
    <Link to={`/discover/${id}`} onClick={() => window.scrollTo(0, 0)}>
    <div className=" h-[176px] p-4 bg-BeauBlue rounded-2xl mt-[40px] ">
      <div className="flex ml-[15px] mt-[15px]">
        <div>
          <img
            src={logo1}
            alt=""
            className=" "
          />
        </div>
        <div className="ml-[40px]">
          <h1 className=" text-xl font-bold  ">
            {posisi}
          </h1>
          <h1 className=" text-md  ">
            {perusahaan}
          </h1>
        </div>
      </div>
      <div className="flex ml-[15px] mt-[20px]">
        <div>
          <img
            src={role}
            alt=""
            className="  "
          />
        </div>
        <p className="font-semibold ml-[40px]">
          {jenis}
        </p>
      </div>
      <div className="flex ml-[15px] ">
        <div>
          <img
            src={location}
            alt=""
            className=" "
          />
        </div>
        <p className="font-semibold ml-[40px]">{lokasi}</p>
      </div>
    </div>
  </Link>
  );
};

export default JobCard;
