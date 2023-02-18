import React from "react";
import "../styles/bestPlace.css";

const BestPlace = () => {
  return (
    <>
      <div className="best-place">
        <div className="best-place-text">
          <div className="heading">
            <p>The best place to</p>
            <p style={{ color: "#FF7629" }}>eat burgers in LA.</p>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
              diam vitae velit bibendum elementum eget non vivamus volutpat odio
              cras vestibulum purus aliquam.
            </p>
          </div>

          <div className="header-buttons">
            <button className="reservate-button">Reserevate</button>
            <button className="order">Order Online</button>
          </div>
        </div>
        <div className="best-place-image">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="app-list">
        <div className="app-list-text">Order from your favorite app today!</div>
        <div className="app-images">
          <div className="app-images">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b63b4ee3fe71f5072_logo-doorash-restaurante-x-template.svg"
              alt=""
            />
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0bded3b95d9731ecc4_logo-postmates-restaurante-x-template.svg"
              alt=""
            />
          
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b326163db6497f05b_logo-rappi-restaurante-x-template.svg"
              alt=""
            />
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b5b82ce962fe1736b_logo-grubhub-restaurante-x-template.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestPlace;
