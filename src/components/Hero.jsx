import styles from "../style";
import { robot } from "../assets";
import "./hero.css"
import React from 'react'
import { morbusiness } from "../assets";
import Dashboard from "../assets/dashboard.png"
import Speed from "../assets/coding.png"
import Dashboard2 from "../assets/dashboard-2.png"
import Marquee from "react-fast-marquee";
import { NavLink } from 'react-router-dom'
import Chat from "../components/chat"


import tech1 from "../assets/tech1.jpeg"
import tech2 from "../assets/tech2.jpeg"
import tech3 from "../assets/tech3.jpeg"
import tech4 from "../assets/tech4.jpeg"
import tech5 from "../assets/tech5.jpeg"
import tech6 from "../assets/tech6.jpeg"
import tech7 from "../assets/tech7.jpeg"
import tech8 from "../assets/tech8.jpeg"



const Hero = () => {
  return (
    <div id="home" className="hero-container" >

      <h2 className={` tracking-in-expand ${styles.heading2}`}>
        Ease of doing <span className="uneven-box  " style={{ color: "#ff566f", padding: "7px", backgroundColor: "black", boxShadow: "9px 9px #ff566f" }}>Business</span>  <br className="sm:block hidden" /> starts here.
      </h2>

      <NavLink  style={{ marginTop: "20px" }} to="/pricingstocks"><button type="button" style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px" }} className={`  py-4 px-10 font-poppins font-medium  
          text-[18px] text-primary bg-black rounded-[10px] outline-none ${styles}`}>Get Started

      </button></NavLink>

      <img className="hero-image bounce-in-top" src={robot} alt="Hero" />




      <section id="clients" className={` mt-20 ${styles.flexCenter}  flex-col  `}>
        <div className=" flex justify-center  md:flex-col flex-col relative z-[1]">
          <h3 className={`font-poppins navbarfont  xs:text-[30px] text-[19px] text-black xs:leading-[76.8px] leading-[66.8px] w-full`} >
            OUR USERS COME FROM
          </h3>
        </div>
        <Marquee direction='right'>
          <img src={tech1} alt="double_quotes" className="w-[160.6px] h-[144.6px] object-contain ml-20 " />
          <img src={tech2} alt="double_quotes" className="w-[160.6px] h-[144.6px] object-contain ml-20 " />
          <img src={tech3} alt="double_quotes" className="w-[120.6px] h-[114.6px] mt-5 object-contain ml-20 " />
          <img src={tech4} alt="double_quotes" className="w-[160.6px] h-[144.6px] object-contain ml-20 " />
          <img src={tech5} alt="double_quotes" className="w-[160.6px] h-[154.6px] object-contain ml-20 " />
          <img src={tech6} alt="double_quotes" className="w-[120.6px] h-[104.6px] mt-5 object-contain  ml-20 " />
          <img src={tech7} alt="double_quotes" className="w-[90.6px] h-[76.6px] mt-3 object-contain ml-20 " />
          <img src={tech8} alt="double_quotes" className="w-[130.6px] h-[104.6px] mt-3 object-contain ml-20 " />

        </Marquee>
      </section>
    </div>
  );
};

export default Hero;
