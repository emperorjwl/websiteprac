"use client";
import React from "react";
import "./new.css";

export default function Login() {
  return (
    <div className="wrapper">
      <form action="">
        <img src="/img/video.png" alt="" />
        <h1>Sign Up For Empy Movies</h1>

        <div className="inputbox">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <input type="text" placeholder="Email" required />
        </div>
        <div className="inputbox">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <input type="text" placeholder="Username" required />
        </div>
        <div className="inputbox">
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input type="password" placeholder="Password" required />
        </div>

        <div className="remember">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Signup</button>

        <div className="accountalready">
          <p>
            Have an account already? <a href="#">Sign In</a>
          </p>
        </div>
      </form>
    </div>
  );
}
