import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTweet from './components/youtweet';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component{
  render(){

    var logged = false;

    const checkToken = () =>{
      var token = localStorage.getItem('token');
      if(token){
        logged=true;
        return token
      }
    }

    checkToken()

    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render={(props) =>(
          logged ? <Component {...props} /> : <Redirect to="/login"/>
        )}/>
    )

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

              <Route path="/login" exact render={
                  ()=>{
                    return (<Login />);
                  }
                }/>

              <PrivateRoute path="/youtweet" exact component={YouTweet}/>
              
            </div>
      </Router>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#main'));
