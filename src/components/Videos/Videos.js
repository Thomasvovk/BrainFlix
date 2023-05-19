import "../Videos/Videos.scss";

function Videos({ videoList }) {
  return (
    <section className="videos">
      <div className="videos__list">
        <h2 className="videos__subheader">NEXT VIDEOS</h2>
        <div className="videos__container">
          {videoList.map((video) => {
            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Videos;
