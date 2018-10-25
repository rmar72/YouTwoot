import React, {Component} from 'react';
import EmailInput from './email_input';

class SignUp extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }
handleUsernameChange = (e) =>{
  this.setState({username: e.target.value});
};

handlePasswordChange = (e) =>{
  this.setState({password: e.target.value})
};
handleSignUp = () =>{
  fetch('http://localhost:3000/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      user: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('token', data.user.token);
  });
};

  render(){
    return(
      <div className="container">
          <form>
            <h1 >Sign up!</h1>
            <hr/>

            <div className="form-group">
              <label className="control-label">Username</label>
                <input type="text"
                       name="username"
                       className="form-control"
                       placeholder="Username"
                       value={this.state.username}
                       onChange={this.handleUsernameChange}></input>
            </div>

            <EmailInput />

            <div className="form-group">
              <label className="control-label">Password</label>
                <input type="password"
                       name="password"
                       className="form-control"
                       placeholder="Password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}></input>
            </div>

            <button className="btn btn-info" type="button" onClick={this.handleSignUp}>Join the fun!</button>
          </form>
      </div>
    )
  }
}

export default SignUp;
