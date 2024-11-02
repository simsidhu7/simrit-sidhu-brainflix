import "./VideoDetails.scss";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";

function VideoDetails({ selectedVideo }) {
  // const {id} =useParams();
  // const apiKey= "84e96018-4022-434e-80bf-000ce4cd12b8";
  // const url = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${apiKey}`


  // const getVideoById = async(id) =>{
  //   try{
  //     const response = await axios.get(`${url}`);
  //   }
  //   catch(error){
  //     console.error("Error fetching video by ID", error);
  //   }
  // };

  // useEffect(() => {
  //   getVideoById()}, [id])

  return (
    <main className="video">
      {/* <h1 className="video__title">{selectedVideo.title}</h1> */}

      <section className="video__all-details">
        <div className="video__info">
          <p className="video__person">By: {selectedVideo.channel}</p>
          <p className="video__date">
            {new Date(selectedVideo.timestamp).toLocaleDateString()}
          </p>
        </div>

        <div className="video__meta">
          <div className="video__views-container">
            <img
              className="video__views-icon"
              src="../../src/assets/images/views.svg"
              alt="Views Icon"
            />
            <span className="video__views">{selectedVideo.views} </span>
          </div>
          <div className="video__likes-container">
            <img
              className="video__likes-icon"
              src="../../src/assets/images/likes.svg"
              alt="Likes Icon"
            />
            <span className="video__likes">{selectedVideo.likes}</span>
          </div>
        </div>
      </section>
      <p className="video__description">{selectedVideo.description}</p>
    </main>
  );
}

export default VideoDetails;
