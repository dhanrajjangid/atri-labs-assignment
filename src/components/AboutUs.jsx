import React from "react";
import "../styles/aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="image-part">
        <img
          src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0bdba0fb13cfd32fc0_about-home-restaurante-x-template-p-1080.jpeg"
          alt=""
        />
        <div className="contant-details">
          <div className="address">come visit us</div>
          <div className="address">come visit us</div>
        </div>
      </div>
      <div className="text-part">
        <div className="text-heading">About Us</div>
        <div className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
          vitae velit bibendum elementum eget non vivamus volutpat odio cras
          vestibulum purus aliquam.
        </div>
        <div className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
          sed et aliquet aliquet risus tempor semper odio egestas id pulvinar
          consectetur elit tortor non hac pellentesque lacus donec accumsan
          quisque ultricies adipiscing mauris tortor cras est eu accumsan
          mauris.
        </div>
        <div className="header-buttons">
        <button className="order"> About Us</button>
        <button className="reservate-button"> Join Our Team</button>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
