import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Puzzles from "../components/Puzzles";
import Puzzle from "../components/Puzzle";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Puzzles />} />
      <Route path="/puzzles" element={<Puzzles />} />
      <Route path="/puzzles/:id" element={<Puzzle />} />
    </Routes>
  </Router>
);