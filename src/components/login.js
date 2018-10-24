import React, {Component} from 'react';

class Login extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      emailValid: null
    }
  }

  handleEmailSend = (e) =>{
    this.setState({email: e.target.value})
  }

  handleEmailValidation = () =>{
    let {validity} = this.refs.EmailInput;
    if(!validity.valueMissing && validity.valid){
      this.setState({emailValid: true});
    } else {
      this.setState({emailValid: false});
    }
  }

  handlePasswordSend = (e) =>{
    this.setState({password: e.target.value})
  }

  handleTheLogin = () =>{
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
              type="email"
              name="email"
              placeholder="Your email"
              className = { 'form-control ' + (  this.state.emailValid != null ?
                                                (this.state.emailValid ? "is-valid" : "is-invalid") : '') }
              value={this.state.email}
              onChange={this.handleEmailSend}
              onBlur={this.handleEmailValidation}
              required
              ref="EmailInput"
              ></input>
              {
                this.state.emailValid ? '' : 
                  <div className="invalid-feedback">
                    Please provide a valid email.
                  </div>
              }
              
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
