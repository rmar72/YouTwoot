import React, {Component} from 'react';
import EmailInput from './email_input';

class Login extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmailSend = (e) =>{
    this.setState({email: e.target.value})
  }

  handlePasswordSend = (e) =>{
    this.setState({password: e.target.value})
  }

  handleTheLogin = () =>{
    this.setState({email: '', password: '', validEmail: null});

    fetch('http://localhost:3000/auth/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('token', data.user.token);
    });
  }

  render(){
    return(
      <div className="container">
        <form>
          <h1>Enter Information</h1>
          
          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleEmailSend}
              ></input>
          </div>

          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              name="password"
              placeholder="Your password"
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handlePasswordSend}
              ></input>
          </div>

          <button className="btn btn-info" type="button" onClick={this.handleTheLogin}>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;
