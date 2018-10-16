import React, {Component} from 'react';
import Axios from 'axios';

class SignUp extends Component{
  constructor(props){
    super(props);

   this.state = {
     email: '',
     password: ''
   }
  }

handleEmailChange = (e) =>{
  this.setState({email: e.target.value});
};
handlePasswordChange = (e) =>{
  this.setState({password: e.target.value})
};
handleLogin = () =>{
  // console.log('Email: ' + this.state.email);
  // console.log('Password: ' + this.state.password);
  Axios.post('/api/users', {user: this.state})
};

  render(){
    return(
      <div className="container">
        <form>
          <h1>Sign up</h1>

          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}></input>
          </div>

          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}></input>
          </div>

          <button type="submit" className="btn btn-info" onClick={this.handleLogin}>Join the Fun!</button>
        </form>
      </div>
    )
  }
}

export default SignUp;
