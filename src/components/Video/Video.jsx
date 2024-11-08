import "./Video.scss";

function Video({ Video }) {
  return (
    <div className="video__container">
      {Video ? (
        <video className="video__image" controls poster={import.meta.env.VITE_BASE_URL + Video.image}
        src ={import.meta.env.VITE_BASE_URL + Video.video + `?api_key=${Math.random()}`}></video>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
export default Video;


