import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
