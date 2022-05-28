import React from "react";
import "./Register.css";

function Register() {
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
            <input
              type="Username"
              className="loginInput"
              placeholder="Username"
            />
            <input type="Email" className="loginInput" placeholder="Email" />
            <input
              type="Password"
              className="loginInput"
              placeholder="Password"
            />
            <input
              type="Confirm Password"
              className="loginInput"
              placeholder="Password"
            />

            <button className="loginRegisterButton">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
