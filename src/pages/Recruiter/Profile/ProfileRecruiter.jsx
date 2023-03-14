import React from 'react'
import bgProfile from"../../../assets/recruiter/profilerecruiter.jpg";
import NavbarRecruiter from '../../../components/partials/appbar/NavbarRecruiter';
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import jwtDecode from 'jwt-decode';

const ProfileRecruiter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({
    email : "",
    id : "",
    limit : "",
    perusahaan : "",
    username : ""
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token)
      const payload= jwtDecode(jwtToken)
      const userFromPayload= payload.user
      console.log(userFromPayload)
      if(userFromPayload.role === 'employee'){
        setIsLoggedIn(true)
        setProfile(userFromPayload)
      }else{
        window.location.href = "/login"
      }
    } else {
      window.location.href = "/login"
    }
  }, []);

  if(isLoggedIn){
    return (
      <div>
        <NavbarRecruiter/>
        <br /><br /><br />  
        <div className='w-full h-[700px] bg-BeauBlue'>
          <div className='absolute w-[682px] h-[477px] bg-White rounded-3xl mt-[100px] ml-[150px] '>
            <img src={bgProfile} alt="" className='rounded-3xl'/>
            <button className='ml-[20px] mt-[40px] absolute font-sans font-bold bg-BlueLight rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Edit Profile</button>
            <h3 className='absolute font-semibold mt-[120px] ml-[20px]'>Limit Post</h3>
            <h3 className='absolute font-semibold mt-[160px] ml-[20px]'>Member Since</h3>
            <h3 className='absolute font-sans font-bold mt-[125px] ml-[570px]'>{profile.limit}</h3>
            <h3 className='absolute font-sans font-bold mt-[165px] ml-[540px]'>{profile.username}</h3>
          </div>
          <div className='w-[445px] h-[393px] bg-White ml-[900px] mt-[100px] absolute rounded-2xl flex justify-center'>
            <h3 className='font-sans absolute text-xl font-semibold mt-[15px] '>Subscription for Unlimited posts</h3>
            <h3 className=' font-sans absolute  font-semibold mt-[65px] '>Professional Post</h3>
            <h3 className=' font-sans absolute  mt-[115px] ml-[50px]'>Dengan Profesional Post anda dapat lebih leluasa dalam menjangakau beragam mahasiswa yang berbakat dengan lowongan-lowongan yang anda post tanpa batasan</h3>
            <h3 className=' font-sans absolute  text-xl font-bold mt-[275px] '>Rp50.000</h3>
            <button className='absolute font-sans font-bold bg-BlueLight text-Black ml-[20px] mt-[320px] rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Subscribe Now</button>
          </div >
        </div>
      </div>
    )
  }

}

export default ProfileRecruiter
