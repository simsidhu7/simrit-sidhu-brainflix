import "../../App.scss";
import "./VideoUploadPage.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import videoPreviewImage from "../../assets/images/Upload-video-preview.jpg";

function VideoUploadPage() {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newVideo = {
      title: title,
      description: description,
    };

    try {
      await axios.post(`${baseUrl}/videos`, newVideo);
      alert("The video has been successfully uploaded!");
      navigate("/");
    } catch (error) {
      console.error("Video upload error:", error);
      alert("There was an error uploading your video.");
    }
  };
  const handleCancelSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__page-container">
        <div className="upload__image-container">
          <p className="upload__image-title">VIDEO THUMBNAIL</p>
          <img
            className="upload__image"
            src={videoPreviewImage}
            alt="Running Video Thumbnail"
          />
        </div>

        <form className="upload__form" onSubmit={handleSubmit}>
          <label htmlFor="upload__form-title">TITLE YOUR VIDEO</label>
          <input
            name="upload__form-title"
            id="upload__form-title"
            type="text"
            placeholder="Add a title to your video"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="upload__form-descr">ADD A VIDEO DESCRIPTION</label>
          <textarea
            name="upload__form-descr"
            id="upload__form-descr"
            placeholder="Add a description to your video"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </form>
      </div>
      <div className="upload__selections-container">
        <span
          className="upload__publish-button"
          onClick={() =>
            document.querySelector(".upload__form").requestSubmit()
          }
        >
          PUBLISH
        </span>
        <span
          className="upload__cancel"
          type="button"
          onClick={handleCancelSubmit}
        >
          CANCEL
        </span>
      </div>
    </section>
  );
}

export default VideoUploadPage;
