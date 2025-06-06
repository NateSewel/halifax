import React from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Icon from "../assets/Text.png";
import Testimonial1 from "../assets/Testimonial1.png";
import Testimonial2 from "../assets/Testimonial2.png";
import Testimonial3 from "../assets/Testimonial3.png";
// import vectorLeft from "../assets/VectorLeft.png";
// import vectorRight from "../assets/VectorRight.png";

const testimonials = [
  {
    name: "Nicholous Deal",
    role: "Attendee",
    image: Testimonial1,
    text: "LinkedIn Local Halifax provides an incredible, unparalleled opportunity to connect with local professionals in an engaging, supportive environment that brings real value to our community.",
    rating: 5,
  },
  {
    name: "Siddharth Srivalsan",
    role: "Attendee",
    image: Testimonial2,
    text: "Attending the LinkedIn Local Halifax event at Saint Mary's University in 2024 was a spectacular opportunity. The energy in the room was profound, and I made connections that have already led to new business opportunities.",
    rating: 5,
  },
  {
    name: "Nithin Jacob Eapen",
    role: "Attendee",
    image: Testimonial3,
    text: "LinkedIn Local Halifax was such a great event! I really enjoyed meeting people face-to-face and having real conversations that went beyond the typical networking. Looking forward to the next one!",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Attendee",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    text: "This event transformed how I approach professional networking. Instead of cold connections, I established meaningful relationships with professionals who share my values and vision.",
    rating: 5,
  },
  {
    name: "Siddharth Srivalsan",
    role: "Attendee",
    image: Testimonial2,
    text: "Attending the LinkedIn Local Halifax event at Saint Mary's University in 2024 was a spectacular opportunity. The energy in the room was profound, and I made connections that have already led to new business opportunities.",
    rating: 5,
  },
  {
    name: "Nithin Jacob Eapen",
    role: "Attendee",
    image: Testimonial3,
    text: "LinkedIn Local Halifax was such a great event! I really enjoyed meeting people face-to-face and having real conversations that went beyond the typical networking. Looking forward to the next one!",
    rating: 5,
  },
];

const TestimonialCard = ({ name, role, image, text, rating }) => {
  return (
    <div className="bg-footer1 border-4 border-primary1 rounded-2xl  p-6 h-full flex flex-col">
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
            <h3 className="font-semibold text-xs md:text-sm text-dark1">
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

      <p className="text-dark2 text-xs md:text-sm flex-grow">
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
    <section className="container mx-auto px-6 md:px-16 py-12">
      <div className="bg-primary w-[85px] h-8 rounded-sm flex items-center justify-center mb-4">
        <span className="text-primary1 p-3 font-medium text-sm">
          Testimonial
        </span>
      </div>
      <div className="mb-12">
        <h1 className="text-dark1 text-2xl md:text-4xl font-semibold mb-3">
          What Our Attendees Say
        </h1>
        <p className="text-dark2 md:text-lg max-w-6xl font-normal">
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

      <div className="flex items-center justify-between p-1 mt-10 bg-footer1 border-4 border-primary1 rounded-lg">
        <p className="text-dark2 max-w-2xl md:text-sm font-semibold md:pl-3">
          We have 20+ Happy Attendees
        </p>

        <div className="flex items-center">
          <div className="flex md:space-x-4 md:p-1">
            <button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full p-3 bg-primary1 border border-primary text-blue-400 cursor-pointer"
            >
              <FaLongArrowAltLeft size={18} />
            </button>
            <div className="md:mr-4 text-dark2 text-sm font-semibold p-3">
              {currentPage + 1}/{maxPages}
            </div>
            <button
              onClick={nextPage}
              className="rounded-full p-3 bg-primary text-primary1 cursor-pointer hover:bg-blue-600"
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
