import React from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Icon from "../assets/Text.png";
import Testimonial1 from "../assets/Test1.jpeg";
import Testimonial2 from "../assets/Test2.jpeg";
import Testimonial3 from "../assets/Test3.jpeg";
import Testimonial4 from "../assets/Test4.jpeg";
import Testimonial5 from "../assets/Test5.jpeg";
import Testimonial6 from "../assets/Test6.jpeg";
import Testimonial7 from "../assets/Test7.jpeg";
import Testimonial8 from "../assets/Test8.jpeg";

// import vectorLeft from "../assets/VectorLeft.png";
// import vectorRight from "../assets/VectorRight.png";

const testimonials = [
  {
    name: "Siddharth Srivalsan",
    role: "Attendee",
    image: Testimonial1,
    text: "Attending the LinkedIn Local Halifax event at Saint Mary's University in 2024 was a spectacular opportunity. The energy in the room, the insightful conversations, and the genuine connections made it more than just a networking event.",
    rating: 5,
  },
  {
    name: "Nithin Jacob Eapen",
    role: "Attendee",
    image: Testimonial2,
    text: "LinkedIn Local Halifax was such a great event! I really enjoyed meeting people face-to-face and having real conversations beyond just networking online. ",
    rating: 5,
  },
  {
    name: "Francesca Southwell",
    role: "Attendee",
    image: Testimonial3,
    text: "Linkedin Local - Halifax truly lived up to its aim by providing a great platform for us students to listen to professionals in their field, ask questions, and ultimately network all while on campus.",
    rating: 5,
  },
  {
    name: "Nigel Lutchman ",
    role: "Attendee",
    image: Testimonial4,
    text: "Attending LinkedIn Local Halifax at Saint Mary's was a refreshing and energizing experience. I loved the mix of authentic conversations, community connection, and the chance to meet inspiring professionals from across Halifax.",
    rating: 5,
  },
  {
    name: "Shivani Adhana",
    role: "Attendee",
    image: Testimonial5,
    text: "I was truly honored to be a speaker at the LinkedIn Local Halifax event—an experience that was both enriching and inspiring. The event was exceptionally well-organized, creating an engaging and dynamic space for authentic networking and thought-provoking conversations.",
    rating: 5,
  },
  {
    name: "Jada Joseph",
    role: "Attendee",
    image: Testimonial6,
    text: "Attending the LinkedIn Local event was a game-changer for me. Not only did I get to meet incredible professionals from a variety of industries, but I also connected with mentors who continue to support and guide me to this day.",
    rating: 5,
  },
  {
    name: "Basam Murtaza Tahoor",
    role: "Attendee",
    image: Testimonial7,
    text: "LinkedIn Local Halifax was an excellent event that brought industry experts, business leaders, and professionals with varied backgrounds to form a dynamic platform for genuine connection and collaboration.",
    rating: 5,
  },
  {
    name: "Daniella Addo",
    role: "Attendee",
    image: Testimonial8,
    text: "LinkedIn Local Halifax event was a great reminder that LinkedIn isn’t just for job searching but it’s also a powerful platform for building your personal brand, growing professionally, and making meaningful connections.",
    rating: 5,
  },
];

const TestimonialCard = ({ name, role, image, text, rating }) => {
  return (
    <div className="bg-neutral4 border-1 border-primary1 rounded-2xl  p-6 h-full flex flex-col dark:border-neutral dark:border-4">
      {/* Testimonial */}
      <div className="flex items-center mb-4 justify-between">
        {/* Image */}
        <div className="flex items-center mb-4">
          <img
            src={`${image}?auto=format&fit=crop&w=100&h=100`}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-xs md:text-sm text-dark1 dark:text-white">
              {name}
            </h3>
            <p className="text-xs text-dark2">{role}</p>
          </div>
        </div>
        {/* Testimonial Icon */}
        <div>
          <img src={Icon} alt="Testimonial Icon" className="w-30 h-15 mb-4" />
        </div>
      </div>

      <p className="text-dark2 text-xs md:text-sm flex-grow dark:text-text">
        {text}
        {/* <a href="#" className="text-linkedin hover:text-linkedin-dark ml-1">
          see more...
        </a> */}
      </p>

      <div className="flex mt-4 sm:text-sm">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            fill={index < rating ? "#036eb7" : "none"}
            stroke={index < rating ? "#036eb7" : "#D1D5DB"}
            className="mr-1"
          />
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const testimonialsPerPageMobile = 1;
  const maxPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const maxPagesMobile = Math.ceil(
    testimonials.length / testimonialsPerPageMobile
  ); // Added for mobile

  const nextPage = () => {
    setCurrentPage(
      (prev) =>
        (prev + 1) % (window.innerWidth < 768 ? maxPagesMobile : maxPages)
    );
  };

  const prevPage = () => {
    setCurrentPage(
      (prev) =>
        (prev - 1 + (window.innerWidth < 768 ? maxPagesMobile : maxPages)) %
        (window.innerWidth < 768 ? maxPagesMobile : maxPages)
    );
  };

  const visibleTestimonials = () => {
    const perPage =
      window.innerWidth < 768 ? testimonialsPerPageMobile : testimonialsPerPage;
    return testimonials.slice(
      currentPage * perPage,
      (currentPage + 1) * perPage
    );
  };
  return (
    <section className="container mx-auto md:px-16 py-12">
      <div className="bg-primary w-[85px] h-8 rounded-sm flex items-center justify-center mb-4">
        <span className="text-primary1 p-3 font-medium text-sm dark:text-text">
          Testimonial
        </span>
      </div>
      <div className="mb-12">
        <h1 className="text-dark1 text-2xl md:text-4xl font-semibold mb-3 dark:text-text">
          What Our Attendees Say
        </h1>
        <p className="text-dark2 md:text-lg max-w-6xl font-normal dark:text-text">
          Don’t just take our word for it, hear what past attendees have to say
          about their LinkedIn Local Halifax experience.
        </p>
      </div>
      {/* Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {visibleTestimonials().map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      <div className="flex items-center justify-between p-1 mt-10 bg-neutral4 border-1 border-primary1 rounded-lg dark:border-neutral">
        <p className="text-dark2 max-w-2xl md:text-sm font-semibold md:pl-3 dark:text-text">
          We have 20+ Happy Attendees
        </p>

        <div className="flex items-center">
          <div className="flex md:space-x-4 md:p-1">
            <button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full p-3 bg-primary1 border border-primary text-blue-400 cursor-pointer dark:text-text dark:border-neutral dark:bg-transparent"
            >
              <FaLongArrowAltLeft size={18} />
            </button>
            <div className="md:mr-4 text-dark2 text-sm font-semibold p-3 dark:text-text dark:bg-transparent dark:border dark:border-footer1 dark:rounded-2xl">
              {currentPage + 1}/{maxPages}
            </div>
            <button
              onClick={nextPage}
              className="rounded-full p-3 bg-primary text-primary1 cursor-pointer hover:bg-blue-600 dark:text-text"
            >
              <FaLongArrowAltRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
