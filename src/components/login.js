import React, {Component} from 'react';

class Login extends Component{
  render(){
    return(
      <div className="container">
        <form>
          <h1>Enter Information</h1>

          <div className="form-group">
            <label className="control-label">Username</label>
            <input className="form-control"></input>
          </div>

          <div className="form-group">
            <label className="control-label">Password</label>
            <input className="form-control"></input>
          </div>

          <button type="submit" className="btn btn-info" >Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;
