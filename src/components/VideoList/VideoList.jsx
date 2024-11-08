import "./VideoList.scss";
import { Link } from "react-router-dom";

function VideoList({ videos }) {
  return (
    <section className="selection">
      <h1 className="selection__header">NEXT VIDEOS</h1>
      <ul className="selection__list">
        {videos.map((video) => (
          <li className="selection__list-item" key={video.id}>
            <Link to={`/videos/${video.id}`}>
              <article className="selection__video-container">
                <img
                  className="selection__video-chosen"
                  src={import.meta.env.VITE_BASE_URL + video.image}
                  alt={video.title}
                />
              </article>
              <article className="selection__video-descr-container">
                <h3 className="selection__title">{video.title}</h3>
                <p className="selection__channel">{video.channel}</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
