import React from "react";
import Navbar1 from "../components/Navbar1";
import MainLayout from "../layout/MainLayout";
import HeroImage from "../assets/Hero_Img.png";
import buttonIcon from "../assets/buttonIcon.png";
import Image1 from "../assets/AboutImg.png";
import Image2 from "../assets/AboutImg2.png";
import Image3 from "../assets/AboutCt.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <MainLayout>
        <div>
          <section className="">
            {/* Hero section */}
            <div className="relative mx-auto w-[86%] mt-4">
              <div className="relative h-[400px] w-full justify-center items-center md:h-[657px] rounded-4xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-dark1 opacity-95 bg-blend-soft-light"
                  style={{
                    backgroundImage: `url(${HeroImage})`,
                    backgroundColor: "#111111",
                    background: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="relative h-full md:h-full flex items-center">
                    <div className="px-8 p-12 w-full md:m-30 md:pt-20">
                      <div className="max-w-3xl mx-auto md:mx-0">
                        <h1 className="text-text justify-center items-center md:max-w-md text-2xl md:text-5xl font-semibold mb-2 drop-shadow-lg space-y-4">
                          About LinkedIn Local Halifax
                        </h1>
                        <p className="text-text1 md:max-w-sm md:text-lg mb-8 font-semibold drop-shadow-lg">
                          Connecting Professionals, Building Communities.
                        </p>
                        <div className="flex space-y-4 sm:space-x-4 sm:flex-row flex-col sm:space-y-0 pb-2">
                          <button className="bg-primary hover:bg-blue-700 text-xs md:text-sm cursor-pointer text-white md:px-6 md:py-3 p-3 w-36 md:w-42 rounded-lg flex items-center gap-3 transition-colors">
                            GET TICKET
                            <img
                              src={buttonIcon}
                              alt="icon"
                              className="brightness-0 invert"
                            />
                          </button>
                          <button className="flex items-center justify-between text-xs md:text-sm gap-3 border border-text hover:bg-text1 hover:text-white cursor-pointer hover:bg-opacity-10 text-text md:px-6 md:py-3 p-3 w-36 md:w-42 rounded-lg transition-colors">
                            CONTACT US <FaLongArrowAltRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 md:m-12">
              {/* About Contents */}
              <div className="bg-primary w-[73px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4 m-5">
                <button className="text-primary1 font-medium text-sm items-center justify-center p-1">
                  About Us
                </button>
              </div>
              <div className="m-5">
                <h1 className="text-dark1 text-2xl md:text-4xl font-semibold">
                  More Than Just Networking, It's a Movement
                </h1>
                <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3">
                  LinkedIn Local Halifax is all about bringing professionals
                  together beyond just online connections. We're a growing
                  community of go-getters, innovators, and career-driven
                  individuals who believe in the power of real, meaningful
                  relationships.
                </p>
              </div>

              {/* Content/image section 1 */}
              <div className="mt-10 m-5 flex justify-center items-center flex-col md:w-[1260px] md:h-[515px] md:flex-row border-4 border-primary1 rounded-2xl p-1 md:p-6 gap-6 md:gap-10">
                <div className="md:w-[588px] md:h-[453px] bg-primary1 rounded-lg p-4 md:p-6 text-dark4 font-medium space-y-6">
                  <h3 className="font-bold text-lg mb-2">
                    LinkedIn Local Halifax
                  </h3>
                  <p>
                    LinkedIn Local Halifax is all about bringing professionals
                    together beyond just online connections. We're a community
                    of go-getters, innovators, and career-driven individuals who
                    believe in the power of real, meaningful connections.
                  </p>
                  <p>
                    Our events go beyond traditional networking; they're about
                    sharing ideas, learning from each other, and discovering new
                    opportunities. Whether you're looking to expand your
                    network, gain fresh insights, or simply meet like-minded
                    people in a relaxed setting, you're in the right place.
                  </p>
                  <p>
                    At LinkedIn Local Halifax, we're passionate about Connecting
                    People, Ideas, and Opportunities. Come join us and be part
                    of a movement that's redefining professional networking in
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
              <div className="mt-10 m-5 flex flex-col md:w-[1260px] md:h-[515px] md:flex-row-reverse border-4 border-primary1 rounded-2xl p-1 md:p-6 md:ml-6 gap-6 md:gap-10">
                <div className="md:w-[588px] md:h-[453px] bg-primary1 rounded-lg p-4 md:p-6 text-dark4 font-medium space-y-6">
                  <h3 className="font-bold text-lg mb-2">
                    LinkedIn Local Halifax
                  </h3>
                  <p>
                    LinkedIn Local Halifax is all about bringing professionals
                    together beyond just online connections. We're a community
                    of go-getters, innovators, and career-driven individuals who
                    believe in the power of real, meaningful connections.
                  </p>
                  <p>
                    Our events go beyond traditional networking; they're about
                    sharing ideas, learning from each other, and discovering new
                    opportunities. Whether you're looking to expand your
                    network, gain fresh insights, or simply meet like-minded
                    people in a relaxed setting, you're in the right place.
                  </p>
                  <p>
                    At LinkedIn Local Halifax, we're passionate about Connecting
                    People, Ideas, and Opportunities. Come join us and be part
                    of a movement that's redefining professional networking in
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
              <div className="bg-primary w-[73px] h-8 items-center justify-center rounded-sm m-5 mt-10 md:mt-30 mb-4">
                <button className="text-primary1 font-medium text-sm items-center justify-center p-1">
                  Speakers
                </button>
              </div>
              <div className="m-5">
                <h1 className="text-dark1 text-2xl md:text-4xl font-semibold">
                  Why Attend?
                </h1>
                <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3">
                  LinkedIn LocalTM events are organic meetups, hosted by members
                  all over the world. They provide an opportunity to network,
                  build community, discuss industry trends, and share best
                  practices for using LinkedIn.
                </p>
              </div>
              {/* Cards */}
              <div className="mt-10 m-5 md:mt-20">
                <img src={Image3} alt="image" />
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </div>
  );
};

export default About;
