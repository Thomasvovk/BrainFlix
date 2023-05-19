import "../Comments/Comments.scss";
import profileImage from "../../assets/images/Mohan-muruge.jpg";

function Comments(props) {
  return (
    <>
      <section className="comments-section">
        <div className="comments-section__allcomments">
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
                  {props.comment[0].comments[0].name}
                </p>
                <p className="comments-section__container-date">
                  {props.comment[0].comments[0].timestamp}
                </p>
              </div>
              <p className="comments-section__container-text">
                {props.comment[0].comments[0].comment}
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
                  {props.comment[0].comments[1].name}
                </p>
                <p className="comments-section__container-date">
                  {props.comment[0].comments[0].timestamp}
                </p>
              </div>
              <p className="comments-section__container-text">
                {props.comment[0].comments[1].comment}
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
                  {props.comment[0].comments[1].name}
                </p>
                <p className="comments-section__container-date">
                  {props.comment[0].comments[2].timestamp}
                </p>
              </div>
              <p className="comments-section__container-text">
                {props.comment[0].comments[2].comment}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Comments;
