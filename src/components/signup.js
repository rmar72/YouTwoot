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
          <Form>
            <h1 >Sign up!</h1>
            <hr/>
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
