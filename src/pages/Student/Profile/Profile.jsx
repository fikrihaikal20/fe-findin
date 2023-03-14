import React from 'react'
import Navbar from '../../../components/partials/appbar/Navbar'
import bgProfile from "../../../assets/student/profilebg.png";
import poststudent from "../../../assets/student/poststudent.jpg"

const Profile = () => {
  return (
    <div>
      <Navbar/>
      <br /><br /><br />  
      <div className='w-full h-[1100px] bg-BeauBlue'>
        <div className='absolute w-[682px] h-[477px] bg-White rounded-3xl mt-[100px] ml-[150px] '>
          <img src={bgProfile} alt="" />
          <h2 className='absolute text-Black ml-[20px] mt-[30px]'>Saya adalah Mahasiswa Semester 3 Fakultas Ilmu Komputer yang selalu termotivasi dan dapat bekerja sama dalam tim. Memiliki pengalaman magang bidang data selama 6 bulan. Kini mencari posisi sebagai data analyst. Seorang yang teliti, terstruktur, dan cekatan saat mengerjakan tugas</h2>
          <button className='ml-[20px] mt-[170px] absolute font-sans font-bold bg-BlueLight rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Edit Profile</button>
        </div>
        <div className='w-[445px] h-[233px] bg-White ml-[900px] mt-[100px] absolute rounded-2xl'>
          <h3 className='font-sans absolute text-xl font-semibold mt-[15px] ml-[20px]'>Skills & Expertise</h3>
          <button className='absolute font-sans font-bold bg-BlueDark text-White ml-[20px] mt-[50px] rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Front end</button>
          <button className='absolute font-sans font-bold bg-BlueDark text-White ml-[130px] mt-[50px] rounded-2xl px-3 py-2 hover:scale-105 duration-400'>UI/UX Design</button>
          <button className='absolute font-sans font-bold bg-BlueDark text-White ml-[20px] mt-[100px] rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Design</button>
          <button className='absolute font-sans font-bold bg-BlueDark text-White ml-[110px] mt-[100px] rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Programming</button>
          <button className='absolute font-sans font-bold bg-BlueLight text-Black ml-[20px] mt-[160px] rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Edit Skills & Expertise</button>
        </div >
        <div className='w-[445px] h-[133px] bg-White ml-[900px] mt-[350px] absolute rounded-2xl'>
          <h2 className='absolute font-sans font-semibold text-xl mt-[20px] ml-[30px]'>Certifications</h2>
          <button className='absolute bg-DarkSkyBlue px-1 font-sans font-semibold py-1 rounded-2xl mt-[75px] ml-[27px] hover:scale-105 duration-400 '>Edit Certifications</button>
        </div>
        <div className='w-[445px] h-[133px] bg-White ml-[900px] mt-[505px] absolute rounded-2xl'>
          <h2 className='absolute font-sans font-semibold text-xl mt-[20px] ml-[30px]'>Curriculum Vitae</h2>
          <button className='absolute bg-DarkSkyBlue px-2 font-sans font-semibold py-1 rounded-2xl mt-[75px] ml-[27px] hover:scale-105 duration-400 '>Edit CV</button>
        </div>
        <div className='absolute w-[682px] h-[457px] bg-White rounded-2xl mt-[600px] ml-[150px]'>
            <h2 className='absolute font-sans font-bold text-xl mt-[30px] ml-[40px]'>My Videos</h2>
            <img src={poststudent} alt="" className='absolute mt-[80px] ml-[40px] w-[600px]'/>
            <h3 className="absolute mt-[340px] ml-[40px] text-xl font-bold">Aku bisa bikin tampilan gojek pake tailwind!!!</h3>
            <button className='mt-[380px] ml-[40px] absolute font-sans font-bold bg-BlueLight rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Add new</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
