import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = ({param}) => {
    
  const suggestedVideos = [
    { id: 1, title: "Suggested Video 1", thumbnail: "https://via.placeholder.com/150" },
    { id: 2, title: "Suggested Video 2", thumbnail: "https://via.placeholder.com/150" },
    { id: 3, title: "Suggested Video 3", thumbnail: "https://via.placeholder.com/150" },
    { id: 4, title: "Suggested Video 4", thumbnail: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-white overflow-x-hiddenuiop
    ">
      {/* Main Video Section */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <video controls className="w-full h-full">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-xl lg:text-2xl font-bold mt-4">Big Video Title</h1>
        <p className="text-gray-400 mt-2">This is a description of the video currently playing. Enjoy watching!</p>
      </div>

      {/* Suggested Videos Section */}
      <div className="w-full lg:w-1/3 p-4 lg:p-8">
        <h2 className="text-xl font-bold mb-4">Next Videos</h2>
        <div className="space-y-4">
          {suggestedVideos.map((video) => (
            <div
              key={video.id}
              className="flex items-center gap-4 p-2 bg-neutral-400 rounded-lg hover:bg-gray-600 cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-28 h-24 rounded-lg object-cover"
              />
              <h3 className="text-sm font-medium">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
