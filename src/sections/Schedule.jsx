import React from "react";
import ScheduleImg from "../assets/Schedule.png";

const Schedule = () => {
  return (
    <section className="container mx-auto px-6 md:px-16 py-12">
      <div className="bg-primary w-[85px] h-8 rounded-sm flex items-center justify-center mb-4">
        <span className="text-primary1 p-3 font-medium text-sm">Schedule</span>
      </div>
      <div className="mb-12">
        <h1 className="text-dark1 text-2xl md:text-4xl font-semibold mb-3">
          Event Schedule
        </h1>
        <p className="text-dark2 md:text-lg max-w-6xl font-normal">
          From keynote speeches to interactive breakout sessions, we’ve curated
          an experience that’s informative, inspiring, and filled with
          opportunities to connect.
        </p>
      </div>
      {/* Schedule Section */}
      <div className="flex flex-1/2 justify-between items-center gap-1">
        {/* Time */}
        <div className="w-[422px] h-[182px] justify-center items-center mb-auto p-10">
          <h1 className="text-dark1 text-3xl font-bold pl-40">Time</h1>
          <p className="text-dark2 font-semibold pl-44">4:00</p>
          <p className="text-dark2 font-semibold pl-44">PM</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-10">
          {/* Schedule */}
          <div className="flex flex-row w-[810px] h-[170px] border-4 border-primary1 rounded-2xl justify-start items-center">
            <img
              src={ScheduleImg}
              alt="Event Schedule"
              className="w-[220px] h-[184px] object-cover justify-center items-center rounded-l-2xl pl-0.5 p-3"
            />
            <div className="flex flex-col justify-start items-start ml-8 gap-2">
              <p className="font-medium text-dark2 text-sm">
                2025 <span className="font-extrabold text-2xl">.</span>{" "}
                <span>August 29th</span>
              </p>
              <h2 className="text-dark1 text-md font-bold">
                Registration and Networking
              </h2>
              <p className="text-dark2 text-sm">1st June</p>
            </div>
          </div>
          {/* Schedule2 */}
          <div className="flex flex-row w-[810px] h-[170px] border-4 border-primary1 rounded-2xl justify-start items-center">
            <img
              src={ScheduleImg}
              alt="Event Schedule"
              className="w-[220px] h-[184px] object-cover justify-center items-center rounded-l-2xl pl-0.5 p-3"
            />
            <div className="flex flex-col justify-start items-start ml-8 gap-2">
              <p className="font-medium text-dark2 text-sm">
                2025 <span className="font-extrabold text-2xl">.</span>{" "}
                <span>August 29th</span>
              </p>
              <h2 className="text-dark1 text-md font-bold">
                Registration and Networking
              </h2>
              <p className="text-dark2 text-sm">1st June</p>
            </div>
          </div>
          {/* <div className="flex-grow w-[82px] bg-primary"></div> */}
          {/* Schedule3 */}
          <div className="flex flex-row w-[810px] h-[170px] border-4 border-primary1 rounded-2xl justify-start items-center">
            <img
              src={ScheduleImg}
              alt="Event Schedule"
              className="w-[220px] h-[184px] object-cover justify-center items-center rounded-l-2xl pl-0.5 p-3"
            />
            <div className="flex flex-col justify-start items-start ml-8 gap-2">
              <p className="font-medium text-dark2 text-sm">
                2025 <span className="font-extrabold text-2xl">.</span>{" "}
                <span>August 29th</span>
              </p>
              <h2 className="text-dark1 text-md font-bold">
                Registration and Networking
              </h2>
              <p className="text-dark2 text-sm">1st June</p>
            </div>
          </div>
          {/* Schedule4 */}
          <div className="flex flex-row w-[810px] h-[170px] border-4 border-primary1 rounded-2xl justify-start items-center">
            <img
              src={ScheduleImg}
              alt="Event Schedule"
              className="w-[220px] h-[184px] object-cover justify-center items-center rounded-l-2xl pl-0.5 p-3"
            />
            <div className="flex flex-col justify-start items-start ml-8 gap-2">
              <p className="font-medium text-dark2 text-sm">
                2025 <span className="font-extrabold text-2xl">.</span>{" "}
                <span>August 29th</span>
              </p>
              <h2 className="text-dark1 text-md font-bold">
                Registration and Networking
              </h2>
              <p className="text-dark2 text-sm">1st June</p>
            </div>
          </div>
          {/* Schedule5 */}
          <div className="flex flex-row w-[810px] h-[170px] border-4 border-primary1 rounded-2xl justify-start items-center">
            <img
              src={ScheduleImg}
              alt="Event Schedule"
              className="w-[220px] h-[184px] object-cover justify-center items-center rounded-l-2xl pl-0.5 p-3"
            />
            <div className="flex flex-col justify-start items-start ml-8 gap-2">
              <p className="font-medium text-dark2 text-sm">
                2025 <span className="font-extrabold text-2xl">.</span>{" "}
                <span>August 29th</span>
              </p>
              <h2 className="text-dark1 text-md font-bold">
                Registration and Networking
              </h2>
              <p className="text-dark2 text-sm">1st June</p>
            </div>
          </div>
          {/* Schedule6 */}
          <div className="flex flex-row w-[810px] h-[170px] border-4 border-primary1 rounded-2xl justify-start items-center">
            <img
              src={ScheduleImg}
              alt="Event Schedule"
              className="w-[220px] h-[184px] object-cover justify-center items-center rounded-l-2xl pl-0.5 p-3"
            />
            <div className="flex flex-col justify-start items-start ml-8 gap-2">
              <p className="font-medium text-dark2 text-sm">
                2025 <span className="font-extrabold text-2xl">.</span>{" "}
                <span>August 29th</span>
              </p>
              <h2 className="text-dark1 text-md font-bold">
                Registration and Networking
              </h2>
              <p className="text-dark2 text-sm">1st June</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
