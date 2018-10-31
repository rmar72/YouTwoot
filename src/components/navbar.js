import React from 'react';

const brandStyle = {
  fontSize: '21x',
  color: 'white',
  fontFamily: 'Lucida Console'
}

const NavBar = () =>{

  const logOut = () =>{
    localStorage.removeItem('token');
  }
  var logged = false;

  const checkToken = () =>{
    var token = localStorage.getItem('token');
    if(token){
      logged=true;
      return token
    }
  }

  checkToken()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <a className="navbar-brand" href="#" style={brandStyle}>YouTwoot</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarItems">
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarItems">
           <ul className="navbar-nav mr-auto" id="linkItem">
             <li className="nav-item" >
               <a className="nav-link" href="/">Home</a>
             </li>
             {logged ? (<li className="nav-item"><a className="nav-link" href="/youtweet">YT</a></li>) : ''}
           </ul>

           <ul className="navbar-nav ml-auto" id="linkItem">
             {logged ? '' : (<li className="nav-item"><a className="nav-link" href="/signup">Sign Up</a></li>)}

             {logged
               ? (<li className="nav-item"><a className="nav-link" href="/" onClick={logOut}>Log out</a></li>)
               : (<li className="nav-item"> <a className="nav-link" href="/login">Log in</a></li>)}
           </ul>
       </div>
    </nav>
  )
}

export default NavBar;
