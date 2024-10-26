import './App.scss'
import Header from '../src/components/Header/Header'
// import Video from './components/Video/Video'
import VideoDetails from '../src/components/VideoDetails/VideoDetails'
import VideoList from '../src/components/VideoList/VideoList'
import VideoData from '../src/data/video-details.json'
import {useState} from "react";

function App() {
//Create state to hold VideoDetails
//Destructure the use state of what's returned from the useState hook. 
//Import the useState above
//In brackets beside const, we want to bring in our state variable which we call plants.
//In useState brackets, we bring in our json file.


// console.log(useState(VideoDetails));
// const [video, setCurrent] = useState(VideoDetails);

//videos is now VideoData
const [videos,setVideo] = useState(VideoData);

//The UI changes and we need state to swap the videos

const [selectedVideo, setSelectedVideo]=useState(VideoData[0])

//User clicks on 1 of the list of buttons
//aray.find takes in a callback function and executes on every element on the array
//the return is the first element in the array that satisfies the testing function
//the testing function is what we return in the callback function for the array.find
//callback function will return true or false
//put arrow function beside find
//check if we have an item in the array that is === to the video.id and if it matches we return object to foundVideo
//we need to update the state value and also re-render so we set state again (third line below)
const handleSelectVideo = (clickedId) =>{
  const foundVideo = VideoData.find((plant)=>clickedId === videos.id)
setSelectedVideo(foundVideo);

}

//use an implicit return to render over each video in the videos array and want to retrieve each video and filter out the video that its on so its not in the list of videos
const filteredVideos=videos.filter((video)=>{
return video.id !== selectedVideo.id
})

//Pass the props into the components. This is the React way to invoke a function for each component. Pass in the filteredVideos into VideoList to remove the item that was selected.
  return (

<div className="video-page">
      <Header/>
      {/* <Video/> */}
      <VideoDetails selectedVideo={selectedVideo} />
      {/* select video is now what you set it as below so we can use it in VideoList */}
      <VideoList videos={filteredVideos} selectVideo={handleSelectVideo}/>
{/* <VideoDetails title = {VideoJson.title} channel={VideoJson.channel} views={VideoJson.views} likes={VideoJson.likes} timestamp={VideoJson.timestamp} description={VideoJson.description}/> */}

 </div>
  )
}

export default App