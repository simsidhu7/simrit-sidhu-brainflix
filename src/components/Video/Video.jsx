import "./Video.scss";
function Video({ Video }) {
  return (  
    <div className="video__container">
     { Video ?
      <video controls poster={Video.image}></video>
      : <div>Loading</div> }
    </div>
  );
}
export default Video;
