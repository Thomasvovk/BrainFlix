import "../VideoDescription/VideoDescription.scss";
import viewImg from "../../assets/images/icons/views.svg";
import likeImg from "../../assets/images/icons/likes.svg";

function VideoDescription() {
  return (
    <div className="video-description">
      <section className="video-description__details">
        <h1 className="video-description__title">
          BMX Rampage: 2021 Highlights
        </h1>
        <div className="video-description__info">
          <div className="video-description__info-container">
            <p className="video-description__info-container-name">
              By Red Crow
            </p>
            <p className="video-description__info-container-date">07/11/2021</p>
          </div>
          <div className="video-description__info-container">
            <div className="video-description__info-container-views">
              <img
                className="video-description__info-icon"
                src={viewImg}
                alt="view icon"
              />
              <p className="video-description__info-container-data">
                1,001,023
              </p>
            </div>
            <div className="video-description__info-container-likes">
              <img
                className="video-description__info-icon"
                src={likeImg}
                alt="like icon"
              />
              <p className="video-description__info-container-data">110.985</p>
            </div>
          </div>
        </div>
        <div className="video-description__description">
          <p className="video-description__description-text">
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </p>
        </div>
      </section>
    </div>
  );
}

export default VideoDescription;
