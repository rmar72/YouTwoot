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
        this.setState(
            {username: e.target.value},
            () => {
                if(this.state.username)
                    this.setState({validUsername: true});
                else
                    this.setState({validUsername: false});
            }
        );
    }

    validUsernameHandler = () => {
        if(this.state.validUsername)
            this.props.usernameValue(this.state.username);
        else
            this.props.usernameValue("");
    }


    render(){
        let {validUsername} = this.state;
        return(
            <div className="form-group">
                <label className="control-label">Username</label>
                    <input 
                        type="text"
                        name="username"
                        className={ "form-control " + ( validUsername != null ?
                                                        ( validUsername ? "is-valid" : "is-invalid") : "") }
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.usernameInputHandler}
                        onBlur={this.validUsernameHandler}
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