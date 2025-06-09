import React from "react";
import MainLayout from "../layout/MainLayout";
import buttonIcon from "../assets/buttonIcon.png";
import HeroImage from "../assets/Hero_Img.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import blog1 from "../assets/blog1.png";
import AllBlogPage from "../components/AllBlogPage";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router";

const Blog = () => {
  return (
    <div>
      <MainLayout>
        <div>
          <section>
            {/* Hero section (unchanged) */}
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
                        <h1 className="text-text justify-center items-center md:max-w-sm text-2xl md:text-5xl font-semibold mb-2 drop-shadow-lg space-y-4">
                          LinkedIn Local Blog
                        </h1>
                        <p className="text-text1 md:max-w-xs md:text-lg mb-8 font-semibold drop-shadow-lg">
                          Insights, Stories, and Inspiration.
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

            <div className="">
              {/* Blog Content Section */}
              <div className="mt-10 md:mt-20 md:m-10">
                <div className="bg-primary w-[48px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4 m-5">
                  <button className="text-primary1 font-medium text-sm items-center justify-center p-1">
                    Blogs
                  </button>
                </div>
                <div className="m-5">
                  <h1 className="text-dark1 text-2xl md:text-4xl font-semibold">
                    Our Blogs
                  </h1>
                  <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3">
                    Explore blog posts, event recaps, professional tips, and
                    inspiring stories from our speakers, attendees, and
                    organizers. Stay in the know with fresh content that helps
                    you grow personally and professionally..
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Blog Card - Made Responsive */}
            <div className="mt-10 md:m-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4 md:m-5 p-4 md:p-5">
                {/* Image - Responsive sizing */}
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] lg:w[422px] rounded-lg overflow-hidden">
                  <img
                    src={blog1}
                    alt="blog"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Card - Proper alignment */}
                <div className="bg-footer1 border-4 border-primary1 rounded-lg p-4 md:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-3">
                      LinkedIn networking tips for introverts
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="bg-neutral rounded-xl px-3 py-1">
                        <p className="text-xs md:text-sm">
                          Category
                          <span className="font-semibold">
                            {" "}
                            · Expert Advice
                          </span>
                        </p>
                      </div>
                      <div className="bg-neutral rounded-xl px-3 py-1">
                        <p className="text-xs md:text-sm">
                          Read<span className="font-semibold"> · 5 Mins</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base mt-4 md:mt-6">
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
                      <Link to="/blogs/1">
                        <button>
                          <GoArrowUpRight
                            size={43}
                            className="bg-primary hover:bg-blue-800 p-2 rounded-full border-6 cursor-pointer border-error-red1 text-primary1 font-bold"
                          />
                        </button>
                      </Link>

                      <p className="text-sm md:text-base">Read Full Blog</p>
                    </div>
                    <p className="text-xs md:text-sm">
                      Publication Date:{" "}
                      <span className="text-dark1 font-semibold">
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
