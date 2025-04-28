import React from "react";
import { FaTools } from "react-icons/fa";

function Lisitngs_services() {
  return (
    <>
      <br></br>
      <div>
        <div className="flex items-center justify-center my-4  text-center">
          <hr className="flex-grow border-t-2 border-gray-300" />
          <FaTools style={{ color: " #8bb6ac" }} className="mx-4   text-xl" />
          <hr className="flex-grow border-t-2 border-gray-300" />
        </div>
        <br />
        <h1 className="text-3xl sm:text-4xl  text-center md:text-5xl lg:text-6xl font-extrabold leading-tight text-black dark:text-black">
          Our Services
        </h1>
        <br></br>

        <div className="flex flex-wrap justify-center gap-2 mt-6  text-center">
          {/* Card 1 */}
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-96 md:w-96 lg:w-96 overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <img
                src="/a1.png"
                className="w-full h-[255px] object-contain"
                alt="Listing 1"
              />
            </div>
            <div className="p-6  ">
              <h3 className="text-gray-800 text-2xl font-bold">
                Cloudi- <br></br>the way to Cloud
              </h3>

              <button
                type="button"
                style={{ backgroundColor: "#8bb6ac" }}
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider border-none outline-none    "
              >
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-96 md:w-96 lg:w-96 overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <img
                src="/a2.png"
                className="w-full h-[255px] object-contain"
                alt="Listing 1"
              />
            </div>
            <div className="p-6  ">
              <h3 className="text-gray-800 text-2xl font-bold">
                Stronger Defences Requires <br></br>Actionable Information
              </h3>

              <button
                type="button"
                style={{ backgroundColor: " #8bb6ac" }}
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider border-none outline-none    "
              >
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-96 md:w-96 lg:w-96 overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <img
                src="/a3.png"
                className="w-full h-[255px] object-contain"
                alt="Listing 1"
              />
            </div>
            <div className="p-6  ">
              <h3 className="text-gray-800 text-2xl font-bold">
                Future-Ready Data <br></br>Centres awaits you
              </h3>

              <button
                type="button"
                style={{ backgroundColor: " #8bb6ac" }}
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider border-none outline-none    "
              >
                Read More
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-96 md:w-96 lg:w-96 overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <img
                src="/a4.png"
                className="w-full h-[255px] object-contain"
                alt="Listing 1"
              />
            </div>
            <div className="p-6  ">
              <h3 className="text-gray-800 text-2xl font-bold">
                Innovate. Transform. <br></br>Grow
              </h3>

              <button
                type="button"
                style={{ backgroundColor: " #8bb6ac" }}
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider border-none outline-none    "
              >
                Read More
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-96 md:w-96 lg:w-96 overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <img
                src="/a5.png"
                className="w-full h-[255px] object-contain"
                alt="Listing 1"
              />
            </div>

            <div className="p-6  ">
              <h3 className="text-gray-800 text-2xl font-bold">
                Innovate. Accelerate. <br></br>Simplify
              </h3>

              <button
                type="button"
                style={{ backgroundColor: " #8bb6ac" }}
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider border-none outline-none    "
              >
                Read More
              </button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-96 md:w-96 lg:w-96 overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <img
                src="/a6.png"
                className="w-full h-[255px] object-contain"
                alt="Listing 1"
              />
            </div>
            <div className="p-6  ">
              <h3 className="text-gray-800 text-2xl font-bold">
                Cloudi Your Partner<br></br>For a Smarter IT
              </h3>

              <button
                type="button"
                style={{ backgroundColor: " #8bb6ac" }}
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider border-none outline-none    "
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br> <br></br>
    </>
  );
}

export default Lisitngs_services;
