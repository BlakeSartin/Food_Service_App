import "./Table_Menu.scss"

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
export default function Table_Menu() {
  <div className="table_menu">
  {data.map((d) => (
     <div className="expanded_table">
     <button className="expanded_table_button">{d.table}<TableBar/></button>
     {d.seats.map((seat) => (
      <button className="expanded_chair_button">{seat}<Chair/></button>
     ))}
     </div>
  ))}
  </div>
}