import React from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

import { useDarkMode } from "../context/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-2xl cursor-pointer pt-1 transition-all duration-300 ease-in-out hover:scale-110"
    >
      {darkMode ? <CiLight /> : <MdOutlineLightMode />}
    </button>
  );
};

export default DarkModeToggler;
