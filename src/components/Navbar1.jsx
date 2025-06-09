import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SPEAKERS", href: "/speakers" },
  { name: "SPONSORS", href: "/sponsors" },
  { name: "BECOME A SPONSOR", href: "/become-a-sponsor" },
  { name: "BLOG", href: "/blogs" },
  { name: "GALLERY", href: "/gallery" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar1 = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-footer1 border-4 border-white mx-auto w-[86%] mt-4 shadow-md m-3 p-1 rounded-lg md:rounded-2xl md:p-2 lg:p-3"
    >
      <div className="px-6 lg:px-20">
        {/* Mobile menu button */}
        <div className="absolute right-9 flex items-center lg:hidden">
          <DisclosureButton className="inline-flex items-center justify-center p-1  rounded-md text-black hover:bg-gray-700 focus:outline-none">
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
                className="block h-6 w-6"
                aria-hidden="true"
              />
            </svg>
          </DisclosureButton>
        </div>

        {/* Logo and Navigation Container */}
        <div className="flex flex-1 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 ml-0">
            <Link to="/">
              <img className="w-26 h-auto" src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation - Adjusted for proper text alignment */}
          <div className="hidden lg:flex lg:ml-20 lg:items-center lg:space-x-2">
            <div className="flex space-x-2 md:space-x-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-dark1 text-white"
                        : "text-dark2 border border-primary hover:bg-dark4 hover:text-white",
                      "px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-500 flex items-center justify-center min-w-max" // Added flex alignment
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <button className="bg-primary w-[100px] h-[40px] lg:w-[130px] lg:h-[45px] text-blue-200 items-center justify-center rounded-xl text-base lg:text-sm font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap ml-2">
              <Link to="/contact">CONTACT US</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (unchanged) */}
      <DisclosurePanel className="lg:hidden">
        <div className="px-3 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? "bg-dark1 text-white"
                    : "text-dark2 hover:bg-dark3 hover:text-white",
                  "block px-2 py-1 rounded-md text-sm font-medium"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              classNames(
                isActive ? "bg-blue-600" : "bg-primary hover:bg-blue-600",
                "block px-3 py-2 rounded-md text-sm font-medium text-white"
              )
            }
          >
            CONTACT US
          </NavLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar1;
