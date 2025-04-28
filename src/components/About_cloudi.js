import React from "react";
import { HiBars3 } from "react-icons/hi2";

function AboutCloudi() {
  return (
    <div>
      {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center text-black dark:text-black mb-6 flex items-center justify-center">
        About{" "}
        <span
          style={{
            fontFamily: "Rostave",
            color: "black",
            display: "inline-flex",
            alignItems: "center",
            marginLeft: "8px",
          }}
        >
          <img
            src="/cloudww.png"
            alt="CLOUDI logo"
            style={{ height: "auto", width: "240px" }} // increase width as needed
          />
        </span>
      </h1> */}

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center text-black dark:text-black mb-6 flex items-center justify-center">
        <img
          src="/aboutcloudi.png"
          alt="CLOUDI logo"
          className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80" // Image width further increased for larger sizes
        />
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 pb-12 flex flex-col-reverse md:flex-row items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-lg"
              alt="hero"
              src="https://img.freepik.com/free-vector/illustration-business-people_53876-58975.jpg?t=st=1736832454~exp=1736836054~hmac=64b58b82ff4c3c1cd96a0055c23066b323e2fe54e0ac64af2622d039b5c92f98&w=740"
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900 text-left">
              We help organizations rethink their IT{" "}
              <span style={{ color: "#8bb6ac" }} className="">
                &nbsp;strategies&nbsp;
              </span>
              and plan the technologies that best fit their unique business
              requirements.
            </h3>

            <p className="mb-8 leading-relaxed text-left">
              CloudInsta24 (Cloudi) Services Private Limited is a Strategic
              Managed Services Provider (MSP) distinct for its ability to merge
              its vision & think tank with that of its clients. We strive to
              understand your business thoroughly and offer exclusively
              tailored, comprehensive, and effective strategies for business
              consulting and IT services. Dedicated to serving businesses with
              innovative and simple business solutions that nurture
              profitability and drive enterprises forward, Cloudi is backed by
              innovative projects, abundant experience, and top-notch, talented
              employees. Cloudi is an award-winning Managed IT Service Provider,
              offering complete IT services and solutions for all small to
              large-sized enterprises.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutCloudi;
