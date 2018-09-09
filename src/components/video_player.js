import React from 'react';
import VideoList from './video_list'
const VideoPlayer = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }
  const videoId = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <ul className="list-group">
            <li className="list-group-item list-group-item-danger text-center font-weight-bold">{video.snippet.channelTitle}</li>
            <li className="list-group-item list-group-item-secondary text-center text-monospace">{video.snippet.title}</li>
            <button className="btn btn-info" data-toggle="collapse" data-target="#content">Description</button>
            <div className="collapse" id="content">
              {video.snippet.description}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
