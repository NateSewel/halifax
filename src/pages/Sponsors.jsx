import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import buttonIcon from "../assets/buttonIcon.png";
import HeroImage from "../assets/HeroImg1.webp";
import { FaLongArrowAltRight } from "react-icons/fa";

import Organizer1 from "../assets/Organizer1.png";
import Organizer2 from "../assets/Organizer2.png";
import Organizer3 from "../assets/Organizer3.png";
import Organizer4 from "../assets/Organizer4.png";
import Organizer5 from "../assets/Organizer5.png";
import Icon from "../assets/LinkedIcon.png";
import Image3 from "../assets/SponsorCard.png";

// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const organizers = [
  {
    name: "Jerome Nwoga",
    title: "Co-CEO of Peer Ledger",
    img: Organizer1,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "Paul Williams",
    title: "Program Coordinator Halifax Partnership",
    img: Organizer2,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "Fatima Akande",
    title:
      "Executive Director, Equity and Engagement Division at Government of Nova Scotia",
    img: Organizer3,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "Ekow Nana",
    title: "Director of Attraction at Invest Nova Scotia",
    img: Organizer4,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "Raghvi Gambhir",
    title: "Director of Attraction at Invest Nova Scotia",
    img: Organizer5,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
];

const OrganizerCard = ({ organizer }) => (
  <div className=" bg-linear-to-b from-neutral4 to-neutral3 border-1 border-primary1 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-lg transition-all w-full h-full p-8 dark:bg-linear-to-b dark:border-neutral dark:from-footer dark:to-neutral4">
    <img
      src={organizer.img}
      alt={organizer.name}
      className="w-full h-full object-cover mb-2"
    />

    <h3 className="md:text-lg text-sm font-semibold text-gray-900 dark:text-text">
      {organizer.name}
    </h3>
    {/* <p className="md:text-sm text-xs text-gray-600 mt-2 px-2">
      {organizer.title}
    </p> */}
    <div className="rounded-full p-3">
      <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer">
        <img
          src={Icon}
          alt="LinkedIn Icon"
          width={40}
          height={40}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
      </a>
    </div>
  </div>
);

const Sponsors = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <MainLayout>
        <div>
          <section className="">
            {/* Hero section */}
            <div className="relative mx-auto w-[86%] mt-4" data-aos="fade-up">
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
                        <h1 className="text-text justify-center items-center md:max-w-sm text-2xl md:text-5xl font-semibold mb-2 drop-shadow-lg space-y-4">
                          Meet Our Sponsors
                        </h1>
                        <p className="text-text1 md:max-w-xs md:text-lg mb-8 font-semibold drop-shadow-lg">
                          Empowering Connections, Driving Impact.
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
              {/* Sponsors Contents */}
              <div data-aos="fade-up">
                <div className="bg-primary w-[73px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4 m-5">
                  <button className="text-primary1 font-medium text-sm items-center justify-center p-1 dark:text-text">
                    Sponsors
                  </button>
                </div>
                <div className="m-5">
                  <h1 className="text-dark1 text-2xl md:text-4xl font-semibold dark:text-white">
                    Meet The Sponsors
                  </h1>
                  <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3 dark:text-text">
                    LinkedIn Local Lagos 2.0 is made possible by the generous
                    support of our sponsors. Their commitment to professional
                    growth, networking, and community development helps us
                    create a platform for meaningful connections and impactful
                    conversations.
                  </p>
                </div>
                {/* Sponsors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-20 md:m-10 m-5 pb-16">
                  {organizers.map((organizer, index) => (
                    <OrganizerCard key={index} organizer={organizer} />
                  ))}
                </div>
              </div>
            </div>
            {/* Sponsors Content */}
            <div className="mt-10 md:m-12 m-5">
              {/* Sponsor Contents */}
              <div data-aos="fade-up">
                <div className="bg-primary w-[73px] h-8 items-center justify-center rounded-sm md:mt-30 mb-4">
                  <button className="text-primary1 font-medium text-sm items-center justify-center p-1 dark:text-text">
                    Speakers
                  </button>
                </div>
                <div>
                  <h1 className="text-dark1 text-2xl md:text-4xl font-semibold dark:text-white">
                    What to Expect
                  </h1>
                  <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3 dark:text-text">
                    LinkedIn LocalTM events are organic meetups, hosted by
                    members all over the world. They provide an opportunity to
                    network, build community, discuss industry trends, and share
                    best practices for using LinkedIn.
                  </p>
                </div>
                {/* Cards */}
                <div className="mt-10 md:mt-20">
                  <img src={Image3} alt="image" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </div>
  );
};

export default Sponsors;
