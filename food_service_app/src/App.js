import "./App.css";
import Topbar from "./components/Topbar";
import Drinks from "./components/Drinks";
import Food from "./components/Food";
import Bills from "./components/Bills";
import Checkout from "./components/Checkout";
import Tables from "./components/Tables";

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
      {component}
      <div className="login">
        <p>Hello, Thank you for using the F&D food service app! Please Login!</p>
        <form>
          <label for="servername">Server Name</label>
          <input type="text" id="servername" name="servername"></input>
          <label for="server#">Server ID Number</label>
          <input type="text" id="server#"></input>
          <input type="submit" value="Login"></input>
        </form>
        </div>
    </div>
  );
}

export default App;
