import React from "react";
import "../styles/menuItems.css";

const MenuItems = () => {
  function createData(imgage, title, text, price) {
    return { imgage, title, text, price };
  }

  const rows = [
    createData(
      "https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg",
      "50",
      "Breakfast",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
    ),
    createData(
      "https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg",
      "50",
      "Breakfast",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
    ),
    createData(
      "https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg",
      "50",
      "Breakfast",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
    ),
    createData(
      "https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg",
      "50",
      "Breakfast",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
    ),
  ];
  return (
    <div className="menu-items">
      <div className="heading">Browse Our Menu</div>
      <div className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
        vitae velit bibendum elementum.
      </div>
      <div className="item-cards">
        <div className="cards">
          {rows.map((row) => (
            <div className="card-details">
              <img
                src="https://atri-apps.github.io/restaurant_website/app-assets/616dca333c0bd679a77bec56_classic-burger-restaurante-x-template-p-500.jpeg"
                alt=""
              />
              <div className="title">Classic Burger</div>
              <div className="description">
                Lorem ipsum dolor sit amet dolor consectetur adipiscing elit
              </div>
            </div>
          ))}
        </div>
        <div className="cards">
        {rows.map((row) => (
            <div className="card-details">
              <img
                src="https://atri-apps.github.io/restaurant_website/app-assets/616dca333c0bd679a77bec56_classic-burger-restaurante-x-template-p-500.jpeg"
                alt=""
              />
              <div className="title">Classic Burger</div>
              <div className="description">
                Lorem ipsum dolor sit amet dolor consectetur adipiscing elit
              </div>
            </div>
          ))}
        </div>
        <div className="header-buttons" style={{justifyContent: "center"}}>
          <button className="order"> Order Online</button>
          <button className="reservate-button"> Book A Table</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
