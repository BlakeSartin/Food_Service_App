import "./App.css";
import Topbar from "./components/Topbar";
import Drinks from "./components/Drinks";
import Food from "./components/Food";
import Bills from "./components/Bills";
import Tables from "./components/Tables";
import Login from "./components/Login";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Login/>;
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
  }
  return (
    <div>
      <Topbar />
      {component}
    </div>
  );
}

export default App;
