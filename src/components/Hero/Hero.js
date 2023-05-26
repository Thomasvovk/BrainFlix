import "../Hero/Hero.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = "https://project-2-api.herokuapp.com/videos";
const apiKey = "5003e7fd-6220-4f00-bb9e-52f793c038d9";

function Hero({ starVideoId }) {
  const [currentHero, setCurrentHero] = useState(null);

  useEffect(() => {
    if (starVideoId === null) {
      return;
    }
    axios
      .get(`${apiUrl}/${starVideoId}/?api_key=${apiKey}`)
      .then((response) => {
        setCurrentHero(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [starVideoId]);

  if (currentHero === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="hero">
      <div className="hero__container">
        <video className="hero__video" controls poster={currentHero.image} />
      </div>
    </section>
  );
}

export default Hero;
