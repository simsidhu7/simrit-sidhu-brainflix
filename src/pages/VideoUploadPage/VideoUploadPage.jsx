import "../../App.scss";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./VideoUploadPage.scss";
import { useNavigate } from "react-router-dom";

function VideoUploadPage() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("The video has been successfully uploaded!");
    navigate("/");
  };
  return (
    <div className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <form className="upload__form" onSubmit={handleSubmit}>
        <label htmlFor="upload__form-title">TITLE YOUR VIDEO</label>
        <input
          id="upload__form-titlefield"
          type="text"
          placeholder="Add a title to your video"
          required
        />
        <label htmlFor="upload__form-descr">ADD A VIDEO DESCRIPTION</label>
        <textarea
          id="upload__form-descr"
          placeholder="Add a description to your video"
          required
        ></textarea>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default VideoUploadPage;
