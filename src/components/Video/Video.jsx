import './Video.scss'
import videoData from '../../data/video-details.json'

function MainVideo(){
const mainVideo = videoData[0];
return(
    <div className ="video">
<div className="video__container">
<img className="video__image"
src = {mainVideo.image}
alt={mainVideo.title}
/>


</div>

    </div>
);
}
export default MainVideo;