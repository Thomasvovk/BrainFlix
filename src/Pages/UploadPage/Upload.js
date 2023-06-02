import "./Upload.scss";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitleChange(event) {
    const data = event.target.value;
    setTitle(data);
  }
  function handleDescriptionChange(event) {
    const data = event.target.value;
    setDescription(data);
  }
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8080/videos", {
      title: title,
      description: description,
    });
    alert("You form has been sucessfully submitted");
    navigate("/");
  }

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
        <form onSubmit={handleSubmit} className="video-upload__form">
          <label className="video-upload__video-title" htmlFor="title">
            TITLE YOUR VIDEO{" "}
          </label>
          <input
            className="video-upload__title-input"
            name="title"
            id="title"
            onChange={handleTitleChange}
            placeholder="Add a title to your video"
            value={title}
          ></input>
          <label
            className="video-upload__video-description"
            htmlFor="description"
          >
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="video-upload__description-input"
            name="description"
            id="description"
            onChange={handleDescriptionChange}
            value={description}
            placeholder="Add a description to your video"
          ></input>
          <div className="video-upload__form-button-container">
            <button type="submit" className="video-upload__button-publish">
              PUBLISH
            </button>
            <Link to="/" className="video-upload__cancel-container">
              <div className="video-upload__button-cancel">CANCEL</div>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Upload;
