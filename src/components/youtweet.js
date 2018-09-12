import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from "./video_list";
import VideoPlayer from './video_player';
import Request from 'superagent';
import API_KEY from '../apikey';

class YouTweet extends Component{
  constructor(props){
    super(props);
    this.state = {
       videos: [],
       selectedVideo: null
     };
}

componentWillMount(){
  var url=`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=10&type=video&regionCode=US&key=${API_KEY}`;
  Request.get(url).then((response) =>{
    this.setState({
      videos: response.body.items,
      selectedVideo: response.body.items[0]
    });
  });
}

videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }

render(){
  const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
  return(
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoPlayer video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default YouTweet;
