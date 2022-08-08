import React from "react";
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

export default function Tables({tableOpen, setTableOpen}) {

  return <div className={"table-container" + (tableOpen && "active")}>
    {data.map((d) => (
      <div className="table">
      <button className="table-button" onClick={() => setTableOpen(!tableOpen)}>{d.table} <TableBar/></button>
      {d.seats.map((seat) => (
        <button className="seat">{seat} <Chair  fontSize="small"/></button>
      ))}
      </div>
    ))}
    </div>
}