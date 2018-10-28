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
  
  const text = video.snippet.title;
  console.log(encodeURIComponent(text))
  return(
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="media">
            <img className="mr-3" src={imageUrl}/>
            <div className="title">{video.snippet.title}</div>
        </div>

        <div>
          <a type="button" 
            className="btn btn-block btn-social btn-twitter"
            onClick={(e) => tweetVideo(e, video)}
            href={`https://twitter.com/intent/tweet?url=https%3A//youtu.be/${video.id}&text=${text}&via=YouTube&related=YouTube,YouTubeTrends,YTCreators`}
            target="_blank"
            // href={`https://twitter.com/intent/tweet?url=https%3A//youtu.be/h2DboKOvWIc&text=Dog%20Was%20SO%20Proud%20When%20Her%20Human%20Sister%20Finally%20Walked%20%20|%20The%20Dodo&via=YouTube&related=YouTube,YouTubeTrends,YTCreators`}
          >
            <span className="fa fa-twitter"></span> Tweet Me!
          </a>

        </div>

      </li>
  )
};

export default VideoListItem;
