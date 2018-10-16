import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return(
        <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    )
  });

  return(
      <div className="container">
        <hr></hr>
          <ul className="list-group">
            <div className="videoItems">{videoItems}</div>
          </ul>
      </div>
  )
}

export default VideoList;
