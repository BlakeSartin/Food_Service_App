import React, { useState } from "react";
import "./Tables.scss"
import {Chair, TableBar} from "@mui/icons-material"

let data = [
  {
    table: "1",
    seats: ["1","2","3","4","5","6","7","8"],
  },
  {
    table: "2",
    seats: ["1","2","3","4"],
  },
  {
    table: "3",
    seats: ["1","2","3","4","5","6"],
  },
  {
    table: "4",
    seats: ["1","2","3"],
  },
  {
    table: "5",
    seats: ["1","2"],
  },
  {
    table: "6",
    seats: ["1","2","3","4","5","6","7"],
  },
]

export default function Tables() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  
  return <div className={isActive ? "table_container" : "expanded_table_container"}>

    <button onClick={handleToggle}>BUTTON</button>
    {data.map((d) => (
      <div className={isActive ? "table" : "expanded_table"}>
      <button className={isActive ? "table-button" : "expanded_table_button"} >{d.table} <TableBar/></button>
      {d.seats.map((seat) => (
        <button className={isActive ? "seat" : "expanded_seat"}>{seat} <Chair  fontSize="small"/></button>
      ))}
      </div>
    ))}
    </div>
    
}