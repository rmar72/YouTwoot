import React, {Component} from 'react';
import {Col, Button, Form, FormGroup, Label, Input, FormText, Container, Row} from 'reactstrap';

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
  console.log('Email: ' + this.state.email);
  console.log('Password: ' + this.state.password);
};

  render(){
    return(
      <div>
          <Container>
            <form>
              <h1 >Sign up!</h1>
            <div className="form-group">
              <label>Enter Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}></input>
            </div>
            <div className="form-group">
              <label>Enter Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}></input>
            </div>
            <button type="submit" className="btn btn-info" onClick={this.handleLogin}>Join the FUN!</button>
          </form>
        </Container>
      </div>
    )
  }
}

export default SignUp;
