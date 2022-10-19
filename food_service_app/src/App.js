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
        <div className="login-p">Hello!</div>
        <div className="login-p">Thanks for using F&D!</div>
        <div className="login-p">Please Login!</div>
        <form className="login-form">
          <label className="login-form-part" for="servername">Server Name</label>
          <input className="login-form-part" type="text" id="servername" name="servername"></input>
          <label className="login-form-part" for="server#">Server ID Number</label>
          <input className="login-form-part" type="text" id="server#"></input>
          <input className="login-button" type="submit" value="Login"></input>
        </form>
        </div>
        <div className="image-container">
        <img src="/images/bar.jpg" alt=""></img>
        </div>
    </div>
  );
}

export default App;
