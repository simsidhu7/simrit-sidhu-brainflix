import "../../App.scss"
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function VideoUploadPage() {
 

return(
<div className="upload">
 <Header />
<h2 className="upload__title">Upload a Video</h2>
<form>
    <input type="text" placeholder ="Add a title to your video"/>
    <textarea placeholder="Add a description to your video"></textarea>
    <button type="submit">Upload</button>
</form>

 </div>

);
}

export default VideoUploadPage;