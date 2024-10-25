import "./Video.scss";
import videoData from "../../data/video-details.json";

function MainVideo() {
  const mainVideo = videoData[0];
  return (
    <div className="video">
      <div className="video__container">
        <img
          className="video__image"
          src={mainVideo.image}
          alt="Preview of Main Video"
        />
        <div className="video__controls">
          <img
            className="video__play"
            src="../src/assets/images/play.svg"
            alt="Video Play Button"
          />
            <article className="video__icons">
                  <img
            className="video__scrub"
            src="../src/assets/images/scrub.svg"
            alt="Video Scrub Button"
          />
        
                  <img
            className="video__fullscreen"
            src="../src/assets/images/fullscreen.svg"
            alt="Video Play Button"
          />
                  <img
            className="video__volume-up"
            src="../src/assets/images/volume_up.svg"
            alt="Video Play Button"
          />
          </article>
        </div>
      </div>
    </div>
  );
}
export default MainVideo;
