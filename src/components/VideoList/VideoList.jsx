import "./VideoList.scss";

function VideoList({ videos, selectVideo }) {
  console.log(videos);

  return (
    <section className="selection">
      <h1 className="selection__header">NEXT VIDEOS</h1>
      <ul className="selection__list">
        {videos.map((video) => (
          //look at the lab to add link instead of li
          <li
            className="selection__video"
            key={video.id}
            onClick={() => selectVideo(video.id)}
          >
            <article className="selection__video-container">
              <img className="selection__video-chosen" src={video.image} />
            </article>
            <article className="selection__video-desr-container">
              <h3 className="selection__title">{video.title}</h3>
              <p className="selection__channel">{video.channel}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
