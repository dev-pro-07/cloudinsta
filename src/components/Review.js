import React, { useEffect } from "react";
import { TiDocumentText } from "react-icons/ti";

const Review = () => {
  useEffect(() => {
    // Dynamically load the Clutch widget script
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    script.defer = true; // Use defer to prevent blocking HTML parsing
    script.onload = () => {
      // Initialize the widget after the script is loaded
      if (window.Clutch) {
        window.Clutch.render();
      }
    };
    script.onerror = () => {
      console.error("Failed to load Clutch widget script");
    };

    // Append the script to the body
    document.body.appendChild(script);

    return () => {
      // Optionally, leave the script in the body to avoid repeated loading
      // document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <br />
      {/* Divider and Icon */}
      <div className="flex items-center justify-center my-4 px-4 sm:px-8">
        <hr className="flex-grow border-t-2 border-gray-300" />
        <TiDocumentText
          className="mx-4  text-3xl sm:text-4xl"
          style={{ color: "#8bb6ac" }}
        />
        <hr className="flex-grow border-t-2 border-gray-300" />
      </div>
      <br />

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center text-black dark:text-black">
        Testimonials
      </h1>

      <br />

      {/* Clutch Widget */}
      {/* <div
        className="clutch-widget mx-auto"
        data-url="https://widget.clutch.co"
        data-widget-type="12"
        data-height="375"
        data-nofollow="true"
        data-expandifr="true"
        data-scale="100"
        data-reviews="313560,313239,313167,312950,312935,312914,312858,312477,312450,312214,311805,311068"
        data-clutchcompany-id="2343034"
      ></div> */}
      <iframe
        title="Clutch Widget"
        src="https://widget.clutch.co/widgets/get/12?ref_domain=cloudi-infra.com&uid=2343034&rel_nofollow=true&reviews=313560%2C313239%2C313167%2C312950%2C312935%2C312914%2C312858%2C312477%2C312450%2C312214%2C311805%2C311068&ref_path=/"
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="yes"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Review;
