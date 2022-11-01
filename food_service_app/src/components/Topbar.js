import React from "react";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <nav className="nav">
      <a className="site-title">F&D</a>
      <ul>
        <li>
          <a href="/food">Food</a>
        </li>
        <li>
          <a href="/drinks">Drinks</a>
        </li>
        <li>
          <a href="/tables">Tables</a>
        </li>
        <li>
          <a href="/bills">Bills</a>
        </li>
      </ul>
    </nav>
  );
}
