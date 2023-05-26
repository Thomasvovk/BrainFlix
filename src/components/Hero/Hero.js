import "../Hero/Hero.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = "https://project-2-api.herokuapp.com/videos";
const apiKey = "5003e7fd-6220-4f00-bb9e-52f793c038d9";

function Hero({ current }) {
  const [currentHero, setCurrentHero] = useState(null);
  useEffect(() => {
    axios
      .get(`${apiUrl}/${current}/?api_key=${apiKey}`)
      .then((response) => console.log(response.data));
  }, []);
  // return (
  //   <section className="hero">
  //     <div className="hero__container">
  //       <video className="hero__video" controls poster={starVideo.image} />
  //     </div>
  //   </section>
  // );
}

export default Hero;
