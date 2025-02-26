import React, { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const [watchLater, setWatchLater] = useState([]);
  const [mainVideo  , setMainVideo]= useState({});
  const [suggestedVideos , setSuggestedVideos] = useState([]);

  const {param}=useParams();


  
    
    useEffect(() => {
      fetch("/data/videos.json")
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched Data:", data); // Debugging
  
          // Find the currently playing video
          const currentVideo = data.video.find((video) => video.videoLink === param);
          setMainVideo(currentVideo);
  
          // Filter out the current video and pick 4 random videos
          const filteredVideos = data.video.filter((video) => video.videoLink !== param);
          const shuffled = filteredVideos.sort(() => 0.5 - Math.random()); // Shuffle array
          setSuggestedVideos(shuffled.slice(0, 4)); // Select first 4 items
        })
        .catch((error) => console.error("Error fetching videos:", error));
    }, [param]);

    

  const addToWatchLater = (video) => {
    if (!watchLater.find((v) => v.id === video.id)) {
      setWatchLater([...watchLater, video]);
    }
  };


  if(param==null||mainVideo==null){
    return <div className="">loading...</div>
  }

  return (
    <div className="flex flex-col lg:flex-row min-[88vh] overflow-x-hidden">
      {/* Main Video Section */}
      <div className="flex-1 px-4 lg:px-4">
        <div className="aspect-video rounded-lg overflow-hidden">
          <video controls className="w-full h-full">
            <source src={`/video/${param}/vid.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex justify-between items-start">
            <div className="text">
              <h1 className="text-xl lg:text-3xl mt-4">{mainVideo?.title ?? 'no title'}</h1>
        <p className="text-gray-800 ">This is a description of the video currently playing.</p>
            </div>
             <button
          onClick={() => addToWatchLater({ id: videoId, title: "Big Video Title" })}
          className="mt-4 px-4 py-2 bg-sec border-2 border-black"
        >
          Watch Later
        </button>
        </div>
      </div>

      {/* Suggested Videos Section */}
      <div className="w-full lg:w-1/3 px-4 lg:px-2">
       
        <div className="flex flex-col gap-">
          {suggestedVideos.map((video , key) => (
            <a href={`/videos/${video.videoLink}`}
              key={key}
              className="flex gap-4 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer duration-200 hover:translate-x-1"
            >
              <div className="relative h-32 aspect-video rounded-lg bg-blue-400 overflow-hidden">
                 <img
                src={`/video/${video.videoLink}/thumb.png`}
                alt={video.title}
                className="h-full w-full object-cover"
              />
              <div className="time absolute bottom-1 right-1 px-2 py-1 bg-black text-white rounded-md text-sm bg-opacity-70">{video?.duration}</div>
              </div>
             
              <div className="flex flex-col justify-between items-start py-2">
                <h3 className=" text-black text-xl w-52">{video.title}</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToWatchLater(video);
                  }}
                  className="text-sm bg-sec px-2 py-1 "
                >
                  + Watch Later
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;