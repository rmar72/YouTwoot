import React from 'react';

const NavBar = () =>{
  return(
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
  )
}
export default NavBar;
