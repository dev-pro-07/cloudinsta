import React, { useState, useRef, useEffect } from "react";
import { IoMdMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

import Review from "./Review";
import IconLogo from "./logoicon";
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { PiShareNetworkFill } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import About_cloudi from "./About_cloudi";
import Lisitngs_services from "./Lisitngs_services";
import Xp from "./xp";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Footer from "./Footer";

import Why_ci from "./Why_ci";
import { useParams, useNavigate } from "react-router-dom";

function ContactPage() {
  const logos = [
    { id: 1, src: "/1plus.png", alt: "Oneplus" },
    { id: 2, src: "/315wa.png", alt: "Oneplus" },
    { id: 3, src: "/accenture.png", alt: "Oneplus" },
    { id: 4, src: "/audi.png", alt: "Oneplus" },
    { id: 5, src: "/awfis.png", alt: "Oneplus" },
    { id: 6, src: "/bajaj.png", alt: "Oneplus" },
    { id: 7, src: "/conde.png", alt: "Oneplus" },
    { id: 8, src: "/dunbrad.png", alt: "Oneplus" },
    { id: 9, src: "/husqvarna.png", alt: "Oneplus" },
    { id: 10, src: "/icici.png", alt: "Oneplus" },
    { id: 11, src: "/indiqube.png", alt: "Oneplus" },
    { id: 12, src: "/jaguar.png", alt: "Oneplus" },
    { id: 13, src: "/jwmarriott.png", alt: "Oneplus" },
    { id: 14, src: "/land_rover.png", alt: "Oneplus" },
    { id: 15, src: "/lemeri.png", alt: "Oneplus" },
    { id: 16, src: "/paytm.png", alt: "Oneplus" },
    { id: 17, src: "/samsung.png", alt: "Oneplus" },
    { id: 18, src: "/tablespace.png", alt: "Oneplus" },
    { id: 19, src: "/thehive.png", alt: "Oneplus" },
    { id: 20, src: "/urbanwork.png", alt: "Oneplus" },
    { id: 21, src: "/zerofox.png", alt: "Oneplus" },
    { id: 22, src: "/zomato.png", alt: "Oneplus" },
  ];

  const [selectedBullet, setSelectedBullet] = useState(0);
  const containerRef = useRef(null);

  const handleBulletClick = (index) => {
    setSelectedBullet(index);
  };

  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);

  const { id } = useParams(); // Get the EmployeeID from the URL
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data for the particular employee based on EmployeeID
    fetch("/employees.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employee");
        }
        return response.json();
      })
      .then((data) => {
        // Find the employee with the matching EmployeeID
        const foundEmployee = data.find((emp) => emp.EmployeeID === id);

        console.log("get zone", foundEmployee);
        if (foundEmployee) {
          setEmployee(foundEmployee);
        } else {
          setError("Employee not found");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [id]);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>
        <div
          className="min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "" }}
        >
          {/* Profile Header with Background Image */}
          <div className="h-96 relative">
            <video
              autoPlay
              loop
              muted // Ensure the video is muted for autoplay to work properly
              playsInline // Ensure the video plays inline on mobile devices
              preload="auto" // Ensure the video is preloaded for smoother playback
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
            <div className=" p-6 rounded-lg ">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-poppins font-semibold text-gray-700 pt-2">
                    {employee.FirstName} {employee.LastName}
                  </h2>
                  <p
                    className="text-lg sm:text-xl"
                    style={{ color: "#FF6B6B" }}
                  >
                    <b> {employee.designation} </b>
                  </p>
                  <p className="text-md sm:text-lg text-gray-700 font-semibold">
                    <b>Owner</b>
                  </p>

                  <div className="space-x-6 space-y-4 text-center m-4">
                    <button
                      type="button"
                      className="w-12 h-12 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
                    >
                      <IoMdMail className="text-white" />
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
                      <IoCall className="text-white" />
                    </button>

                    <button
                      type="button"
                      className="w-12 h-12 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#4caf50] hover:bg-[#4caf10] active:bg-[#4caf50]"
                    >
                      <IoLogoWhatsapp className="text-white" />
                    </button>
                  </div>

                  <div className="flex flex-col items-center">
                    {/* Combined Add to Contact and Share Buttons */}
                    <div className="flex w-full sm:w-1/2 lg:w-1/2 justify-center">
                      <button
                        type="button"
                        style={{ backgroundColor: "#FF6B6B" }}
                        className="px-5 py-3 inline-flex items-center justify-center rounded-lg text-white text-sm sm:text-base lg:text-lg tracking-wider font-semibold border-none outline-none bg-black hover:bg-green-500 active:bg-green-600 w-full sm:w-1/2 lg:w-1/2"
                        onClick={() => downloadVCard(employee)} // Call the function when clicked
                      >
                        <IoMdContact className="text-white font-bold text-2xl mr-2" />
                        Add to Contact
                      </button>
                      <button
                        type="button"
                        className="px-5 py-3 inline-flex items-center justify-center rounded-lg text-white text-sm sm:text-base lg:text-lg tracking-wider font-semibold border-none outline-none bg-black hover:bg-green-500 active:bg-green-600 w-full sm:w-1/2 lg:w-1/2"
                      >
                        <PiShareNetworkFill
                          className=" font-bold text-2xl mr-2"
                          style={{ color: "#FF6B6B" }}
                        />
                        Share
                      </button>
                    </div>

                    {/* Website Button */}
                    <button
                      type="button"
                      className="px-5 py-3 inline-flex items-center justify-center rounded-lg text-white text-sm sm:text-base lg:text-lg tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black w-full sm:w-1/2 lg:w-1/2 mt-2"
                    >
                      <RiGlobalLine
                        className=" font-bold text-2xl mr-2"
                        style={{ color: "#FF6B6B" }}
                      />
                      Website
                    </button>
                  </div>

                  <div className="flex justify-center items-center my-24">
                    <div className="relative w-full max-w-md">
                      <hr className="border-t-2 border-gray-300 " />
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-white px-2 py-1 rounded-full">
                        <span className="spinner-6 block w-8 h-8 rounded-full bg-black animate-ping"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <About_cloudi />
                <Review />

                <br></br>
                <div className="flex items-center justify-center my-4">
                  <hr className="flex-grow border-t-2 border-gray-300" />
                  <IoMdContact
                    className="mx-4   text-3xl"
                    style={{ color: "#FF6B6B" }}
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
                        style={{ backgroundColor: "#FF6B6B" }}
                        class="  rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500 mb-8"
                      >
                        <div class="lg:min-h-[100px]">
                          <img
                            src="https://img.freepik.com/free-vector/floral-profile-picture-template_742173-4427.jpg?t=st=1736757974~exp=1736761574~hmac=76251e2ce210eb20b8784b8bf13c07a8c6d4c2dbbbb4e35f0d78974b6f1a1154&w=740"
                            class="w-full  h-64 rounded-lg inline-block"
                          />
                        </div>

                        <div class="mt-6">
                          <h4 class="text-white text-lg font-bold">Eva John</h4>
                          <p class="text-sm text-black mt-1">
                            Software Engineer
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
                          {employee.about}
                        </h5>
                      </div>
                    </div>
                  </section>
                </div>

                <Lisitngs_services />

                <Why_ci />

                {/* <div className="space-y-8 lg:w-3/4 mx-auto mt-12">
                  <div className="relative pt-12 pb-8">
                    <div className="flex items-center justify-center text-center space-x-4">
                      <h2 className="text-4xl font-poppins font-semibold text-gray-700">
                        Connect With Me
                      </h2>
                    </div>

                  
                    <div className="flex flex-wrap items-center justify-center mt-8 space-x-6">
                      <button
                        type="button"
                        className="px-8 py-3 text-lg bg-[#FF6B6B] text-white rounded-lg"
                      >
                        <MdEmail className="text-white text-2xl" />
                        <span className="ml-2">Email</span>
                      </button>
                      <button
                        type="button"
                        className="px-8 py-3 text-lg bg-[#003366] text-white rounded-lg"
                      >
                        <IoLocationSharp className="text-white text-2xl" />
                        <span className="ml-2">Location</span>
                      </button>
                      <button
                        type="button"
                        className="px-8 py-3 text-lg bg-[#00C300] text-white rounded-lg"
                      >
                        <IoMdMail className="text-white text-2xl" />
                        <span className="ml-2">Mail</span>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ContactPage;
