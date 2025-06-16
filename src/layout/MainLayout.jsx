import React, { useEffect } from "react";
import Navbar1 from "../components/Navbar1";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQs from "../sections/FAQs";
import Testimonial from "../sections/Testimonial";
// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const MainLayout = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="">
      <Navbar1 />
      {/* <div className="h-16"></div> */}
      {/* This div is to create space for the fixed navbar */}
      <div>{children}</div>
      <div data-aos="fade-up">
        <Testimonial />
      </div>
      <div data-aos="fade-up">
        <FAQs />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
