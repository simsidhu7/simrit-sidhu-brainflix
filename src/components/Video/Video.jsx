import "./Video.scss";
function Video({ Video }) {
  return (
    <div className="video__container">
      {Video ? (
        <video className="video__image" controls poster={Video.image}
        src ={Video.video + "?api_key=simmy"}></video>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
export default Video;


