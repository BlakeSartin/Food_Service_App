import "./App.css";
import Topbar from "./components/Topbar";
import Drinks from "./components/Drinks";
import Food from "./components/Food";
import Bills from "./components/Bills";
import Checkout from "./components/Checkout";
import Tables from "./components/Tables";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      break;
    case "/drinks":
      Component = Drinks;
      break;
    case "/food":
      Component = Food;
      break;
    case "/tables":
      Component = Tables;
      break;
    case "/bills":
      Component = Bills;
      break;
    case "/checkout":
      Component = Checkout;
      break;
  }
  return (
    <div>
    <Topbar />
    <Component />
    </div>

  )
}

export default App;
