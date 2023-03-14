import gojek from "../../assets/student/gojekinternfair.png";
import locationlogo from "../../assets/student/location.png";
import jamlogo from "../../assets/student/waktu.png";
import jobtypelogo from "../../assets/student/tipejob.png";
import deadlinelogo from "../../assets/student/deadline.png";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const DetailJobs = ({id}) => {
    const [job, setJob] = useState(null);
  
    useEffect(() => {
      const fetchJob = async () => {
        const response = await axios.get(
          `http://localhost:8016/user/intern/${id}`
        );
        setJob(response.data.data);
        console.log(response.data.data);
      };
      fetchJob();
    }, [id]);
  
    if (!job) {
      return <div>Silahkan pilih internJobs di sebelah kiri untuk melihat detailnya</div>;
    }

  return (
    <div className="col-span-4 p-4 bg-PaleCerulean rounded-3xl">
    <div className="row1 justify-between flex ml-[40px] mt-[40px]">
      <div className="flex">
        <img
          src={gojek}
          alt=""
          className="absolute w-[70px]"
        />
        <div className="ml-[100px]">
          <h2 className=" text-4xl font-sans font-bold">
          {job.posisi}
          </h2>
          <h2 className="  text-md font-sans text-xl ">
            {job.perusahaan}
          </h2>
        </div>
      </div>
      <button className=" bg-Zomp font-bold text-xl rounded-xl hover:scale-105 duration-400">
        Apply now
      </button>
    </div>
    <div className="row2 ml-[40px]">
      <div className="flex row1 mt-[40px]">
        <img
          src={locationlogo}
          alt=""
          className=" w-[20px]"
        />
        <h3 className=" font-sans ml-[40px]">
        {job.lokasi}
        </h3>
      </div>
      <div className="flex row2 mt-[10px]">
        <img
          src={jamlogo}
          alt=""
          className=" "
        />
        <h3 className=" font-sans ml-[40px]">
        {job.jenisKerja}
        </h3>
      </div>
      <div className="flex row3 mt-[10px]">
        <img
          src={jobtypelogo}
          alt=""
          className=""
        />
        <h3 className=" font-sans ml-[40px]">
        {job.metodeKerja}
        </h3>
      </div>
      <div className="flex row4 mt-[10px]">
        <img
          src={deadlinelogo}
          alt=""
          className=" "
        />
        <h3 className=" font-sans  ml-[40px]">
          Closed on 20 Maret 2023
        </h3>
      </div>
    </div>
    <div className="row3 ml-[40px] mt-[40px] mb-[40px]">
      <h3 className=" font-sans font-semibold text-xl ml-[40px]">{job.perusahaan} {job.posisi} Job Description</h3>
      <pre className=" font-sans ml-[40px] mt-[20px]" >{job.deskripsi}</pre>
      <h3 className=" text-2xl font-bold  ml-[40px] mt-[20px]">Panduan Intern</h3>
      <button className=" text-xl font-bold  mt-[20px] ml-[40px] bg-ChineseBlue text-White rounded-2xl py-1 px-2 hover:scale-105 duration-400"
        onClick={() => window.location.href = `http://localhost:8016/${job.panduan.replace("public\\", "")}`}>
        Click Here
        </button>
    </div>
  </div>
  );
};

export default DetailJobs;
