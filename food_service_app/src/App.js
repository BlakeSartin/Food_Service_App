import "./App.css";
import Topbar from "./components/Topbar";
import Drinks from "./components/Drinks";
import Food from "./components/Food";
import Bills from "./components/Bills";
import Checkout from "./components/Checkout";
import Tables from "./components/Tables";
import { useState } from "react";
import Table_Menu from "./components/Table_Menu";


function App() {

  let component;
  switch (window.location.pathname) {
    case "/":
      break;
    case "/drinks":
      component = <Drinks />;
      break;
    case "/food":
      component = <Food />;
      break;
    case "/tables":
      component = <Tables />;
      break;
    case "/bills":
      component = <Bills />;
      break;
    case "/checkout":
      component = <Checkout />;
      break;
  }
  return (
    <div>
    <Topbar />
    <Table_Menu />
    {component}
    </div>

  )
}

export default App;
