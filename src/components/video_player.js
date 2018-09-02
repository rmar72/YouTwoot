import React from 'react';
import VideoList from './video_list'
const VideoPlayer = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <ul className="list-group">
            <li className="list-group-item">{video.snippet.title}</li>
            <li className="list-group-item">{video.snippet.description}</li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default VideoPlayer;
