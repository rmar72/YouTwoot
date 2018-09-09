import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTweet from './components/youtweet';
import Home from './components/home';
import SignUp from './components/signup';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component{
  render(){
    return(
      <Router>
            <div>
              <NavBar/>
              <Route path="/" exact render={
                  ()=>{
                    return (<Home /> );
                  }
                }/>

              <Route path="/signup" exact render={
                  ()=>{
                    return (<SignUp />);
                  }
                }/>

              <Route path="/youtweet" exact render={
                  ()=>{
                    return (<YouTweet />);
                  }
                }/>
            </div>
      </Router>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.app'));
