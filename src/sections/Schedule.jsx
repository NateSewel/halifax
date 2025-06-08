import React from "react";
import ScheduleImg from "../assets/Schedule.png";

const Schedule = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-16 py-8 sm:py-12">
      <div className="bg-primary w-[85px] h-8 rounded-sm flex items-center justify-center mb-4">
        <span className="text-primary1 p-3 font-medium text-sm">Schedule</span>
      </div>
      <div className="mb-8 sm:mb-12">
        <h1 className="text-dark1 text-xl sm:text-2xl md:text-4xl font-semibold mb-3">
          Event Schedule
        </h1>
        <p className="text-dark2 text-sm sm:text-base md:text-lg max-w-6xl font-normal">
          From keynote speeches to interactive breakout sessions, we've curated
          an experience that's informative, inspiring, and filled with
          opportunities to connect.
        </p>
      </div>
      {/* Schedule Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-1">
        {/* Time - Hidden on mobile, shown on sm+ */}
        <div className="hidden sm:block w-full sm:w-[120px] md:w-[150px] lg:w-[422px] h-auto sm:mb-auto sm:p-4 md:p-10">
          <h1 className="text-dark1 text-xl sm:text-2xl md:text-3xl font-bold sm:pl-0 md:pl-40">
            Time
          </h1>
          <p className="text-dark2 font-semibold sm:pl-0 md:pl-44">4:00</p>
          <p className="text-dark2 font-semibold sm:pl-0 md:pl-44">PM</p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 w-full">
          {/* Schedule Items */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row w-full sm:w-auto sm:max-w-[810px] h-auto sm:h-[170px] border-2 sm:border-4 border-primary1 rounded-2xl"
            >
              <img
                src={ScheduleImg}
                alt="Event Schedule"
                className="w-full sm:w-[120px] md:w-[220px] h-[120px] sm:h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none p-2 sm:p-3"
              />
              <div className="flex flex-col justify-start items-start p-4 sm:ml-4 md:ml-8 gap-1 sm:gap-2">
                <p className="text-dark2 font-semibold sm:pl-0 md:pl-44 md:hidden">
                  4:00 PM
                </p>

                <p className="font-medium text-dark2 text-xs sm:text-sm">
                  2025{" "}
                  <span className="font-extrabold text-xl sm:text-2xl">.</span>{" "}
                  <span>August 29th</span>
                </p>
                <h2 className="text-dark1 text-sm sm:text-md font-bold">
                  Registration and Networking
                </h2>
                <p className="text-dark2 text-xs sm:text-sm">1st June</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
