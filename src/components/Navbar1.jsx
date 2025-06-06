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
  { name: "BLOG", href: "/blog" },
  { name: "GALLERY", href: "/gallery" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar1 = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-footer1 border-6 border-white p-4 sm:mx-12 mt-6 shadow-md rounded-2xl"
    >
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button (left side) */}
          <div className="absolute right-0 flex items-center font-extrabold sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-black font-extrabold hover:bg-gray-700 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 font-extrabold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                  className="block h-6 w-6 font-extrabold"
                  aria-hidden="true"
                />
              </svg>
            </DisclosureButton>
          </div>

          {/* Logo (centered on mobile, left on desktop) */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-12 w-auto" src={Logo} alt="Logo" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation (right side) */}
          <div className="absolute right-0 hidden sm:flex sm:items-center sm:space-x-4">
            <div className="flex space-x-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-dark1 text-white"
                        : "text-dark2 border border-primary hover:bg-dark4 hover:text-white",
                      "px-4 py-2 rounded-xl text-lg font-semibold transition-colors duration-500"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <button className="bg-primary w-[170px] h-[60px] text-blue-200 items-center justify-center px-6 py-1 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
              <Link to="/contact">CONTACT US</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? "bg-dark1 text-white"
                    : "text-dark2 hover:bg-dark3 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
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
                isActive ? "bg-blue-800" : "bg-primary hover:bg-blue-700",
                "block px-3 py-2 rounded-md text-base font-medium text-white"
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
