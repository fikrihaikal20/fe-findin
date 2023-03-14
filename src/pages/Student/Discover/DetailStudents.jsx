import React from "react";
import { useParams } from "react-router-dom";
import AppLayoutStudent from "../../../components/partials/layout/layout/AppLayoutStudent";
import { Link } from "react-router-dom";
import locationlogo from "../../../assets/student/location.png";
import jobtypelogo from "../../../assets/student/tipejob.png";
import role from "../../../assets/student/role.png";
import location from "../../../assets/student/location.png";
import foto from "../../../assets/newuser/foto3.png";
import foto2 from "../../../assets/newuser/foto4.png";
import poststudent from "../../../assets/student/poststudent.jpg"

import DetailJobs from "../../../components/detailJobs/Detailjobs";
import Detailstudent from "../../../components/detailstudent/Detailstudent";
import JobCard from "../../../components/Card/jobCard";
import Studentcard from "../../../components/Card/Studentcard";
import { useState, useEffect } from "react"
import axios from 'axios'


const DetailStudents = () => {
  const { nim } = useParams();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("http://localhost:8016/user/student");
      setStudent(response.data.data);
      console.log(response.data.data)
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-BeauBlue">
      <AppLayoutStudent>
        <br />
        <br />
        <br />
        <div className="h-[1500px] ">
          <div className=" grid grid-cols-6 gap-10  rounded-3xl mt-[50px] max-w-6xl mx-auto p-4">
            <div className=" bg-BlueDark p-4 col-span-2 h-screen overflow-y-auto scrollbar-track-gray-100 scrollbar-thumb-gray-500 scrollbar-thumb-hover-gray-600 scrollbar-thin scrollbar-thumb-rounded rounded-3xl">
              <h1 className=" text-White font-bold font-sans text-4xl mt-[40px] ">
                Other Students
              </h1>
              {student.map((data) => (
                <Studentcard
                  nim={data.nim}
                  domisili={data.domisili}
                  expertise={data.expertise}
                  nama={data.nama}
                  universitas={data.universitas} />
              ))}
            </div>
              <Detailstudent 
                nim = {nim}
              />
          </div>
        </div>
      </AppLayoutStudent>
    </div>
  );
};
export default DetailStudents;
