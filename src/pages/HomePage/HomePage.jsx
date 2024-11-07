import "../../App.scss";
import "../HomePage/Homepage.scss";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import VideoList from "../../components/VideoList/VideoList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const apikey = "e03dd814-a30f-4b5c-9fe8-03cee49e0c39";
  const videoUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apikey}`;

  const { id } = useParams();

  const url = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${apikey}`;

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(`${videoUrl}`);
        setVideos(response.data);

        if (id) {
          const specificVideoResponse = await axios.get(
            `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${apikey}`
          );
          setSelectedVideo(specificVideoResponse.data);
        } else {
          const specificVideoResponse = await axios.get(
            `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${response.data[0].id}?api_key=${apikey}`
          );
          setSelectedVideo(specificVideoResponse.data);
        }
      } catch (error) {

        //take the user to a not found page
        console.error("Error fetching the video: ", error);
      }
    };

    getVideos();
  }, [id]);

  const filteredVideos = videos.filter((video) => {
    return selectedVideo && video.id !== selectedVideo.id;
  });
  // if (selectedVideo == null) {
  //   return <h1 className="Loading">Loading...</h1>;
  // }
  return (
    <div className="video-page">
      <Video Video={selectedVideo} />
      <div className="video-page__container">
        <div className="video-page__details-comments">
          <VideoDetails selectedVideo={selectedVideo} />
          <CommentsForm />
          <Comments comments={selectedVideo?.comments} />
        </div>
        <VideoList videos={filteredVideos} />
      </div>
    </div>
  );
}

export default HomePage;
