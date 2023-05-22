import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import Comments from "./components/Comments/Comments";
import Videos from "./components/Videos/Videos";
// imported json files
import videoList from "./data/videos.json";
import videoDetails from "./data/video-details.json";

function App() {
  // useState
  const [starVideo, setStarVideo] = useState(videoDetails[0]);
  const updatedVideoList = videoList.filter((video) => {
    return video.id !== starVideo.id;
  });

  const updateStarVideo = (id) => {
    const updatedVideo = videoDetails.find((video) => {
      return id === video.id;
    });
    setStarVideo(updatedVideo);
  };
  return (
    // Components with props
    <>
      <Header />
      <Hero starVideo={starVideo} />
      <div className="videos-desktop">
        <div className="videos-desktop__left-container">
          <VideoDescription starVideo={starVideo} />
          <Comments starVideo={starVideo} />
        </div>
        <Videos
          updateStarVideo={updateStarVideo}
          videoList={updatedVideoList}
        />
      </div>
    </>
  );
}

export default App;
