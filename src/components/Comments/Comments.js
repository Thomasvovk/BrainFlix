import "../Comments/Comments.scss";
import profileImg from "../../assets/images/Mohan-muruge.jpg";

function Comments() {
  return (
    <section className="comments-section">
      <h2 className="comments-section__subheader">3 Comments</h2>
      <div className="comments-section__container">
        <img
          className="comments-section__profile-image"
          src={profileImg}
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
              <button className="comments-section__form-button">COMMENT</button>
            </div>
          </label>
        </form>
      </div>
    </section>
  );
}

export default Comments;
