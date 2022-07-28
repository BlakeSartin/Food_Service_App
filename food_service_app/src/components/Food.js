import React from "react";
import "./Food.scss";
import {Add, Remove} from "@mui/icons-material"

let data = [
  {
    img: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg",
    ingrediants: "Beef Patty, Cheese, Tomato, Lettuce, House Sauce",
    price: "11.99$",
    title: "Burger",
  },
  {
    img: "https://www.bensbakery.ca/sites/default/files/Lobster%20Club%20Sandwich-061.jpg",
    ingrediants: "Turkey, Sourdough, Mustard, Mayo, Tomato, Bacon",
    price: "11.99$",
    title: "Club Sandwhich",
  },
  {
    img: "https://www.the-girl-who-ate-everything.com/wp-content/uploads/2022/01/cobb-salad-34-735x919.jpg",
    ingrediants: "Lettuce, Tomato, Hard Boiled Egg, Bacon, Cheese",
    price: "11.99$",
    title: "Cobb Salad",
  },
  {
    img: "https://www.coopercheese.com/wp-content/uploads/2022/02/Nachos-Perfectly-Melty-2-624x547.jpg",
    ingrediants: "Tortilla Chips, Beef, Cheese, Olives, Peppers",
    price: "11.99$",
    title: "Nachos",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Original_Mac_n_Cheese_.jpg",
    ingrediants: "Noodle, Cheese, Milk, Bread Crumbs",
    price: "11.99$",
    title: "Mac & Cheese",
  },
  {
    img: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/27/1467923268-fried-pickles-0011.jpg",
    ingrediants: "Bread Crumbs, Pickles",
    price: "11.99$",
    title: "Fried Pickels",
  },
];

export default function Food() {
  return (
    <div className="container">
      {data.map((d) => (
        <div className="card">
          <img src={d.img} />
          <div className="text">
            <h3>{d.ingrediants}</h3>
            <h3>{d.price}</h3>
          </div>
          <h3 className="title">{d.title}</h3>
          <div className="buttons">
          <button className="minus">
          <Remove/>
          </button>
          <button className="plus">
          <Add/>
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}