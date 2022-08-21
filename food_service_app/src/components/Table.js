import React, { useState } from "react";
import "./Tables.scss";
import { Chair, TableBar } from "@mui/icons-material";

export default function Table({table}) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "table_container" : "expanded_table_container"}>
        <div className={isActive ? "table" : "expanded_table"}>
          <button
            className={isActive ? "table-button" : "expanded_table_button"}
            onClick={handleToggle}
          >
            {table.table} <TableBar />
          </button>
          {table.seats.map((seat) => (
            <>
            <button className={isActive ? "seat" : "expanded_seat"}>
              {seat.number} <Chair fontSize="small" />
            </button>
            <h1 className={isActive ? "ordered" : "expanded_ordered"}>{seat.ordered}</h1>
            </>
          ))}
        </div>
    </div>
  );
}
