import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600 bg-YankeesBlue w-full h-[305px] z-50">
      <div>
        <h1 className="w-full text-7xl font-bold text-White ml-[200px] mt-[50px]">findIn</h1>
      </div>
      <div className="flex justify-between mt-6 mr-10">
        <div>
          <h6 className="text-White ml-[140px] text-2xl font-bold">Students</h6>
          <ul>
            <Link to="/"><li className="py-2 text-sm text-White ml-[140px]"  onClick={() => window.scrollTo(0, 0)}>Discover</li></Link>
            <Link to="/insight"><li className="py-2 text-sm text-White ml-[140px]"  onClick={() => window.scrollTo(0, 0)}>Insight</li></Link>
            <Link to="/internfair"><li className="py-2 text-sm text-White ml-[140px]"  onClick={() => window.scrollTo(0, 0)}>Internfair</li></Link>
          </ul>
        </div>
        <div>
        <h6 className="text-White text-2xl font-bold ml-[1px]">Recruiters</h6>
          <ul>
            <Link to="/homerecruiter"><li className="py-2 text-sm text-White" onClick={() => window.scrollTo(0, 0)}>Talents</li></Link>
            <Link to="/insightrecruiter"><li className="py-2 text-sm text-White" onClick={() => window.scrollTo(0, 0)}>Insight</li></Link>
            <Link to="/post"><li className="py-2 text-sm text-White"  onClick={() => window.scrollTo(0, 0)}>Post</li></Link>
            <Link to="/internfairrecruiter"><li className="py-2 text-sm text-White"  onClick={() => window.scrollTo(0, 0)}>Internfair</li></Link>
          </ul>
        </div>        
      </div>
    </div>
  );
};

export default Footer;
