import React, { useContext, useEffect } from "react";
import "./aboutstyles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="about-us">
      <div className="container" data-aos="fade-down">
        <div className="about-left">
          <div className="about-left-image">
            <img src="/assets/about-images/aboutus.png" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-right-text">
            <div className="about-header">
              <h2>Know About Flex Store!</h2>
            </div>
            <div className="about-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
            </div>
          </div>
          <div className="about-right-btn">
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
