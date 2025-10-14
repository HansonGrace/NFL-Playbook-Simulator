import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Data from "./pages/Data";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Data" element={<Data />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Routes>
  );
}
