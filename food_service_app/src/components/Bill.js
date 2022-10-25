import React, { useState } from "react";
import "./Bills.scss";
import { Chair, TableBar, LocalBar, LunchDining } from "@mui/icons-material";

export default function Bill({ bill }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
console.log(bill.seats[1].ordered[1].price)

  return (
    <div className="bill_container">
      <div className="bill">
          <button
            className="bill_button"
            onClick={handleToggle}
          >
            {bill.bill} <TableBar />
          </button>
      </div>
      {bill.seats.map((seat) => (
        <div className="bill_seat_container">
          <button className={isActive ? "bill_seat" : "expanded_bill_seat"}>
            {seat.number} <Chair />
          </button>
          <div>
            {seat.ordered.map((order) => (
              <h1 className={isActive ? "bill_ordered" : "expanded_bill_ordered"}>
                {order.ammount}x {order.item} {order.price}
              </h1>
            ))}
          </div>
          <h3 className={isActive ? "total" : "expanded_total"}>Total=</h3>
        </div>
      ))}
    </div>
  );
}
