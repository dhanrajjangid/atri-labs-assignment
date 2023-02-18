import React from "react";
import '../styles/header.css'; 

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <div className="logo">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg"
            alt=""
          />
        </div>
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Pages</li>
                <li>Cart</li>

            </ul>
        </div>
      </div>
      <div className="header-buttons">
        <button className="order"> Order Online</button>
        <button className="reservate-button"> Reservate</button>
      </div>
    </div>
  );
};

export default Header;
