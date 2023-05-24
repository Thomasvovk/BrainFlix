import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Upload from "./components/Upload/Upload";
import Main from "./components/Main/Main";

// imported json files
import videoList from "./data/videos.json";
import videoDetails from "./data/video-details.json";

function App() {
  // useState

  return (
    // Components with props

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
