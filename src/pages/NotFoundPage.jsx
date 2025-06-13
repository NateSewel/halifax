import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-dark2 justify-center items-center font-bold text-3xl md:text-4xl">
        Page Not Found{" "}
        <span className="text-primary md:text-7xl items-center">:)</span>
      </h1>
      <Link to="/">
        <button className="border rounded-2xl w-full p-2 m-2 hover: cursor-pointer hover:bg-primary hover:text-white border-primary font-bold">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
