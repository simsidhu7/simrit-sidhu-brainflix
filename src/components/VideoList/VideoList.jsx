function VideoList({ videos, selectedVideo }) {
  console.log(videos)

  // Add a function handleVideoChange, onClick will change the video that's selected state inside the list tag, without a button

  return (
    <section className="selection">
      <h1>Next Videos</h1>

          <ul className="selection__list">
          {videos.map((video)=>(
            <li className="selection__video" key={video.id}>
              
            <h1 className="selection__title">{video.title}</h1>
            <p className="selection__channel">{video.channel}</p>
            <img className="selection__image" src={video.image} /></li>


          ))}
          </ul>
     
    </section>
  )
}

export default VideoList;

      {/* {videos.map((videos) => { */}
        {/* //button for what video shows. Don't need a return if you put 2 additional brackets instead for implicit return, which allows you to console log as well.
        //telling the component the id of the button that was clicked
        //put onClick in an anonymous function so that it returns the function's definition. If we didn't have an anonymous function, then it would just invoke it right away. Mapping creates a new array.
        */}

