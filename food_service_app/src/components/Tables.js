import React from "react";
import "./Tables.scss";
import Table from "./Table";

let data = [
  {
    table: "1",
    seats: [
      { number: "1", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "2", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "3", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "4", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "5", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "6", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "7", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "8", ordered: ["Cheese Burger, Fries, Coke"] },
    ],
  },
  {
    table: "2",
    seats: [
      { number: "1", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "2", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "3", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "4", ordered: ["Cheese Burger, Fries, Coke"] },
    ],
  },
  {
    table: "3",
    seats: [
      { number: "1", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "2", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "3", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "4", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "5", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "6", ordered: ["Cheese Burger, Fries, Coke"] },
    ],
  },
  {
    table: "4",
    seats: [
      { number: "1", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "2", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "3", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "4", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "5", ordered: ["Cheese Burger, Fries, Coke"] },
    ],
  },
  {
    table: "5",
    seats: [
      { number: "1", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "2", ordered: ["Cheese Burger, Fries, Coke"] },
    ],
  },
  {
    table: "6",
    seats: [
      { number: "1", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "2", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "3", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "4", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "5", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "6", ordered: ["Cheese Burger, Fries, Coke"] },
      { number: "7", ordered: ["Cheese Burger, Fries, Coke"] },
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
