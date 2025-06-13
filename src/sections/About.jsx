import React from "react";
import Image1 from "../assets/About1.png";
import Image2 from "../assets/About2.png";
import Image3 from "../assets/About3.png";
import Image4 from "../assets/About4.png";
import { Link } from "react-router";
const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-16 md:py-12">
      <div className="bg-primary w-[73px] h-8 items-center justify-center rounded-sm mb-4">
        <button className="text-primary1 font-medium text-sm items-center justify-center p-1">
          About Us
        </button>
      </div>
      <div>
        <h1 className="text-dark1 text-2xl md:text-4xl font-semibold">
          More Than Just Networking, It’s a Movement
        </h1>
        <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3">
          LinkedIn Local Halifax is all about bringing professionals together
          beyond just online connections. We’re a growing community of
          go-getters, innovators, and career-driven individuals who believe in
          the power of real, meaningful relationships.
        </p>
      </div>
      <div className="mt-10 md:flex items-center md:flex-row border-4 border-primary1 rounded-2xl p-1 md:p-6  space-y-10 md:space-y-0 md:space-x-10">
        {/* Left side */}
        <div className="md:w-1/2 md:p-0 space-y-6 md:space-y-4 md:grid md:grid-flow-col md:grid-rows-3 gap-2">
          <div className="bg-primary1 rounded-lg p-2 text-dark4 font-medium">
            <p>
              LinkedIn Local Halifax is all about bringing professionals
              together beyond just online connections. We’re a community of
              go-getters, innovators, and career-driven individuals who believe
              in the power of real, meaningful connections.
            </p>
          </div>
          <div className="bg-primary1 rounded-lg p-2 text-dark4 font-medium">
            <p>
              Our events go beyond traditional networking; they’re about sharing
              ideas, learning from each other, and discovering new
              opportunities. Whether you’re looking to expand your network, gain
              fresh insights, or simply meet like-minded people in a relaxed
              setting, you’re in the right place.
            </p>
          </div>
          <div className="bg-primary1 rounded-lg p-2 text-dark4 font-medium">
            <p>
              At LinkedIn Local Halifax, we’re passionate about Connecting
              People, Ideas, and Opportunities. Come join us and be part of a
              movement that’s redefining professional networking in Halifax.
              Let’s connect, collaborate, and grow together!
            </p>
          </div>
        </div>
        {/* Right side */}
        <div className="md:w-1/2 grid grid-cols-2 gap-2">
          <div>
            <img
              src={Image1}
              alt="About Image 1"
              className="w-full h-auto rounded-lg mb-2"
            />
            <img
              src={Image3}
              alt="About Image 2"
              className="w-full h-auto rounded-lg mb-2"
            />
          </div>
          <div>
            <img
              src={Image2}
              alt="About Image 3"
              className="w-full h-auto rounded-lg mb-2"
            />
            <img
              src={Image4}
              alt="About Image 4"
              className="w-full h-auto rounded-lg mb-2"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-12">
        <div className="flex items-center justify-center">
          <div className="flex-grow h-px bg-gray-500"></div>
          <a href="/about">
            <button className="mx-6 bg-primary hover:bg-blue-700 cursor-pointer px-4 py-1 text-primary1 md:px-6 md:py-2 rounded font-medium transition-colors duration-200">
              View More
            </button>
          </a>
          <div className="flex-grow h-px bg-gray-500"></div>
        </div>
        {/* <div className="mt-10 flex items-center justify-center">
          <button className="text-primary1 rounded bg-primary p-2 font-medium text-sm items-center justify-center">
            View More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;
