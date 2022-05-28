import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h2 className="logo">AliSocial</h2>
          <span className="loginDesc">
            Connect with friends and the world around you on AliSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="Email" className="loginInput" placeholder="Email" />
            <input
              type="Password"
              className="loginInput"
              placeholder="Password"
            />
            <div className="loginForgat">Forgot Password</div>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
