import "../VideoDescription/VideoDescription.scss";
import viewImg from "../../assets/images/icons/views.svg";
import likeImg from "../../assets/images/icons/likes.svg";

function VideoDescription({ description }) {
  return (
    <div className="video-description">
      <section className="video-description__details">
        <h1 className="video-description__title">{description[0].title}</h1>
        <div className="video-description__info">
          <div className="video-description__info-container">
            <p className="video-description__info-container-name">
              By {description[0].channel}
            </p>
            <p className="video-description__info-container-date">
              {description[0].timestamp}
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
                {description[0].views}
              </p>
            </div>
            <div className="video-description__info-container-likes">
              <img
                className="video-description__info-icon"
                src={likeImg}
                alt="like icon"
              />
              <p className="video-description__info-container-data">
                {description[0].likes}
              </p>
            </div>
          </div>
        </div>
        <div className="video-description__description">
          <p className="video-description__description-text">
            {description[0].description}
          </p>
        </div>
      </section>
    </div>
  );
}

export default VideoDescription;
