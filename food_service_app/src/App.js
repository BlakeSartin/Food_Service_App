
import "./App.css";
import Topbar from "./components/Topbar";
import Drinks from "./components/Drinks";
import Food from "./components/Food";
import Bills from "./components/Bills";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Drinks />
      <Food />
      <Bills />
      <Checkout />
    </div>
  );
}

export default App;
