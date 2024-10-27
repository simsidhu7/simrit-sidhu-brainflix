import "./VideoList.scss";

function VideoList({ videos, selectVideo }) {
  console.log(videos);

  return (
    <section className="selection">
      <h1>Next Videos</h1>

      <ul className="selection__list">
        {videos.map((video) => (
          <li
            className="selection__video"
            key={video.id}
            onClick={() => selectVideo(video.id)}
          >
            <h1 className="selection__title">{video.title}</h1>
            <p className="selection__channel">{video.channel}</p>

            <img className="selection__video-chosen" src={video.image} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideoList;

{
  
}
{
 
}
