import React from "react";
import logo from "../images/titlelogomain.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-root">
      <div className="home-content">
        <img src={logo} className="home-logo" alt="PlaySimulator Logo" />
        <div className="home-text">
          <p>Live NFL Playbook Simulations Using Real Data</p>
        </div>
      </div>
    </main>
  );
}
