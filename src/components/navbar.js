import React from 'react';

const navStyle = {
  fontSize: '21x',
  color: 'white',
  fontFamily: 'Lucida Console'
}
const NavBar = () =>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand" style={navStyle} href="#">YouTwoot</a>
      <div>
         <ul className="navbar-nav">
           <li className="nav-item">
             <a className="nav-link" href="/">Home </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/signup">Sign up</a>
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
