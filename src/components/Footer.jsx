import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="container mx-auto md:px-16 py-4">
      {/* CTA Section */}
      <div className="bg-primary rounded-xl px-6 md:px-12 py-8 md:py-12 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Content */}
          <div className="md:pl-4">
            <h1 className="text-xl md:text-4xl font-semibold text-text max-w-4xl dark:text-white">
              READY TO CONNECT WITH PROFESSIONALS IN HALIFAX
            </h1>
            <p className="text-text text-md md:max-w-3xl mt-4 dark:text-white">
              Join us as we make networking more personal, impactful, and
              rewarding. Stay connected and be part of LinkedIn Local Halifax!
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center gap-2 text-sm font-semibold px-6 py-3 bg-footer rounded-xl hover:bg-footer1 cursor-pointer transition-colors w-full md:w-[19%] justify-center dark:bg-white dark:hover:bg-text">
            REGISTER NOW <GoArrowUpRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-neutral3 border-1 border-primary1 mt-12 rounded-2xl dark:border-neutral">
        <div className="px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Logo and Address */}
            <div>
              <div className="flex items-center">
                <Link to="/">
                  <img className="h-12 w-auto" src={Logo} alt="Logo" />
                </Link>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2 dark:text-white">
                  Address:
                </h4>
                <p className="text-gray-600 dark:text-text">
                  Arthur Irving
                  <br />
                  Entrepreneurship Centre
                  <br />
                  @ Saint Mary's University –<br />
                  5907 Gorsebrook Ave, Halifax.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2 dark:text-white">
                  Contact:
                </h4>
                <p className="text-gray-600 dark:text-text">
                  1800 123 4567
                  <br />
                  info@linkedinlocalhalifax.com
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61556356659781&mibextid=wwXIfr&mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-linkedin transition-colors"
                >
                  <FaFacebook size={20} className="dark:text-text" />
                </a>
                <a
                  href="https://www.instagram.com/linkedinlocalhalifax/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-linkedin transition-colors"
                >
                  <FaInstagram size={20} className="dark:text-text" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-linkedin transition-colors"
                >
                  <FaXTwitter size={20} className="dark:text-text" />
                </a>
                <a
                  href="https://www.linkedin.com/company/linkedinlocalhalifax/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-linkedin transition-colors"
                >
                  <FaLinkedin size={20} className="dark:text-text" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-linkedin transition-colors"
                >
                  <FaYoutube size={20} className="dark:text-text" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 dark:text-white">
                  Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-600 hover:text-linkedin transition-colors dark:text-text"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-600 hover:text-linkedin transition-colors dark:text-text"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/speakers"
                      className="text-gray-600 hover:text-linkedin transition-colors dark:text-text"
                    >
                      Speakers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sponsors"
                      className="text-gray-600 hover:text-linkedin transition-colors dark:text-text"
                    >
                      Sponsors
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4 dark:text-white">
                  Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/become-a-sponsor"
                      className="text-gray-600 hover:text-linkedin transition-colors dark:text-text"
                    >
                      Become A Sponsor
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs"
                      className="text-gray-600 hover:text-linkedin transition-colors dark:text-text"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery"
                      className="text-gray-600 hover:text-linkedin transition-colors dark:text-text"
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-600 hover:text-linkedin transition-colors dark:text-text"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center dark:border-text">
            <p className="text-gray-600 text-sm mb-4 md:mb-0 dark:text-text">
              © 2025 LinkedIn Local Halifax. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-linkedin transition-colors text-xs md:text-sm underline dark:text-text"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-600 hover:text-linkedin transition-colors text-xs md:text-sm underline dark:text-text"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-linkedin transition-colors text-xs md:text-sm underline dark:text-text"
              >
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
