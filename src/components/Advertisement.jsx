import React from "react";
import "../styles/advertisement.css";

const Advertisement = () => {
  return (
    <div className="advertisement">
      <div className="text-part-advertisement">
        <div className="heading">
          Taste the most delicious burger in Los Angeles, CA
        </div>
        <div className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
          vitae velit bibendum elementum. Order online
        </div>
        <div className="header-buttons">
        <button className="order"> Order Online</button>
        <button className="reservate-button"> Reservate</button>
      </div>
      </div>
      <div className="image-part-advertisement">
        <img src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c364b456b93fb50d6d_cta-restaurante-x-template.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Advertisement;
