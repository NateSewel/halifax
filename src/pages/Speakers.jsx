import React from "react";
import MainLayout from "../layout/MainLayout";
import buttonIcon from "../assets/buttonIcon.png";
import HeroImage from "../assets/Hero_Img.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Icon from "../assets/LinkedIcon.png";
import Speaker1 from "../../src/assets/Speaker1.png";
import Speaker2 from "../../src/assets/Speaker2.png";
import Speaker3 from "../../src/assets/Speaker3.png";
import Speaker4 from "../../src/assets/Speaker4.png";
import Speaker5 from "../../src/assets/Speaker5.png";
import Speaker6 from "../../src/assets/Speaker6.png";
import Speaker7 from "../../src/assets/Speaker7.png";
import Speaker8 from "../../src/assets/Speaker8.png";
import Speaker9 from "../../src/assets/Speaker9.png";
import Image3 from "../assets/SpeakerCard.png";

const speakers = [
  {
    name: "Dawn Jutla",
    title: "Co-CEO of Peer Ledger",
    img: Speaker1,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "Shivani Adhana",
    title: "Program Coordinator Halifax Partnership",
    img: Speaker2,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "John Ariyo",
    title:
      "Executive Director, Equity and Engagement Division at Government of Nova Scotia",
    img: Speaker3,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "Chandra Pottle",
    title: "Director of Attraction at Invest Nova Scotia",
    img: Speaker4,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
];
//Card 2
const speakers_1 = [
  {
    name: "Andrew Ray",
    title: "Member Board of Governors - TRIUMF",
    img: Speaker5,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "Harry Madusha",
    title: "Lead Data Mining and Artificial Intelligence, Government of Canada",
    img: Speaker6,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "Nicholous Deal",
    title: "Assistant Professor at Mount Saint Vincent University",
    img: Speaker7,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  {
    name: "Shelly Elsliger",
    title: "President Linked Express",
    img: Speaker8,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
];
//Card 3
const speakers_2 = [
  {
    name: "Jonathan Okwo",
    title: "Change Management Lead / Mentor",
    img: Speaker9,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
  // {
  //   name: "Harry Madusha",
  //   title: "Lead Data Mining and Artificial Intelligence, Government of Canada",
  //   img: Speaker6,
  //   linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  // },
  // {
  //   name: "Nicholous Deal",
  //   title: "Assistant Professor at Mount Saint Vincent University",
  //   img: Speaker7,
  //   linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  // },
  // {
  //   name: "Shelly Elsliger",
  //   title: "President Linked Express",
  //   img: Speaker8,
  //   linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  // },
];

const SpeakerCard = ({ speaker }) => (
  <div className=" bg-linear-to-b from-footer to-primary1 border-4 border-primary1 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-lg transition-all w-full h-full p-8">
    <img
      src={speaker.img}
      alt={speaker.name}
      className="w-full h-full object-cover mb-2"
    />

    <h3 className="md:text-lg text-sm font-semibold text-gray-900">
      {speaker.name}
    </h3>
    <p className="md:text-sm text-xs text-gray-600 mt-2 px-2">
      {speaker.title}
    </p>
    <div className="rounded-full p-3">
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

// const SpeakerCard2 = ({ speaker1 }) => (
//   <div className=" bg-linear-to-b from-footer to-primary1 border-4 border-primary1 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-lg transition-all w-full h-full p-8">
//     <img
//       src={speaker1.img}
//       alt={speaker1.name}
//       className="w-full h-full object-cover mb-2"
//     />

//     <h3 className="md:text-lg text-sm font-semibold text-gray-900">
//       {speaker1.name}
//     </h3>
//     <p className="md:text-sm text-xs text-gray-600 mt-2 px-2">
//       {speaker1.title}
//     </p>
//     <div className="rounded-full p-3">
//       <a href={speaker1.linkedin} target="_blank" rel="noopener noreferrer">
//         <img
//           src={Icon}
//           alt="LinkedIn Icon"
//           width={40}
//           height={40}
//           className="cursor-pointer hover:opacity-80 transition-opacity"
//         />
//       </a>
//     </div>
//   </div>
// );

// const SpeakerCard3 = ({ speaker2 }) => (
//   <div className=" bg-linear-to-b from-footer to-primary1 border-4 border-primary1 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-lg transition-all w-full h-full p-8">
//     <div className="rounded-full p-3">
//       <a href={speaker2.linkedin} target="_blank" rel="noopener noreferrer">
//         <img
//           src={Icon}
//           alt="LinkedIn Icon"
//           width={40}
//           height={40}
//           className="cursor-pointer hover:opacity-80 transition-opacity"
//         />
//       </a>
//     </div>
//     <div className="h-[190px] w-[250px] rounded-lg overflow-hidden mb-4">
//       <img
//         src={speaker2.img}
//         alt={speaker2.name}
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <h3 className="text-lg font-semibold text-gray-900">{speaker2.name}</h3>
//     <p className="text-sm text-gray-600 mt-2 px-2">{speaker2.title}</p>
//   </div>
// );

const Speakers = () => {
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
                        <h1 className="text-text justify-center items-center md:max-w-sm text-2xl md:text-5xl font-semibold mb-2 drop-shadow-lg space-y-4">
                          Meet Our Speakers
                        </h1>
                        <p className="text-text1 md:max-w-xs md:text-lg mb-8 font-semibold drop-shadow-lg">
                          Inspiring Voices, Meaningful Conversations.
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
                  Speakers
                </button>
              </div>
              <div className="m-5">
                <h1 className="text-dark1 text-2xl md:text-4xl font-semibold">
                  Meet The Speakers
                </h1>
                <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3">
                  Get ready to hear from professionals who are shaping the
                  future of work, leadership, and innovation. Our speakers bring
                  real-world experience, fresh perspectives, and actionable
                  advice to help you grow personally and professionally.
                </p>
              </div>
              <div className="md:mt-20 mt-10 pb-12 md:m-10 m-5">
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
                <div className="flex items-end">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 md:mt-20 gap-4">
                    {speakers_2.map((speaker2, index) => (
                      <SpeakerCard key={index} speaker={speaker2} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Speaker Content */}
              <div className="mt-10 md:m-12 m-5">
                {/* About Contents */}
                <div className="bg-primary w-[73px] h-8 items-center justify-center rounded-sm md:mt-30 mb-4">
                  <button className="text-primary1 font-medium text-sm items-center justify-center p-1">
                    Speakers
                  </button>
                </div>
                <div>
                  <h1 className="text-dark1 text-2xl md:text-4xl font-semibold">
                    What to Expect
                  </h1>
                  <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3">
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

export default Speakers;
