import { Link } from 'react-router-dom';
import role from "../../assets/student/role.png";
import location from "../../assets/student/location.png";
import picture from "../../assets/newuser/foto3.png";

const Studentcard = ({ nim, domisili, expertise, nama, universitas }) => {
  return (
    <Link to={`/studentdetails/${nim}`} onClick={() => window.scrollTo(0, 0)}>
    <div className=" p-4 bg-BeauBlue rounded-2xl mt-[40px] ">
      <div className="flex ml-[15px] mt-[15px]">
        <div className="w-[55px] h-[55px] relative">
          <img
            src={picture}
            alt=""
            className="absolute rounded-full w-full h-full object-cover "
          />
        </div>
        <div className="ml-[40px]">
          <h1 className=" text-xl font-bold  ">
            {nama}
          </h1>
          <h1 className=" text-md  ">
            {universitas}
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
          {expertise}
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
        <p className="font-semibold ml-[40px]">{domisili}</p>
      </div>
    </div>
  </Link>
  );
};

export default Studentcard;
