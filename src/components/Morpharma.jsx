import React, { useEffect } from 'react';
import { morpharma, morpharmaimg } from "../assets";
import styles, { layout } from "../style";
import { NavLink } from 'react-router-dom'
import Button from "./Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Billing = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section id="product" className={layout.sectionReverse}>
        <div data-aos="zoom-out-up" className={layout.sectionImg}>
          <img src={morpharmaimg} alt="billing" className="w-[100%] h-[100%]" />
        </div>
      <div data-aos="zoom-out-down" className={layout.sectionInfo} style={{ marginLeft: "80px" }}>
        <h2 className={styles.heading2}>
          <span className="uneven-box" style={{ color: "#FF69B4", padding: "8px", backgroundColor: "black", boxShadow: "9px 9px #FF69B4" }}> Healing</span> Futures, Software Centered Pharma<br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elevate healthcare with our cutting-edge Pharma Software—transforming data into insights.
          At the heart of innovation, we optimize efficiency,
          ensuring a healthier tomorrow. Unleash possibilities with us
        </p>
        <NavLink style={{ marginTop: "20px" }} to="/pricingstocks"><button type="button" style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }} className={`py-4 px-10 font-poppins font-medium  
          text-[18px] text-primary bg-black rounded-[10px] outline-none ${styles}`}>Get Started

        </button></NavLink>

      </div>



    </section>
  );
};

export default Billing;
