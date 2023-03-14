import React from "react";
import { useState, useEffect } from "react"
import AppLayoutStudent from "../../components/partials/layout/layout/AppLayoutStudent";
import { Link, Route, Routes } from "react-router-dom";
import axios from 'axios'
import Detailjobs from "../../components/detailJobs/Detailjobs";
import JobCard from "../../components/Card/jobCard";
import { useParams } from "react-router-dom"

const Discover = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("http://localhost:8016/user/intern/");
      setJobs(response.data.data);
      console.log(response.data.data)
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <AppLayoutStudent>
        <br />
        <br />
        <br />
        <div className="h-[1500px] bg-BeauBlue">
          <div className="flex justify-between items-center px-10">
            <ul className="flex ml-[100px] mt-[30px]">
              <Link to="/liststudent" onClick={() => window.scrollTo(0, 0)}><li className="p-3 font-bold text-2xl">Students</li></Link>
              <Link to="/discover" ><li className="p-3 font-bold text-2xl">Internships</li></Link>
            </ul>
          </div>
          <div className=" grid grid-cols-6 gap-10  rounded-3xl mt-[50px] max-w-6xl mx-auto p-4">
            <div className=" bg-BlueDark p-4 col-span-2 h-screen overflow-y-auto scrollbar-track-gray-100 scrollbar-thumb-gray-500 scrollbar-thumb-hover-gray-600 scrollbar-thin scrollbar-thumb-rounded rounded-3xl">
              <h1 className=" text-White font-bold font-sans text-4xl mt-[40px] ">
                Total of 2 Internships
              </h1>
              {jobs.map((job) => (
                <JobCard
                  id={job.id}
                  posisi={job.posisi}
                  perusahaan={job.perusahaan}
                  jenis={job.jenisKerja}
                  lokasi={job.lokasi}
                />
              ))}
            </div>
              <Detailjobs 
                id = {id}
              />
          </div>
        </div>
      </AppLayoutStudent>
    </div>
  );
};

export default Discover;