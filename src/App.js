import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Connections from "./Connections/Connections";
import TeamSection from "./TeamSection/TeamSection";
import ScrollGallery from "./ScrollGallery/ScrollGallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Connections/>} />
        <Route path="/team" element={<TeamSection/>} />
        <Route path="/gallery" element={<ScrollGallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
