import React from "react";
import { MdPsychology } from "react-icons/md";
function WhyCI() {
  return (
    <div>
      <br></br> <br></br>
      <div className="flex items-center justify-center my-4 px-4 sm:px-8">
        <hr className="flex-grow border-t-2 border-gray-300" />
        <MdPsychology
          className="mx-4  text-3xl sm:text-4xl"
          style={{ color: "#8bb6ac" }}
        />
        <hr className="flex-grow border-t-2 border-gray-300" />
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl  text-center lg:text-6xl font-extrabold leading-tight text-black dark:text-black pt-4">
        Why customer choose <span style={{ color: "#8bb6ac" }}>Cloudi?</span>
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-1 py-6 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            {/* Image Section */}
            <div className="lg:w-3/8 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
              <img
                className="w-full h-full object-contain rounded-lg"
                src="/backchaq.webp"
                alt="step"
              />
            </div>

            {/* Steps Section */}
            <div className="lg:w-5/8 md:w-1/2 md:pl-10 md:py-6">
              {/* Step 1 */}
              <div className="flex relative  pt-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full   inline-flex items-center justify-center text-white relative z-10">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src="/bulb.png"
                    alt="step"
                  />
                </div>

                <div className="flex-grow pl-4">
                  <h2 className="font-sans text-2xl sm:text-1xl text-xl text-gray-600  tracking-wide  ">
                    <b>We believe in using technology for good.</b>
                  </h2>

                  <p className="leading-relaxed text-gray-700 mt-2  px-6 sm:px-8 md:px-10   rounded-lg ">
                    As a leading Strategic Managed Service Provider (MSP) for
                    ICT services, we have provided leading-edge technology to
                    grow and enhance our client's systems security and enable
                    their growth.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex relative  ">
                <div className="flex-shrink-0 w-10 h-10 rounded-full   inline-flex items-center justify-center text-white relative z-10">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src="/arrow.png"
                    alt="step"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-sans text-2xl sm:text-1xl text-xl text-gray-600  tracking-wide mt-2 ">
                    <b>We believe in using technology for good.</b>
                  </h2>

                  <p className="leading-relaxed text-gray-700 mt-2  px-6 sm:px-8 md:px-10   rounded-lg ">
                    As a leading Strategic Managed Service Provider (MSP) for
                    ICT services, we have provided leading-edge technology to
                    grow and enhance our client's systems security and enable
                    their growth.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex relative  ">
                <div className="flex-shrink-0 w-10 h-10 rounded-full   inline-flex items-center justify-center text-white relative z-10">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src="/nk.png"
                    alt="step"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-sans text-2xl sm:text-1xl text-xl text-gray-600  tracking-wide mt-2   ">
                    <b>We believe in using technology for good.</b>
                  </h2>

                  <p className="leading-relaxed text-gray-700 mt-2  px-6 sm:px-8 md:px-10   rounded-lg ">
                    As a leading Strategic Managed Service Provider (MSP) for
                    ICT services, we have provided leading-edge technology to
                    grow and enhance our client's systems security and enable
                    their growth.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex relative  ">
                <div className="flex-shrink-0 w-10 h-10 rounded-full   inline-flex items-center justify-center text-white relative z-10">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src="/conn.png"
                    alt="step"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-sans text-2xl sm:text-1xl text-xl text-gray-600  tracking-wide mt-2  ">
                    <b>We believe in using technology for good.</b>
                  </h2>

                  <p className="leading-relaxed text-gray-700 mt-2  px-6 sm:px-8 md:px-10   rounded-lg ">
                    As a leading Strategic Managed Service Provider (MSP) for
                    ICT services, we have provided leading-edge technology to
                    grow and enhance our client's systems security and enable
                    their growth.
                  </p>
                </div>
              </div>

              {/* Finish Step */}
              <div className="flex relative    ">
                <div className="flex-shrink-0 w-10 h-10 rounded-full   inline-flex items-center justify-center text-white relative z-10">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src="/stat.png"
                    alt="step"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-sans text-2xl sm:text-1xl text-xl text-gray-600  tracking-wide mt-2  ">
                    <b>We believe in using technology for good.</b>
                  </h2>

                  <p className="leading-relaxed text-gray-700 mt-2  px-6 sm:px-8 md:px-10   rounded-lg ">
                    As a leading Strategic Managed Service Provider (MSP) for
                    ICT services, we have provided leading-edge technology to
                    grow and enhance our client's systems security and enable
                    their growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyCI;
