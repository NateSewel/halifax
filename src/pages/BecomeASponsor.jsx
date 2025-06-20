import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
// import buttonIcon from "../assets/buttonIcon.png";
import { IoIosArrowDropdown } from "react-icons/io";
import HeroImage from "../assets/HeroImg1.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image3 from "../assets/BecomeSponsor.png";
// import Card1 from "../assets/SponsorCard1.png";
// import Card2 from "../assets/SponsorCard2.png";
// import Card3 from "../assets/SponsorCard1.png";

// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router";

const BecomeASponsor = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <MainLayout>
        <div>
          <section className="relative mx-auto md:w-[86%] mt-4">
            {/* Hero section */}
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
                          Become a Sponsor
                        </h1>
                        <p className="text-text1 md:max-w-xs md:text-lg mb-8 font-semibold drop-shadow-lg dark:text-text">
                          Partner with LinkedIn Local Lagos.
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
              {/* Sponsors Contents */}
              {/* <div className="bg-primary w-[73px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4 m-5">
                <button className="text-primary1 font-medium text-sm items-center justify-center p-1">
                  Sponsors
                </button>
              </div> */}
              {/* <div className="m-5">
                <h1 className="text-dark1 text-2xl md:text-4xl font-semibold">
                  Our Sponsor
                </h1>
                <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3">
                  We’re currently partnering with forward-thinking brands and
                  businesses.
                </p>
              </div> */}
              {/* Sponsor Cards */}
              <div className="md:mt-20 mt-10 pb-12">
                {/* card1 */}
                {/* <div>
                  <img src={Card1} alt="Card" />
                </div> */}
                {/* card 2 */}
                {/* <div>
                  <img src={Card2} alt="Card" />
                </div> */}
                {/* card 3 */}
                {/* <div>
                  <img src={Card3} alt="Card" />
                </div> */}
              </div>
              {/* Sponsors Content */}
              <div className="mt-10 md:mb-10">
                {/* Sponsor Contents */}
                <div data-aos="fade-up">
                  <div className="bg-primary w-[65px] h-8 items-center justify-center rounded-sm md:mt-10 mb-4">
                    <button className="text-primary1 font-medium text-sm items-center justify-center p-1 dark:text-text">
                      Sponsor
                    </button>
                  </div>
                  <div>
                    <h1 className="text-dark1 text-2xl md:text-4xl font-semibold dark:text-white">
                      Why Sponsor?
                    </h1>
                    <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3 dark:text-text">
                      Join us in creating an unforgettable experience for
                      Halifax’s top professionals. Sponsoring LinkedIn Local
                      Halifax puts your brand in front of an engaged, ambitious,
                      and growing community of business leaders, creatives, and
                      change-makers.
                    </p>
                    {/* Cards */}
                    <div className="mt-10 md:mt-20">
                      <img src={Image3} alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </div>
  );
};

export default BecomeASponsor;
