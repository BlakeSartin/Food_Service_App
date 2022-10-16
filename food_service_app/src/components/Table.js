import React, { useState } from "react";
import "./Tables.scss";
import { Chair, TableBar, LocalBar, LunchDining } from "@mui/icons-material";
import { Add, Remove } from "@mui/icons-material";

export default function Table({ table }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "table_container" : "expanded_table_container"}>
      <div className={isActive ? "table" : "expanded_table"}>
        <div className={!isActive ? "button_container" : null}>
          <button
            className={isActive ? "table-button" : "expanded_table_button"}
            onClick={handleToggle}
          >
            {table.table} <TableBar />
          </button>
          <div>
            <button className={isActive ? "add" : "expanded_add"}>
              <Add fontSize="smaller" />
            </button>
            <button className={isActive ? "remove" : "expanded_remove"}>
              <Remove fontSize="smaller" />
            </button>
          </div>
        </div>
        <div className={!isActive ? "food_and_drink_button_container" : null}>
          <a href="/food">
          <button className={isActive ? "food" : "expanded_food"}>
            <LunchDining fontSize="small" />
          </button>
          </a>
          <a href="/drinks">
          <button className={isActive ? "drink" : "expanded_drink"}>
            <LocalBar fontSize="small" />
          </button>
          </a>
        </div>

        {table.seats.map((seat) => (
          <>
            <button className={isActive ? "seat" : "expanded_seat"}>
              {seat.number} <Chair fontSize="small" />
            </button>
            <div>
              {seat.ordered.map((order) => (
                <h1 className={isActive ? "ordered" : "expanded_ordered"}>
                  {order}
                </h1>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
