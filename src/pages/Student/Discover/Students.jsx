import React from "react";
import AppLayoutStudent from "../../../components/partials/layout/layout/AppLayoutStudent";

import Studentcard from "../../../components/Card/Studentcard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'


const Students = () => {
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
    <div className=" bg-BeauBlue">
      <AppLayoutStudent>
        <br />
        <br />
        <br />
        <div className="mx-auto px-[100px] ">
          <div className="flex items-center px-10">
            <ul className="flex  mt-[30px]">
              <Link to="/liststudent" onClick={() => window.scrollTo(0, 0)}><li className="p-3 font-bold text-2xl">Students</li></Link>
              <Link to="/discover" ><li className="p-3 font-bold text-2xl">Internships</li></Link>
            </ul>
          </div>
          <div className=" bg-BlueDark p-4 rounded-3xl mt-[50px]">
            <h1 className="text-White font-bold text-3xl mt-[40px] ml-[45px]">
              Total of 2 students
            </h1>
            <div className="grid grid-cols-3 gap-4">
              {student.map((data) => (
                <Studentcard
                  nim={data.nim}
                  domisili={data.domisili}
                  expertise={data.expertise}
                  nama={data.nama}
                  universitas={data.universitas} />
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </AppLayoutStudent>
    </div>
  );
};

export default Students;
