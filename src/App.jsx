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
  const [videos, setVideo] = useState(VideoData);
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);
  const handleSelectVideo = (clickedId) => {
    const foundVideo = videos.find((video) => clickedId === video.id);
    setSelectedVideo(foundVideo || VideoData[0]);
  };

  const filteredVideos = videos.filter((video) => {
    return selectedVideo && video.id !== selectedVideo.id;
  });

  return (
    <div className="video-page">
      <Header />
      <Video Video={selectedVideo} />
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
