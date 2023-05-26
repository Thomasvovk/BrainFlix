import "../VideoDescription/VideoDescription.scss";
import viewImg from "../../assets/images/icons/views.svg";
import likeImg from "../../assets/images/icons/likes.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = "https://project-2-api.herokuapp.com/videos";
const apiKey = "5003e7fd-6220-4f00-bb9e-52f793c038d9";

function VideoDescription({ starVideoId }) {
  const [startVideo, setStarVideo] = useState(null);

  useEffect(() => {
    if (starVideoId === null) {
      return;
    }
    axios
      .get(`${apiUrl}/${starVideoId}/?api_key=${apiKey}`)
      .then((response) => {
        setStarVideo(response.data);
      });
  }, [starVideoId]);

  if (startVideo === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="video-description">
      <section className="video-description__details">
        <h1 className="video-description__title">{startVideo.title}</h1>
        <div className="video-description__info">
          <div className="video-description__info-container">
            <p className="video-description__info-container-name">
              By {startVideo.channel}
            </p>
            <p className="video-description__info-container-date">
              {new Date(startVideo.timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="video-description__info-container">
            <div className="video-description__info-container-views">
              <img
                className="video-description__info-icon"
                src={viewImg}
                alt="view icon"
              />
              <p className="video-description__info-container-data">
                {startVideo.views}
              </p>
            </div>
            <div className="video-description__info-container-likes">
              <img
                className="video-description__info-icon"
                src={likeImg}
                alt="like icon"
              />
              <p className="video-description__info-container-data">
                {startVideo.likes}
              </p>
            </div>
          </div>
        </div>
        <div className="video-description__description">
          <p className="video-description__description-text">
            {startVideo.description}
          </p>
        </div>
      </section>
    </div>
  );
}

export default VideoDescription;
