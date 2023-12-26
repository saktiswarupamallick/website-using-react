import React from "react";
import coming from "../assets/coming.jpg"
import styles from "../style";



export default function App() {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} mb-20 mt-30 sm:flex-row flex-col rounded-[16px]  `}>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={coming} alt="billing" className="w-[90%] h-[90%] relative z-[5]" />
    </div>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2}  text-black`}>Launching Soon</h2>
      <p className={`${styles.paragraph} mr-4 text-black max-w-[470px] mt-5`}>
        
      Prepare for an Unforgettable Experience!
      </p>
    </div>
  </section>
  );
}
