import "./Upload.scss";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

function Upload() {
  return (
    <section className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <div className="video-upload__box">
        <div className="video-upload__container">
          <h2 className="video-upload__thumbnail">VIDEO THUMBNAIL</h2>
          <img
            className="video-upload__upload-image"
            src={uploadImage}
            alt="thumbnail"
          />
        </div>
        <form className="video-upload__form">
          <label className="video-upload__video-title" for="title">
            TITLE YOUR VIDEO{" "}
          </label>
          <input
            className="video-upload__title-input"
            name="title"
            id="title"
            placeholder="Add a title to your video"
            required
          ></input>
          <label className="video-upload__video-description" for="description">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="video-upload__description-input"
            name="description"
            id="description"
            placeholder="Add a description to your video"
            required
          ></input>
        </form>
      </div>
      <div className="video-upload__form-button-container">
        <button className="video-upload__button-publish">PUBLISH</button>
        <div className="video-upload__button-cancel">CANCEL</div>
      </div>
    </section>
  );
}

export default Upload;
