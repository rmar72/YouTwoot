import React, {Component} from "react";

class UsernameInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            validUsername: null
        }
    }

    usernameInputHandler = (e) => {
        console.log(e.target.value)
        this.setState({username: e.target.value})
    }

    validUsernameHandler = () => {

    }


    render(){
        let {validUsername} = this.state;
        return(
            <div className="form-group">
                <label className="control-label">Username</label>
                    <input 
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.usernameInputHandler}
                    />
                    {
                        validUsername ? "" : 
                            <div className="invalid-feedback">
                                Please provide a user name.
                            </div>
                    }
            </div>
            
        )
    }
}

export default UsernameInput;