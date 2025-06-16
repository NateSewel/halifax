import React from "react";
import Organizer1 from "../assets/Organizer1.png";
import Organizer2 from "../assets/Organizer2.png";
import Organizer3 from "../assets/Organizer3.png";
import Organizer4 from "../assets/Organizer4.png";
import Icon from "../assets/LinkedIcon.png";

const organizers = [
  {
    name: "Jerome Nwoga",
    title: "Co-CEO of Peer Ledger",
    img: Organizer1,
    linkedin: "https://www.linkedin.com/in/Jeromenwoga/",
  },
  {
    name: "Paul Williams",
    title: "Program Coordinator Halifax Partnership",
    img: Organizer2,
    linkedin: "https://www.linkedin.com/in/Paulwilliams/",
  },
  {
    name: "Fatimah Akande",
    title:
      "Executive Director, Equity and Engagement Division at Government of Nova Scotia",
    img: Organizer3,
    linkedin: "https://www.linkedin.com/in/fatimah-akande/",
  },
  {
    name: "Ekow Nana",
    title: "Director of Attraction at Invest Nova Scotia",
    img: Organizer4,
    linkedin: "https://www.linkedin.com/in/andrew-ray-2414b9173/",
  },
];

const OrganizerCard = ({ organizer }) => (
  <div className=" bg-linear-to-b from-neutral4 to-neutral3 border-1 border-primary1 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-lg transition-all w-full h-full p-8">
    <img
      src={organizer.img}
      alt={organizer.name}
      className="w-full h-full object-cover overflow-hidden mb-2"
    />

    <h3 className="md:text-lg text-sm font-semibold text-gray-900">
      {organizer.name}
    </h3>
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
    {/* <p className="text-sm text-gray-600 mt-2 px-2">{organizer.title}</p> */}
  </div>
);

const Organizers = () => {
  return (
    <section className="container mx-auto px-6 md:px-16 py-12">
      <div className="bg-primary w-[85px] h-8 rounded-sm flex items-center justify-center mb-4">
        <span className="text-primary1 p-3 font-medium text-sm">
          Organizers
        </span>
      </div>
      <div className="mb-12">
        <h1 className="text-dark1 text-2xl md:text-4xl font-semibold mb-3">
          Meet The Organizers
        </h1>
        <p className="text-dark2 md:text-lg max-w-6xl font-normal">
          Our passionate team is made up of professionals dedicated to building
          a strong, supportive community in Halifax. Each event is powered by
          their vision, collaboration, and commitment to meaningful connections.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-16">
        {organizers.map((organizer, index) => (
          <OrganizerCard key={index} organizer={organizer} />
        ))}
      </div>
      <div className="mt-4 md:mt-12">
        <div className="flex items-center justify-center">
          <div className="flex-grow h-px bg-gray-500"></div>
          <a href="/sponsors">
            <button className="mx-6 bg-primary hover:bg-blue-700 cursor-pointer px-4 py-1 text-primary1 md:px-6 md:py-2 rounded font-medium transition-colors duration-200">
              View All Organizers
            </button>
          </a>
          <div className="flex-grow h-px bg-gray-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;
