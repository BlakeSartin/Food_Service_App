import React, { useState } from "react";
import "./Tables.scss";
import { Chair, TableBar } from "@mui/icons-material";

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
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "table_container" : "expanded_table_container"}>
      {data.map((d) => (
        <div className={isActive ? "table" : "expanded_table"}>
          <button
            className={isActive ? "table-button" : "expanded_table_button"}
            onClick={handleToggle}
          >
            {d.table} <TableBar />
          </button>
          {d.seats.map((seat) => (
            <>
            <button className={isActive ? "seat" : "expanded_seat"}>
              {seat.number} <Chair fontSize="small" />
            </button>
            <h1 className={isActive ? null : "ordered"}>{seat.ordered}</h1>
            </>
          ))}
        </div>
      ))}
    </div>
  );
}
