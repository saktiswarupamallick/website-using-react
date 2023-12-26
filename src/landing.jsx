import styles from "./style";
import { Morpharma, Morstocks, Footer, Navbar, Testimonials, Hero, Aboutus } from "./components";

import Chat from "./components/chat"


const Landing = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Aboutus/>
        <Morstocks />
        <Morpharma />
        <Testimonials />

        <Chat />

        <Footer />
      </div>
    </div>
  </div>
);

export default Landing;