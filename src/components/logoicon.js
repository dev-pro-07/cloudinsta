import React, { useState, useRef, useEffect } from "react";
import { MdRateReview } from "react-icons/md";

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

function CompanyLogos() {
  const [selectedBullet, setSelectedBullet] = useState(0);
  const containerRef = useRef(null);

  const handleBulletClick = (index) => {
    setSelectedBullet(index);
  };

  // Scroll to the top on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // This will scroll the page to the top
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  useEffect(() => {
    if (containerRef.current) {
      const logoElements = containerRef.current.children;
      const selectedLogo = logoElements[selectedBullet];

      // Ensure the scroll happens when a logo is selected
      if (selectedLogo) {
        selectedLogo.scrollIntoView({
          behavior: "smooth",
          block: "center", // Center vertically
          inline: "center", // Center horizontally
        });
      }
    }
  }, [selectedBullet]);

  return (
    <>
      <div className="flex items-center justify-center my-4">
        <hr className="flex-grow border-t-2 border-gray-300" />
        <MdRateReview style={{ color: "#FF6B6B" }} className="mx-4 text-2xl" />
        <hr className="flex-grow border-t-2 border-gray-300" />
      </div>
      <div className="overflow-hidden p-8 bg-white">
        <h1
          style={{ color: "#4169e1" }}
          className="text-3xl font-bold text-center mb-6"
        >
          Customer
        </h1>

        <div className="marquee-wrapper overflow-hidden relative">
          <div
            className="animate-marquee flex space-x-4"
            ref={containerRef}
            style={{ display: "flex", flexWrap: "nowrap" }}
          >
            {logos.map((logo, index) => (
              <div
                key={logo.id}
                className={`flex items-center justify-center w-80 h-48 m-2 p-4 rounded-lg
                border-l-4 border-l-gray-100 border-r-4 border-r-gray-100
                border-b-4 border-b-gray-100`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {logos.map((logo, index) => (
            <button
              key={logo.id}
              onClick={() => handleBulletClick(index)}
              className={`w-3 h-3 rounded-full ${
                selectedBullet === index ? "bg-gray-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CompanyLogos;
