import React from 'react';
import VideoList from './video_list'
const VideoPlayer = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }
  const videoId = video.id;
  const videoCount = numeral(video.statistics.viewCount).format('0,0');
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 trending"> <span className="highlight">#1</span> Trending Video</div>
        <div className="col-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
          </div>
          <ul className="list-group">
            <li className="list-group-item list-group-item-danger text-center font-weight-bold">{video.snippet.channelTitle}</li>
            <li className="list-group-item list-group-item-secondary text-center text-monospace">{video.snippet.title}</li>
            <button className="btn btn-info" data-toggle="collapse" data-target="#content">Description</button>
            <div className="collapse description" id="content">
              {video.snippet.description}
            </div>
          </ul>
        </div>
        <div className="col-2 trending">Total Views: <span className="highlight">{videoCount}</span></div>

      </div>
    </div>
  );
};

export default VideoPlayer;
