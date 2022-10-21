import React from "react";
import "./Login.scss"

export default function Login() {
  return (
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
<div className="image-container">
<img src="/images/bar.jpg" alt=""></img>
</div>
</div>
  )
}