import React, { useState } from "react";
import "./Bills.scss";
import { Chair, TableBar, LocalBar, LunchDining } from "@mui/icons-material";

export default function Bill({ bill }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

const totalAmount = () => {
  let seats = bill.seats
  let total=0
  for (let seat of seats) {
    total += seat.ordered.reduce((acc, value) => {
      return acc + value.price * value.amount
    }, 0)
  }
  return Math.round(total * 100) / 100
}

const totalseatAmount = () => {
  let seats = bill.seats
  let total=0
  for (let seat of seats) {
    console.log(seat)
    total += seat.ordered.reduce((acc, value) => {
      return acc + value.price * value.amount
    }, 0)
    return Math.round(total * 100) / 100
  }
}

  return (
    <div className="bill_container">
      <div className="bill">
          <button
            className="bill_button"
            onClick={handleToggle}
          >
            {bill.bill} <TableBar />
          </button>
          <h3 className={isActive ? "total" : "expanded_total"}>Total = {totalAmount()} $</h3>
      </div>
      {bill.seats.map((seat) => (
        <div className="bill_seat_container">
          <button className={isActive ? "bill_seat" : "expanded_bill_seat"}>
            {seat.number} <Chair />
          </button>
          <div>
            {seat.ordered.map((order) => (
              <h1 className={isActive ? "bill_ordered" : "expanded_bill_ordered"}>
                {order.amount}x {order.item} {order.price} $
              </h1>
            ))}
          </div>
          <h3 className={isActive ? "total" : "expanded_total"}>Total = {totalseatAmount()} $</h3>
        </div>
      ))}
    </div>
  );
}
