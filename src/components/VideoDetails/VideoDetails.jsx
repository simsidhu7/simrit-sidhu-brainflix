import "./VideoDetails.scss";
import videoData from "../../data/video-details.json";

function VideoDetails() {
    const videoTitle = videoData[0];
    return (
      <div className="video-details">
        <div className="video-details__container">
          <img
            className="video__image"
            // src={}
            // alt={}
          />
        </div>
      </div>
    );
  }
  export default MainVideo;