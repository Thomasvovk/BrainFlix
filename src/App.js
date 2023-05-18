import "./App.scss";
import { useState } from "react";
import videoList from "./data/videos.json";
import videoDescription from "./data/video-details.json";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import Comments from "./components/Comments/Comments";
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <VideoDescription />
      <Comments />
      <Videos videoList={videoList} />
    </>
  );
}

export default App;
