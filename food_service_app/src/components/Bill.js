import React, { useState } from "react";
import "./Bills.scss";
import { Chair, TableBar, LocalBar, LunchDining } from "@mui/icons-material";

export default function Bill({ bill }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "bill_container" : "expanded_bill_container"}>
      <div className={isActive ? "bill" : "expanded_bill"}>
        <div
          className={
            isActive ? "bill_button_container" : "expanded_bill_button_container"
          }
        >
          <button
            className={isActive ? "bill_button" : "expanded_bill_button"}
            onClick={handleToggle}
          >
            {bill.bill} <TableBar />
          </button>
        </div>
      </div>
      {bill.seats.map((seat) => (
        <>
          <button className={isActive ? "seat" : "expanded_seat"}>
            {seat.number} <Chair />
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
  );
}
