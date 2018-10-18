import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;


  function tweetVideo(event, vid){
    event.stopPropagation();

    const token = localStorage.getItem('token');

    if(token){
      fetch('http://localhost:3000/users/tweet-video',{
        method:'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify({
          video: {
            url: vid.id
          }
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    }
 
  }

  return(
      <li onClick={() => onVideoSelect(video)}
        className="list-group-item">
        <div className="media">
            <img className="mr-3" src={imageUrl}/>
            <div className="title">{video.snippet.title}</div>
        </div>
  )
};

export default VideoListItem;
