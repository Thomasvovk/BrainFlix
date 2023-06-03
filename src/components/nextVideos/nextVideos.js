import "../nextVideos/nextVideos.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../Pages/Utilities/ApiPage";

function nextVideos({ starVideoId }) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}`)
      .then((response) => {
        setVideoList(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (videoList === null) {
    return <span class="loader"></span>;
  }

  const filteredVideoList = videoList.filter((video) => {
    return video.id !== starVideoId;
  });

  return (
    <section className="videos">
      <div className="videos__list">
        <h2 className="videos__subheader">NEXT VIDEOS</h2>
        <div className="videos__container">
          {/* map loop over next videos */}
          {filteredVideoList.map((video) => {
            return (
              <Link to={"/" + video.id} key={video.id}>
                <div className="videos__item">
                  <div className="videos__block">
                    <img
                      className="videos__image"
                      src={video.image}
                      alt="next video image"
                    />
                  </div>
                  <div className="videos__description">
                    <p className="videos__title">{video.title}</p>
                    <p className="videos__name">{video.channel}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default nextVideos;
