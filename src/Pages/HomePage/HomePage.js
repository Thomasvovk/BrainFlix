// import videoList from "../../data/videos.json";
// import videoDetails from "../../data/video-details.json";
import Hero from "../../components/Hero/Hero";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const apiUrl = "https://project-2-api.herokuapp.com/videos";
const apiKey = "5003e7fd-6220-4f00-bb9e-52f793c038d9";

function HomePage({ videoList }) {
  const videoId = useParams();

  const [defaultVideoId, setDefaultVideoId] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}?api_key=${apiKey}`)
      .then((response) => setDefaultVideoId(response.data[0].id));
  }, []);

  if (!defaultVideoId) {
    return <p>Loading...</p>;
  }

  let currentId;

  if (!videoId) {
    currentId = videoId;
  } else {
    currentId = defaultVideoId;
  }

  // useEffect(() => {
  //   axios.get(`${apiUrl}?api_key=${apiKey}`).then((response) => {
  //     setVideoList(response.data);
  //   });
  // }, []);

  // const updatedVideoList = videoList.filter((video) => {
  //   return defaultVideo !== video.id;
  // });

  // const updateStarVideo = (id) => {
  //   const updatedVideo = videoDetails.find((video) => {
  //     return id === video.id;
  //   });
  //   setStarVideo(updatedVideo);
  // };

  // return (
  //   <>
  //     <Hero starVideo={videoList} />
  //     <div className="videos-desktop">
  //       <div className="videos-desktop__left-container">
  //         <VideoDescription starVideo={videoList} />
  //         <Comments starVideo={videoList} />
  //       </div>
  //       <Videos
  //         updateStarVideo={updateStarVideo}
  //         videoList={updatedVideoList}
  //       />
  //     </div>
  //   </>
  // );

  return <Hero current={currentId} />;
}

export default HomePage;
