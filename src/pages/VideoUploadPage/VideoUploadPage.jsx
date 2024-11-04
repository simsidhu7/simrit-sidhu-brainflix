import "../../App.scss";
import "./VideoUploadPage.scss";
import { useNavigate } from "react-router-dom";
import videoPreviewImage from "../../assets/images/Upload-video-preview.jpg";

function VideoUploadPage() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("The video has been successfully uploaded!");
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
            required
          />
          <label htmlFor="upload__form-descr">ADD A VIDEO DESCRIPTION</label>
          <textarea
            name="upload__form-descr"
            id="upload__form-descr"
            placeholder="Add a description to your video"
            required
          ></textarea>
          <div className="upload__selections-container">
            <button className="upload__publish-button" type="submit">
              PUBLISH
            </button>
            <span className="upload__cancel">CANCEL</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default VideoUploadPage;
