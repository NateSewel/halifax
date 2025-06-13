import React from "react";
import { useState, useEffect } from "react";
import HeroImage from "../assets/Hero_Img.png";
import buttonIcon from "../assets/buttonIcon.png";
// import logo1 from "../assets/Icons/Amazon.png";
// import logo2 from "../assets/Icons/Google.png";
import logo3 from "../assets/Icons/TechSynergy.png";
// import logo4 from "../assets/Icons/Netflix.png";
// import logo5 from "../assets/Icons/WhatsApp.png";
// import logo6 from "../assets/Icons/Zoom.png";
// import logo7 from "../assets/Icons/Slack.png";
// import logo8 from "../assets/Icons/Dropbox.png";
// import logo9 from "../assets/Icons/Zapier.png";
// Button icons
import { FaLongArrowAltRight } from "react-icons/fa";
// import { IoIosArrowDropdown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

// CountdownTimer component remains the same
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 32,
    hours: 16,
    minutes: 43,
    seconds: 2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => ({
        ...prev,
        seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 mt-4 bg-footer1 border-4 border-white p-2">
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.days}</div>
        <div className="text-sm text-gray-600">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm text-gray-600">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-600">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-600">Seconds</div>
      </div>
    </div>
  );
};

//SponsorLogos component to show 5x5 grid
const SponsorLogos = () => {
  const [showAll, setShowAll] = useState(false);
  const sponsors = [
    // { name: "Amazon", logo: logo1 },
    // { name: "Google", logo: logo2 },
    { name: "Tech Synergy", logo: logo3 },
    { name: "Tech Synergy", logo: logo3 },
    { name: "Tech Synergy", logo: logo3 },
    // { name: "Netflix", logo: logo4 },
    // { name: "WhatsApp", logo: logo5 },
    // { name: "Zoom", logo: logo6 },
    // { name: "Slack", logo: logo7 },
    // { name: "Dropbox", logo: logo8 },
    // { name: "Zapier", logo: logo9 },
    // { name: "Amazon", logo: logo1 },
    // { name: "Google", logo: logo2 },
    // { name: "Tech Synergy", logo: logo3 },
    // { name: "Netflix", logo: logo4 },
    // { name: "WhatsApp", logo: logo5 },
    // { name: "Zoom", logo: logo6 },
  ];

  // Show first 9 logos + button (replaces 10th logo)
  const visibleSponsors = showAll ? sponsors : sponsors.slice(0, 9);

  return (
    <div className="md:mt-16 px-4">
      <h3 className="text-center text-gray-600 mb-8 text-lg font-medium">
        Our Sponsor
      </h3>

      {/* 5-column grid with integrated button */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* First 9 logos */}
        {visibleSponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className="bg-white p-3 md:p-4 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-8 md:h-10 object-contain"
            />
          </div>
        ))}

        {/* "View All" button (replaces 10th logo) */}
        {!showAll && sponsors.length > 10 && (
          <button
            // onClick={() => setShowAll(true)}
            className="bg-white p-3 md:p-4 rounded-lg flex justify-center cursor-pointer gap-2 items-center"
          >
            <div className="text-dark4 font-medium text-sm md:text-sm">
              View All
            </div>
            <MdArrowOutward className="mt-1 text-dark2 w-6 h-6 p-1 bg-neutral border border-dark5 hover:bg-footer rounded-full group-hover:translate-x-1 transition-transform" />
          </button>
        )}

        {/* Additional logos when expanded */}
        {showAll &&
          sponsors.slice(9).map((sponsor, idx) => (
            <div
              key={idx + 9}
              className="bg-white p-3 md:p-4 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-6 md:h-8 object-contain"
              />
            </div>
          ))}
      </div>

      {/* "Show Less" button (when expanded) */}
      {showAll && (
        <div className="text-center mt-6">
          <button
            // onClick={() => setShowAll(false)}
            className="bg-white mx-auto p-4  py-2 rounded-lg flex justify-center cursor-pointer gap-2 items-center"
          >
            <div className="text-dark4 font-medium text-sm md:text-sm">
              Show Less
            </div>
            <MdArrowOutward className="mt-1 text-dark2 w-6 h-6 p-1 bg-neutral border border-dark5 hover:bg-footer rounded-full transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="mx-auto w-[86%]">
      <div className="relative mt-4">
        {/* Hero section with semi-transparent background image */}
        <div className="relative h-[400px] w-full justify-center items-center md:h-[657px] rounded-4xl overflow-hidden">
          {/* Background image with opacity */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-dark1 opacity-95 bg-blend-soft-light"
            style={{
              backgroundImage: `url(${HeroImage})`,
              backgroundColor: "#111111",
              background: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Hero content */}
            <div className="relative h-full md:h-full flex items-center">
              <div className="px-8 p-12 w-full  md:m-30 md:pt-20">
                <div className="max-w-3xl mx-auto md:mx-0">
                  <h1 className="text-text justify-center items-center md:max-w-xl text-2xl md:text-5xl font-semibold mb-2 drop-shadow-lg space-y-4">
                    Bringing LinkedIn Connections to Life in Halifax
                  </h1>
                  <p className="text-text1 md:text-lg mb-8 font-semibold drop-shadow-lg">
                    Join a vibrant community of professionals,
                    <br /> innovators, and leaders at LinkedIn Local Halifax
                  </p>
                  <div className="flex space-y-4 sm:space-x-4 sm:flex-row flex-col sm:space-y-0 pb-2">
                    <button className=" bg-primary hover:bg-blue-700 text-xs md:text-sm cursor-pointer text-white md:px-6 md:py-3 p-3 w-36 md:w-42 rounded-lg flex items-center gap-3 transition-colors">
                      GET TICKET
                      <img
                        src={buttonIcon}
                        alt="icon"
                        className="brightness-0 invert"
                      />
                      {/* <IoIosArrowDropdown className="text-xl rounded-lg font-bold" /> */}
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

        {/* Countdown box positioned at bottom-right */}
        <div className="md:absolute mt-2 md:right-3 sm:right-4 md:bottom-0 transform md:translate-x-4 md:translate-y-0 bg-footer p-8 md:p-6 rounded-tl-4xl w-[384px] h-[217px] max-w-xs">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-800">
            We Are Getting Ready
          </h2>
          <CountdownTimer />
        </div>
      </div>

      {/* Sponsors section with 5x5 grid */}
      <div className="mx-auto pt-0 mt-0 mb-12">
        <SponsorLogos />
      </div>
    </section>
  );
};

export default Hero;
