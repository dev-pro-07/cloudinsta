import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiBars3 } from "react-icons/hi2";
import { IoMdCall } from "react-icons/io";
import { IoMdMail, IoLogoWhatsapp, IoMdContact } from "react-icons/io";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { PiShareNetworkFill } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import About_cloudi from "./About_cloudi";
import Review from "./Review";
import Lisitngs_services from "./Lisitngs_services";
import Why_ci from "./Why_ci";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function ContactPage() {
  const { employee_id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Cloudi Infra",
          text: "Check out this amazing service!",
          url: "https://cloudi-infra.com/", // Replace with your actual URL
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Your browser does not support the Web Share API");
    }
  };

  useEffect(() => {
    // Fetch employee details from API based on the Employee ID
    axios
      .get(`http://3.110.170.126:5000/employee/cloudinsta/${employee_id}`)
      .then((response) => {
        setEmployee(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(
          err.response
            ? err.response.data.error
            : "Error fetching employee details"
        );
        setLoading(false);
      });
  }, [employee_id]);

  const generateVCard = (contact) => {
    const { FirstName, LastName, phone } = contact;
    return `BEGIN:VCARD
VERSION:3.0
FN:${FirstName} ${LastName}
TEL:${phone}
END:VCARD`;
  };

  const downloadVCard = (contact) => {
    const vCardData = generateVCard(contact);
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${contact.FirstName}_${contact.LastName}.vcf`; // Save file as <FirstName>_<LastName>.vcf
    link.click();
    URL.revokeObjectURL(url); // Clean up the URL object after download
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="min-h-screen bg-cover bg-center">
        {/* Profile Header with Background Image */}
        <div className="h-96 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          >
            <source src="/cl.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Profile Photo */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img
              src="https://img.freepik.com/free-vector/floral-profile-picture-template_742173-4427.jpg?t=st=1736757974~exp=1736761574~hmac=76251e2ce210eb20b8784b8bf13c07a8c6d4c2dbbbb4e35f0d78974b6f1a1154&w=740"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              style={{
                transform: "translateY(50%)",
              }}
            />
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-lg">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-poppins font-semibold text-gray-700 pt-2">
                  {employee.FirstName} {employee.LastName}
                </h2>
                <p className="text-lg sm:text-xl" style={{ color: "#8bb6ac" }}>
                  <b>{employee.designation}</b>
                </p>
                <div className="space-x-6 space-y-4 text-center m-4">
                  <button
                    type="button"
                    className="w-12 h-12 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
                  >
                    <a
                      href={`mailto:${employee.EmailID}`}
                      className="text-white"
                    >
                      <IoMdMail className="text-white" />
                    </a>
                  </button>

                  <button
                    type="button"
                    className="w-12 h-12 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
                  >
                    <FaLinkedinIn className="text-white" />
                  </button>

                  <button
                    type="button"
                    className="w-12 h-12 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#ea0065] hover:bg-[#ea0065d6] active:bg-[#ea0065]"
                  >
                    <a href={`tel:${employee.phone}`} className="text-white">
                      <IoMdCall className="text-white" />
                    </a>
                  </button>

                  <button
                    type="button"
                    className="w-12 h-12 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#4caf50] hover:bg-[#4caf10] active:bg-[#4caf50]"
                  >
                    <a
                      href={`https://wa.me/${employee.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoWhatsapp className="text-white" />
                    </a>
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  {/* Combined Add to Contact and Share Buttons */}
                  <div className="flex w-full sm:w-1/2 lg:w-1/2 justify-center">
                    <button
                      type="button"
                      style={{ backgroundColor: "#8bb6ac" }}
                      className="px-5 py-3 inline-flex items-center justify-center rounded-lg text-white text-sm sm:text-base lg:text-lg tracking-wider font-semibold border-none outline-none bg-black hover:bg-green-500 active:bg-green-600 w-full sm:w-1/2 lg:w-1/2"
                      onClick={() => downloadVCard(employee)}
                    >
                      <IoMdContact className="text-white font-bold text-2xl mr-2" />
                      Add to Contact
                    </button>
                    <button
                      type="button"
                      className="px-5 py-3 inline-flex items-center justify-center rounded-lg text-white text-sm sm:text-base lg:text-lg tracking-wider font-semibold border-none outline-none bg-black hover:bg-green-500 active:bg-green-600 w-full sm:w-1/2 lg:w-1/2"
                      onClick={() => handleShare()}
                    >
                      <PiShareNetworkFill
                        className="font-bold text-2xl mr-2"
                        style={{ color: "#8bb6ac" }}
                      />
                      Share
                    </button>
                  </div>
                </div>

                <a
                  href="https://cloudi-infra.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="px-5 py-3 inline-flex items-center justify-center rounded-lg text-white text-sm sm:text-base lg:text-lg tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black w-full sm:w-1/2 lg:w-1/2 mt-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <RiGlobalLine
                      className="font-bold text-2xl mr-2"
                      style={{ color: "#8bb6ac" }}
                    />
                    Website
                  </button>
                </a>

                <div className="flex justify-center items-center my-24">
                  <div className="relative w-full max-w-md">
                    <hr className="border-t-2 border-gray-300 " />
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-white px-2 py-1 rounded-full">
                      <span className="spinner-6 block w-8 h-8 rounded-full bg-black animate-ping"></span>
                    </div>
                  </div>
                </div>
              </div>

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
                        and plan the technologies that best fit their unique
                        business requirements.
                      </h3>

                      <p className="mb-8 leading-relaxed text-left">
                        CloudInsta24 (Cloudi) Services Private Limited is a
                        Strategic Managed Services Provider (MSP) distinct for
                        its ability to merge its vision & think tank with that
                        of its clients. We strive to understand your business
                        thoroughly and offer exclusively tailored,
                        comprehensive, and effective strategies for business
                        consulting and IT services. Dedicated to serving
                        businesses with innovative and simple business solutions
                        that nurture profitability and drive enterprises
                        forward, Cloudi is backed by innovative projects,
                        abundant experience, and top-notch, talented employees.
                        Cloudi is an award-winning Managed IT Service Provider,
                        offering complete IT services and solutions for all
                        small to large-sized enterprises.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <Review />

              <div className="flex items-center justify-center my-4">
                <hr className="flex-grow border-t-2 border-gray-300" />
                <IoMdContact
                  className="mx-4   text-3xl"
                  style={{ color: "#8bb6ac" }}
                />
                <hr className="flex-grow border-t-2 border-gray-300" />
              </div>
              <br></br>
              <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight   text-center">
                About{" "}
                <span class=" " style={{ color: "#FF6B6B" }}>
                  <span></span>
                </span>
              </h1>

              <div>
                <br></br>

                <section class="text-gray-600 body-font  text-center ">
                  <div class="bg-gray-50  container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    {/* frrr */}

                    <div
                      style={{ backgroundColor: "#8bb6ac" }}
                      class="  rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500 mb-8"
                    >
                      <div class="lg:min-h-[100px]">
                        <img
                          src="https://img.freepik.com/free-vector/floral-profile-picture-template_742173-4427.jpg?t=st=1736757974~exp=1736761574~hmac=76251e2ce210eb20b8784b8bf13c07a8c6d4c2dbbbb4e35f0d78974b6f1a1154&w=740"
                          class="w-full  h-64 rounded-lg inline-block"
                        />
                      </div>

                      <div class="mt-6">
                        <h4 class="text-white text-lg font-bold">
                          {" "}
                          {employee.FirstName} {employee.LastName}
                        </h4>
                        <p class="text-sm text-black mt-1">
                          {employee.designation}
                        </p>

                        <div class="space-x-4 mt-6">
                          <button
                            type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-black hover:bg-gray-200"
                          >
                            <IoMdMail className="text-white" />
                          </button>
                          <button
                            type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-black hover:bg-gray-200"
                          >
                            <FaLinkedinIn className="text-white" />
                          </button>
                          <button
                            type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-black hover:bg-gray-200"
                          >
                            <IoLogoWhatsapp className="text-white" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h5 class="mb-8 leading-relaxed  text-left text-lg">
                        {employee.About}
                      </h5>
                    </div>
                  </div>
                </section>
              </div>
              <Lisitngs_services />
              <Why_ci />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage;
