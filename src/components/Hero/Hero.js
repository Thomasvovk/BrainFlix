import "../Hero/Hero.scss";

function Hero({ starVideo }) {
  return (
    <section className="hero">
      <div className="hero__container">
        <video className="hero__video" controls poster={starVideo.image} />
      </div>
    </section>
  );
}

export default Hero;
