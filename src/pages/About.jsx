import React, { useEffect } from "react";
import Navbar1 from "../components/Navbar1";
import MainLayout from "../layout/MainLayout";
import HeroImage from "../assets/HeroImg1.webp";
// import buttonIcon from "../assets/buttonIcon.png";
import { IoIosArrowDropdown } from "react-icons/io";
import Image1 from "../assets/AboutImg.png";
import Image2 from "../assets/AboutImg2.png";
import Image3 from "../assets/AboutCt.png";
import { FaLongArrowAltRight } from "react-icons/fa";
// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <MainLayout>
        <section className="relative mx-auto md:w-[86%] mt-4">
          {/* Hero section */}
          <div className="" data-aos="fade-up">
            <div className="relative h-[400px] w-full justify-center items-center md:h-[657px] rounded-4xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-dark1 opacity-95 bg-blend-soft-light"
                style={{
                  backgroundImage: `url(${HeroImage})`,
                  backgroundColor: "#222222",
                  background: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative h-full md:h-full flex items-center">
                  <div className="px-8 p-12 w-full md:m-30 md:pt-20">
                    <div className="max-w-3xl mx-auto md:mx-0">
                      <h1 className="text-text justify-center items-center md:max-w-md text-2xl md:text-5xl font-semibold mb-2 drop-shadow-lg space-y-4 dark:text-white">
                        About LinkedIn Local Halifax
                      </h1>
                      <p className="text-text1 md:max-w-sm md:text-lg mb-8 font-semibold drop-shadow-lg dark:text-text">
                        Connecting Professionals, Building Communities.
                      </p>
                      <div className="flex flex-row space-x-4">
                        {/* Button1 */}
                        <div>
                          <Link to="/">
                            <button className=" bg-primary hover:bg-blue-700 text-xs md:text-sm cursor-pointer text-white md:px-3 md:py-3 px-2 py-3 rounded-lg flex items-center gap-3 transition-colors text-center">
                              GET TICKET
                              {/* <img
                            src={buttonIcon}
                            alt="icon"
                            className="brightness-0 invert"
                          /> */}
                              <IoIosArrowDropdown className="text-xl rounded-lg font-bold" />
                            </button>
                          </Link>
                        </div>
                        {/* Button2 */}
                        <div>
                          <Link to="/contact">
                            <button className="flex items-center text-center justify-between text-xs md:text-sm gap-3 border border-text hover:bg-text1 hover:text-white cursor-pointer hover:bg-opacity-10 text-text md:px-3 md:py-3 px-2 py-3 rounded-lg transition-colors">
                              CONTACT US <FaLongArrowAltRight />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            {/* About Contents */}
            <div className="" data-aos="fade-up">
              <div className="bg-primary w-[73px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4">
                <button className="text-primary1 font-medium text-sm items-center justify-center p-1 dark:text-text">
                  About Us
                </button>
              </div>
              <div className="">
                <h1 className="text-dark1 text-2xl md:text-4xl font-semibold dark:text-white">
                  More Than Just Networking, It's a Movement
                </h1>
                <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3 dark:text-text">
                  LinkedIn Local Halifax is all about bringing professionals
                  together beyond just online connections. We're a growing
                  community of go-getters, innovators, and career-driven
                  individuals who believe in the power of real, meaningful
                  relationships.
                </p>
              </div>
            </div>

            {/* Content/image section 1 */}
            <div
              className="mt-10 flex justify-center items-center flex-col w-full md:h-[515px] md:flex-row border-1 border-primary1 rounded-2xl p-2 md:p-6 gap-6 md:gap-10 dark:border-neutral"
              data-aos="fade-up"
            >
              <div className="md:w-[588px] md:h-[453px] bg-neutral3 rounded-lg p-4 md:p-6 text-dark4 font-medium space-y-6 dark:text-text">
                <h3
                  className="font-bold text-lg mb-2"
                  data-aos="fade-up dark:text-white"
                >
                  LinkedIn Local Halifax
                </h3>
                <p>
                  LinkedIn Local Halifax is all about bringing professionals
                  together beyond just online connections. We're a community of
                  go-getters, innovators, and career-driven individuals who
                  believe in the power of real, meaningful connections.
                </p>
                <p>
                  Our events go beyond traditional networking; they're about
                  sharing ideas, learning from each other, and discovering new
                  opportunities. Whether you're looking to expand your network,
                  gain fresh insights, or simply meet like-minded people in a
                  relaxed setting, you're in the right place.
                </p>
                <p>
                  At LinkedIn Local Halifax, we're passionate about Connecting
                  People, Ideas, and Opportunities. Come join us and be part of
                  a movement that's redefining professional networking in
                  Halifax. Let's connect, collaborate, and grow together!
                </p>
              </div>

              {/* Left side - Image */}
              <div className="md:w-[576px] md:[418px]">
                <img
                  src={Image1}
                  alt="About Image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            {/* Content/image section 2 */}
            <div
              className="mt-10 flex flex-col md:w-full md:h-[515px] md:flex-row-reverse border-1 border-primary1 rounded-2xl p-2 md:p-6 gap-6 md:gap-10 dark:border-neutral"
              data-aos="fade-up"
            >
              <div className="md:w-[588px] md:h-[453px] bg-neutral3 rounded-lg p-4 md:p-6 text-dark4 font-medium space-y-6 dark:text-text">
                <h3 className="font-bold text-lg mb-2 dark:text-white">
                  LinkedIn Local Halifax
                </h3>
                <p>
                  LinkedIn Local Halifax is all about bringing professionals
                  together beyond just online connections. We're a community of
                  go-getters, innovators, and career-driven individuals who
                  believe in the power of real, meaningful connections.
                </p>
                <p>
                  Our events go beyond traditional networking; they're about
                  sharing ideas, learning from each other, and discovering new
                  opportunities. Whether you're looking to expand your network,
                  gain fresh insights, or simply meet like-minded people in a
                  relaxed setting, you're in the right place.
                </p>
                <p>
                  At LinkedIn Local Halifax, we're passionate about Connecting
                  People, Ideas, and Opportunities. Come join us and be part of
                  a movement that's redefining professional networking in
                  Halifax. Let's connect, collaborate, and grow together!
                </p>
              </div>

              {/* Left side - Image */}
              <div className="md:w-[576px] md:[418px]">
                <img
                  src={Image2}
                  alt="About Image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            {/* About Contents */}
            <div data-aos="fade-up">
              <div className="bg-primary w-[73px] h-8 items-center justify-center rounded-sm mt-10 md:mt-30 mb-4">
                <button className="text-primary1 font-medium text-sm items-center justify-center p-1 dark:text-text">
                  Speakers
                </button>
              </div>
              <div className="">
                <h1 className="text-dark1 text-2xl md:text-4xl font-semibold dark:text-white">
                  Why Attend?
                </h1>
                <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3 dark:text-text">
                  LinkedIn LocalTM events are organic meetups, hosted by members
                  all over the world. They provide an opportunity to network,
                  build community, discuss industry trends, and share best
                  practices for using LinkedIn.
                </p>
              </div>
              {/* Cards */}
              <div className="mt-10 md:mb-10 md:mt-20">
                <img src={Image3} alt="image" />
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default About;
