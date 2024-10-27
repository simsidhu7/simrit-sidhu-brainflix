import "./App.scss";
import Header from "../src/components/Header/Header";
import Video from "../src/components/Video/Video";
import VideoDetails from "../src/components/VideoDetails/VideoDetails";
import Comments from "../src/components/Comments/Comments";
import CommentsForm from "../src/components/CommentsForm/CommentsForm";
import VideoList from "../src/components/VideoList/VideoList";
import VideoData from "../src/data/video-details.json";
import { useState } from "react";

function App() {
  //Create state to hold VideoDetails
  //Destructure the use state of what's returned from the useState hook.
  //Import the useState above
  //In brackets beside const, we want to bring in our state variable which we call plants.
  //In useState brackets, we bring in our json file.

  // console.log(useState(VideoDetails));
  // const [video, setCurrent] = useState(VideoDetails);

  //videos is now VideoData
  const [videos, setVideo] = useState(VideoData);

  //The UI changes and we need state to swap the videos

  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);

  
  const handleSelectVideo = (clickedId) => {
    const foundVideo = videos.find((video) => clickedId === video.id);
    setSelectedVideo(foundVideo || VideoData[0]);
  };

  //use an implicit return to render over each video in the videos array and want to retrieve each video and filter out the video that its on so its not in the list of videos
  const filteredVideos = videos.filter((video) => {
    return selectedVideo && video.id !== selectedVideo.id;
  });

  //Pass the props into the components. This is the React way to invoke a function for each component. Pass in the filteredVideos into VideoList to remove the item that was selected.
  return (
    <div className="video-page">
      <Header />
      <Video Video={selectedVideo}/>
      <div className="video-page__container">
        
      <div className="video-page__details-comments">
      
              <VideoDetails selectedVideo={selectedVideo} />
      <CommentsForm />
      <Comments comments={selectedVideo.comments} />
      </div>
      <VideoList videos={filteredVideos} selectVideo={handleSelectVideo} />
   </div>
    </div>
  );
}

export default App;
