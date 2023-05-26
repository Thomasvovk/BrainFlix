import "../Videos/Videos.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Videos({ starVideoId }) {
  const apiUrl = "https://project-2-api.herokuapp.com/videos";
  const apiKey = "5003e7fd-6220-4f00-bb9e-52f793c038d9";

  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}?api_key=${apiKey}`).then((response) => {
      setVideoList(response.data);
    });
  }, []);

  if (videoList === null) {
    return <h1>Loading...</h1>;
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

export default Videos;
