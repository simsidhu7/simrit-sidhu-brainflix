import "./VideoDetails.scss";
import videoData from "../../data/video-details.json";


function VideoDetails({ selectedVideo }) {
  return (
    <main className="video">
      <div className="video__info">
        <h1>{selectedVideo.title}</h1>
        <p className="video-details__title"> {selectedVideo.channel}</p>
        <img
          className="video-details__views"
          src="../../src/assets/images/views.svg"
          alt="Views Icon"
        />{" "}
        {selectedVideo.views}
        <img
          className="video-details__likes"
          src="../../src/assets/images/likes.svg"
          alt="Likes Icon"
        />
        {selectedVideo.likes}
        <p className="video-details__date">
          {new Date(selectedVideo.timestamp).toLocaleDateString()}
        </p>
        <p className="video-details__name">{selectedVideo.name}</p>
        <p className="video-details__description">
          {selectedVideo.description}
        </p>
      </div>
    </main>
  );
}

export default VideoDetails;
