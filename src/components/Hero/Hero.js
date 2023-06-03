import "../Hero/Hero.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../Pages/Utilities/ApiPage";

function Hero({ starVideoId }) {
  const [currentHero, setCurrentHero] = useState(null);

  useEffect(() => {
    if (starVideoId === null) {
      return;
    }
    axios
      .get(`${apiUrl}/${starVideoId}`)
      .then((response) => {
        setCurrentHero(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [starVideoId]);

  if (currentHero === null) {
    return <span className="loader"></span>;
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
