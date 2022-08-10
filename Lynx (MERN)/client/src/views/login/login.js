import React from "react"
import "./login.css"

export const LoginPage = () => {
  return(
    <div id="login_box">
      <div className="login_form">
        <span id="login_title">LYNX<br/></span>
        <input  className="login_content" type="text" name="username" placeholder="Username" required/>
        <input className="login_content" type="password" name="password" placeholder="Password" required/>
        <a href="/library"><input className="login_content" id="login_btn" type="submit" value="Login"/></a>
      </div>
    </div>
  )
}