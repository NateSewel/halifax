import React, { useRef, useEffect, useState } from "react";
import ScheduleImg from "../assets/Schedule.png";

const Schedule = () => {
  const scheduleItemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = scheduleItemsRef.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -40% 0px",
      }
    );

    const currentItems = scheduleItemsRef.current;
    currentItems.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      currentItems.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const scheduleData = [
    {
      time: "4:00 PM",
      title: "Registration and Networking",
      description: "1st September",
    },
    {
      time: "4:30 PM",
      title: "Welcome Address",
      description: "Host",
    },
    {
      time: "5:00 PM",
      title: "Keynote Address",
      description: "Halifax",
    },
    {
      time: "6:00 PM",
      title: "C-Suite Panel Session",
      description: "Host",
    },
    {
      time: "7:00 PM",
      title: "Networking Break",
      description: "Host",
    },
    {
      time: "7:30 PM",
      title: "C-Suite Panel Session 2",
      description: "Host",
    },
  ];

  return (
    <section className="container mx-auto sm:px-6 md:px-16 py-8 sm:py-12">
      <div className="bg-primary w-[85px] h-8 rounded-sm flex items-center justify-center mb-4">
        <span className="text-primary1 p-3 font-medium text-sm dark:text-text">
          Schedule
        </span>
      </div>
      <div className="mb-8 sm:mb-12">
        <h1 className="text-dark1 text-xl sm:text-2xl md:text-4xl font-semibold mb-3 dark:text-text">
          Event Schedule
        </h1>
        <p className="text-dark2 text-sm sm:text-base md:text-lg max-w-6xl font-normal dark:text-text">
          From keynote speeches to interactive breakout sessions, we've curated
          an experience that's informative, inspiring, and filled with
          opportunities to connect.
        </p>
      </div>

      {/* Schedule Section */}
      <div className="flex flex-col md:ml-8 md:mb-20 md:space-x-20 justify-center sm:flex-row gap-8 sm:gap-12">
        {" "}
        {/* Increased gap */}
        {/* Time Column - Hidden on mobile, shown on sm+ */}
        <div className="hidden sm:block w-full sm:w-[120px] md:w-[150px] lg:w-[180px] h-auto sticky top-24 self-start">
          <h1 className="text-dark1 text-xl sm:text-2xl md:text-3xl font-bold mb-6 dark:text-text">
            Time
          </h1>
          <div className="relative h-[400px]">
            <div
              className={`absolute transition-all duration-300 ${
                activeIndex === 0
                  ? "text-primary1 font-bold dark:text-text"
                  : "text-dark2 font-semibold dark:text-text"
              }`}
            >
              {scheduleData[0].time.split(" ")[0]}
              <br />
              {scheduleData[0].time.split(" ")[1]}
            </div>
            {scheduleData.slice(1).map((_, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-300 ${
                  activeIndex === index + 1
                    ? "text-primary1 font-bold"
                    : "text-dark2 font-semibold dark:text-text"
                }`}
                style={{ top: `${(index + 1) * 80}px` }}
              >
                {scheduleData[index + 1].time.split(" ")[0]}
                <br />
                {scheduleData[index + 1].time.split(" ")[1]}
              </div>
            ))}
          </div>
        </div>
        {/* Schedule Items Column */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 w-full">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (scheduleItemsRef.current[index] = el)}
              className="bg-neutral4 flex flex-col sm:flex-row w-full sm:w-auto sm:max-w-[810px] h-auto sm:h-[170px] border-1 sm:border-1 border-primary1 rounded-2xl dark:border-neutral"
            >
              <img
                src={ScheduleImg}
                alt="Event Schedule"
                className="w-full sm:w-[120px] md:w-[220px] h-[120px] sm:h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none p-2 sm:p-3"
              />
              <div className="flex flex-col justify-start items-start p-4 sm:ml-4 md:ml-8 gap-1 sm:gap-2">
                <p className="text-dark2 font-semibold sm:pl-0 md:pl-44 md:hidden dark:text-text">
                  {item.time}
                </p>

                <p className="font-medium text-dark2 text-xs sm:text-sm dark:text-text">
                  2025{" "}
                  <span className="font-extrabold text-xl sm:text-2xl">.</span>{" "}
                  <span>September 1st</span>
                </p>
                <h2 className="text-dark1 text-sm sm:text-md font-bold dark:text-text">
                  {item.title}
                </h2>
                <p className="text-dark2 text-xs sm:text-sm dark:text-text">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
