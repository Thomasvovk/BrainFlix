import "../Videos/Videos.scss";

function Videos() {
  return (
    <section className="videos">
      <div className="videos__list">
        <h2 className="videos__subheader">NEXT VIDEOS</h2>
        <div className="videos__container">
          <div className="videos__item">
            <div className="videos__block">
              <img
                className="videos__image"
                src="https://i.imgur.com/5qyCZrD.jpg"
                alt="next video image"
              />
            </div>
            <div className="videos__description">
              <p className="videos__title">
                Become A Travel Pro In One Easy Lesson
              </p>
              <p className="videos__name">Todd Welch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
