import { React, useState } from 'react'
import foto from "../../../assets/student/deadlineapply.png";
import { Link, NavLink } from 'react-router-dom';
import NavbarRecruiter from '../../../components/partials/appbar/NavbarRecruiter';
import locationlogo from "../../../assets/recruiter/locationWhite.png";
import jobtypelogo from "../../../assets/recruiter/degreeWhite.png";
import close from "../../../assets/recruiter/closeWhite.png";

const DashboardRecruiter = () => {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setShoWEditModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const editToggleModal = () => {
    setShoWEditModal(!editModal);
  }

  if (editModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }


  return (
    <div>
      <NavbarRecruiter />
      <br /><br /><br />
      <div className='w-full h-[1000px] bg-BeauBlue'>
        <h1 className='absolute font-sans font-bold text-3xl ml-[100px] mt-[70px]'>Dashboard Recruiter</h1>
        <Link to="/dashboardrecruiter">
          <h3 className='absolute font-sans font-bold text-xl ml-[100px] mt-[170px] cursor-pointer border-b-2 border-transparent border-Black'>Lowongan Saya</h3></Link>
        <Link to="/pelamar"><h3 className='absolute font-sans font-bold text-xl ml-[290px] mt-[170px] cursor-pointer'>Pelamar / Applier</h3></Link>

          <div className='bg-BlueDark rounded-2xl h-screen'>
            <h3 className=' font-sans font-semibold text-White text-2xl mt-[30px] ml-[20px]'>Front End</h3>
            <h3 className=' font-sans text-White mt-[70px] ml-[20px]'>Standar post</h3>
            <img src={foto} alt="" className=' mt-[160px] ml-[20px]' />
            <h2 className=' font-sans font-semibold text-White mt-[120px] ml-[25px]'>2 total applier</h2>
            <h2 className=' font-sans font-semibold text-White mt-[160px] ml-[60px]'>Closed on 20 February 2023</h2>
            <button className='mt-[200px] ml-[15px]  font-sans font-bold bg-ChineseBlue rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Pending</button>
            {/* <button className='mt-[10px] ml-[455px]  font-sans font-bold bg-BlueLight rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Cancel</button> */}
            <button className='mt-[270px] ml-[395px]  font-sans font-bold border-2 border-White text-White bg-transparent rounded-2xl px-3 py-2 hover:scale-105 duration-400' onClick={toggleModal}>
              Detail
            </button>
            <button className='mt-[270px] ml-[475px]  font-sans font-bold border-2 border-White text-White bg-transparent rounded-2xl px-3 py-2 hover:scale-105 duration-400' onClick={editToggleModal}>
              Edit
            </button>
            {showModal && (
              <div className='fixed z-10 inset-0 overflow-y-auto'>
                <div className='flex items-center justify-center min-h-screen'>
                  <div className='bg-BlueDark w-[721px] h-[423px] rounded-lg shadow-lg p-6'>
                    <h3 className='font-sans font-semibold text-White text-2xl'>Back end Developer</h3>
                    <img src={locationlogo} alt="" className='absolute mt-[30px] ml-[10px]' />
                    <img src={jobtypelogo} alt="" className='absolute mt-[80px] ml-[7px]' />
                    <h2 className='absolute font-sans font-semibold text-White mt-[25px] ml-[40px]'>Jakarta Barat</h2>
                    <h2 className='absolute font-sans font-semibold text-White mt-[80px] ml-[43px]'>Goto Group</h2>
                    <h2 className='absolute font-sans font-semibold text-White text-xl mt-[125px] ml-[8px]'>Rincian kegiatan</h2>
                    <h2 className='absolute font-sans text-White mt-[165px] ml-[8px]'>Mengontrol semua urusan backend pada goto</h2>
                    <h2 className='absolute font-sans font-semibold text-White text-xl mt-[215px] ml-[8px]'>Requirement Students</h2>
                    <h2 className='absolute font-sans text-White mt-[245px] ml-[8px]'>Menguasai laravel</h2>
                    <button
                      className='mt-[300px] ml-[600px] font-sans font-bold bg-ChineseBlue rounded-2xl px-3 py-2 hover:scale-105 duration-400'
                      onClick={toggleModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
            {editModal && (
              <div className='fixed z-10 inset-0 overflow-y-auto'>
                <div className='flex items-center justify-center min-h-screen'>
                  <div className='bg-BlueDark w-[692px] h-[620px] rounded-lg shadow-lg p-6 mt-[70px] flex justify-center'>
                    <h3 className='absolute font-sans text-2xl font-semibold text-White'>Edit lowongan</h3>
                    <h3 className='absolute font-sans font-semibold text-White mt-[40px] mr-[190px]'>Posisi yang ingin anda cari</h3>
                    <h3 className='absolute font-sans font-semibold text-White mt-[130px] mr-[240px]'>Deskripsi Pekerjaan</h3>
                    <h3 className='absolute font-sans font-semibold text-White mt-[220px] mr-[355px]'>Skills</h3>
                    <h3 className='absolute font-sans font-semibold text-White mt-[300px] mr-[330px]'>Deskripsi</h3>
                    <h3 className='absolute font-sans font-semibold text-White mt-[390px] mr-[330px]'>Deadline</h3>
                    <h3 className='absolute font-sans font-semibold text-White mt-[480px] mr-[210px]'>Upload file panduan intern</h3>
                    <button className='absolute text-Black font-bold bg-BlueLight rounded-xl px-5 mt-[510px] mr-[315px] hover:scale-105 duration-400'>Upload</button>
                    <button className='absolute text-Black font-bold w-[410px] bg-BlueLight rounded-xl px-5 mt-[550px]  hover:scale-105 duration-400'>Done</button>
                    <input type="text" className='absolute w-[405px] h-[27px] rounded-xl mt-[80px]' />
                    <input type="text" className='absolute w-[405px] h-[27px] rounded-xl mt-[170px]' />
                    <input type="text" className='absolute w-[405px] h-[27px] rounded-xl mt-[260px]' />
                    <input type="text" className='absolute w-[405px] h-[27px] rounded-xl mt-[350px]' />
                    <input type="text" className='absolute w-[405px] h-[27px] rounded-xl mt-[440px]' />
                    <img src={close} alt="" className='w-[25px] h-[25px] ml-[610px] cursor-pointer' onClick={editToggleModal} />
                  </div>
                </div>
              </div>
            )}
          </div>
      </div>
    </div>
  )
}

export default DashboardRecruiter
