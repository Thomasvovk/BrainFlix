import Hero from "../../components/Hero/Hero";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// API info
const apiUrl = "http://localhost:8080/videos";

function HomePage() {
  const [defaultVideoId, setDefaultVideoId] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${apiUrl}`)
      .then((response) => {
        setDefaultVideoId(response.data[0].id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const activeVideoId = id || defaultVideoId;

  {
    return (
      <>
        <Hero starVideoId={activeVideoId} />
        <div className="videos-desktop">
          <div className="videos-desktop__left-container">
            <VideoDescription starVideoId={activeVideoId} />
            <Comments starVideoId={activeVideoId} />
          </div>
          <Videos starVideoId={activeVideoId} />
        </div>
      </>
    );
  }
}

export default HomePage;
