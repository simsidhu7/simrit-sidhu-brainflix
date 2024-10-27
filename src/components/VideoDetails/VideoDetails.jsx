import "./VideoDetails.scss";
import videoData from "../../data/video-details.json";

function VideoDetails({ selectedVideo }) {
  return (
    <main className="video">
      <h1 className="video__title">{selectedVideo.title}</h1>
      <section className="video__all-details">
        <div className="video__info">
             <div className="video__data">
             <p className="video__person">By: {selectedVideo.channel}</p>
          <img
            className="video__views"
            src="../../src/assets/images/views.svg"
            alt="Views Icon"
          />
          {selectedVideo.views} 
   
         </div>
        
          <div className="video__meta">
          <p className="video__date">
            {new Date(selectedVideo.timestamp).toLocaleDateString()}
          </p>
          <img
            className="video__likes"
            src="../../src/assets/images/likes.svg"
            alt="Likes Icon"
          />
          {selectedVideo.likes}
          </div>
        </div>
        {/* <div className="video__data"> */}
          {/* <img
            className="video__views"
            src="../../src/assets/images/views.svg"
            alt="Views Icon"
          />{"  "}
          {selectedVideo.views} */}
   
        {/* </div> */}
      </section>
      <p className="video__description">{selectedVideo.description}</p>
      <p className="video__comments-amount">3 Comments</p>
    </main>
  );
}

export default VideoDetails;
