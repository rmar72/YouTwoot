import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="media">
          <img className="mr-3" src={imageUrl}/>

       <div className="media-body">
         <div className="mt-0"> {video.snippet.title} </div>
       </div>
     </div>
   </li>
  )
};

export default VideoListItem;
