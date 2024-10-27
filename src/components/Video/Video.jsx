import "./Video.scss";
function Video({ Video }) {
    return (
        <div className="video__container">
          <video controls poster={Video.image} >
          </video>
          </div>
    )}
    export default Video;