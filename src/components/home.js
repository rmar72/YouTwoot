import React from 'react';


const Home = () =>{
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand font-italic" href="#">YouTwoot</a>
        <div>
           <ul className="navbar-nav">
             <li className="nav-item">
               <a className="nav-link" href="/">Home </a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/signup">Sign Up</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/youtweet">YT</a>
             </li>
           </ul>
        </div>
      </nav>

      <div className="jumbotron">
        <h1 className="display-4">Welcome to YouTwoot</h1>
        <p className="lead">Front-end of the infamous YouTweet</p>
      </div>
    </div>

  )
}

export default Home;
