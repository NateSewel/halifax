import React from "react";
import { useEffect } from "react";
// import blog1 from "../assets/blog2.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router";

// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const blogs = [
  {
    id: 2,
    title: "What to post on LinkedIn to grow your network in 2025",
    image: blog2,
    category: "Expert Advice",
    published_date: "April 1, 2025",
    reading_time: "5 Mins",
    content:
      "Need LinkedIn post ideas for 2025? This guide shares 10 simple ways to grow your network and boost engagement.",
  },
  {
    id: 3,
    title: "How to optimize your LinkedIn profile for recruiters",
    image: blog3,
    category: "Expert Advice",
    published_date: "April 1, 2025",
    reading_time: "5 Mins",
    content:
      "Optimize your LinkedIn profile in 2025 with tips on professional images, catchy headlines, and showcasing your skills to attract recruiters.",
  },
  {
    id: 4,
    title: "What makes a great LinkedIn summary.",
    image: blog4,
    category: "Expert Advice",
    published_date: "April 1, 2025",
    reading_time: "5 Mins",
    content:
      "There is nothing as priceless as a first impression. As a LinkedIn professional on the platform for years, I have realized that LinkedIn summary summarizes everything about you as a professional.",
  },
  {
    id: 5,
    title: "How to reach out to hiring managers on LinkedIn",
    image: blog5,
    category: "Expert Advice",
    published_date: "April 1, 2025",
    reading_time: "5 Mins",
    content:
      "Do you know that to have a high chance of thousands of applicants applying for a particular opportunity, reaching out to the hiring managers on LinkedIn can be a game changer for you?",
  },
  {
    id: 6,
    title: "Best LinkedIn headline examples for professionals in 2025",
    image: blog6,
    category: "Expert Advice",
    published_date: "April 1, 2025",
    reading_time: "5 Mins",
    content:
      "LinkedIn professional standards have been evolving, and it is essential to be aware that your LinkedIn headline serves as a powerful too",
  },
];

// Improved BlogCard component with responsive design
const BlogCard = ({ blog }) => (
  <div className="bg-neutral3 border-1 border-primary1 rounded-2xl shadow flex flex-col items-center text-start hover:shadow-lg transition-all w-full h-full p-4">
    {/* Image container with responsive sizing */}
    <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden mb-4">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>

    {/* Content container with consistent padding */}
    <div className="w-full px-2 sm:px-4 flex flex-col items-start">
      {/* Title with responsive text sizing */}
      <h3 className="flex items-start justify-start text-sm font-semibold text-dark2 mb-2 line-clamp-2">
        {blog.title}
      </h3>

      {/* Content with proper alignment and responsive sizing */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{blog.content}</p>

      {/* Read More button - centered and responsive */}
      <div className="flex justify-between items-center gap-1">
        <a href={`/blogs/${blog.id}`}>
          <button>
            <GoArrowUpRight
              size={43}
              className="bg-primary hover:bg-blue-800 p-2 rounded-full border-6 cursor-pointer border-error-red1 text-primary1 font-bold"
            />
          </button>
        </a>
        <p className="text-sm">Read Full Blog</p>
      </div>
    </div>
  </div>
);

const AllBlogPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="fade-up"
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="flex justify-center">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogPage;
