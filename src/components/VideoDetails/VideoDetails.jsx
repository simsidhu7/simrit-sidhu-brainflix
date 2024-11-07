import "./VideoDetails.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

function VideoDetails({ selectedVideo }) {
  return (
    <main className="video">
      <h1 className="video__title">{selectedVideo.title}</h1>

      <section className="video__all-details">
        <div className="video__info">
          <p className="video__person">By: {selectedVideo.channel}</p>
          <p className="video__date">
            {new Date(selectedVideo.timestamp).toLocaleDateString()}
          </p>
        </div>

        <div className="video__meta">
          <div className="video__views-container">
            <img
              className="video__views-icon"
              src={viewsIcon}
              alt="Views Icon"
            />
            <span className="video__views">{selectedVideo.views} </span>
          </div>
          <div className="video__likes-container">
            <img
              className="video__likes-icon"
              src={likesIcon}
              alt="Likes Icon"
            />
            <span className="video__likes">{selectedVideo.likes}</span>
          </div>
        </div>
      </section>
      <p className="video__description">{selectedVideo.description}</p>
    </main>
  );
}

export default VideoDetails;
