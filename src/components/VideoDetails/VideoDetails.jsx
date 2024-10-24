import "./VideoDetails.scss";
import videoDetails from "..data/video-details.json";

function VideoDetails() {
  const mainVideo = videoDetails[0];
  return (
    <div className="video-details">
      <div className="video-details__container">
        <img
          className="video-details__image"
          src={mainVideo.image}
          alt={mainVideo.title}
        />
      </div>
    </div>
  );
}
export default VideoDetails;
