import "../Hero/Hero.scss";

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
    </section>
  );
}

export default Hero;
