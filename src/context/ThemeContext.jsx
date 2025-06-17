import { createContext, useContext, useEffect, useState } from "react";

// Define the context shape
const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Handle server-side rendering case
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }
  return context;
};
