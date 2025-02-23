import React, { useState } from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const [watchLater, setWatchLater] = useState([]);

  const suggestedVideos = [
    { id: 1, title: "Suggested Video 1", thumbnail: "https://via.placeholder.com/150" },
    { id: 2, title: "Suggested Video 2", thumbnail: "https://via.placeholder.com/150" },
    { id: 3, title: "Suggested Video 3", thumbnail: "https://via.placeholder.com/150" },
    { id: 4, title: "Suggested Video 4", thumbnail: "https://via.placeholder.com/150" },
  ];

  const addToWatchLater = (video) => {
    if (!watchLater.find((v) => v.id === video.id)) {
      setWatchLater([...watchLater, video]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-white overflow-x-hidden">
      {/* Main Video Section */}
      <div className="flex-1 p-4 lg:p-4">
        <div className="aspect-video rounded-lg overflow-hidden">
          <video controls className="w-full h-full">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-xl lg:text-2xl font-bold mt-4">Big Video Title</h1>
        <p className="text-gray-400 mt-2">This is a description of the video currently playing.</p>
        <button
          onClick={() => addToWatchLater({ id: videoId, title: "Big Video Title" })}
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
        >
          Watch Later
        </button>
      </div>

      {/* Suggested Videos Section */}
      <div className="w-full lg:w-1/3 p-4 lg:p-2">
       
        <div className="flex flex-col gap-">
          {suggestedVideos.map((video) => (
            <div
              key={video.id}
              className="flex gap-4 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-32 aspect-video rounded-lg object-cover bg-black"
              />
              <div>
                <h3 className="font-medium text-black text-xl">the title is here</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToWatchLater(video);
                  }}
                  className="text-xs text-gray-300 hover:text-white"
                >
                  + Watch Later
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;