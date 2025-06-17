import React from "react";
import Icon from "../assets/LinkedIcon.png";
import Speaker1 from "../../src/assets/Speaker1.png";
import Speaker2 from "../../src/assets/Speaker2.png";
import Speaker3 from "../../src/assets/Speaker3.png";
import Speaker4 from "../../src/assets/Speaker4.png";
import Speaker5 from "../../src/assets/Speaker5.png";
import Speaker6 from "../../src/assets/Speaker6.png";
import Speaker7 from "../../src/assets/Speaker7.png";
import Speaker8 from "../../src/assets/Speaker8.png";

const speakers = [
  {
    name: "Dawn Jutla",
    title: "Co-CEO of Peer Ledger",
    img: Speaker1,
    linkedin: "https://www.linkedin.com/in/dawnnjutla/",
  },
  {
    name: "Shivani Adhana",
    title: "Program Coordinator Halifax Partnership",
    img: Speaker2,
    linkedin: "https://www.linkedin.com/in/Shivaniadhana/",
  },
  {
    name: "John Ariyo",
    title:
      "Executive Director, Equity and Engagement Division at Government of Nova Scotia",
    img: Speaker3,
    linkedin: "https://www.linkedin.com/in/Johnariyo/",
  },
  {
    name: "Chandra Pottle",
    title: "Director of Attraction at Invest Nova Scotia",
    img: Speaker4,
    linkedin: "https://www.linkedin.com/in/Chandrapottle/",
  },
];
//Card 2
const speakers_1 = [
  {
    name: "Andrew Ray",
    title: "Member Board of Governors - TRIUMF",
    img: Speaker5,
    linkedin: "https://www.linkedin.com/in/Andrewray/",
  },
  {
    name: "Harry Madusha",
    title: "Lead Data Mining and Artificial Intelligence, Government of Canada",
    img: Speaker6,
    linkedin: "https://www.linkedin.com/in/Harrymadusha/",
  },
  {
    name: "Nicholous Deal",
    title: "Assistant Professor at Mount Saint Vincent University",
    img: Speaker7,
    linkedin: "https://www.linkedin.com/in/Nicholousdeal/",
  },
  {
    name: "Shelly Elsliger",
    title: "President Linked Express",
    img: Speaker8,
    linkedin: "https://www.linkedin.com/in/selsliger/",
  },
];

const SpeakerCard = ({ speaker }) => (
  <div className=" bg-linear-to-b from-neutral4 to-neutral3 border-1 border-primary1 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-lg transition-all w-full h-full p-8 dark:border-neutral dark:bg-linear-to-b dark:from-footer dark:to-neutral4">
    <img src={speaker.img} alt={speaker.name} className=" object-cover mb-2" />

    <h3 className="md:text-lg text-sm font-semibold text-gray-900 dark:text-white">
      {speaker.name}
    </h3>
    <p className="md:text-sm text-xs text-gray-600 mt-2 px-2 dark:text-text">
      {speaker.title}
    </p>
    <div className="rounded-full">
      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
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

const SpeakerCard2 = ({ speaker1 }) => (
  <div className=" bg-linear-to-b from-neutral4 to-neutral3 border-4 border-primary1 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-lg transition-all w-full h-full p-8 dark:border-neutral dark:bg-linear-to-b dark:from-footer dark:to-neutral4">
    <img src={speaker1.img} alt={speaker1.name} className="object-cover mb-2" />

    <h3 className="md:text-lg text-sm font-semibold text-gray-900 dark:text-white">
      {speaker1.name}
    </h3>
    <p className="md:text-sm text-xs text-gray-600 mt-2 px-2 dark:text-text">
      {speaker1.title}
    </p>
    <div className="rounded-full">
      <a href={speaker1.linkedin} target="_blank" rel="noopener noreferrer">
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
const Speakers = () => {
  return (
    <section className="container mx-auto px-6 md:px-16 py-12">
      <div className="bg-primary w-[73px] h-8 rounded-sm flex items-center justify-center mb-4">
        <span className="text-primary1 font-medium text-sm dark:text-text">
          Speakers
        </span>
      </div>

      <div className="mb-12">
        <h1 className="text-dark1 text-2xl md:text-4xl font-semibold mb-3 dark:text-white">
          Meet The Speakers
        </h1>
        <p className="text-dark2 md:text-lg max-w-6xl font-normal dark:text-text">
          Get ready to hear from professionals who are shaping the future of
          work, leadership, and innovation. Our speakers bring real-world
          experience, fresh perspectives, and actionable advice to help you grow
          personally and professionally.
        </p>
      </div>

      <div className="pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-16">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {speakers_1.map((speaker1, index) => (
            <SpeakerCard key={index} speaker={speaker1} />
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-12">
        <div className="flex items-center justify-center">
          <div className="flex-grow h-px bg-gray-500"></div>
          <a href="/speakers">
            <button className="mx-6 bg-primary hover:bg-blue-700 cursor-pointer px-4 py-1 text-primary1 md:px-6 md:py-2 rounded font-medium transition-colors duration-200 dark:text-text">
              View All Speakers
            </button>
          </a>
          <div className="flex-grow h-px bg-gray-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
