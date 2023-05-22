import "../Comments/Comments.scss";
import profileImage from "../../assets/images/Mohan-muruge.jpg";

function Comments({ starVideo }) {
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
          <div className="comments-section__posted-container">
            {/* Map loop over my coments  */}
            {starVideo.comments.map((commentObject) => {
              return (
                <div className="comments-section__container">
                  <div className="comments-section__container-profile">
                    <div className="comments-section__container-profile-img"></div>
                  </div>
                  <div className="comments-section__container-info">
                    <div className="comments-section__container-block">
                      <p className="comments-section__container-name">
                        {commentObject.name}
                      </p>
                      <p className="comments-section__container-date">
                        {new Date(commentObject.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="comments-section__container-text">
                      {commentObject.comment}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Comments;
