import React, {Component} from "react";
import UsernameInput from "./username_input";
import EmailInput from "./email_input";
import PasswordInput from "./password_input";
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  routeChange(){
    let path = "/";
    this.props.history.push(path);
  }

  handleSignUp = () => {
    if( this.state.username && this.state.email && this.state.password){
      
        fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json"},
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
          localStorage.setItem("token", data.user.token);
          setTimeout(()=>{
            this.routeChange();
          }, 300);
        });
    }

  };

  render(){
    return(
      <div className="container">
          <form>
            <h1 >Sign up!</h1>
            <hr/>
            
            <UsernameInput
              usernameValue={username => this.setState({username})} />

            <EmailInput 
              emailValue={email => this.setState({email})} />

            <PasswordInput 
              passwordValue={password => this.setState({password})} />

            <button
              className="btn btn-info" 
              type="button" 
              onClick={this.handleSignUp}
            > 
              Join the fun!
            </button>

          </form>
      </div>
    )
  }
}

export default withRouter(SignUp);
