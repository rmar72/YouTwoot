import React, {Component} from 'react';
import {Col, Button, Form, FormGroup, Label, Input, FormText, Container, Row} from 'reactstrap';

class SignUp extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }
handleUsernameChange = (e) =>{
  this.setState({username: e.target.value});
};
handleEmailChange = (e) =>{
  this.setState({email: e.target.value});
};
handlePasswordChange = (e) =>{
  this.setState({password: e.target.value})
};
handleLogin = () =>{
  console.log('Username: ' + this.state.username);
  console.log('Email: ' + this.state.email);
  console.log('Password: ' + this.state.password);

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
      <div>
        <Container>
          <Form>
            <h1 >Sign up!</h1>
            <hr/>
            <FormGroup>
              <Label>Username</Label>
                <Input type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleUsernameChange} />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
                <Input type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange} />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
                <Input type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange} />
            </FormGroup>

            <Button color="info" type="button" onClick={this.handleLogin}>
              Join the fun!
            </Button>

          </Form>
        </Container>
      </div>
    )
  }
}

export default SignUp;
