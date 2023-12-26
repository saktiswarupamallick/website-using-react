import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
    <div data-aos="fade-up"
        data-aos-duration="3000" className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-yellow`}>
            <img src={icon} alt="star" className="w-[70%] h-[70%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const Aboutus = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="features" style={{ marginBottom: "100px" }} className={layout.section}>
            <div data-aos="fade-up-right" className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    You do the business, <br className="sm:block hidden" /> we’ll handle
                    the money.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With the right credit card, you can improve your financial life by
                    building credit, earning rewards and saving money. But with hundreds
                    of credit cards on the market.
                </p>

                <NavLink data-aos="fade-up"
                    data-aos-duration="3000" style={{ marginTop: "20px" }} to="/pricingstocks">
                    <button
                        type="button"
                        style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
                        className={`py-4 px-10 font-poppins font-medium  
                        text-[18px] text-primary bg-black rounded-[10px] outline-none ${styles}`}
                    >
                        Get Started
                    </button>
                </NavLink>
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Aboutus;
