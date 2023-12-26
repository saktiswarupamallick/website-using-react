import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles, { layout } from "../style";
import { morstocks, morstocksimg } from "../assets";

import AOS from 'aos';
import 'aos/dist/aos.css';



const Morstocks = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='product'  className={layout.section}>
      <div className={layout.sectionInfo}  data-aos="fade-up"
     data-aos-duration="3000" style={{ marginLeft: "50px" }}>
        <h2 className={`${styles.heading2}`}>
          Unlock <span className="uneven-box" style={{ color: "#FFA07A", padding: "8px", backgroundColor: "black", boxShadow: "9px 9px #FFA07A" }}>inventory</span> control's future today! <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} data-aos="fade-right">
          Streamline your business operations and boost efficiency with our cutting-edge inventory management system. Say goodbye to stockouts and excess inventory – discover the future of inventory control today!
        </p>
        <NavLink style={{ marginTop: "20px" }} to="/pricingstocks">
          <button
            type="button"
            data-aos="fade-left"
            style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
            className={`py-4 px-10 font-poppins font-medium text-[18px] text-primary bg-black rounded-[10px] outline-none ${styles}`}
          >
            Get Started
          </button>
        </NavLink>
      </div>
      <div className={` ${layout.sectionImg}`} data-aos="zoom-in">
        <img src={morstocksimg} alt="billing" className=" w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default Morstocks;
