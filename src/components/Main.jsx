import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import About from "../pages/About";
import Shop from "../pages/Shop";

export default function Main() {
  return (
    <div style={{ padding: "16px"}}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}
