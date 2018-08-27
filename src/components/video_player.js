import React from 'react';

const VideoPlayer = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-player col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
        <ul className="list-group">
          <li className="list-group-item">{video.snippet.title}</li>
          <li className="list-group-item">{video.snippet.description}</li>
        </ul>
    </div>
  );
};

export default VideoPlayer;
