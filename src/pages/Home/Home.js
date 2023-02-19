import React from "react";
import { Header } from "./Header";
import homelogo from "../../assets/home_logo.png";
import Button from "@mui/material/Button";
import homepagetop from "../../assets/homepage/homepage_top.png";


import { NavLink, useNavigate } from "react-router-dom";
import h3 from '../../assets/homepage/clipboard.gif'
import h2 from '../../assets/homepage/vlogger.gif'
import { Footer } from "./Footer";
export const Home = () => {
  const { navigate } = useNavigate();
  return (
    <>
      <div className="bg-white min-h-screen scroll-smooth ">
        <Header />
        <br/><br/><br/><br/>
        <div className="flex flex-row justify-evenly flex-wrap  animate-fade-in-down border border-solid border-black border-3 m-3">
          <div className="flex flex-col justify-evenly ">
            <div className="font-[Outfit] text-black font-extrabold text-4xl  capitalize">
              Create , host , Recruit on the same platform{" "}
            </div>
     
            <div className="flex flex-row justify-around">
            <a class ="no-underline  font-bold leading-none" href="/dashboard">
              <button href = "/dashboard" className="bg-[#8D8DDA] text-xl  font-[Outfit] uppercase font-semibold text-white p-2 rounded-2xl">
                go to app
              </button>
              </a>
              <button className="bg-black   font-[Outfit] uppercase font-semibold text-white p-2 rounded-2xl">
                see all features
              </button>
            </div>
            <div className="font-[Inter] font-semibold text-2xl">Recruit more easily with your team  :)</div>
          </div>
          <div className="flex flex-col justify-evenly">
            <img src={homepagetop}></img>
            <div className="font-[Inter] text-3xl">Work Together</div>
          </div>
        </div>

     

        <br />
        <br />
        <br />

        <div className="flex flex-row justify-evenly flex-wrap  animate-fade-in-down">
          <div className="flex flex-col justify-evenly  w-[70%]  md:max-w-[30%]">
            <div className="font-[Outfit] text-black font-extrabold text-4xl  capitalize">
              work as a team in a common workspace
            </div>
            <div className="font-[Roboto] font-semibold text-xl">
              Work as team in the common work space.Discuss and Brainstorm your ideas !!
            </div>

            <div>
              <button className="bg-[#8D8DDA] font-[Outfit] uppercase font-semibold text-white p-2 rounded-2xl">
                view our workspace
              </button>
            </div>
          </div>
          <div>
            <img className="w-72" src={h2}></img>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="flex flex-row justify-evenly flex-wrap  animate-fade-in-down">
          <div>
            <img className="w-72" src={h3}></img>
          </div>
          <div className="flex flex-col justify-evenly  w-[70%]  md:max-w-[30%]">
            <div className="font-[Outfit] text-black font-extrabold text-4xl  capitalize">
              Manage your canditates using Tasks
            </div>
            <div className="font-[Roboto] font-semibold text-xl">
              Work as team in the common work space.Every member in the can
              access their private workspace too.
            </div>
            <div>
              <button className="bg-[#8D8DDA] font-[Outfit] uppercase font-semibold text-white p-2 rounded-2xl">
                view sample contracts
              </button>
            </div>
          </div>
        </div>


        <br />
        <br />
     <br/>


        <div className="flex flex-row justify-center ">
		<div className='bg-[#4434A7]  w-[70%] rounded-3xl'>
			<div className="mt-5 flex flex-row justify-center">
        <div className="bg-black text-white font-bold font-[Outfit] uppercase p-1 text-2xl  md:w-[20%] align-center tracking-widest  flex flex-row justify-center rounded-xl">Features</div>
      </div>
      <div className="flex flex-col justify-around text-center font-semibold text-gray-300  m-1 p-2 text-xl font-[Inter]">
    <div className="mt-1">✅ Instant messaging: send and receive messages in real-time..</div>
    <div  className="mt-1">✅ Group chats: Create and join group chats to collaborate and communicate with multiple people.</div>
<div  className="mt-1">✅Task management: Create, assign, and track tasks within the app.</div>
<div  className="mt-1">✅ Calendaring: Built-in calendar to schedule and manage meetings and appointments.</div>

      </div>
      </div>
		</div>
      </div>
      <Footer/>
    </>
  );
};
