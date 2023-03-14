import React from "react";
import bg1 from "../../assets/bgLogin1.png";
import bg2 from "../../assets/bgLogin2.png";
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');


  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        console.log("email wajib isi")
        toast.error('Email dan Password wajib diisi !');
      } else {
        try {
          const response = await axios.post('http://localhost:8016/auth/signin', {
            email,
            password,
            userType
          });

          toast.success('Login Berhasil')
          const token = response.data.data.token;
          const tokenBase64 = btoa(token);
          console.log(tokenBase64)
          Cookies.set('token', tokenBase64, { expires: 1 });
          setTimeout(() => {
            window.location.href = '/';
          }, 1500);
        } catch (error) {
          if (error.response.status === 403) {
            toast.error(error.response.data.message);
            console.log(error.response.data);
          } else {
            toast.error(error)
            console.log(error);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="absolute text-7xl font-bold text-White mt-[70px] mr-[90px]">
          findIn
        </h1>
        <div className="absolute w-[463px] h-[703px] border-4 border-White rounded-3xl p-4 bg-transparent  flex justify-center mt-[200px] mr-[75px]">
          <h1 className="absolute text-White text-3xl font-semibold mt-[10px] mr-[15px]">
            Login
          </h1>
          <p className="absolute text-White text-xl font-semibold mr-[240px] mt-[100px]">
            Email
          </p>
          <input
            className="w-full h-[50px] border-2 border-White rounded-3xl bg-transparent mt-[140px] px-[10px]"
            type="text"
            style={{ backgroundColor: "transparent", color: "White" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="absolute text-White text-xl font-semibold mr-[300px] mt-[220px]">
            Login as
          </p>
          <select
            className="absolute w-[430px] h-[50px] border-2 border-White rounded-3xl bg-transparent bg-opacity-30 mt-[260px] px-[10px]"
            style={{ backgroundColor: "transparent", color: "White" }}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="student" style={{ color: "Black" }}>
              Student
            </option>
            <option value="employee" style={{ color: "Black" }}>
              Employee
            </option>
          </select>
          <p className="absolute text-White text-xl font-semibold mr-[300px] mt-[340px]">
            Password
          </p>
          <input
            className="w-[430px] h-[50px] absolute border-2 border-White rounded-3xl bg-transparent bg-opacity-30 mt-[380px] px-[10px]"
            type="password"
            style={{ backgroundColor: "transparent", color: "White" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="absolute text-White text-base mt-[450px] mr-[230px]">
            Forgot Password?{" "}
            <Link to="/forgotpassword" onClick={() => window.scrollTo(0, 0)}><span className="text-White font-bold">Click Here</span></Link>
          </p>
          <button onClick={handleSignIn} className="absolute w-[330px] py-1 font-bold bg-Zomp rounded-3xl text-White mt-[530px] hover:scale-105 duration-400">
            Login
          </button>
          <ToastContainer />
          <p className="absolute text-White text-base mt-[590px] mr-[40px]">
            Don't have an account?
            <span className="text-White font-bold">
              <Link to="/registerverif" onClick={() => window.scrollTo(0, 0)}><div className="flex justify-center"><span>Register</span></div></Link>
            </span>
          </p>
        </div>
        <img src={bg1} alt="" />
        <img src={bg2} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Login;
