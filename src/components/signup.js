import React, {Component} from 'react';
import EmailInput from './email_input';
import PasswordInput from './password_input';

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
            <PasswordInput 
              passwordValue={password => this.setState({password})} />

            <button className="btn btn-info" type="button" onClick={this.handleSignUp}>Join the fun!</button>
          </form>
      </div>
    )
  }
}

export default SignUp;
