import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTweet from './components/youtweet';

class App extends Component{
  render(){
    return(
      <YouTweet/>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
