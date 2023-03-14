import React from "react";
import Navbar from "../../appbar/Navbar";
import Footer from "../../footer/Footer";
import Copyright from "../../copyright/Copyright";

const AppLayoutStudent = ({ children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Copyright/>
    </div>
  );
};

export default AppLayoutStudent;
