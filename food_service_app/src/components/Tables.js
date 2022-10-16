import React from "react";
import "./Tables.scss";
import Table from "./Table";

let data = [
  {
    table: "1",
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
    table: "2",
    seats: [
      { number: "1", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "2", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "3", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "4", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
    ],
  },
  {
    table: "3",
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
    table: "4",
    seats: [
      { number: "1", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "2", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "3", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "4", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "5", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
    ],
  },
  {
    table: "5",
    seats: [
      { number: "1", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
      { number: "2", ordered: ["1x Cheese Burger", "1x Fries", "1x Coke"] },
    ],
  },
  {
    table: "6",
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

export default function Tables() {
  return (
    <>
      {data.map((d) => (
        <Table  table={d} />
      ))}
    </>
  );
}
