import "../Comments/Comments.scss";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import viewImg from "../../assets/images/icons/views.svg";
import likeImg from "../../assets/images/icons/likes.svg";

function Comments() {
  return (
    <>
      <div className="comments-section">
        <section className="comments-section__details">
          <h1 className="comments-section__title">
            BMX Rampage: 2021 Highlights
          </h1>
          <div className="comments-section__info">
            <div className="comments-section__info-container">
              <p className="comments-section__info-container-name">
                By Red Crow
              </p>
              <p className="comments-section__info-container-date">
                07/11/2021
              </p>
            </div>
            <div className="comments-section__info-container">
              <div className="comments-section__info-container-views">
                <img
                  className="comments-section__info-icon"
                  src={viewImg}
                  alt="view icon"
                />
                <p className="comments-section__info-container-data">
                  1,001,023
                </p>
              </div>
              <div className="comments-section__info-container-likes">
                <img
                  className="comments-section__info-icon"
                  src={likeImg}
                  alt="like icon"
                />
                <p className="comments-section__info-container-data">110.985</p>
              </div>
            </div>
          </div>
          <div className="comments-section__description">
            <p className="comments-section__description-text">
              On a gusty day in Southern Utah, a group of 25 daring mountain
              bikers blew the doors off what is possible on two wheels,
              unleashing some of the biggest moments the sport has ever seen.
              While mother nature only allowed for one full run before the
              conditions made it impossible to ride, that was all that was
              needed for event veteran Kyle Strait, who won the event for the
              second time -- eight years after his first Red Cow Rampage title
            </p>
          </div>
        </section>

        <section className="comments-section__allcomments">
          <h2 className="comments-section__subheader">3 Comments</h2>
          <div className="comments-section__block">
            <img
              className="comments-section__profile-image"
              src={profileImage}
              alt="profile image"
            />
            <form className="comments-section__form">
              <label className="comments-section__form-title">
                JOIN THE CONVERSATION
                <div className="comments-section__input-container">
                  <input
                    className="comments-section__form-card comments-section__form-card--size"
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Add a new comment"
                    required
                  />
                  <button className="comments-section__form-button">
                    COMMENT
                  </button>
                </div>
              </label>
            </form>
          </div>

          <div className="comments-section__container">
            <div className="comments-section__container-profile">
              <div className="comments-section__container-profile-img"></div>
            </div>
            <div className="comments-section__container-info">
              <div className="comments-section__container-block">
                <p className="comments-section__container-name">
                  Micheal Lyons
                </p>
                <p className="comments-section__container-date">08/09/2021</p>
              </div>
              <p className="comments-section__container-text">
                They BLEW the ROOF off at their last event, once everyone
                started figuring out they were going. This is still simply the
                greatest opening of an event I have EVER witnessed.
              </p>
            </div>
          </div>

          <div className="comments-section__container">
            <div className="comments-section__container-profile">
              <div className="comments-section__container-profile-img"></div>
            </div>
            <div className="comments-section__container-info">
              <div className="comments-section__container-block">
                <p className="comments-section__container-name">Gary Wong</p>
                <p className="comments-section__container-date">07/15/2021</p>
              </div>
              <p className="comments-section__container-text">
                Every time I see him shred I feel so motivated to get off my
                couch and hop on my board. He’s so talented! I wish I can ride
                like him one day so I can really enjoy myself!
              </p>
            </div>
          </div>

          <div className="comments-section__container">
            <div className="comments-section__container-profile">
              <div className="comments-section__container-profile-img"></div>
            </div>
            <div className="comments-section__container-info">
              <div className="comments-section__container-block">
                <p className="comments-section__container-name">
                  Theodore Duncan
                </p>
                <p className="comments-section__container-date">07/11/2021</p>
              </div>
              <p className="comments-section__container-text">
                How can someone be so good!!! You can tell he lives for this and
                loves to do it every day. Everytime I see him I feel instantly
                happy! He’s definitely my favorite ever!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Comments;
