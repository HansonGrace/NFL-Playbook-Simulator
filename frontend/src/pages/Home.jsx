import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/titlelogomain.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-root">
      <nav className="home-nav">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/data">Data</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>

      {/* Center content */}
      <div className="home-center">
        <img src={logo} className="home-logo" alt="Title logo" />
        <h2 className="home-subtext">Simulate and Predict Real NFL Play-book Data</h2>
        <button className="home-start-btn">start</button>
      </div>

      <div className="home-version">v1.0.0</div>
    </main>
  );
}
