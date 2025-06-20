import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import HeroImage from "../assets/HeroImg1.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import Gallery1 from "../components/Gallery";
import { IoIosArrowDropdown } from "react-icons/io";
// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router";

const Gallery = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <MainLayout>
        <section className="relative mx-auto md:w-[86%] mt-4">
          {/* Hero section (unchanged) */}
          <div data-aos="fade-up">
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
                      <h1 className="text-text justify-center items-center md:max-w-sm text-2xl md:text-5xl font-semibold mb-2 drop-shadow-lg space-y-4 dark:text-white">
                        Relive the Moments
                      </h1>
                      <p className="text-text1 md:max-w-xs md:text-lg mb-8 font-semibold drop-shadow-lg dark:text-text">
                        Event photos from inspiring talk-shows to impactful
                        connections.
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
          <div className="mt-10 md:mt-20">
            {/* Gallery Contents */}
            <div data-aos="fade-up">
              <div className="bg-primary w-[58px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4">
                <button className="text-primary1 font-medium text-sm items-center justify-center p-1 dark:text-text">
                  Gallery
                </button>
              </div>
              <div>
                <h1 className="text-dark1 text-2xl md:text-4xl font-semibold dark:text-white">
                  Halifax 1.0
                </h1>
                <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3 dark:text-text">
                  LinkedIn LocalTM events are organic meetups, hosted by members
                  all over the world. They provide an opportunity to network,
                  build community, discuss industry trends, and share best
                  practices for using LinkedIn.
                </p>
              </div>
            </div>
          </div>
          {/* Gallery Section */}
          <div data-aos="fade-up">
            <Gallery1 />
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default Gallery;
