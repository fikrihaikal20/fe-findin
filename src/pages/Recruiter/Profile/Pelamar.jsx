import React from 'react'
import NavbarRecruiter from '../../../components/partials/appbar/NavbarRecruiter'
import { Link } from 'react-router-dom'
import profilepicture from "../../../assets/recruiter/profilepicture.png";

const Pelamar = () => {
  return (
    <div>
      <NavbarRecruiter />
      <br /><br /><br />
      <div className='absolute w-full h-[800px] bg-BeauBlue'>
        <h1 className='absolute font-sans font-bold text-3xl ml-[100px] mt-[70px]'>Dashboard Recruiter</h1>
        <Link to="/dashboardrecruiter"><h3 className='absolute font-sans font-bold text-xl ml-[100px] mt-[170px] cursor-pointer'>Lowongan Saya</h3></Link>
        <Link to="/pelamar"><h3 className='absolute font-sans font-bold text-xl ml-[290px] mt-[170px] cursor-pointer border-b-2 border-transparent border-Black'>Pelamar / Applier</h3></Link>

        <div className=' flex justify-center mt-[250px]'>
          <div className='absolute w-[1148px] h-[428px] bg-BlueDark rounded-2xl'>
            <h2 className='absolute font-sans font-semibold text-White text-2xl mt-[30px] ml-[40px]'>Total of 2 penawar</h2>
            <div>
              <img src={profilepicture} alt="" className='w-[60px] absolute mt-[110px] ml-[40px]' />
              <h3 className='absolute font-sans text-White text-2xl ml-[130px] mt-[110px]'>Fauzan Akbar</h3>
              <h3 className='absolute font-sans font-semibold text-White mt-[150px] ml-[130px]'>Front end</h3>
              <button className='absolute bg-BlueLight px-5 py-1 font-semibold rounded-2xl mt-[110px] ml-[1050px] hover:scale-105 duration-400'>Pilih</button>
              <button className='absolute bg-Zomp px-5 py-1 font-semibold rounded-2xl mt-[110px] ml-[940px] hover:scale-105 duration-400'>Contact</button>
            </div>
            
            <div className='mt-[100px]'>
              <img src={profilepicture} alt="" className='w-[60px] absolute mt-[110px] ml-[40px]' />
              <h3 className='absolute font-sans text-White text-2xl ml-[130px] mt-[110px]'>Muhammad Yusuf</h3>
              <h3 className='absolute font-sans font-semibold text-White mt-[150px] ml-[130px]'>Front end</h3>
              <button className='absolute bg-BlueLight px-5 py-1 font-semibold rounded-2xl mt-[110px] ml-[1050px] hover:scale-105 duration-400'>Pilih</button>
              <button className='absolute bg-Zomp px-5 py-1 font-semibold rounded-2xl mt-[110px] ml-[940px] hover:scale-105 duration-400'>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pelamar
