import React from "react";
import "../styles/browseMenu.css";

const BrowseMenu = () => {
  function createData(imgage, title, text) {
    return { imgage, title, text };
  }

  const rows = [
    createData(
      "https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg",
      "Breakfast",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
    ),
    createData(
      "https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg",
      "Breakfast",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
    ),
    createData(
        "https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg",
        "Breakfast",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      ),
      createData(
        "https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg",
        "Breakfast",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      ),
  ];

  return (
    <div className="browse-menu">
      <div className="heading">Browse Our Menu</div>
      <div class="menu-cards">
        
          {rows.map((row) => (
            <div class="card">
              <img
                src="https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg"
                alt="No preview available"
              />
              <div class="title">Breakfast</div>
              <div class="description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
                diam
              </div>
              <a href="" class="p-Home TextBox12 bpt">
                Explore Menu
              </a>
            </div>
          ))}
      </div>
      <div className="header-buttons">
        <button className="order"> Order Online</button>
        <button className="reservate-button"> Reservate</button>
      </div>
    </div>
  );
};

export default BrowseMenu;
