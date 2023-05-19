import "../Hero/Hero.scss";

function Hero({ heroImage }) {
  return (
    <section className="hero">
      <div className="hero__container">
        <video className="hero__video" controls poster={heroImage[0].image} />
      </div>
    </section>
  );
}

export default Hero;
