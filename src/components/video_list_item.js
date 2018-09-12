import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="media">
          <img className="mr-3" src={imageUrl}/>
         <div className="title">{video.snippet.title}</div>
     </div>
   </li>
  )
};

export default VideoListItem;
