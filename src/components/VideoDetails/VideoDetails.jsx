import "./VideoDetails.scss";
import videoData from "../../data/video-details.json";

//This is the component for the selected video (based on what is passed to it) and commented out code is details for current video shown (main video)

function VideoDetails({ selectedVideo }) {
  return (
    <main className="video">
      <div className="video__container">
        <img
          className="video__image"
          src={selectedVideo.image}
          alt={selectedVideo.description}
        ></img>

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

      <div className="video__info">
        <h1>{selectedVideo.title}</h1>

        <p className="video-details__title"> {selectedVideo.channel}</p>
        <p className="video-details__name">{selectedVideo.name}</p>
        <p className="video-details__description">
          {selectedVideo.description}
        </p>
      </div>
    </main>
  );
}

export default VideoDetails;

// //Props is an object that we pass in. We destructure to get what we want by its name.
// function VideoDetails({title, channel, views, likes, timestamp, description}) {
//   // const mainVideoDetails = videoData[];
//   return (
//     <section className="video-details">
//       <h1 className="video-details__title">{title}</h1>
//       <div className="video-details__info">
//         <p className="video-details__channel">By {channel}</p>
//         <div className="video-details__icons">
//           <div className="video-details__views-likes">
//             <img src="../../src/assets/images/views.svg" alt="Views Icon" />{" "}
//             {views}
//             <img src="../../src/assets/images/likes.svg" alt="Likes Icon" />
//             {likes}
//           </div>
//         </div>
//         <p className="video-details__date">{new Date(timestamp).toLocaleDateString()}</p>
//       </div>
//       <p className="video-details__description">{description}</p>
//     </section>
//   );
// }
