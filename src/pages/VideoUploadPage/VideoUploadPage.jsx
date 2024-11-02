import "../../App.scss"
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./VideoUploadPage.scss";
import {useNavigate} from "react-router-dom";

function VideoUploadPage() {
 

return(
<div className="upload">
<h2 className="upload__title">Upload Video</h2>
<form className="upload__form">
<label for="upload__form-title">TITLE YOUR VIDEO</label>
    <input id= "upload__form-titlefield" type="text" placeholder ="Add a title to your video" required/>
    <label for="upload__form-descr">ADD A VIDEO DESCRIPTION</label>
    <textarea id= "upload__form-descr" placeholder="Add a description to your video" required></textarea>
    <button type="submit">Upload</button>
</form>

 </div>

);
}

export default VideoUploadPage;