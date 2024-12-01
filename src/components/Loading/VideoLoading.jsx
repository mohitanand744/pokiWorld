import React from "react";

const VideoLoading = () => {
  return (
    <div className="w-full h-[100vh]">
      <video
        className="hidden object-cover w-full h-full md:block"
        autoPlay
        muted
        loop
        src="/Videos/VideointroBG.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <video
        className="block object-cover w-full h-full md:hidden"
        autoPlay
        muted
        loop
        src="/Videos/mobilebg.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoLoading;
