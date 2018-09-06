import React from 'react';
import NavBar from './navbar';

const Home = () =>{
  return(
    <div>
      <NavBar/>
      <div className="jumbotron">
        <h1 className="display-4">Welcome to YouTwoot</h1>
        <p className="lead">Front-end of the infamous YouTweet</p>
      </div>
    </div>

  )
}

export default Home;
