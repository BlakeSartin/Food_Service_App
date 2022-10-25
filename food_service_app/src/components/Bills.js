import React from "react";
import Bill from "./Bill"
import "./Bills.scss";




let data = [
  {
    bill: "1",
    seats: [
      { number: "1", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "2", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "3", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "4", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "5", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "6", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "7", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "8", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
    ],
  },
  {
    bill: "2",
    seats: [
      { number: "1", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "2", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "3", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "4", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
    ],
  },
  {
    bill: "3",
    seats: [
      { number: "1", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "2", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "3", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "4", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "5", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "6", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
    ],
  },
  {
    bill: "4",
    seats: [
      { number: "1", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "2", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "3", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "4", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "5", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
    ],
  },
  {
    bill: "5",
    seats: [
      { number: "1", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "2", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
    ],
  },
  {
    bill: "6",
    seats: [
      { number: "1", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "2", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "3", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "4", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "5", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "6", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
      { number: "7", ordered: [{amount:"1", item:"Cheese Burger", price:"16.99"}, {amount:"1", item:"Fries", price:"5.99"}, {amount:"1", item:"Coke", price:"1.99"}] },
    ],
  },
];

export default function Bills() {
  return (
    <>
      {data.map((d) => (
        <Bill bill={d} />
      ))}
    </>
  );
}
