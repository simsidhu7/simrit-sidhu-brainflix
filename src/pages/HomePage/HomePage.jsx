import "../../App.scss";
import Header from "../../components/Header/Header";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import VideoList from "../../components/VideoList/VideoList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleSelectVideo = (clickedId) => {
    const foundVideo = videos.find((video) => clickedId === video.id);
    setSelectedVideo(foundVideo || VideoData[defaultVideoId]);
  };

  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const videoUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${defaultVideoId}`;

  

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(`${videoUrl}`);
        setVideos(response.data);
        console.log(response.data);
        setSelectedVideo(response.data[0]);
      } catch (error) {
        console.error("Error fetching the video: ", error);
      }
    };

    getVideos();
  }, []);

  //Create another use effect for dynamic url

  //   const filteredVideos = videos.filter((video) => {
  //     return selectedVideo && video.id !== selectedVideo.id;
  //   });

  return (
    <div className="video-page">
      {/* if useState selectedVideo exists, then render the component */}
      <Video Video={selectedVideo} />
      <div className="video-page__container">
        <div className="video-page__details-comments">
          {/* <VideoDetails selectedVideo={selectedVideo} /> */}
          {/* <CommentsForm />
          <Comments comments={selectedVideo.comments} /> */}
        </div>
        {/* <VideoList video={videos}/> */}
        <VideoList videos={videos} selectVideo={handleSelectVideo} />
      </div>
    </div>
  );
}

export default HomePage;
