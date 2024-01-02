import React, { useEffect } from "react";
import "./contactstyles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Section2() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="contact">
      <div className="container" data-aos="fade-down">
        <div className="contact-section2-left">
          <div className="contact-header">
            <h2>Information About Us</h2>
          </div>
          <div className="contact-details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
          </div>
          <div className="contact-icons">
            <div className="icon icon1"></div>
            <div className="icon icon2"></div>
            <div className="icon icon3"></div>
          </div>
        </div>
        <div className="contact-section2-right">
          <div className="contact-header">
            <h2>Contact Way</h2>
          </div>
          <div className="contact-details">
            <div className="contact-items-top">
              <div className="contact-items-top left">
                <div className="icon-right icon1"></div>
                <div className="box-details">
                  <p>Tel: 08181347934</p>
                  <p>Email: oluwaniyiropo11@gmail.com</p>
                </div>
              </div>
              <div className="contact-items-top right">
                <div className="icon-right icon2"></div>
                <div className="box-details">
                  <p>Support Form</p>
                  <p>Over 24hrs</p>
                </div>
              </div>
            </div>
            <div className="contact-items-bottom">
              <div className="contact-items-bottom left">
                <div className="icon-right icon3"></div>
                <div className="box-details">
                  <p>Railway Compound Ebute-Metta</p>
                  <p>West, Lagos, Nigeria.</p>
                </div>
              </div>
              <div className="contact-items-bottom right">
                <div className="icon-right icon4"></div>
                <div className="box-details">
                  <p>Free Standard Shipping</p>
                  <p>on all orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
