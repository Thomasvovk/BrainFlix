import "../Hero/Hero.scss";
import viewImg from "../../assets/images/icons/views.svg";
import likeImg from "../../assets/images/icons/likes.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <video
          className="hero__video"
          controls
          poster="https://i.imgur.com/l2Xfgpl.jpg"
          width="100%"
        />
      </div>
      <div className="hero__details">
        <h1 className="hero__title">BMX Rampage: 2021 Highlights</h1>
        <div className="hero__info">
          <div className="hero__info-container">
            <p className="hero__info-container-name">By Red Crow</p>
            <p className="hero__info-container-date">07/11/2021</p>
          </div>
          <div className="hero__info-container">
            <div className="hero__info-container-views">
              <img className="hero__info-icon" src={viewImg} alt="view icon" />
              <p className="hero__info-container-data">1,001,023</p>
            </div>
            <div className="hero__info-container-likes">
              <img className="hero__info-icon" src={likeImg} alt="like icon" />
              <p className="hero__info-container-data">110.985</p>
            </div>
          </div>
        </div>

        <div className="hero__description">
          <p className="hero__description-text">
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
