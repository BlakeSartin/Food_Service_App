import React from "react";
import Bill from "./Bill"
import "./Bills.scss";

let data = [
  {
    bill: "1",
    seats: [
      { number: "1", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "2", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "3", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "4", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "5", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "6", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "7", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "8", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
    ],
  },
  {
    bill: "2",
    seats: [
      { number: "1", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "2", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "3", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "4", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
    ],
  },
  {
    bill: "3",
    seats: [
      { number: "1", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "2", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "3", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "4", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "5", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "6", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
    ],
  },
  {
    bill: "4",
    seats: [
      { number: "1", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "2", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "3", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "4", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "5", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
    ],
  },
  {
    bill: "5",
    seats: [
      { number: "1", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "2", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
    ],
  },
  {
    bill: "6",
    seats: [
      { number: "1", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "2", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "3", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "4", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "5", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "6", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "7", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
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
