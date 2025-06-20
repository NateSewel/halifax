import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
// import buttonIcon from "../assets/buttonIcon.png";
import HeroImage from "../assets/HeroImg1.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import blog1 from "../assets/blog1.png";
import AllBlogPage from "../components/AllBlogPage";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router";

// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Blog = () => {
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
                          LinkedIn Local Blog
                        </h1>
                        <p className="text-text1 md:max-w-xs md:text-lg mb-8 font-semibold drop-shadow-lg dark:text-text">
                          Insights, Stories, and Inspiration.
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

            <div className="">
              {/* Blog Content Section */}
              <div className="mt-10 md:mt-20" data-aos="fade-up">
                <div className="bg-primary w-[48px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4">
                  <button className="text-primary1 font-medium text-sm items-center justify-center p-1 dark:text-text">
                    Blogs
                  </button>
                </div>
                <div>
                  <h1 className="text-dark1 text-2xl md:text-4xl font-semibold dark:text-white">
                    Our Blogs
                  </h1>
                  <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3 dark:text-text">
                    Explore blog posts, event recaps, professional tips, and
                    inspiring stories from our speakers, attendees, and
                    organizers. Stay in the know with fresh content that helps
                    you grow personally and professionally..
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Blog Card - Made Responsive */}
            <div className="mt-10">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-5"
                data-aos="fade-up"
              >
                {/* Image - Responsive sizing */}
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] lg:w[422px] rounded-lg overflow-hidden">
                  <img
                    src={blog1}
                    alt="blog"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Card - Proper alignment */}
                <div className="bg-neutral3 border-1 border-primary1 rounded-lg p-4 md:p-6 flex flex-col justify-between dark:border-neutral">
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-3 dark:text-white">
                      LinkedIn networking tips for introverts
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="bg-neutral rounded-xl px-3 py-1 dark:bg-neutral dark:text-text">
                        <p className="text-xs md:text-sm">
                          Category
                          <span className="font-semibold">
                            {" "}
                            · Expert Advice
                          </span>
                        </p>
                      </div>
                      <div className="bg-neutral rounded-xl px-3 py-1 dark:text-text">
                        <p className="text-xs md:text-sm">
                          Read<span className="font-semibold"> · 5 Mins</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base mt-4 md:mt-6 dark:text-text">
                      Networking doesn't have to be overwhelming especially for
                      introverts. This guide shares practical, low-pressure ways
                      to build meaningful professional relationships on LinkedIn
                      through profile optimization, thoughtful content, and
                      intentional engagement. Grow your network while staying
                      true to your personality.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <a href="/blogs/1">
                        <button>
                          <GoArrowUpRight
                            size={43}
                            className="bg-primary hover:bg-blue-800 p-2 rounded-full border-6 cursor-pointer border-pink-100 text-primary1 font-bold dark:border-error-red1 dark:text-white"
                          />
                        </button>
                      </a>

                      <p className="text-sm md:text-base dark:text-text">
                        Read Full Blog
                      </p>
                    </div>
                    <p className="text-xs md:text-sm dark:text-text">
                      Publication Date:{" "}
                      <span className="text-dark1 font-semibold dark:text-text">
                        April 1, 2025
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* All Blog page */}
            <AllBlogPage />
          </section>
        </div>
      </MainLayout>
    </div>
  );
};

export default Blog;
