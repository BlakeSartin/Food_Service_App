import React from "react";
import {Chair, TableBar} from "@mui/icons-material"
import "./Bills.scss"


export default function Bills() {
  return <div className="bills-container">
    <div className="bill">
      <h1><TableBar fontSize="large"/> 1</h1>
      <div className="seat-bill">
      <h2 className="chair-icon"><Chair /> #1 Blake</h2>
      <h3 className="purchases">1x Burger & Fries</h3>
      <h2>Total:</h2>
      <h2 className="total">16.99$</h2>
      </div>
      <div className="seat-bill">
      <h2 className="chair-icon"><Chair /> #2 Blake</h2>
      <h3 className="purchases">1x Burger & Fries</h3>
      <h2>Total:</h2>
      <h2 className="total">16.99$</h2>
      </div>
      <div className="seat-bill">
      <h2 className="chair-icon"><Chair /> #3 Blake</h2>
      <h3 className="purchases">1x Burger & Fries</h3>
      <h2>Total:</h2>
      <h2 className="total">16.99$</h2>
      </div>
      </div>
    </div>
}