import "./VideoDetails.scss";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";

function VideoDetails({ selectedVideo }) {


  return (
    <main className="video">
      <h1 className="video__title">{selectedVideo.title}</h1>

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
