import React from "react";
import logo from "../images/titlelogomain.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-root">
      <div className="home-center">
        <img src={logo} className="home-logo" alt="Title logo" />
      </div>
    </main>
  );
}

