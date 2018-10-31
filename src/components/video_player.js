import React from 'react';
import VideoList from './video_list'

const VideoPlayer = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId || video.id;
  const vidStat = video.statistics ? numeral(video.statistics.viewCount).format('0,0') : 0;
  const videoCount = vidStat;
  const url = `https://www.youtube.com/embed/${videoId}`;
  function checkStatus(){
    if(vidStat){
      return(<div>Total Views:  <span className="highlight">{videoCount}</span></div>)
    }
  }

  function trendTab() {
    if(vidStat){
      return(<div><span className="highlight"></span> Trending Video</div>)
    }
  }

  return (
        <div className="col-md-7 video-player">
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
            <div>
              {checkStatus()}
            </div>
          </ul>
        </div>
  );
};

export default VideoPlayer;
