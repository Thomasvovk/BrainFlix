import Hero from "../../components/Hero/Hero";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// API info
const apiUrl = "https://project-2-api.herokuapp.com/videos";
const apiKey = "5003e7fd-6220-4f00-bb9e-52f793c038d9";

function HomePage() {
  const [defaultVideoId, setDefaultVideoId] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`${apiUrl}?api_key=${apiKey}`).then((response) => {
      setDefaultVideoId(response.data[0].id);
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
