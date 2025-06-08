import React from "react";
import Navbar1 from "../components/Navbar1";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQs from "../sections/FAQs";
import Testimonial from "../sections/Testimonial";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      {/* <Navbar1 /> */}
      <Navbar1 />
      {/* <div className="h-16"></div> */}
      {/* This div is to create space for the fixed navbar */}
      <div>{children}</div>
      <Testimonial />
      <FAQs />
      <Footer />
    </div>
  );
};

export default MainLayout;
