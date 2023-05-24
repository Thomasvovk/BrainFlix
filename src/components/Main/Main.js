import Hero from "../Hero/Hero";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";
import Videos from "../Videos/Videos";
import { useState } from "react";
// imported json files
import videoList from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";

function Main() {
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
    <>
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

export default Main;
