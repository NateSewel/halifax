import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import buttonIcon from "../assets/buttonIcon.png";
import HeroImage from "../assets/Hero_Img.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import GalleryImages from "../assets/GalleryImages.png";
import GalleryImages2 from "../assets/GalleryImages2.png";
// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Gallery = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <MainLayout>
        <section>
          {/* Hero section (unchanged) */}
          <div className="relative mx-auto w-[86%] mt-4" data-aos="fade-up">
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
                      <h1 className="text-text justify-center items-center md:max-w-sm text-2xl md:text-5xl font-semibold mb-2 drop-shadow-lg space-y-4">
                        Become a Sponsor
                      </h1>
                      <p className="text-text1 md:max-w-xs md:text-lg mb-8 font-semibold drop-shadow-lg">
                        Partner with LinkedIn Local Lagos
                      </p>
                      <div className="flex space-y-4 sm:space-x-4 sm:flex-row flex-col sm:space-y-0 pb-2">
                        <button className="bg-primary hover:bg-blue-700 text-xs md:text-sm cursor-pointer text-white md:px-6 md:py-3 p-3 w-36 md:w-42 rounded-lg flex items-center gap-3 transition-colors">
                          BUY TICKET
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
          {/* Gallery Section */}
          <div className="mt-10 md:mt-20 md:mx-20">
            {/* About Contents */}
            <div data-aos="fade-up">
              <div className="bg-primary w-[58px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4 m-5">
                <button className="text-primary1 font-medium text-sm items-center justify-center p-1">
                  Gallery
                </button>
              </div>
              <div className="m-5">
                <h1 className="text-dark1 text-2xl md:text-4xl font-semibold">
                  Halifax 1.0
                </h1>
                <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3">
                  LinkedIn LocalTM events are organic meetups, hosted by members
                  all over the world. They provide an opportunity to network,
                  build community, discuss industry trends, and share best
                  practices for using LinkedIn.
                </p>
              </div>
            </div>
          </div>
          {/* Gallery */}
          <div className="" data-aos="fade-up">
            <img
              src={GalleryImages}
              alt="blog"
              className="md:w-[86%] p-6 ml-0.5 md:ml-20 md:mt-2 object-cover"
            />
          </div>
          {/* Gallery Section */}
          <div className="mt-10 md:mt-20 md:mx-20" data-aos="fade-up">
            {/* Gallery Contents */}
            <div className="bg-primary w-[58px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4 m-5">
              <button className="text-primary1 font-medium text-sm items-center justify-center p-1">
                Gallery
              </button>
            </div>
            <div className="m-5">
              <h1 className="text-dark1 text-2xl md:text-4xl font-semibold">
                Halifax 2.0
              </h1>
              <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3">
                LinkedIn LocalTM events are organic meetups, hosted by members
                all over the world. They provide an opportunity to network,
                build community, discuss industry trends, and share best
                practices for using LinkedIn.
              </p>
            </div>
          </div>
          {/* Gallery 2 */}
          <div className="" data-aos="fade-up">
            <img
              src={GalleryImages2}
              alt="blog"
              className="md:w-[86%] p-6 ml-0.5 md:ml-20 md:mt-2 object-cover"
            />
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default Gallery;
